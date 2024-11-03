import React from 'react';
import images from '../../assets/images';
import styles from '../../styles/HomePage.module.css';
import Image from 'next/image';


// Import the hero image and hero background 

const HomePage = () => {
  return (
    <div className={styles.backgroundContainer}>
      <Image
      src={images.heroBg}
      alt="Hero Background"
      className={styles.heroBackground}
      layout="fill"
      />
      <Image
      src={images.heroImage}
      alt="Hero Foreground"
      className={styles.heroImage}
      width={500}
      height={500}
      />
      
    </div>
  )
}

export default HomePage


// Ensure the images are responsive 
// Center the heroImage above the background 