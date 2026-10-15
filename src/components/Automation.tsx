import type { ReactNode } from 'react';
import { MobileIcon, ShieldIcon, SunIcon, TrendIcon } from './Icons';

const features: { icon: ReactNode; title: string; desc: string }[] = [
  { icon: <SunIcon />, title: 'Sun sensor control', desc: 'Blinds respond automatically to light levels, protecting furniture and reducing glare' },
  { icon: <MobileIcon />, title: 'Remote & app control', desc: 'Operate via handheld remote or integrate with your smart home system' },
  { icon: <ShieldIcon />, title: 'Child safe — cord free', desc: 'Motorisation removes dangerous cords, meeting Australian safety standards' },
  { icon: <TrendIcon />, title: 'Somfy & Becker systems', desc: 'We install industry-leading motorisation systems with proven reliability' },
];

export default function Automation() {
  return (
    <section className="automation" id="automation" style={{ padding: 0 }}>
      <div className="automation-content">
        <div className="automation-label">Smart home ready</div>
        <h2 className="automation-heading">Motorised<br />& Automated</h2>
        <p>Effortless operation of your blinds, shutters or awnings via remote control, timer or sun sensors. Eliminates chains and cords for a cleaner, safer look.</p>
        <a href="#" className="btn-white">Learn about automation</a>
      </div>
      <div className="automation-features">
        {features.map((feature) => (
          <div className="auto-feature" key={feature.title}>
            <div className="auto-feature-icon">{feature.icon}</div>
            <div className="auto-feature-text">
              <strong>{feature.title}</strong>
              <span>{feature.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
