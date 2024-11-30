import React from 'react';
import styles from '../../../styles/Roadmap.module.css';
import Image from 'next/image';
import images from '../../../assets/images';

const Roadmap = () => {
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
    </section>
  );
};

export default Roadmap;
