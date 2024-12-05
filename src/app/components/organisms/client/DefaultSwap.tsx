'use client'; // Ensures the component runs on the client side

import React, { useEffect } from 'react';
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
  const passthroughWalletContextState = useWallet();

  useEffect(() => {
    // Dynamically import and initialize the Jupiter Terminal
    if (typeof window !== 'undefined') {
      import('@jup-ag/terminal')
        .then((mod) => {
          const init = mod.init;
          init({
            enableWalletPassthrough: true, // Use your dApp's wallet context
            displayMode: 'integrated',
            integratedTargetId: 'integrated-terminal',
            // custom RPC provider API (alchemy)
            endpoint: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY, // Solana endpoint
          });
        })
        .catch((error) => {
          console.error('Failed to load Jupiter Terminal:', error);
        });
    }
  }, []);

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
