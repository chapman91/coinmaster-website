'use client';

// Import statements
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
        // define how grid areas should behave on different screen sizes
        templateAreas={{
          base: `"text" "image"`, // Stack text and image on mobile
          sm: `"text" "image"`,
          md: `"text" "image"`, // Place image to the left of text and desktop
          lg: `"image text"`,
        }}
        gridTemplateColumns={{ base: '1fr', md: '1fr', lg: '1fr 2fr ' }}
        alignItems="center"
        gap={6}
        position="relative"
      >
        {/* Adjust the size responsively for the dual image */}
        <Box
          area="image"
          display={{ base: 'flex', md: 'flex', lg: 'block' }}
          justifyContent="center"
          alignItems={{ base: 'center', md: 'center' }}
          position={{ base: 'static', md: 'absolute' }}
          top={{ base: 'auto', lg: '105px' }}
          left={{ base: 'auto', lg: '-190px' }}
          mt={{ md: '540px', lg: '0' }}
          ml={{ base: 'auto', md: '105px', lg: '0' }}
          width={{ base: '100%', md: '600px', lg: '800px' }}
          height={{ base: 'auto', md: 'auto', lg: 'auto' }} // Auto height on mobile
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
        <GridItem area="text" mb={{ md: '300px', lg: '0' }}>
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

/**
 *  1. Understand the structure of the invitation code
 *
 *  2. Target the Dual Superhero image and reduce it on smaller screens to position the section for better responsiveness
 *
 *  3. Target the cyrocoin text image.
 *
 *  4. Find out how to make the image not overlap with the body of CTA text
 *
 */
