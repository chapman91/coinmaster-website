'use client';

import React from 'react';
import { Button } from '@chakra-ui/react';

const YellowButton = () => {
  const scrollToNextSection = () => {
    const carouselSection = document.getElementById('carouselSection');
    if (carouselSection) {
      carouselSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Button
      onClick={scrollToNextSection}
      bg="var(--border-color)" // Background color
      color="var(--background-color)" // Text color
      fontSize="lg" // Font size
      fontWeight="bold" // Font weight
      py={6} // Padding (vertical)
      px={12}
      borderRadius="md" // Rounded corners
      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.9)" // Shadow
      _hover={{
        transform: 'scale(1.05)',
        boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.4)',
      }} // Hover effect
      _active={{
        transform: 'scale(0.95)',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
      }} // Active effect
      _focus={{ outline: 'none' }} // Remove focus outline
    >
      EXPLORE
    </Button>
  );
};

export default YellowButton;
