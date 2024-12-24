'use client';

import React from 'react';
import { Box, Text, Grid, GridItem, VStack } from '@chakra-ui/react';
import cyrocoinImage from '../../../assets/cyrocoin.png';
import images from '../../../assets/images';
import styles from '../../../styles/InvitationSection.module.css';
import Image from 'next/image';
import NormalButton from '../../../components/atoms/client/normalButton';
import { Comic_Neue } from 'next/font/google';

const comicNue = Comic_Neue({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const InvitationSection = () => {
  return (
    <Box
      as="section"
      sx={{
        background: 'var(--invitation-gradient)',
      }}
      px={{ base: 5, md: 10 }}
      textAlign="center"
      color="white"
    >
      {/* Grid Container */}
      <Grid
        templateAreas={{
          base: `"text" "image"`, // Stack text and image on mobile
          md: `"image text"`, // Place image to the left of text and desktop
        }}
        gridTemplateColumns={{ base: '1fr', md: '1fr 2fr ' }}
        alignItems="center"
        gap={6}
        position="relative"
      >
        {/* Image Section */}
        <Box
          area="image"
          display={{ base: 'flex', md: 'block' }}
          justifyContent="end"
          alignItems={{ base: 'center', md: 'right' }}
          position={{ base: 'static', md: 'absolute' }}
          top={{ base: 'auto', md: '105px' }}
          left={{ base: 'auto', md: '-190px' }}
          width={{ base: '100%', md: '800px' }}
          height={{ base: 'auto', md: 'auto' }} // Auto height on mobile
        >
          <div className={styles.cyrocoinContainer}>
            <Image
              src={images.coinMasterCyrus}
              alt="CoinMaster & Cyrus Maxwell"
              width={1366}
              height={768}
              objectFit="cover"
              priority
            />
          </div>
        </Box>

        {/* Text Section */}
        <GridItem area="text">
          <VStack
            spacing={2}
            fontWeight="bold"
            textTransform="uppercase"
            w="100%"
            mt={{ base: 'auto', md: 'auto' }}
            mb={{ base: 0, md: '4rem' }}
          >
            {/* Replace for Cyrocoin Text */}
            <div className={styles.cyrocoinImageContainer}>
              <Image
                src={cyrocoinImage}
                alt="Hero Foreground"
                className={styles.cyrcoinImage}
                width={1366}
                height={763}
                objectFit="contain"
                objectPosition="center"
                priority
              />
            </div>
            <Text
              className={comicNue.className}
              fontSize={{
                base: '1rem',
                sm: '1.25rem',
                md: '1.5rem',
              }}
              maxW="600px"
            >
              Become a part of CoinMaster&#39;s journey to protect NeoTropolis.
              Powered by Solana.
            </Text>
            {/* Button  */}
            <NormalButton onClick={() => (window.location.href = '/join-us')}>
              APE IN
            </NormalButton>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default InvitationSection;
