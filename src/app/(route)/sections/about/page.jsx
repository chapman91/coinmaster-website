import React from 'react';
import { Box, Heading, Text, VStack, Image, Grid, GridItem } from "@chakra-ui/react";
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
        templateColumns={{ base: "1fr", md: "1fr 1fr" }} // Two columns on medium screens and up
        gap={8}
        bg="white"
        borderRadius="20px"
        boxShadow="xl"
        p={8}
       
        maxHeight={{ base: "80vh", md: "75vh", lg: "80vh" }}
        // overflow="hidden"
        position="relative"
        w={{ base: "100%", md: "75%", lg: "60%"}}
        maxW
        ="1000px"
      >
      {/* Yellow Shock Sign (Burst Effect) */}
      <Image
       src={images.exclamation}
       alt="Yellow Shock Sign"
       position="absolute"
       top="-13%"
       left="-15%"
       boxSize={{ base: "50px", md: "80px", lg: "210px"}}
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
              Our mission is to inspire and empower individuals with secure and innovative solutions.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga maiores voluptate magnam voluptates doloremque tempora maxime repellendus eos facilis qui deserunt perferendis quia est voluptatibus, ipsam debitis, laboriosam quis laudantium.
            </Text>
          </VStack>
          {/* Signature */}
          <Text fontSize="2xl" fontStyle="italic" mt={200} fontFamily="'Dancing Script', cursive" color="gray.500">
              — Cyrus Maxwell
            </Text>
        </GridItem>

        {/* Image Column - Right Side */}
        <Grid templateRows="repeat(2, auto)"
         alignItems="center"
         justifyContent="center"
        >
        
        {/* Exclamantion Bubble */}
        <GridItem>
          <Image
            src={images.exclamationBubble}
            alt="Exclamation Bubble"
            boxSize={{ base: "100px", md: "150px", lg: "385px" }}
            position="absolute"
            right="-4"
            top="-7"
            // Adds space between images

          />
        </GridItem>

        {/* CoinMaster Image */}
        <GridItem>
          <Image
            src={images.cyroMan}
            alt="CoinMaster SuperHero"
            boxSize={{ base: "200px", md: "300px", lg: "400px" }}
            position="absolute"
            bottom="0"
            right="-3"
          />
        </GridItem>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
