'use client';

import React from 'react';

import { GlobalStyledProviderWrapper } from './GlobalStyleProvider.styled';

interface GlobalStyleProviderProps {
  children: React.ReactNode;
}

const GlobalStyleProvider = ({ children }: GlobalStyleProviderProps) => {
  return <GlobalStyledProviderWrapper>{children}</GlobalStyledProviderWrapper>;
};

export default GlobalStyleProvider;
