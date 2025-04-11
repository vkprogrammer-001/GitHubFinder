import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import "../styles/component-styles.css";
import "../styles/theme.css";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);
  
  return (
    <footer>
      <div className={`footer-container ${darkMode ? "dark-mode" : ""}`}>
        <ul className= "footer-list">
          <li>
            <a href="https://github.com/vkprogrammer-001/GitHubFinder" target="_blank" rel="noopener noreferrer">
              <img
                src="assets/github.svg"
                alt="Github"
                width={26}
                height={26}
              />
            </a>
          </li>
          <li>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img src="assets/X.svg" alt="X" width={26} height={26} />
            </a>
          </li>
          <li>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img
                src="assets/instagram.svg"
                alt="Instagram"
                width={26}
                height={26}
              />
            </a>
          </li>
        </ul>
        <p style={{ color: "var(--text-secondary)" }}>&copy;2024 GitHub Finder. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
