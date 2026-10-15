import { contact } from '../content';
import { ClockIcon, MailIcon, MobileIcon, PhoneIcon } from './Icons';

export default function CtaBand() {
  return (
    <section className="cta-band" id="contact">
      <div className="cta-band-left">
        <div className="section-label">Ready to transform your space?</div>
        <h2 className="section-heading" style={{ color: '#fff', maxWidth: 500 }}>Get your free<br />measure & quote</h2>
        <p style={{ color: 'rgba(255,255,255,0.55)', marginTop: 16, fontSize: 15, maxWidth: 400 }}>
          By appointment — we come to you. Covering Sydney's Eastern Suburbs and surrounds.
        </p>
        <a href={contact.email.href} className="btn-primary" style={{ marginTop: 32, display: 'inline-block' }}>Send us an enquiry</a>
      </div>
      <div className="cta-band-right">
        <a href={contact.office.href} className="contact-info">
          <div className="contact-info-icon"><PhoneIcon /></div>
          {contact.office.label} — Office
        </a>
        <a href={contact.mobile.href} className="contact-info">
          <div className="contact-info-icon"><MobileIcon /></div>
          {contact.mobile.label} — Mobile
        </a>
        <a href={contact.email.href} className="contact-info">
          <div className="contact-info-icon"><MailIcon /></div>
          {contact.email.label}
        </a>
        <div className="contact-info" style={{ cursor: 'default' }}>
          <div className="contact-info-icon"><ClockIcon /></div>
          By appointment only
        </div>
      </div>
    </section>
  );
}
