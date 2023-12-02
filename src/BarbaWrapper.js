// BarbaWrapper.js
import React, { useEffect } from 'react';
import Barba from 'barba.js';
import { Box } from '@chakra-ui/react';

const BarbaContainer = ({ children }) => {
  return <Box as={'div'} data-barba="container">{children}</Box>;
};

const BarbaWrapper = ({ children }) => {
  useEffect(() => {
    Barba.Pjax.start();
  }, []);

  return <BarbaContainer>{children}</BarbaContainer>;
};

export default BarbaWrapper;
