import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  Image,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import images from '../../../assets/images';

// About functional React component called AboutSection
const About = () => {
  return (
    <Box
      id="about"
      backgroundImage={images.aboutBackground}
      backgroundSize="cover"
      backgroundPosition="top"
      backgroundRepeat="no-repeat"
      py={16}
      px={8}
      display="flex"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      minHeight="100vh"
    >
      {/* Grid Layout Container */}
      <Grid
        templateColumns={{ base: '1fr', md: '1fr 1fr' }} // Two columns on medium screens and up
        gap={8}
        bg="white"
        borderRadius="20px"
        boxShadow="xl"
        p={8}
        maxHeight={{ xs: '100vh', base: '80vh', md: '75vh', lg: '80vh' }}
        // overflow="hidden"
        position="relative"
        w={{ base: '100%', md: '75%', lg: '60%' }}
        maxW="1000px"
      >
        {/* Yellow Shock Sign (Burst Effect) */}
        {/* Yellow Shock Sign (Burst Effect) */}
        <Image
          src={images.exclamation}
          alt="Yellow Shock Sign"
          position="absolute"
          top={{
            xs: '1%',
            base: '-10%',
            sm: '-0.3%',
            md: '-1%',
            lg: '-10%',
            xl: '-17%',
          }}
          left={{
            xs: '-11%',
            base: '-10%',
            sm: '-8%',
            md: '-9%',
            lg: '-20%',
            xl: '-15%',
          }}
          boxSize={{
            xs: '70px',
            base: '50px',
            sm: '70px',
            md: '80px',
            lg: '145px',
            xl: '200px',
          }}
          zIndex="2"
        />

        {/* Text Column - Left Side */}
        <GridItem>
          <VStack align="start" spacing={4} flex="1">
            {/* CoinMaster Name */}
            <Heading as="h3" fontSize="2xl" fontWeight="bold">
              CoinMaster
            </Heading>
            {/* CoinMaster Heroic Statement */}
            <Text fontSize="lg" color="gray.700">
              The Master of Cyrocoin
            </Text>
            {/* CoinMaster Story Summary */}
            <Text fontSize="lg" color="gray.700">
              Our mission is to inspire and empower individuals with secure and
              innovative solutions. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Fuga maiores voluptate magnam voluptates
              doloremque tempora maxime repellendus eos facilis qui deserunt
              perferendis quia est voluptatibus, ipsam debitis, laboriosam quis
              laudantium.
            </Text>
            {/* Signature */}
            <Text
              fontSize={{ base: 'lg', md: '2xl' }}
              fontStyle="italic"
              fontFamily="'Dancing Script', cursive"
              color="gray.500"
            >
              — Cyrus Maxwell
            </Text>
          </VStack>
        </GridItem>

        {/* Image Column - Right Side */}
        <Grid
          templateRows="repeat(2, auto)"
          alignItems="center"
          justifyContent="center"
        >
          {/* Exclamation Bubble */}
          <GridItem>
            <Image
              src={images.exclamationBubble}
              alt="Exclamation Bubble"
              boxSize={{
                base: '80px', // Smaller screens
                sm: '100px', // Small screens (480px and up)
                md: '150px', // Medium screens (768px and up)
                lg: '385px', // Large screens (992px and up)
              }}
              position="absolute"
              right={{
                base: '-2%', // Adjusted to keep in place for smaller screens
                sm: '-4%', // Adjust slightly outwards for small screens
                md: '-6%', // Medium screens position
                lg: '-4%', // Large screens (exact fit)
              }}
              top={{
                base: '-5%', // Extra space above for smaller screens
                sm: '-7%', // Slight adjustment for small screens
                md: '-10%', // Medium screens
                lg: '-50%', // Large screens (exact fit)
              }}
              zIndex="2" // Ensures it remains above other elements
            />
          </GridItem>

          {/* CoinMaster Image */}
          <GridItem mt={{ xs: '100px', base: '100px', md: '0px' }}>
            <Image
              src={images.cyroMan}
              alt="CoinMaster SuperHero"
              boxSize={{ base: '200px', md: '300px', lg: '400px' }}
              position="absolute"
              bottom="0"
              right="-3"
              priority
            />
          </GridItem>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
