import React from 'react';
import { Box, Text, Image, VStack } from '@chakra-ui/react';

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
      position="relative"
      bg="gray.800"
      borderRadius="25px"
      p={6}
      boxShadow="md"
      textAlign="center"
      maxW="sm"
      borderWidth="1px"
      borderColor="gray.700"
      color="white"
    >
      {/* Semi-Tranparent overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="rgba(52, 52, 52, 0.9)" // 50% opacity of #343434
        borderRadius="25px"
        zIndex="1" // Places overlay above background but below content
      />

      {/* Card Content */}
      <VStack spacing={4} zIndex="2" position="relative">
        <Box
          bg="customGray.500"
          p={7}
          border="4px solid"
          borderColor="yellow.400"
          borderRadius="25px"
          objectFit="contain"
        >
          <Image src={imageSrc} width={250} height={250} alt={title} />
        </Box>
        <Text fontSize="xl" fontWeight="bold">
          {title}
        </Text>
        <Text fontSize="2xl" fontWeight="extrabold" color="yellow.300">
          {percentage}
        </Text>
      </VStack>
    </Box>
  );
};

export default TokenomicsCard;

// Understand how the Box and VStack components work
