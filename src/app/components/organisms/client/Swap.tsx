'use client'; // Client component

import styles from '../../../styles/swap.module.css';
import { useWallet } from '@solana/wallet-adapter-react'; // Manage wallet connections and transactions on Solana
import { VersionedTransaction, Connection } from '@solana/web3.js'; // Creating and sending transactions on Solana
import React, { useState, useEffect, useCallback } from 'react'; // State management, side effects, and debounced functions
import { Alert, AlertIcon, Box, CloseButton } from '@chakra-ui/react';


// Swap tokens on the Solana blockchain, using a swap service (Jupiter) to fetch quotes and wallet connection to sign and submit transactions


// Token Assets available for swapping
const assets = [
  { name: 'SOL', mint: 'So11111111111111111111111111111111111111112', decimals: 9},
  { name: 'USDC', mint: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v', decimals: 6},
  { name: 'BONK', mint: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263', decimals: 5 },
  { name: 'WIF', mint: 'EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm', decimals: 6},
];

// Limits function by rate call
const debounce = <T extends unknown[]>(
  func: (...args: T) => void,
  wait: number
) => {
  let timeout: NodeJS.Timeout | undefined;

  return (...args: T) => {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};


// Swap Component Initialization
export default function Swap() {
  const [fromAsset, setFromAsset] = useState(assets[0]);
  const [toAsset, setToAsset] = useState(assets[1]);
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);
  const [quoteResponse, setQuoteResponse] = useState(null);
  

  // useState for setErrorMessage
  /** errorMessage: Holds the current value for the error message.
   *  Initiallu set to `null` (no error message displayed) 
   * 
   * */ 

  /**
  *  setErrorMessage: 
  *  If called with a string, it sets the error message to that string.
  *  If called with null, it clears the error message (hides the pop-up).
  * 
  */

   /**
    *  useState(initialValue); string | null means the state can be a string or null
    *  nul: Represents the absence of a value
    * 
    */

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Automatically clear the error message 5 seconds
  setTimeout(() => {
    setErrorMessage(null); // Reset the error message
  }, 3000); // Time in millieseconds (5000ms = 5 seconds)



  const wallet = useWallet();

  // Need a custom RPC so you don't get rate-limited, don't rely on users' wallets
  const connection = new Connection(
    process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
  );

  const handleFromAssetChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFromAsset(
      assets.find((asset) => asset.name === event.target.value) || assets[0]
    );
  };

  const handleToAssetChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setToAsset(
      assets.find((asset) => asset.name === event.target.value) || assets[0]
    );
  };

  const handleFromValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
    ) => {
      
      // Capture Raw Input 
      const rawValue = event.target.value; // The raw string input

      // Convert to Number 
      const value = Number(rawValue); // Convert the string to a number



      // Validate the value: Ensure it's a number and greater than or equal to 0 
      // `!isNaN(value)`: Ensures the input is a valid number
      // logical NOT (!) operator with the isNaN() function to determine if a value is a valid number
      // ! operator is logical NOT operator: reverses the boolean exression: true becomes false & false becomes true
      if (!isNaN(value) && value >= 0) {
        setFromAmount(value);  // Update state only if the value is valid
       } else {
        setErrorMessage("Invalid input: value must be a number greater than equal or equal to 0")
       }
    };
    
  const debounceQuoteCall = useCallback(debounce(getQuote, 500), []);


  // Delays API calls until the user has stopped typing
  useEffect(() => {
    if (fromAmount > 0) {
      debounceQuoteCall(fromAmount);
    }
  }, [fromAmount, debounceQuoteCall]);

/**
 * Use the Jupiter API to get a quote for swapping `fromAsset` to `toAsset` for `fromAmount`
 * @param currentAmount 
 * @returns 
 */


  async function getQuote(currentAmount: number) {
    if (isNaN(currentAmount) || currentAmount <= 0) {
      setErrorMessage('Invalid fromAmount value:', currentAmount);
      return;
    }

    /**
     *  URL Construction
     * 
     *  `inputMint=${fromAsset.mint}` - Specifies the mint address of the input
     * 
     *  `outputMint={toAsset.mint}` - Specifies the mint address of the output token. 
     * 
     *  `amount=${currentAmount * Math.pow(10, fromAsset.decimals )}`
     * 
     *  `slippage=0.5`: Sets the slippage tolerance to 0.5% allowing slight variation in the exchange rate to ensure the swap executes
     * 
     *  
     * 
     * 
     */

    const quote = await (

      // Sends an HTTP GET request to the Jupiter API with the constructed URL
      await fetch(
        `https://quote-api.jup.ag/v6/quote?inputMint=${fromAsset.mint}&outputMint=${toAsset.mint}&amount=${currentAmount * Math.pow(10, fromAsset.decimals)}&slippage=0.5`
      )
    ).json();

    // Checks if the quote is valid and contains an `outAmount`, representing the amount of the output token received.
    if (quote && quote.outAmount) {
      const outAmountNumber =
        Number(quote.outAmount) / Math.pow(10, toAsset.decimals);
      setToAmount(outAmountNumber);
    }
    // Store Full Quote - Updates the quoteResponse state with the full API response, preserving all quote details for later use if the user decides to proceed with the swap 
    setQuoteResponse(quote);
  }


  /**
   * Sign and Send Transactions
   * @returns 
   */
  async function signAndSendTransaction() {

    // Check if the wallet is connected
    if (!wallet.connected) {
      setErrorMessage('Wallet is not connected. Please connect your wallet.');
      return;
    }

    // Cheeck if the wallet supports signing transactions
    if (!wallet.signTransaction) {
      setErrorMessgae('Wallet does not support signing transactions.')
      return;
    }


    // get serialized transactions for the swap | fetch the Swap Transaction
    const { swapTransaction } = await (
      // Make a POST request to the Jupiter API's /swap endpoint to obtain a serialized transaction for the swap
      await fetch('https://quote-api.jup.ag/v6/swap', {
        method: 'POST',
        // Specifies the request type in the request headers
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          quoteResponse, // Sends the quote datat that was previously fected
          userPublicKey: wallet.publicKey?.toString(), // Sets the user's public key as a string (using optional chaining)
          wrapAndUnwrapSol: true, // Indicates that SOL should be wrapped/converted to and from `wSOL` if needed
          // feeAccount is optional. Use if you want to charge a fee.  feeBps must have been passed in /quote API.
          // feeAccount: "fee_account_public_key"
        }),
      })
    ).json();
    /**
     *  Deserialize, Sign, and Send the Transaction
     */

    try {
     
      // Converted to its raw binary format
      const swapTransactionBuf = Buffer.from(swapTransaction, 'base64'); // Converts the base64-encoded `swapTransaction` to a buffer with `Buffer.from(swapTransaction, 'base64' )`
      // Deserialize the transaction into a usable transaction object
      const transaction = VersionedTransaction.deserialize(swapTransactionBuf);
      // The deserialized transaction is signed using the connected wallet 
      const signedTransaction = await wallet.signTransaction(transaction);
      // The signed transaction is serialized again (into a Buffer-like format) to prepare it for network transmission. 
      const rawTransaction = signedTransaction.serialize();
      /**
       *  Send the Transaction - `sendRawTransaction` broadcasts the transaction to the Solana network
       *  Get Blockhash - `getLatestBlockhash` fetches the latest blockhash and block height for confirming the transaction
       *  Confirm the Transaction - `confirmTransaction` checks that the transaction was included in a block within the valid timeframe
       *  Log Transaction Link - Outputs a link to view the transaction on Solscan, allowing users to track the transaction's status on the Solana blockchain
       * 
       */

      // Sends the serialized (binary) transaction ( rawTransaction ) to the Solana blockchain 
      const txid = await connection.sendRawTransaction(rawTransaction, {
        skipPreflight: false,
        maxRetries: 2,
      });
      /** Fetching the Latest Blockchash */ 
      const latestBlockHash = await connection.getLatestBlockhash(); // Retrieves the latest block has and the last va;id block height from the Solana network
      await connection.confirmTransaction({
        // Option Object
        // A unique identifier for a specific block on the Solana blockchain
        blockhash: latestBlockHash.blockhash,
        // The maximum block height at which this transaction can still be valid
        // The latest blockhash is used to confirm the transaction, ensuring it was processed within the valid block height window
        lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
        signature: txid
      }, 'confirmed');
      
      // Logging the Transaction Link
      console.log(`https://solscan.io/tx/${txid}`);

    } catch (error) {
      setErrorMessage('Error signing or sending the transaction:', error);
    }
  }

  return (
    <div className={styles.body}>
      <div className={styles.innerContainer}>
        <div className={styles.inputContainer}>
          <div className={styles.labels}>You pay</div>
          <input
            type="number"
            value={fromAmount}
            onChange={handleFromValueChange}
            className={styles.inputField}
          />
          <select
            value={fromAsset.name}
            onChange={handleFromAssetChange}
            className={styles.selectField}
          >
            {assets.map((asset) => (
              <option key={asset.mint} value={asset.name}>
                {asset.name}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.labels}>You receive</div>
          <input
            type="number"
            value={toAmount}
            // onChange={(e) => setToAmount(Number(e.target.value))}
            className={styles.inputField}
            readOnly
          />
          <select
            value={toAsset.name}
            onChange={handleToAssetChange}
            className={styles.selectField}
          >
            {assets.map((asset) => (
              <option key={asset.mint} value={asset.name}>
                {asset.name}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={signAndSendTransaction}
          className={styles.button}
          disabled={toAsset.mint === fromAsset.mint}
        >
          Swap
        </button>
        {/* Error Pop-Up */}
        {errorMessage && (
          <Box position="fixed" top="10%" left="50%" transform="translateX(-50%)" zIndex="1000">
            <Alert status="error" borderRadius="md" boxShadow="lg">
              {errorMessage}
              <CloseButton
               position="absolute"
               right="8px"
               top="8px"
               onClick={() => setErrorMessage(null)}
              />
            </Alert>
          </Box>
        )
       }
      </div>
    </div>
  );
}

/* Sample quote response

    {
      "inputMint": "So11111111111111111111111111111111111111112",
      "inAmount": "100000000",
      "outputMint": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      "outAmount": "9998099",
      "otherAmountThreshold": "9948109",
      "swapMode": "ExactIn",
      "slippageBps": 50,
      "platformFee": null,
      "priceImpactPct": "0.000146888216121999999999995",
      "routePlan": [
        {
          "swapInfo": {
            "ammKey": "HcoJqG325TTifs6jyWvRJ9ET4pDu12Xrt2EQKZGFmuKX",
            "label": "Whirlpool",
            "inputMint": "So11111111111111111111111111111111111111112",
            "outputMint": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
            "inAmount": "100000000",
            "outAmount": "10003121",
            "feeAmount": "4",
            "feeMint": "So11111111111111111111111111111111111111112"
          },
          "percent": 100
        },
        {
          "swapInfo": {
            "ammKey": "ARwi1S4DaiTG5DX7S4M4ZsrXqpMD1MrTmbu9ue2tpmEq",
            "label": "Meteora DLMM",
            "inputMint": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
            "outputMint": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
            "inAmount": "10003121",
            "outAmount": "9998099",
            "feeAmount": "1022",
            "feeMint": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"
          },
          "percent": 100
        }
      ],
      "contextSlot": 242289509,
      "timeTaken": 0.002764025
    }
    */

    /**
     *  In the Wallet and Connection Setup - show me how to use the api key that is stored inside of '.env.local' instead of the plain text API. 
     * 
     * 
     */


/**
 * ! || logical OR operator - It's used to evaluate multiple expressions and return the first "truthy" value it encounters, or the last value if none are truthy
 * 
 */