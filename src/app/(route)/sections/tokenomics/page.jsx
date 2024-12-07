'use client';

import React from 'react';
import {
  SimpleGrid,
  Box,
  Heading,
  Icon,
  Tooltip,
  useToast,
  Button,
  Text,
} from '@chakra-ui/react';
import { TokenomicsCard } from '../../../components/componentsBarrel';
import images from '../../../assets/images';
import { FiCopy } from 'react-icons/fi';

/**
 * TokenomicsSection Component
 *
 * Displays a grid of TokenomicsCard components representing various aspects of the tokenomics structure.
 * Includes a background video and functionality to copy the token address to the clipboard.
 */

const TokenomicsSection = () => {
  const toast = useToast();

  // Token address to copy
  const tokenAddress = '0xYourTokenAddressHere';

  // Tokenomics data
  const tokenomicsData = [
    {
      title: 'MAX SUPPLY',
      percentage: '1 Billion $CYC',
      imageSrc: images.cyrocoinDistribution,
    },
    {
      title: 'LIQUIDITY POOL',
      percentage: '100%',
      imageSrc: images.liquidityPool,
    },
  ];

  // Fallback function for clipboard copy
  const fallbackCopyTextToClipboard = (text) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed'; // Prevent scrolling
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand('copy');
      toast({
        title: 'Copied to clipboard',
        description: 'Token address has been copied!',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    } catch (err) {
      console.error('Fallback: Unable to copy', err);
    } finally {
      document.body.removeChild(textArea);
    }
  };

  // Clipboard copy handler
  const handleCopyAddress = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(tokenAddress)
        .then(() => {
          toast({
            title: 'Copied to clipboard',
            description: 'Token address has been copied!',
            status: 'success',
            duration: 2000,
            isClosable: true,
          });
        })
        .catch((error) => {
          console.error('Failed to copy with Clipboard API:', error);
          fallbackCopyTextToClipboard(tokenAddress);
        });
    } else {
      fallbackCopyTextToClipboard(tokenAddress);
    }
  };

  return (
    <Box
      position="relative"
      p={8}
      overflow="hidden"
      color="white"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      {/* Background Video */}
      <video
        src="/assets/videos/cyronmics_bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: -1,
        }}
      />

      {/* Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.2)"
        zIndex={0}
      />

      {/* Section Content */}
      <Heading
        as="h2"
        size="lg"
        textAlign="center"
        mb={6}
        zIndex={4}
        color="white"
      >
        Tokenomics Overview
      </Heading>

      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 2 }}
          spacing={6}
          justifyContent="center"
          alignItems="center"
        >
          {tokenomicsData.map((data, index) => (
            <TokenomicsCard
              key={index}
              title={data.title}
              percentage={data.percentage}
              imageSrc={data.imageSrc}
              placeholder="blur"
            />
          ))}
        </SimpleGrid>
      </Box>

      {/* Token Address Copy Button */}
      <Box mt={6} zIndex={1}>
        <Tooltip label="Click to copy" aria-label="A tooltip">
          <Button
            variant="ghost"
            as="span"
            display="flex"
            alignItems="center"
            cursor="pointer"
            onClick={handleCopyAddress}
            p={0}
            background="transparent"
            color="yellow.400"
            _hover={{ backgroundColor: 'transparent', color: 'yellow.300' }}
          >
            <Text fontSize="24px" fontWeight="bold">{`[ Token Address ]`}</Text>
            <Icon as={FiCopy} ml={2} color="white" />
          </Button>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default TokenomicsSection;
