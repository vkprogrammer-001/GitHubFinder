import "../styles/component-styles.css";

const footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <ul className="footer-list">
          <li>
            <a href="https://github.com/vkprogrammer-001/GitHubFinder" >
              <img
                src="assets/github.svg"
                alt="Github"
                width={26}
                height={26}
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img src="assets/X.svg" alt="X" width={26} height={26} />
            </a>
          </li>
          <li>
            <a href="/">
              <img
                src="assets/instagram.svg"
                alt="Instagram"
                width={26}
                height={26}
              />
            </a>
          </li>
        </ul>
        <p>&copy;2024 GitHub Finder. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default footer;
