'use client';

import { useEffect, useState } from 'react';
import { NormalButton } from '../../componentsBarrel';
import {
  Text,
  Box,
} from '@chakra-ui/react';

export default function DisclaimerModal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has accepted the disclaimer
    const hasAgreed = localStorage.getItem('disclaimerAccepted');
    if (!hasAgreed) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    // Save the user's agreement in localStorage and hide the disclaimer
    localStorage.setItem('disclaimerAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null; // Do not render if the disclaimer is not visible

  return (
    <Box
      position="fixed"
      bottom="0"
      bg="rgba(208, 157, 82, 0.9)"
      color="white"
      textAlign="center"
      py={3}
      px={4}
      zIndex="1000"
      width="100%"
    >
      <Text fontSize="sm" mb={2}>
        CyroCoin is not a financial asset and carries no intrinsic value or
        expectation of financial return. This token exists solely to support the
        CoinMaster narrative and is intended for entertainment purposes only.
        CyroCoin does not represent ownership, equity, or a claim to any assets.
        Use of this token is entirely voluntary and should not be considered an
        investment.
      </Text>
      <NormalButton onClick={handleAccept}>OK</NormalButton>
    </Box>
  );
}
