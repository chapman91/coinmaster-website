'use client';

import React from 'react';
import styles from '../../../styles/Roadmap.module.css';
import Image from 'next/image';
import images from '../../../assets/images';

const Roadmap = () => {
  //  const [activeCheckpoint, setActiveCheckpoint] = useState(null); // State for halogram pop-up

  const checkpoints = [
    {
      id: 1,
      top: '10%',
      left: '20%',
      text: 'Phase 1: Initial Launch',
      img: images.checkpoint1,
    },
    {
      id: 2,
      top: '25%',
      left: '50%',
      text: 'Phase 2: Development',
      img: images.checkpoint2,
    },
    {
      id: 3,
      top: '60%',
      left: '30%',
      text: 'Phase 3: Marketing',
      img: images.checkpoint3,
    },
    {
      id: 4,
      top: '80%',
      left: '70%',
      text: 'Phase 4: Expansion',
      img: images.checkpoint4,
    },
  ];

  return (
    <section className={styles.roadmapContainer}>
      {/* Background Image */}
      <div className={styles.backgroundImage}> </div>

      {/* Roadmap Image */}
      <div className={styles.roadmapImageContainer}>
        <Image
          src={images.roadmapImage}
          alt="Roadmap"
          layout="responsive"
          width={1920}
          height={1080}
          className={styles.roadmapImageDirect}
        />
      </div>

      {/* Checkpoints */}
      {checkpoints.map((checkpoint) => (
        <div
          key={checkpoint.id}
          className={styles.checkpoint}
          style={{ top: checkpoint.top, left: checkpoint.left }}
          onClick={() => setActiveCheckpoint(checkpoint.id)}
        >
          <Image
            src={images.checkPoint}
            width={200}
            height={200}
            quality={80}
            layout="intrinsic" // Maintains aspect ratio
            objectFit="cover" // Ensures the image
            alt={`Checkpoint ${checkpoint.id}`}
            className={styles.checkpointImage}
          />
        </div>
      ))}
    </section>
  );
};

export default Roadmap;
