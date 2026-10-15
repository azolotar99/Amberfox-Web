import type { ReactNode } from 'react';
import { CheckIcon, DocumentIcon, GridIcon, PhoneIcon } from './Icons';

const steps: { icon: ReactNode; title: string; desc: string }[] = [
  { icon: <PhoneIcon />, title: 'Get in touch', desc: "Call us or send an enquiry. We'll have a quick chat about what you're looking for and arrange a time." },
  { icon: <GridIcon />, title: 'Free measure', desc: 'We visit your home or office, take precise measurements and talk through your options — all at no cost.' },
  { icon: <DocumentIcon />, title: 'Your quote', desc: 'We provide a clear, itemised quote with no hidden costs. You choose what works for your budget.' },
  { icon: <CheckIcon />, title: 'Installation', desc: 'Our experienced team installs everything professionally, on time, leaving your home clean and tidy.' },
];

export default function Process() {
  return (
    <section className="process">
      <div className="process-header">
        <div className="section-label" style={{ textAlign: 'center', display: 'block' }}>How it works</div>
        <h2 className="section-heading" style={{ textAlign: 'center' }}>Simple,<br />honest process</h2>
        <p>From the first call to final installation — we keep things straightforward.</p>
      </div>

      <div className="process-steps">
        {steps.map((step, i) => (
          <div className="process-step" key={step.title}>
            <div className="process-step-num">{String(i + 1).padStart(2, '0')}</div>
            <div className="process-step-icon">{step.icon}</div>
            <div className="process-step-title">{step.title}</div>
            <div className="process-step-desc">{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
