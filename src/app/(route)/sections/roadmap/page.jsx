'use client';

import React, { useState } from 'react';
import styles from '../../../styles/Roadmap.module.css';
import Image from 'next/image';
import images from '../../../assets/images';

const Roadmap = () => {
  // Added useState to track the active checkpoint and toggle the hologram box
  const [activeCheckpoint, setActiveCheckpoint] = useState(null); // State for halogram pop-up

  /**
   *  Data objects are defined with each data for each checkpoint
   * @function each checkpoint's content is dynamically rendered based on its properties.
   *
   */
  const checkpoints = [
    {
      id: 1,
      text: 'Phase 1: Initial Launch - This marks the first stage where we unveil our project to the world.',
      hologramType: 'image', // Use PNG image for this checkpoint
      hologramImage: images.hologramBox1, // Use PNG for this checkpoint
      img: images.checkpoint1,
    },
    {
      id: 2,
      text: 'Phase 2: Development - The team works on developing key features of the platform.',
      img: images.checkpoint2,
    },
    {
      id: 3,
      text: 'Phase 3: Marketing - Launching campaigns to spread awareness and attract users.',
      hologramType: 'image',
      hologramImage: images.hologramBox2,
      img: images.checkpoint3,
    },
    {
      id: 4,
      text: 'Phase 4: Expansion  - Expanding our reach globally and integrating with other platforms.',
      img: images.checkpoint4,
      hologramType: 'text',
    },
  ];

  /**
   *
   *
   *
   */
  const handleCheckpointClick = (id) => {
    setActiveCheckpoint(activeCheckpoint === id ? null : id); // Toggle the hologram box
  };

  return (
    <section className={styles.roadmapContainer}>
      {/* Background Image */}
      <div className={styles.backgroundImage}> </div>

      {/* Roadmap Image */}
      <div className={styles.roadmapImageContainer}>
        <Image
          src={images.roadmapImage}
          alt="Roadmap"
          layout="intrinsic"
          width={1920}
          height={1080}
          className={styles.roadmapImageDirect}
        />
      </div>

      {/* Checkpoints
       *
       *  Renders either an image or text based on the hologramType property for each checkpoint
       *
       *  Added conditional logic to check hologramType and render the appropriate content
       *
       *
       */}
      {checkpoints.map(({ id, img, text, hologramType, hologramImage }) => (
        <div
          key={id}
          className={`${styles.checkpoint} ${styles[`checkpoint${id}`]}`}
          onClick={() => handleCheckpointClick(id)}
        >
          <Image
            src={images.checkPoint}
            width={200}
            height={200}
            quality={80}
            layout="intrinsic" // Maintains aspect ratio
            objectFit="cover" // Ensures the image
            alt={`Checkpoint ${id}`}
            className={styles.checkpointImage}
          />
        </div>
      ))}

      {/* Hologram Box */}
      {/* {activeCheckpoint === && (
        <div className={styles.hologramBox}>
          {hologramType === 'image' ? (
            <Image
              key="image"
              src={hologramImage}
            
              alt={`Hologram Box ${id}`}
              layout="intrinsic"
              width={400}
              height={200}
              className={styles.hologramImage}
            />
          ) : (
            <p className={styles.hologramText}>{text}</p>
          )}
        </div>
      )} */}

      {activeCheckpoint && (
        <div className={styles.hologramBox}>
          {checkpoints
            .filter((checkpoint) => checkpoint.id === activeCheckpoint)
            .map(({ hologramType, hologramImage, text }) =>
              hologramType === 'image' ? (
                <Image
                  key="image"
                  src={hologramImage}
                  alt="Hologram Box"
                  layout="intrinsic"
                  width={400}
                  height={300}
                  className={styles.hologramImage}
                />
              ) : (
                <p key="text" className={styles.hologramText}>
                  {text}
                </p>
              )
            )}
        </div>
      )}
    </section>
  );
};

export default Roadmap;
