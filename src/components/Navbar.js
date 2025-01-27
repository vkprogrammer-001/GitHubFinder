import '../styles/component-styles.css'

const navBar = () => {
  return (
    <header>
      <nav className="navbar">
      <img src="/logo192.png" alt="Github Finder" width={66} height={63}/>
        <ul className="nav-list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about-us">About</a>
          </li>
          <li>
            <a href="/features">Features</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default navBar;
