"use client"

import React, { useEffect, useRef } from 'react';
import styles from '../../styles/how-to-buy.module.css';
import images from '../../assets/images';

export default function HowToBuy() {
    return (
        <div
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
            </div>

            {/* Main Section */}
            <div className={styles.gridContainer}>

            {/* Dialogue Bubble + CoinMaster Character */}
            <div className={styles.dialogueContainer}>
                {/* Top Dialogue Bubble */}
                <div 
                className={`${styles.gridItem} ${styles.dialogueBubbleOne}`}
                style={{ backgroundImage: `url(${images.dialogueBoxOne})`}}
                >
                    {/* <img
                        src={images.dialogueBoxOne}
                        alt="Dialogue Bubble"
                        className={styles.bubbleImage}
                    /> */}
                    <div className={styles.overlayContent}>
                    <p className={styles.overlayText}>
                    download phantom or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extensions by going to phantom.app
                    </p>
                    </div>
                </div>

                {/* Top CoinMaster Character */}
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

                <div className={`${styles.gridItem} ${styles.dialogueBubbleOne}`}
                style={{ backgroundImage: `url(${images.dialogueBoxTwo})`}}
                >
                   <div className={styles.overlayContent}>
                    <p className={styles.overlayText}>
                    have Sol in your wallet to switch to $Babo. If you do not have any Sol, you can buy directly on phantom, transfer from another wallet, or buy on an exchange such as Coinbase or Kraken and send it to your wallet.
                    </p>
                    </div>
                </div>

                {/* Bottom Character */}
                <div className={`${styles.gridItem} ${styles.characterCoinMaster}`}>
                    <img
                        src={images.unmaskedCyroman}
                        alt="Unmasked Character"
                        className={styles.characterImageCoinMaster}
                    />
                </div>
                </div>



                     {/* Top Dialogue Bubble */}
                     <div className={`${styles.gridItem} ${styles.dialogueBubble}`}>
                    <img
                        src={images.dialogueBoxOne}
                        alt="Dialogue Bubble"
                        className={styles.bubbleImage}
                    />
                    <p className={styles.overlayText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, dolore adipisci! Incidunt aliquid quod laborum praesentium consectetur dicta mollitia voluptas hic eligendi cumque!
                    </p>
                </div>

                {/* Top Character */}
                <div className={`${styles.gridItem} ${styles.character}`}>
                    <img
                        src={images.cyroMan}
                        alt="Character"
                        className={styles.characterImage}
                    />
                </div>


                  {/* Bottom Dialogue Bubble */}
                  <div className={`${styles.gridItem} ${styles.dialogueBubble}`}>
                    <img
                        src={images.dialogueBoxTwo}
                        alt="Dialogue Bubble"
                        className={styles.bubbleImage}
                    />
                    <p className={styles.overlayText}>
                        Second step to buy...
                    </p>
                </div>

                {/* Bottom Character */}
                <div className={`${styles.gridItem} ${styles.character}`}>
                    <img
                        src={images.unmaskedCyroman}
                        alt="Unmasked Character"
                        className={styles.characterImage}
                    />
                </div>
            </div>
        </div>
    );
}
