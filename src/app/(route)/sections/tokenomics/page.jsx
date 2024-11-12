import React from 'react'
import { SimpleGrid, Box } from '@chakra-ui/react';
import { TokenomicsCard } from "../../../components/componentsBarrel";
import images from '../../../assets/images'

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

return (
  <Box p={8} bg="gray.900">
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
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