import React, { useState, useEffect } from "react";

const BackToTop = () => {
  // State to manage the visibility of the button
  const [visible, setVisible] = useState(false);

  // Handle the visibility based on scroll position
  const handleScroll = () => {
    if (window.scrollY >200) { // Show the button when scrolled down 200px
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll to top
    });
  };

  // Add event listener to monitor scroll position
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    visible && (
      <div className="back-to-top" onClick={scrollToTop}>
        <span>&#8593;</span> {/* Up arrow */}
      </div>
    )
  );
};

export default BackToTop;
