"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationLottie = ({ animationPath, width = "95%" }) => {
  const [isClient, setIsClient] = useState(false);

  // Ensure this runs only on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevents hydration mismatch

  return (
    <Lottie
      animationData={animationPath}
      loop={true}
      autoplay={true}
      style={{ width }}
    />
  );
};

export default AnimationLottie;
