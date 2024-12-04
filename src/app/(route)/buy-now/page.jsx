'use client';

import { useEffect } from 'react';
import styles from '../../styles/buy-now.module.css';
import React from 'react';
import { DefaultSwap } from '../../components/componentsBarrel';
import images from '../../assets/images';
import buyNowText from '../../assets/buy-now.png';
import Image from 'next/image';

const BuyNowPage = () => {
  useEffect(() => {
    // Optional: Any logic can go here
  }, []);

  return (
    <main
      className={styles.buyNowPage}
      style={{
        backgroundImage: `url(${images.buyNowBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%',
      }} // Set the background image dynamically
    >
      <div className={styles.buyNowContainer}>
        <Image
          src={buyNowText}
          alt="Hero Foreground"
          className={styles.buyNowImage}
          width={1366}
          height={763}
          objectFit="contain"
          objectPosition="center"
          priority
        />
      </div>

      <DefaultSwap />
    </main>
  );
};

export default BuyNowPage;
