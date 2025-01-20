// Adjust the path if your globals.css is in a different folder
import { ChakraProviderWrapper } from './components/componentsBarrel';
import { NavigationBar } from './components/componentsBarrel';
import { Footer } from './components/componentsBarrel';
import { DisclaimerModal } from './components/componentsBarrel';

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
    'The Master of CyroCoin, CoinMaster, is the flagship superhero in SyncSphere Universe created by SyncSphere Labs.',
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
        {/* Meta Information */}
        <meta
          name="description"
          content="In the bustling city of Neotropolis, CoinMaster rises to confront chaos, restore balance, and uncover the mysteries left behind by his family. A hero’s journey awaits."
        />
        <meta
          name="keywords"
          content="CoinMaster, Neotropolis, superhero story, culture coin, CoinMaster lore"
        />
        <link rel="canonical" href="https://www.cyrocoin.xyz/" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="CoinMaster - The Master of CyroCoin"
        />
        <meta
          property="og:description"
          content="In Neotropolis, a city teetering on the edge of disorder, a hero emerges. Discover CoinMaster’s journey to restore balance and confront his destiny."
        />
        <meta
          property="og:image"
          content="https://www.cyrocoin.xyz/images/coinmaster-twitter-image.jpg"
        />
        <meta property="og:url" content="https://www.cyrocoin.xyz/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="CoinMaster - The Master of CyroCoin"
        />
        <meta
          name="twitter:description"
          content="In Neotropolis, a city teetering on the edge of disorder, a hero emerges. Discover CoinMaster’s journey to restore balance and confront his destiny."
        />
        <meta
          name="twitter:image"
          content="https://www.cyrocoin.xyz/images/coinmaster-twitter-image.jpg"
        />

        {/* Structured Data for Rich Results */}
        <Script id="schema-org-markup-website" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'CoinMaster',
            url: 'https://www.cyrocoin.xyz/',
            description:
              'In Neotropolis, CoinMaster rises to confront chaos and uncover the mysteries left behind by his family.',
            image: 'https://www.cyrocoin.xyz/images/coinmaster-og-image.jpg',
            publisher: {
              '@type': 'Organization',
              name: 'SyncSphere Labs',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.cyrocoin.xyz/images/logo.png',
              },
            },
          })}
        </Script>
      </head>
      <body className={roboto.className}>
        <ChakraProviderWrapper>
          {/* Wrap the main app content */}
          <NavigationBar />
          <DisclaimerModal />
          <div className="content">{children}</div>
          <Footer />
        </ChakraProviderWrapper>
      </body>
    </html>
  );
}
