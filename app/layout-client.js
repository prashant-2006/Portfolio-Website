'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import PreLoader from './components/Loader';

export default function LayoutClient({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scrolling while loading
    document.body.style.overflow = 'hidden';
    document.body.style.cursor = 'wait';

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'unset';
      document.body.style.cursor = 'default';
      window.scrollTo(0, 0);
    }, 4000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
      document.body.style.cursor = 'default';
    };
  }, []);

  return (
    <>
      {/* Render children immediately so the browser can download images 
        in the background while the preloader is showing. 
      */}
      {children}
      
      <AnimatePresence mode="wait">
        {isLoading && <PreLoader key="preloader" />}
      </AnimatePresence>
    </>
  );
}