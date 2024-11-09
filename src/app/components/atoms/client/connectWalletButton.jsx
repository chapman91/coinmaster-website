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
                fontSize: '16px', // Custom font size
                padding: '10px 20px', // Custom padding
                borderRadius: '0px', // Custom border radius
            }}>
              Connect
          </WalletMultiButton> 
        
       
        </>
      ) : (
        <div className={styles.connectedButtonContainer}>
          <p className={styles.connectedButtonText}>
            Connected to {publicKey?.toBase58()}
          </p>
          <button onClick={disconnect} className={styles.disconnectButton}>
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
};

export default WalletConnectButton;


/** Use the `WalletMultiButton's` internal children prop to modify the default label text  */