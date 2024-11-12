import React from 'react';
import images from '../../assets/images';
import styles from '../../styles/HomePage.module.css';
import Image from 'next/image';

// Import the hero image and hero background 

const HomePage = () => {
  return (
    <main className={styles.backgroundContainer}>
      {/* City Image  */}
      <Image
      src={images.heroBg}
      alt="Hero Background"
      className={styles.heroBackground}
      objectFit="cover"
      layout="fill"
      priority
      />
      {/* CoinMaster Image */}
  
      <Image
      src={images.heroImage}
      alt="Hero Foreground"
      className={styles.heroImage}
      width={386}
      height={850}
      priority
      />
      
    <img
    src={images.yellowStrip}
    alt="Yellow Strip"
    className={styles.yellowStripHomePage}
    />  
    </main>

    
  )
}

export default HomePage


// Ensure the images are responsive 
// Center the heroImage above the background 