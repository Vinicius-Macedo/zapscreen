import { useEffect, useState } from "react";

function useScrollDirection() {
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

  return isScrollingUp;
}

export default useScrollDirection;
