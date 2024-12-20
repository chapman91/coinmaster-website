// Adjust the path if your globals.css is in a different folder
import { ChakraProviderWrapper } from './components/componentsBarrel';
import { NavigationBar } from './components/componentsBarrel';
import { Footer } from './components/componentsBarrel';
import './styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Roboto } from 'next/font/google';
import Script from 'next/script';

// Roboto Configuration
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
});

export const metadata = {
  title: {
    default: 'CoinMaster - The Master of Cyrocoin',
    template: '%s - CoinMaster', // Corrected template
  },
  description:
    'The Master of CyroCoin, CoinMaster, is the superhero in SyncSphere Comics books created by SyncSphere Labs.',
  twitter: {
    card: 'summary_large_image',
  },
  keywords: [
    'coinmaster',
    'cyrocoin',
    'crypto superhero',
    'next.js',
    'memecoin',
    'web3',
  ],
};

// React component for the layout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script id="schema-org-markup-website" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'CoinMaster',
            url: 'https://www.cyrocoin.xyz/',
          })}
        </Script>
      </head>
      <body className={roboto.className}>
        <ChakraProviderWrapper>
          {/* Wrap the main app content */}
          <NavigationBar />
          <div className="content">{children}</div>
          <Footer />
        </ChakraProviderWrapper>
      </body>
    </html>
  );
}
