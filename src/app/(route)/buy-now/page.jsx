'use client';

import { useEffect } from 'react';
import styles from "../../styles/buy-now.module.css";
import React from 'react';
import { DefaultSwap } from "../../components/componentsBarrel";
import images from "../../assets/images";

const BuyNowPage = () => {

  useEffect(() => {
    // Optional: Any logic can go here
  }, [])

  return (
    <main
     className={styles.buyNowPage}
     style={{ backgroundImage: `url(${images.buyNowBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      width: '100%',
    }} // Set the background image dynamically
    >
      <DefaultSwap/>
    </main>
  )
}

export default BuyNowPage