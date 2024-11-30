// src/components/providers/Context.tsx

'use client';

import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import React, {
  FC,
  ReactNode,
  useMemo,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { clusterApiUrl, Connection } from '@solana/web3.js';

// The `CreateContext` is a method used to create a context object that can be used to pass data through the component tree without having to pass props manually.

const network = WalletAdapterNetwork.Mainnet; // Change to your preferred network
const endpoint = clusterApiUrl(network);

interface ConnectionContextState {
  connection: Connection | null;
  isConnected: boolean;
  wallet: any | null;
  publickey: string | null;
  network: string;
}

// 1. Create ConnectionContext with default values
// `ConnectionContext` has properties set to null or empty values

export const ConnectionContext = createContext<ConnectionContextState>({
  connection: null,
  isConnected: false,
  wallet: null,
  publickey: null,
  network: 'devnet',
});

// Wrap your context provider around your `WalletContext` provider and pass those states

// What is the walletcontext?

// custom React context that provides a centralized way to manage and share wallet-related information across your application

// Purpose of WalletContext

/**
 *  Manage Wallet Connections
 *
 *  Provide Access to Wallet Information
 *
 * Control Blockchain Network Access
 *
 *
 *
 */

// WalletContext, use React state hooks to manage:

/**
 *
 *
 *
 * @
 */

const WalletContext: FC<{ children: ReactNode }> = ({ children }) => {
  // 2. Initialize state values
  const [connection] = useState(new Connection(endpoint));
  const [isConnected, setIsConnected] = useState(false);
  const [wallet, setWallet] = useState<any | null>(null);
  const [publickey, setPublickey] = useState<string | null>(null);

  // wallets arrays is properly memoized helps in efficient re-rendering

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new TorusWalletAdapter(),
    ],
    []
  );

  // 3. Effect to handle wallet connections
  // Handling Wallet Events
  useEffect(() => {
    if (wallet) {
      // When Wallet connects
      wallet.on('connect', (publickey: string) => {
        console.log('Connected with pblickey:', publickey);
        setIsConnected(true);
        setPublickey(publickey); // Use publickey
      });

      wallet.on('disconnect', () => {
        setIsConnected(false);
        setPublickey(null);
      });
    }
    // Clean up when wallet changes
    return () => {
      if (wallet) {
        wallet.disconnect();
      }
    };
  }, [wallet]);

  // ConnectionProvider, WalletProvider, and WalletModalProvider components

  // ConnectionProvider Establish a connection to the blockchain using a specific network via the `endpoint`
  //  WalletProvider pass an array of suppported wallets (Phantom, Solflare, Torus) and handle the connection lifecycle for each wallet
  // WalletModalProvider: Enables a modal that lets users select and manage their wallet connections

  return (
    // 4. Wrap the context provider around the component tree
    <ConnectionContext.Provider
      value={{ connection, isConnected, wallet, publickey, network }}
    >
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoconnect>
          {typeof window !== 'undefined' && (
            <WalletModalProvider>{children}</WalletModalProvider>
          )}
        </WalletProvider>
      </ConnectionProvider>
    </ConnectionContext.Provider>
  );
};

export default WalletContext; // Default export

// Integrate WalletContext with ConnectionContext and ensure that ConnectionContext is used correctly

/***
 *  Objectives:
 *
 *  1. Find out how the WalletPRovider pass an array of supported wallets and how it handle connection lifecycle for each wallet?
 *
 *  2.
 *
 *
 */
