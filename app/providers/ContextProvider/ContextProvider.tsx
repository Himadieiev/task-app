'use client';

import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

import { GlobalProvider } from '@/app/context/globalProvider';

interface ContextProviderProps {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: ContextProviderProps) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 200);
  }, []);

  if (!isReady) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <GlobalProvider>
      <Toaster />
      {children}
    </GlobalProvider>
  );
};

export default ContextProvider;
