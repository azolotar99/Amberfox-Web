import { testimonials } from '../content';

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <div className="section-label" style={{ display: 'block', textAlign: 'center' }}>What clients say</div>
        <h2 className="section-heading" style={{ textAlign: 'center' }}>Trusted by<br />Sydney Homes</h2>
        <p>We've worked with local homes and businesses both large and small — from Eastern Suburbs residences to commercial fit-outs.</p>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <div className="testimonial-card" key={t.name}>
            <div className="testimonial-quote">"</div>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-author">
              <div className="testimonial-initials">{t.initials}</div>
              <div>
                <div className="testimonial-name">{t.name}</div>
                <div className="testimonial-location">{t.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
