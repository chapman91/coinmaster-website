"use client";

import React, { useState, useEffect } from "react";
import { Box, Image, Badge, Text, Modal, ModalOverlay, ModalContent, ModalCloseButton, useDisclosure, useDisClosureButton } from '@chakra-ui/react';

import Slider from "react-slick";
import images from '../../../assets/images';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CarouselSection = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentFlipbookId, setCurrentFlipbookId] = useState(null);

  const settings = {
    dots: true, // show dots for navigation 
    infinite: false, // Infinite scroll
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides visible at a time
    slidesToScroll: 1, // Number of slides to scroll
    arrows: true, // Show next/prev arrows
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show only 1 slide
        },
      },
    ],
  };

// Flipbook data
const flipbooks = [
  {
    volume: "Volume 1",
    image: images.coinmasterCover, // Replace with correct path
    flipbookId: "bdad114828", // Replace with your Heyzine link
  },
  {
    volume: "Volume 2",
    image: images.coinmasterCover, // Replace with the correct path
    flipbookId: "1c066f59ea", // Replace with your Heyzine link
  }
];

// Load Heyzine script dynamically when modal is open 
useEffect(() => {
  if (isOpen && currentFlipbookId) {
    const script = document.createElement("script");
    script.src = "https://heyzine.com/js/flipbook-embed.js";
    script.async = true; 
    document.body.appendChild(script); 


    // Clean up the scri[t when the modal is closed
    return () => {
      document.body.removeChild(script);
    };
  }
}, [isOpen, currentFlipbookId]);


const handleCoverClick = (flipbookId) => {
  setCurrentFlipbookId(flipbookId);
  onOpen();
}

  return (
    <Box
    as="section"
    py={10}
    px={{ base: 5, md: 10 }}
    bg="white"
    textAlign="center"    
    >
    <Slider {...settings}>
      {flipbooks.map((book, index) => (
        <Box
        key={index}
        position="relative"
        borderRadius="xl"
        overflow="hidden"
        boxShadow="0px 8px 16px rgba(0, 0, 0, 0.8), 0px 8px 16px rgba(0, 0, 0, 0.8)"
        mx={{ base: 2, md: 5 }} // Margin between slides
        onClick={() => window.open(book.link, "_blank")} // Open flipbook on click
        cursor="pointer"   
        maxW="400px" // Mas width for consistency
        width={{ base: "90%", md: "40%" }} // Smaller width on desktop   
        >
        {/* Badge Positioned on the Image */}
        <Image
        src={images.newBanner}
        colorScheme="red"
        position="absolute"
        top={{ base: 2, md: -3 }}
        left={{ base: 2, md: -2 }}
        zIndex={3} // Ensure it's on top of the image
        width={{ base: "50px", md: "120px" }} // Responsive width for the badge
        height="auto" // Maintain aspect ratio
        boxShadow="xl"
        />
     

      {/* Cover Image  */}
      <Image 
       src={book.image}
       alt={book.volume}
       objectFit="cover"
       width="100%"
       height="auto"
       style={{
        aspectRatio: "auto", // Optional, ensures modern aspect-ratio support
       }}
      />


      {/* Volume Text */}
      <Box 
       position="absolute"
       bottom={4}
       left="50%"
       transform="translateX(-50%)"
       bg="rgba(0, 0, 0.6)"
       color="white"
       px={4}
       py={2}
       borderRadius="md" 
      >
        <Text fontWeight="bold">{book.volume}</Text>
      </Box>
        </Box>
      ))}

    </Slider>

    {/* Modal to display flipbook */}
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <ModalOverlay />
      <ModalContent bg="black">
        <ModalCloseButton color="white"/>
        <Box
        width="100%"
        height="100vh"
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"    
        >
          {currentFlipbookId && (
            <div
            className="heyzine"
            data-id={currentFlipbookId}
            data-fullscreen="true"
            style={{ width: "100%", height: "100%"}}
            >
            </div>
          )}
      </Box>
      </ModalContent>
   </Modal>
    </Box>
  )
}

export default CarouselSection;