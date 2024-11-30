'use client';

import React from 'react';
import styles from '../../styles/how-to-buy.module.css';
import images from '../../assets/images';
import { Box, Icon } from '@chakra-ui/react';
import { BsChevronDoubleDown } from 'react-icons/bs'; // Import arrow icon

export default function HowToBuy() {
  return (
    <section
      className={styles.container}
      style={{
        backgroundImage: `url(${images.howToBuyPageBg})`,
      }}
    >
      {/* Header Section */}
      <div className={styles.header}>
        <h1 className={styles.title}>How To Buy</h1>
        <p className={styles.instructions}>INSTRUCTIONS</p>
        <p className={styles.subtext}>Interactive Dialogue in Progress</p>
        {/* Arrow Component */}
      </div>

      <div className={styles.arrowAndMainContainer}>
        {/* Arrow Element */}
        <div
          className={styles.arrowContainer}
          onClick={() => {
            // Smooth scroll to main section
            const mainSection = document.querySelector(
              `.${styles.gridContainer}`
            );
            if (mainSection) {
              mainSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <Icon
            as={BsChevronDoubleDown}
            w={10} /* Arrow size */
            h={10}
            color="white"
            _hover={{
              transform: 'scale(1.2)', // Hover effect
              transition: 'all 0.2s',
            }}
          />
        </div>
      </div>

      {/* Main Section */}
      <div className={styles.gridContainer}>
        {/* Dialogue Bubble + CoinMaster Character I */}
        <div className={styles.dialogueContainer}>
          {/* Top Dialogue Bubble | Row 1 */}
          <div
            className={`${styles.gridItem} ${styles.dialogueBubbleOne}`}
            style={{ backgroundImage: `url(${images.dialogueBoxOne})` }}
          >
            {/* <img
                        src={images.dialogueBoxOne}
                        alt="Dialogue Bubble"
                        className={styles.bubbleImage}
                    /> */}
            <div className={styles.overlayContent}>
              <p className={styles.overlayText}>Add text to picture</p>
            </div>
          </div>

          {/* Top CoinMaster Character | Row 2 */}
          <div className={`${styles.gridItem} ${styles.characterCoinMaster}`}>
            <img
              src={images.cyroMan}
              alt="CoinMaster Character"
              className={styles.characterImageCoinMaster}
            />
          </div>
        </div>

        {/*! Dialogue Bubble + CoinMaster Character II */}
        <div className={styles.dialogueContainer}>
          <div
            className={`${styles.gridItem} ${styles.dialogueBubbleOne}`}
            style={{ backgroundImage: `url(${images.dialogueBoxTwo})` }}
          >
            <div className={styles.overlayContent}>
              <p className={styles.overlayText}>Add text to picture</p>
            </div>
          </div>

          {/* Bottom Character */}
          <div className={`${styles.gridItem} ${styles.characterCoinMaster}`}>
            <img
              src={images.unmaskedCyroman}
              alt="Unmasked Character"
              className={styles.characterImageCoinMasterLeft}
            />
          </div>
        </div>

        {/*! Dialogue Bubble + CoinMaster Character III */}
        <div className={styles.dialogueContainer}>
          {/* Top Dialogue Bubble */}
          <div
            className={`${styles.gridItem} ${styles.dialogueBubbleOne}`}
            style={{ backgroundImage: `url(${images.dialogueBoxOne})` }}
          >
            <div className={styles.overlayContent}>
              <p className={styles.overlayText}>Add text to picture</p>
            </div>
          </div>
          {/* Top Character */}
          <div className={`${styles.gridItem} ${styles.characterCoinMaster}`}>
            <img
              src={images.cyroMan}
              alt="Character"
              className={styles.characterImageCoinMaster}
            />
          </div>
        </div>

        {/* Dialogue Bubble + CoinMaster IV */}
        <div className={styles.dialogueContainer}>
          <div
            className={`${styles.gridItem} ${styles.dialogueBubbleOne}`}
            style={{ backgroundImage: `url(${images.dialogueBoxTwo})` }}
          >
            <div className={styles.overlayContent}>
              <p className={styles.overlayText}>Add text to picture</p>
            </div>
          </div>

          {/* Bottom Character */}
          <div className={`${styles.gridItem} ${styles.characterCoinMaster}`}>
            <img
              src={images.unmaskedCyroman}
              alt="Unmasked Character"
              className={styles.characterImageCoinMasterLeft}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
