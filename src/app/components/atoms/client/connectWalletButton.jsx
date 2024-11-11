// WalletConnectButton.jsx

"use client";

import React, { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import styles from '../../../styles/connectWalletButton.module.css';

const WalletConnectButton = () => {
  console.log("Connect button clicked");
  const { connected, publicKey, connect, disconnect, ready } = useWallet();
  const [isConnecting, setIsConnecting] = useState(false);


  // Function to shorten the wallet address
  // This function takes wallet address and shortens it, showing only the first 4 and last 4 characters with an ellipsis in between
  const shortenAddress = (address) => {
    return address ? `${address.slice(0, 4)}...${address.slice(-4)}` : '';
  }


/**
 *  Issue: You mentioned that the `WalletMultiButton` isn't connected, even though it is imported. 
 *  The issue may lie in how the custom connection logic combination with the `WalletMultiButton`.
 *  It seems like `WalletMultiButton` is not triggered or displayed properly, even though you have the connectWalletButton.
 *  
 */

/**
 *  Use WalletMultiButton for the connection UI
 * 
 * 
 */


  // connection Function
  const handleConnectClick = () => {
  
    setIsConnecting(true);
    connect();  // This will show the wallet selection modal
  };

  return (
    <div>
      {!connected ? (
        <>
          {/* <button
            onClick={handleConnectClick}
            className={styles.connectButton}
            disabled={isConnecting || !ready} // Disable if not ready or connecting
          >
            {isConnecting ? "Connecting..." : "Connect"}
          </button> */}
        {/* Optionally, you can include the WalletMultiButton here for users to select wallets  */}
          <WalletMultiButton  style={{
                backgroundColor: '#FFFFFF', // Custom background color
                color: '#000000', // Custom text color
                fontSize: '14px', // Custom font size
                padding: '10px 12px', // Custom padding
                borderRadius: '0px', // Custom border radius
            }}>
              Connect Wallet
          </WalletMultiButton> 
        
       
        </>
      ) : (
        <div className={styles.connectedButtonContainer}>
          
          {/* Connected State Display: Instead of showing the full wallet address, it now displays "Connected to [shortened address]" */}
          <p 
          title="Click to disconnect" // Tooltip for better UX
          onClick={disconnect}
          className={styles.connectedButtonText}>
            Connected to {shortenAddress(publicKey?.toBase58())}
          </p>
        </div>
      )}
    </div>
  );
};

export default WalletConnectButton;


/** Use the `WalletMultiButton's` internal children prop to modify the default label text  */

/**
 * 
 * You can modify connectedButtonText and disconnectButton styles in connectWalletButton.module.css to further style the display as desired.
 */