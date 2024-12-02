'use client';

import React from 'react';
import {
  Box,
  Text,
  Button,
  Grid,
  GridItem,
  Image,
  VStack,
} from '@chakra-ui/react';
import images from '../../../assets/images';
import styles from '../../../styles/InvitationSection.module.css';
import NormalButton from '../../../components/atoms/client/normalButton';

const InvitationSection = () => {
  return (
    <Box
      as="section"
      sx={{
        background: 'var(--invitation-gradient)',
      }}
      py={{ base: 0, md: 20 }}
      pb={0}
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
          justifyContent="center"
          alignItems="center"
          position={{ base: 'static', md: 'absolute' }}
          top={{ base: 'auto', md: '6px' }}
          left={{ base: 'auto', md: '-160px' }}
          width={{ base: '100%', md: '600px' }}
          height={{ base: 'auto', md: 'auto' }} // Auto height on mobile
        >
          <Image
            src={images.coinMasterCyrus}
            alt="CoinMaster & Cyrus Maxwell"
            width="100%"
            height="auto"
            objectFit="cover"
            priority
            placeholder="blur"
          />
        </Box>

        {/* Text Section */}
        <GridItem area="text">
          <VStack spacing={6} fontWeight="bold" textTransform="uppercase">
            <Text
              fontSize={{ base: '2xl', md: '4xl' }}
              fontWeight="bold"
              textTransform="uppercase"
            >
              Join the Community
            </Text>
            <Text fontSize={{ base: 'md', md: 'lg' }} maxW="600px">
              Become a part of CoinMaster's journey. Support the vision, access
              exclusive benefits, and shape the future of web3 superhero
              narratives!
            </Text>
            {/* Button  */}
            <NormalButton onClick={() => (window.location.href = '/join-us')} />
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default InvitationSection;
