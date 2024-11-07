import { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import {
    PhantonWalletAdapter,
    SolletWalletAdapter,
    SolfareWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web.js';

import '@solana/wallet-adapter-react-ui/styles.css'; // Default styles for wallet modal

export const WalletContextProvider = ({ children }) => {
    const network = clusterApiUrl('mainnet-beta'); // USe 'devnet' for development


    const wallets = useMemo(() => [
        new PhantomWalletAdapter(),
        new SolletWalletAdapter(),
        new SolflareWalletAdapter(),
    ], []);

    return (
        <ConnectProvider endpoint={network}>
            <WalletProvider wallets={wallets} autoconnect>
                <WalletModalProvider>
                    {children}
                </WalletModalProvider>
            </WalletProvider>
      </ConnectProvider>
    );
};