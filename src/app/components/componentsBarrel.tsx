
// Components Barrel.jsx

export { default as WalletConnectButton } from './atoms/client/connectWalletButton';
export { default as normalButton } from './atoms/client/normalButton';
export { default as TokenomicsCard } from './molecules/server/TokenomicsCard';
export { default as Modals } from './molecules/server/Modals';
export { default as NavigationBar } from './organisms/client/navigationbar';
export { default as Footer } from './organisms/client/Footer';
export { default as WalletContext } from  './providers/Context';
export { ConnectionContext } from  './providers/Context';

// Swap component
export { default as Swap } from './organisms/client/Swap'

// Providers 
export { default as ChakraProviderWrapper } from "./providers/ChakraProviderWrapper";



// The header and footer is being imported into layout.jsx already