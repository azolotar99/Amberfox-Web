import { automationPage as page, type AutomationOption } from '../content';
import { CheckIcon } from '../components/Icons';

const driveUrl = (id: string, view: 'preview' | 'view') => `https://drive.google.com/file/d/${id}/${view}`;

export default function AutomationPage() {
  return (
    <main className="automation-page">
      <header className="automation-page-hero">
        <div className="section-label">Smart home ready</div>
        <h1 className="section-heading">{page.heading}</h1>
        <p className="automation-page-tagline">{page.tagline}</p>
        <p>{page.intro}</p>
      </header>

      <section className="automation-videos">
        <div className="section-label">See it in action</div>
        <h2 className="section-heading">Motorised blinds</h2>
        <div className="automation-video-grid">
          {page.videos.map((video) => (
            <figure key={video.driveId}>
              <div className="automation-video-frame">
                <iframe src={driveUrl(video.driveId, 'preview')} title={video.title} allow="autoplay; fullscreen" allowFullScreen loading="lazy" />
              </div>
              <figcaption>
                <a href={driveUrl(video.driveId, 'view')} target="_blank" rel="noreferrer">Watch on Google Drive</a>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="automation-block">
        <div className="section-label">01 / Motor types</div>
        <h2 className="section-heading">Choose your power</h2>
        <OptionGrid options={page.motors} />
      </section>

      <section className="automation-somfy" id="somfy">
        <div className="automation-somfy-text">
          <div className="automation-label">02 / Motorisation brands · Somfy dealer</div>
          <h2 className="automation-heading">{page.somfy.name}</h2>
          <p className="automation-somfy-tagline">{page.somfy.tagline}</p>
          {page.somfy.text.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="automation-somfy-aside">
          <p>Amberfox Blinds are dealers of Somfy. Browse the full Somfy range of motors, remotes and smart-home controls on their website.</p>
          <a href={page.somfy.link.href} className="btn-white" target="_blank" rel="noreferrer">Visit {page.somfy.link.label}</a>
        </div>
      </section>

      <section className="automation-block is-tinted">
        <OptionGrid options={page.brands} />
        <p className="automation-note">{page.brandsNote}</p>
      </section>

      <section className="automation-block">
        <div className="section-label">03 / Smart home automation</div>
        <h2 className="section-heading">Connect your home</h2>
        <OptionGrid options={page.smartHome} />
      </section>

      <section className="automation-closing">
        <h2 className="section-heading">{page.closing.heading}</h2>
        <p>{page.closing.text}</p>
      </section>
    </main>
  );
}

function OptionGrid({ options }: { options: AutomationOption[] }) {
  return (
    <div className="automation-options">
      {options.map((option) => (
        <article className="automation-option" key={option.name}>
          <h3>{option.name}</h3>
          {option.tagline && <p className="automation-option-tagline">{option.tagline}</p>}
          {option.text.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {option.points && (
            <ul className="product-benefits">
              {option.points.map((point) => <li key={point}><CheckIcon />{point}</li>)}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
}
