import { useEffect, useState, type FormEvent } from 'react';
import { contact, contactPage } from '../content';
import ResponsivePicture from '../components/ResponsivePicture';
import { MailIcon, MobileIcon, PhoneIcon, PinIcon } from '../components/Icons';
import { loadRecaptcha, recaptchaToken } from '../recaptcha';

const { formEndpoint: endpoint, recaptchaSiteKey: siteKey } = contactPage;

type Status = 'idle' | 'sending' | 'sent' | 'failed';

const fields = ['name', 'email', 'phone', 'suburb', 'message'] as const;
type Fields = Record<(typeof fields)[number], string>;
const blank: Fields = { name: '', email: '', phone: '', suburb: '', message: '' };

const contactLinks = [
  { ...contact.mobile, kind: 'Mobile', Icon: MobileIcon },
  { ...contact.office, kind: 'Office', Icon: PhoneIcon },
  { ...contact.email, kind: 'Email', Icon: MailIcon },
];

export default function ContactPage() {
  const [values, setValues] = useState<Fields>(blank);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  // Load early so reCAPTCHA can observe the visit before the form is sent.
  useEffect(() => { loadRecaptcha(siteKey).catch(() => {}); }, []);

  const update = (field: keyof Fields) => (event: { target: { value: string } }) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
    setError('');
  };

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (!values.email.trim() && !values.phone.trim()) {
      setError('Please give us an email address or a phone number so we can get back to you.');
      return;
    }
    setStatus('sending');
    try {
      const token = await recaptchaToken(siteKey, 'contact');
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...values,
          _subject: `Website enquiry from ${values.name}`,
          'g-recaptcha-response': token,
        }),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setStatus('sent');
      setValues(blank);
    } catch {
      setStatus('failed');
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-page-hero">
        <div className="section-label">Get in touch</div>
        <h1 className="section-heading">Contact us</h1>
        {contactPage.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </section>

      <section className="contact-page-body">
        <div className="contact-details">
          <ul className="contact-cards">
            {contactLinks.map(({ kind, label, href, Icon }) => (
              <li key={kind}>
                <a href={href} className="contact-card">
                  <span className="contact-card-icon"><Icon /></span>
                  <span>
                    <span className="contact-card-kind">{kind}</span>
                    <span className="contact-card-value">{label}</span>
                  </span>
                </a>
              </li>
            ))}
            <li>
              <div className="contact-card">
                <span className="contact-card-icon"><PinIcon /></span>
                <span>
                  <span className="contact-card-kind">Showroom</span>
                  <span className="contact-card-value">{contact.showroom.suburb}</span>
                  <span className="contact-card-note">{contact.showroom.note}</span>
                </span>
              </div>
            </li>
          </ul>

          <figure className="contact-shopfront">
            <ResponsivePicture
              name="shopfront"
              widths={[720, 1440]}
              sizes="(max-width: 900px) 100vw, 50vw"
              width={1440}
              height={1080}
              alt="The Amberfox Blinds shop front in Bellevue Hill, with curtains, blinds and shutters on display"
            />
            <figcaption>Our Bellevue Hill showroom. Visits by appointment only, so give us a call first.</figcaption>
          </figure>
        </div>

        <div className="contact-form-wrap">
          <h2 className="contact-form-heading">{contactPage.formHeading}</h2>
          <p className="contact-form-intro">{contactPage.formIntro}</p>

          {status === 'sent' ? (
            <div className="contact-form-sent" role="status">
              <strong>Thanks, your message is on its way.</strong>
              <p>We'll be in touch shortly.</p>
              <button type="button" className="btn-outline" onClick={() => setStatus('idle')}>Send another message</button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={submit}>
              <label>
                <span>Name <em>*</em></span>
                <input type="text" name="name" autoComplete="name" required value={values.name} onChange={update('name')} />
              </label>
              <div className="contact-form-row">
                <label>
                  <span>Email</span>
                  <input type="email" name="email" autoComplete="email" value={values.email} onChange={update('email')} />
                </label>
                <label>
                  <span>Phone</span>
                  <input type="tel" name="phone" autoComplete="tel" value={values.phone} onChange={update('phone')} />
                </label>
              </div>
              <p className="contact-form-hint">Email or phone, whichever suits you best. We need at least one to reply.</p>
              <label>
                <span>Location (suburb)</span>
                <input type="text" name="suburb" autoComplete="address-level2" value={values.suburb} onChange={update('suburb')} />
              </label>
              <label>
                <span>Message <em>*</em></span>
                <textarea name="message" rows={6} required value={values.message} onChange={update('message')} />
              </label>

              {error && <p className="contact-form-error" role="alert">{error}</p>}
              {status === 'failed' && (
                <p className="contact-form-error" role="alert">
                  Sorry, your message couldn't be sent. Please email us at <a href={contact.email.href}>{contact.email.label}</a> or call <a href={contact.mobile.href}>{contact.mobile.label}</a>.
                </p>
              )}

              <button type="submit" className="btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>

              <p className="recaptcha-notice">
                This form is protected by reCAPTCHA and the Google{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a> and{' '}
                <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer">Terms of Service</a> apply.
              </p>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
