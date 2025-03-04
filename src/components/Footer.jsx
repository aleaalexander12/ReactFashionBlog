import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <nav aria-label="Footer Navigation" role="navigation">
        <ul className="nav">
          <li>
            <a href="#" className="footerNavLink">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="footerNavLink">
              Women's
            </a>
          </li>
          <li>
            <a href="#" className="footerNavLink">
              Men's
            </a>
          </li>
          <li>
            <a href="#" className="footerNavLink">
              On the Street
            </a>
          </li>
          <li>
            <a href="#" className="footerNavLink">
              The Catwalk
            </a>
          </li>
          <li>
            <a href="#" className="footerNavLink">
              AdWatch
            </a>
          </li>
          <li>
            <a href="#" className="footerNavLink">
              About
            </a>
          </li>
          <li>
            <a href="#" className="footerNavLink">
              Tips
            </a>
          </li>
        </ul>
      </nav>
      <p>&copy; 2013 Valet Industries, Inc</p>
    </footer>
  );
}