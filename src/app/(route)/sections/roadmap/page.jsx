"use client";

import React, { useState } from "react";
import { Box, Flex, Image, Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";
import images from "../../../assets/images"

const Roadmap = () => {
  const [activeCheckpoint, setActiveCheckpoint] = useState(null); // State for active checkpoint (for hologram pop-up)

  // Dummy data for roadmap checkpoints
  const checkpoints = [
    { id: 1, top: "10%", left: "20%" }, // Position for checkpoint 1
    { id: 2, top: "25%", left: "50%" }, // Position for checkpoint 2
    { id: 3, top: "60%", left: "30%" }, // Position for checkpoint 3
    { id: 4, top: "80%", left: "70%" }, // Position for checkpoint 4
  ];

  return (
    <Box
      as="section"
      display="grid"
      gridTemplateColumns="1fr"
      gridTemplateRows="1fr"
      position="relative"
      width="100%"
      height="100vh"
      overflow="hidden"
    >
      {/* Roadmap Background */}
      <Box
        alt="Roadmap Background"
        gridColumn="1 / -1" // Span across the entire grid
        gridRow="1 / -1" // Span across the entire grid
        bgImage={images.roadmapBg} 
        bgSize="cover"
        bgPosition="center" // Center the image
        bgRepeat="no-repeat" // Prevent tiling 
        width="100%"
        height="100%"
        objectFit="cover"
        zIndex={-1}
      />

      {/* Roadmap Path */}
      <Image
        src={images.roadmapImage} // Replace with actual roadmap path
        alt="Roadmap"
        position="absolute"
        top="10%"
        left="10%"
        width="80%"
        height="80%"
        objectFit="contain"
        zIndex={1}
      />

      {/* CoinMaster Image */}
      <Image
        src={images.coinMasterCyrus} // Replace with CoinMaster image
        alt="CoinMaster"
        position="absolute"
        bottom="5%"
        right="10%"
        width="20%"
        zIndex={2}
      />

      {/* Checkpoints */}
      {checkpoints.map((checkpoint) => (
        <Box
          key={checkpoint.id}
          position="absolute"
          top={checkpoint.top}
          left={checkpoint.left}
          width="20px"
          height="20px"
          bg="yellow.400"
          borderRadius="full"
          boxShadow="0 0 10px rgba(255, 255, 0, 0.7)"
          cursor="pointer"
          onClick={() => setActiveCheckpoint(checkpoint.id)} // Set active checkpoint
          zIndex={3}
        />
      ))}

      {/* Hologram Boxes */}
      {checkpoints.map((checkpoint) => (
        <Box
          key={`hologram-${checkpoint.id}`}
          position="absolute"
          top={`calc(${checkpoint.top} + 10px)`}
          left={`calc(${checkpoint.left} + 30px)`}
          width="200px"
          height="100px"
          bg="rgba(0, 0, 0, 0.8)"
          border="2px solid yellow"
          borderRadius="md"
          boxShadow="0 0 20px rgba(255, 255, 0, 0.8)"
          display={{ base: "none", lg: "block" }} // Only visible on desktop
          zIndex={4}
        >
          <Box color="white" p={4}>
            Hologram Content {checkpoint.id}
          </Box>
        </Box>
      ))}

      {/* Modal for Tablet and Mobile */}
      <Modal
        isOpen={Boolean(activeCheckpoint)}
        onClose={() => setActiveCheckpoint(null)}
        size="sm"
      >
        <ModalOverlay
          backdropFilter="blur(10px)" // Blur effect for roadmap background
        />
        <ModalContent bg="rgba(0, 0, 0, 0.9)" color="white" p={4}>
          <Box>
            Hologram Content for Checkpoint {activeCheckpoint}
          </Box>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Roadmap;
