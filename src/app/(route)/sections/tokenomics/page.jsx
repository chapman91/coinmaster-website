import React from 'react'
import { SimpleGrid, Box, Heading } from '@chakra-ui/react';
import { TokenomicsCard } from "../../../components/componentsBarrel";
import images from '../../../assets/images'
import Video from 'next-video'; // Import Video component from next-video

/**
 * TokenomicsPage Component
 * 
 * This component displays a grid of TokenomicsCard components, each representing
 * a different aspect of the tokenomics structure. The data for each card (title, 
 * percentage, and image) is provided in the tokenomicsData array, allowing for easy 
 * customization or expansion if additional cards are needed.
 * 
 * This component is designed to be rendered on the tokenomics page, providing a 
 * visually appealing breakdown of the token distribution or other tokenomics details.
 * 
 * @returns {JSX.Element} A grid layout of TokenomicsCard components, spaced and responsive
 *                        to adapt to various screen sizes.
 */

const TokenomicsSection = () => {

// Array of tokenomics data to be displayed on the page, with each object representing a card's content.
  const tokenomicsData = [
    {
      title: "MAX SUPPLY",
      percentage: "500 Trillion CYC",
      imageSrc: images.cyrocoinDistribution,  // Using image from object
    },
    {
      title: "LIQUIDITY POOL & BURNT",
      percentage: "90%",
      imageSrc: images.liquidityPool,  /**U */
    },
    {
      title: "DAO TREASURY",
      percentage: "5%",
      imageSrc: images.treasuryImage,  /**U*/ 
    },
    {
      title: "CREATORS",
      percentage: "5%",
      imageSrc: images.creatorsImage,
    },
  ];

//  TokenomicsSection structure and styles
return (
  <Box position="relative" p={8} bg="gray.900" overflow="hidden" color="white">
   {/* Background Video */}
   <Video
   src="/videos/cyronmics_bg.mp4"
   autoPlay
   loop
   muted
   playsInline
   style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
   }}
   />

   <Heading as="h2" size="lg" textAlign="center" mb={8} zIndex={1}>
    Tokenomics Overview
   </Heading>

    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
    {/* Mapping tokeonomcisData to Render TokenomicsCard Components */}
    {/* Understand the execution of the function */}
      {tokenomicsData.map((data, index) => (
        <TokenomicsCard 
          key={index}
          title={data.title}
          percentage={data.percentage}
          imageSrc={data.imageSrc}     
        />
      ))
      }
    </SimpleGrid>
  </Box>

  )
}

export default TokenomicsSection;