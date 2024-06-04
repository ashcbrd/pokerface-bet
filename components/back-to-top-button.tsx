"use client";

import { useState, useEffect } from "react";
import Button from "./button";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          variant="primary"
          onClick={scrollToTop}
          className="fixed z-[999] bottom-10 right-10 h-10 bg-primary-200 !p-0 w-10 flex items-center justify-center"
        >
          <img src="right-arrow.png" className="w-4 z-10 relative -rotate-90" />
        </Button>
      )}
    </>
  );
};

export default BackToTopButton;
