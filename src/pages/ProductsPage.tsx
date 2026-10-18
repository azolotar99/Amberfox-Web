import { useEffect, useRef, useState } from 'react';
import { products, type Product } from '../content';
import ResponsivePicture from '../components/ResponsivePicture';
import Lightbox from '../components/Lightbox';
import { CheckIcon } from '../components/Icons';

const PHOTO_WIDTHS = [600, 1200];

interface Props {
  activeSlug?: string;
}

export default function ProductsPage({ activeSlug }: Props) {
  const [viewing, setViewing] = useState<{ product: Product; index: number } | null>(null);
  const [current, setCurrent] = useState(activeSlug);
  const tabs = useRef<HTMLDivElement>(null);

  useEffect(() => setCurrent(activeSlug), [activeSlug]);

  // Highlight the tab for whichever product is under the sticky bars while scrolling.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setCurrent(visible.target.id);
      },
      { rootMargin: '-140px 0px -60% 0px' },
    );
    products.forEach((product) => {
      const section = document.getElementById(product.slug);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  // Keep the highlighted tab visible on narrow screens, where the bar scrolls sideways.
  useEffect(() => {
    const bar = tabs.current;
    const tab = bar?.querySelector<HTMLElement>('.is-active');
    if (bar && tab) bar.scrollTo({ left: tab.offsetLeft - 24, behavior: 'smooth' });
  }, [current]);

  return (
    <main className="products-page">
      <header className="products-page-hero">
        <div className="section-label">What we offer</div>
        <h1 className="section-heading">Our<br />Products</h1>
        <p>
          Every blind, shutter and curtain we supply is custom made for your windows and professionally installed.
          Explore the range below, then book a free in-home consultation to see samples in your own light.
        </p>
      </header>

      <div className="product-tabs" role="navigation" aria-label="Products" ref={tabs}>
        {products.map((product) => (
          <a
            key={product.slug}
            href={`#/products/${product.slug}`}
            className={product.slug === current ? 'is-active' : undefined}
            aria-current={product.slug === current ? 'location' : undefined}
            onClick={() => {
              // Re-clicking the current tab doesn't change the hash, so scroll by hand.
              if (product.slug === activeSlug) document.getElementById(product.slug)?.scrollIntoView();
            }}
          >
            {product.name}
          </a>
        ))}
      </div>

      {products.map((product, i) => {
        const [lead, ...gallery] = product.photos;
        return (
          <section className="product-detail" id={product.slug} key={product.slug}>
            <div className="product-detail-main">
              <div className="product-detail-text">
                <div className="section-label">{String(i + 1).padStart(2, '0')} / {String(products.length).padStart(2, '0')}</div>
                <h2 className="section-heading">{product.name}</h2>
                <p className="product-detail-tagline">{product.tagline}</p>
                {product.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                <ul className="product-benefits">
                  {product.benefits.map((benefit) => (
                    <li key={benefit}><CheckIcon />{benefit}</li>
                  ))}
                </ul>
                <a href="#contact" className="btn-primary">Book a free measure &amp; quote</a>
              </div>
              <button type="button" className="product-detail-lead" onClick={() => setViewing({ product, index: 0 })}>
                <ResponsivePicture
                  name={lead.image}
                  widths={PHOTO_WIDTHS}
                  sizes="(max-width: 900px) 100vw, 50vw"
                  width={lead.width}
                  height={lead.height}
                  alt={lead.alt}
                />
              </button>
            </div>

            <OptionGroup heading={product.optionsHeading} options={product.options} />
            {product.extra && product.extraHeading && <OptionGroup heading={product.extraHeading} options={product.extra} compact />}

            {gallery.length > 0 && (
              <div className="product-gallery">
                {gallery.map((photo, j) => (
                  <button type="button" key={photo.image} onClick={() => setViewing({ product, index: j + 1 })}>
                    <ResponsivePicture
                      name={photo.image}
                      widths={PHOTO_WIDTHS}
                      sizes="(max-width: 900px) 50vw, 25vw"
                      width={photo.width}
                      height={photo.height}
                      alt={photo.alt}
                    />
                  </button>
                ))}
              </div>
            )}
          </section>
        );
      })}

      {viewing && (
        <Lightbox
          photos={viewing.product.photos}
          index={viewing.index}
          title={viewing.product.name}
          onIndexChange={(index) => setViewing({ ...viewing, index })}
          onClose={() => setViewing(null)}
        />
      )}
    </main>
  );
}

function OptionGroup({ heading, options, compact }: { heading: string; options: Product['options']; compact?: boolean }) {
  return (
    <div className={compact ? 'product-options is-compact' : 'product-options'}>
      <h3>{heading}</h3>
      <div className="product-options-grid">
        {options.map((option) => (
          <div className="product-option" key={option.name}>
            <div className="product-option-name">{option.name}</div>
            <p>{option.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
