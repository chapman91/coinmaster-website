'use client';

import React from 'react';
import images from '../../assets/images';
import styles from '../../styles/HomePage.module.css';
import Image from 'next/image';
import coinmasterText from '../../assets/coinmasters.png';
import {
  About,
  CarouselSection,
  TokenomicsSection,
  InvitationSection,
} from '../../(route)/routeBarrel';
import { YellowButton } from '../../components/componentsBarrel';

// Import the hero image and hero background

const HomePage = () => {
  return (
    <main>
      <section className={styles.backgroundContainer}>
        {/* City Image  */}
        <Image
          src={images.heroBg}
          alt="Hero Background"
          className={styles.heroBackground}
          objectFit="cover"
          width={1366}
          height={768}
          // layout="fill"
          priority
        />
        {/* CoinMaster Image */}

        <Image
          src={images.heroImage}
          alt="Hero Foreground"
          className={styles.heroImage}
          width={1366}
          height={763}
          objectFit="contain"
          objectPosition="center"
          priority
        />

        <Image
          src={images.yellowStrip}
          alt="Yellow Strip"
          className={styles.yellowStripHomePage}
          width={1280}
          height={21}
        />

        {/* CoinMasters Image and Description */}

        <div className={styles.contentContainer}>
          {/* Context Container  */}
          <div className={styles.contextLandingPageContainer}>
            {/* CoinMasters Image */}
            <Image
              src={coinmasterText}
              alt="Coin Masters"
              className={styles.coinMastersText}
              width={547} // Adjust based on design
              height={316} // Adjust based on design
              priority
            />

            {/* Description */}
            <div className={styles.textContainer}>
              <p className={styles.description}>
                When Neotropolis needed a hero, the Cyrocoin choose Cyrus
                Maxwell. Now, armed with the incredible powers and a mission to
                protect his city, CoinMaster fights against corruption, villains
                and criminals.
              </p>
            </div>
          </div>

          {/* Button Section */}
          <div className={styles.buttonContainer}>
            <YellowButton />
          </div>
        </div>
      </section>
      <CarouselSection />
      <TokenomicsSection />
      <About />
      <InvitationSection />
    </main>
  );
};

export default HomePage;

// Ensure the images are responsive
// Center the heroImage above the background
