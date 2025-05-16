import { useState, useEffect } from "react";

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on initial load
    checkIsMobile();
    
    // Set up event listener for window resize
    window.addEventListener("resize", checkIsMobile);
    
    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);
  
  return isMobile;
}
