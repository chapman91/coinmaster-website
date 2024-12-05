'use client'; // Ensures the component runs on the client side

import React, { useEffect, useState } from 'react';
import '@jup-ag/terminal/css'; // Import the required CSS for styling
import { useWallet } from '@solana/wallet-adapter-react';
import styles from '../../../styles/DefaultSwap.module.css';

export default function DefaultSwap() {
  /**
   *  Access tp the wallet's current state
   *  Wallet is connected
   *  The connected public key
   *  The current Solana network.
   *
   */
  const [solanaEndpoint, setSolanaEndpoint] = useState(null);
  const passthroughWalletContextState = useWallet();

  useEffect(() => {
    // Fetch the Solana endpoint from the Netlify Function
    async function fetchEndpoint() {
      try {
        const response = await fetch('/.netlify/functions/get-solana-endpoint');
        const data = await response.json();

        if (response.ok) {
          setSolanaEndpoint(data.endpoint); // Store the endpoint
        } else {
          console.error('Failed to fetch endpoint:', data.error);
        }
      } catch (error) {
        console.error('Error fetching endpoint:', error);
      }
    }

    fetchEndpoint();
  }, []);

  useEffect(() => {
    // Dynamically import and initialize the Jupiter Terminal
    if (typeof window !== 'undefined' && solanaEndpoint) {
      import('@jup-ag/terminal')
        .then((mod) => {
          const init = mod.init;
          init({
            enableWalletPassthrough: true, // Use your dApp's wallet context
            displayMode: 'integrated',
            integratedTargetId: 'integrated-terminal',
            // custom RPC provider API (alchemy)
            endpoint: solanaEndpoint, // Solana endpoint
          });
        })
        .catch((error) => {
          console.error('Failed to load Jupiter Terminal:', error);
        });
    }
  }, [solanaEndpoint]);

  useEffect(() => {
    // Synchronize wallet state with Jupiter Terminal
    if (!window.Jupiter?.syncProps) return;
    window.Jupiter.syncProps({ passthroughWalletContextState });
  }, [passthroughWalletContextState]);

  return (
    <div>
      {/* The placeholder div where Jupiter Terminal will render */}
      <div id="integrated-terminal" className={styles.customTerminalStyle} />
    </div>
  );
}
