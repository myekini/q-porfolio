"use client";

import { useEffect } from "react";

export function FontPreloader() {
  useEffect(() => {
    // Create and preload the font stylesheet
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = 'https://api.fontshare.com/v2/css?f[]=satoshi@700,500,300,400&display=swap';
    link.as = 'style';
    
    // Convert to stylesheet when loaded
    link.onload = () => {
      link.onload = null;
      link.rel = 'stylesheet';
    };
    
    // Add to head
    document.head.appendChild(link);
    
    // Cleanup function
    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  return null; // This component doesn't render anything
}
