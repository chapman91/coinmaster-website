'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Image,
  Badge,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
  useDisClosureButton,
} from '@chakra-ui/react';

import Slider from 'react-slick';
import images from '../../../assets/images';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../../../styles/CarouselSection.module.css';

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <Box
    position="absolute"
    top="50%"
    right="10px"
    transform="translateY(-50%)"
    width="40px"
    height="40px"
    display="flex"
    alignItems="center"
    justifyContent="center"
    cursor="pointer"
    zIndex={5}
    onClick={onClick}
  >
    <Image
      src={images.carouselArrowLeft}
      alt="Next"
      width="100%"
      height="auto"
      _hover={{ transform: 'scale(1.1)' }} // Hover effect
      transition="transform 0.2s"
    />
  </Box>
);

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => (
  <Box
    position="absolute"
    top="50%"
    left="10px"
    transform="translateY(-50%)"
    width="40px"
    height="40px"
    display="flex"
    alignItems="center"
    justifyContent="center"
    cursor="pointer"
    zIndex={5}
    onClick={onClick}
  >
    <Image
      src={images.carouselArrowRight}
      alt="Previous"
      width="100%"
      height="auto"
      _hover={{ transform: 'scale(1.1)' }} // Hover effect
      transition="transform 0.2s"
    />
  </Box>
);

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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerPadding: '20px', // Add padding to create spacing
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show only 1 slide
          slidesToScroll: 1, // Scroll 1 slide at a time
          centerMode: false,
        },
      },
    ],
    appendDots: (dots) => (
      <Box
        as="ul"
        display="flex"
        justifyContent="center"
        listStyleType="none"
        p={0}
      >
        {dots.map((dot, index) => (
          <Box
            as="li"
            key={index}
            mx={2}
            width="16px"
            height="16px"
            borderRadius="full"
            bg={
              dot.props.className.includes('slick-active')
                ? 'yellow'
                : 'gray.400'
            }
            border="1px solid black"
            cursor="pointer"
            onClick={dot.props.onClick} // Ensure the dots work
            transition="all 0.3s"
            _hover={{ transform: 'scale(1.2)' }} // Slight enlarge on hover
          />
        ))}
      </Box>
    ),
  };

  // Flipbook data
  const flipbooks = [
    {
      volume: 'Volume 1',
      image: images.coinmasterCover, // Replace with correct path
      flipbookId: 'bdad114828', // Replace with your Heyzine link
    },
    {
      volume: 'Volume 2',
      image: images.coinmasterCover, // Replace with the correct path
      flipbookId: '1c066f59ea', // Replace with your Heyzine link
    },
  ];

  // Load Heyzine script dynamically when modal is open
  useEffect(() => {
    if (isOpen && currentFlipbookId) {
      const script = document.createElement('script');
      script.src = 'https://heyzine.com/js/flipbook-embed.js';
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
  };

  return (
    <Box
      as="section"
      py={10}
      px={{ base: 5, md: 10 }}
      bg="white"
      textAlign="center"
    >
      {/* Extra box added over Box element */}
      <Box gap={{ base: 'px', sm: '16px', md: '24px' }}>
        <Slider {...settings}>
          {flipbooks.map((book, index) => (
            <Box
              key={index}
              className={styles.slide} // Apply to focus styles
              position="relative"
              borderRadius="xl"
              overflow="hidden"
              boxShadow="0px 8px 16px rgba(0, 0, 0, 0.8), 0px 8px 16px rgba(0, 0, 0, 0.8)"
              // mx={{ base: 4, sm: 2 , md: 2, lg: 2}} // Reduved margin for desktop
              // p={{ base: 10}}
              onClick={() => window.open(book.link, '_blank')} // Open flipbook on click
              cursor="pointer"
              maxW="400px" // Mas width for consistency
              width={{ base: '90%', md: '45%' }} // Smaller width on desktop
              as="section"
              // Apply margin-right for spacing between slides
              style={{
                marginRight: '20px',
                maxWidth: '400px',
              }}
            >
              {/* Badge Positioned on the Image */}
              <Image
                src={images.newBanner}
                position="absolute"
                top={{ base: '-6px', sm: '-8px', md: '-3', lg: '-8px' }}
                left={{ base: '-2px', sm: '-8px', md: '-2', lg: '-10px' }}
                zIndex={3} // Ensure it's on top of the image
                width={{ base: '80px', sm: '100px', md: '120px', lg: '120px' }} // Responsive width for the badge
                height="auto" // Maintain aspect ratio
                boxShadow={{ base: 'sm', md: 'lg', lg: 'xl' }}
              />

              {/* Cover Image  */}
              <Image
                src={book.image}
                alt={book.volume}
                objectFit="cover"
                width="100%"
                height="auto"
                style={{
                  aspectRatio: 'auto', // Optional, ensures modern aspect-ratio support
                }}
              />

              {/* Dark Overlay */}
              <Box
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                bg="rgba(0, 0, 0, 0.2)" // Semi-transparent black background
                zIndex={2} // Above the image but below other content
              />

              {/* Volume Text */}
              <Box
                position="absolute"
                bottom={1}
                left="50%"
                transform="translateX(-50%)"
                color="white"
                px={4}
                py={2}
                border="2px solid white"
                zIndex={4}
              >
                <Text fontWeight="extrabold">{book.volume}</Text>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
      {/* Modal to display flipbook */}
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent bg="black">
          <ModalCloseButton color="white" />
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
                style={{ width: '100%', height: '100%' }}
              ></div>
            )}
          </Box>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CarouselSection;
