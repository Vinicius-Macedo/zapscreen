import { useState, useEffect } from "react";

// Make a hook that returns the window dimensions
export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: undefined as number | undefined,
    height: undefined as number | undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
