// Adjust the path if your globals.css is in a different folder
import {
  WalletContext,
  ChakraProviderWrapper,
} from './components/componentsBarrel';
import { NavigationBar } from './components/componentsBarrel';
import { Footer } from './components/componentsBarrel';
import './styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Roboto } from '@next/font/google';
import '@solana/wallet-adapter-react-ui/styles.css';

// Roboto Configuration
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
});

export const metadata = {
  title: 'CoinMaster',
  description: 'Generated by create next app',
};

// React component for the layout
// children is a prop or property
// Layout components wraps page components in `Next.js`
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={roboto.className}>
        <ChakraProviderWrapper>
          {/* Wrap the main app content with WalletContext */}
          <WalletContext>
            <NavigationBar />
            <div className="content">
              {children}

              <Footer />
            </div>
          </WalletContext>
        </ChakraProviderWrapper>
      </body>
    </html>
  );
}
