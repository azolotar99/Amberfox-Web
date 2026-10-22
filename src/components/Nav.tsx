import { asset, srcSet } from '../assets';
import { navLinks } from '../content';

export default function Nav() {
  return (
    <nav>
      <a className="nav-logo" href="#">
        <img
          src={asset('images/amberfox-logo-112.webp')}
          srcSet={srcSet([
            ['images/amberfox-logo-112.webp', '1x'],
            ['images/amberfox-logo-224.webp', '2x'],
          ])}
          width={56}
          height={56}
          alt="Amberfox Blinds & Shutters"
        />
        <span className="nav-wordmark">
          Amberfox<small>Blinds &amp; Shutters</small>
        </span>
      </a>
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
        <li>
          <a href="#/contact" className="nav-cta">Free Quote</a>
        </li>
      </ul>
    </nav>
  );
}
