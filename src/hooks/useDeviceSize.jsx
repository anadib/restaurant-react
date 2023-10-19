import { useState, useEffect } from "react";

const useDeviceSize = () => {
  const [isSmallDesktop, setIsSmallDesktop] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 1265) {
      setIsSmallDesktop(true);
    } else {
      setIsSmallDesktop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  return isSmallDesktop;
};

export default useDeviceSize;
