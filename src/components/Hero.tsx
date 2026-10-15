import { contact } from '../content';
import ResponsivePicture from './ResponsivePicture';

const stats = [
  { num: '27+', label: 'Years experience' },
  { num: '1000+', label: 'Installations' },
  { num: '6', label: 'Product types' },
];

export default function Hero() {
  return (
    <section className="hero" style={{ padding: 0 }}>
      <div className="hero-left">
        <div className="hero-badge">Sydney's Eastern Suburbs — Since 1997</div>
        <h1 className="hero-headline">
          Blinds<br />
          <span>Shutters</span><br />
          Curtains
        </h1>
        <p className="hero-sub">
          Family owned and operated. We bring quality window furnishing solutions to homes and businesses across Sydney — with a free measure and quote.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">Get a Free Quote</a>
          <a href="#products" className="btn-ghost">
            Our Products <span className="arrow">→</span>
          </a>
        </div>
        <div className="hero-stats">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="hero-stat-num">{stat.num}</div>
              <div className="hero-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-right">
        <ResponsivePicture
          name="hero-curtains"
          widths={[720, 1048]}
          sizes="(max-width: 900px) 100vw, 50vw"
          width={1048}
          height={1397}
          alt="Sheer white linen curtains framing an arched window with garden views"
          priority
        />
        <div className="hero-right-overlay">
          <div className="hero-overlay-label">Free measure & quote</div>
          <div className="hero-overlay-text">Call {contact.office.label} or book online</div>
        </div>
      </div>
    </section>
  );
}
