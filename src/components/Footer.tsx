import { asset } from '../assets';
import { navLinks } from '../content';

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <img src={asset('images/amberfox-logo-224.webp')} width={88} height={88} alt="Amberfox Blinds & Shutters, since 1997" />
      </div>
      <ul className="footer-nav">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
        <li><a href="#">Safety</a></li>
        <li><a href="#/contact">Contact</a></li>
      </ul>
      <div className="footer-copy">© {new Date().getFullYear()} Amberfox Blinds & Shutters. Your local specialists since 1997.</div>
    </footer>
  );
}
