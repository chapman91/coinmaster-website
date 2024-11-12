import React from 'react'
import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";




/**
 * TokenomicsCard Component
 * 
 * This component is a reusable card that displays individual tokenomics information.
 * It is structured with a dark background and customizable title, percentage, and image, 
 * following the design aesthetic similar to the provided by TSS Media company. 
 * Each card displays an image, a title, and a highlighted percentage.
 * 
 * @param {string} title - The title of the card, representing the section of tokenomics (e.g., "MAX SUPPLY").
 * @param {string} percentage - The percentage or quantity associated with the title (e.g., "500 Trillion CYC").
 * @param {string} imageSrc - The source URL for the image to be displayed at the top of the card.
 * 
 * @returns {JSX.Element} A styled card displaying the image, title, and percentage in a vertical stack.
 */



const TokenomicsCard = ({ title, percentage, imageSrc }) => {
  return (
    <Box
    bg="gray.800"
    borderRadius="lg"
    p={6}
    boxShadow="md"
    textAlign="center"
    maxW="sm"
    borderWidth="1px"
    borderColor="gray.700"
    color="white"
    >
      <VStack spacing={4}>
        <Image src={imageSrc} boxSize="80px" alt={title}/>
          <Text fontSize="xl" fontWeight="bold">
            {title}
          </Text>
            <Text fontSize="2xl" fontWeight="extrabold" color="yellow.300">
              {percentage}
            </Text>
       
      </VStack>   
    </Box>
  )
}

export default TokenomicsCard; 




// Change component and import name 