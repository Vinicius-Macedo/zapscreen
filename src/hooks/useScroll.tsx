// make a hook for the scroll position and direction

import { useState, useEffect } from "react";

function useScroll() {
  const [lastScroll, setLastScroll] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll) {
        setIsScrollingUp(false);
      } else {
        setIsScrollingUp(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return [isScrollingUp, lastScroll];
}

export default useScroll;
