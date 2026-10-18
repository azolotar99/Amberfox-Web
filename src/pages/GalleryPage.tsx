import { useMemo, useState } from 'react';
import { products, type ProductPhoto } from '../content';
import ResponsivePicture from '../components/ResponsivePicture';
import Lightbox from '../components/Lightbox';

interface GalleryPhoto extends ProductPhoto {
  productName: string;
}

const byProduct = products.map((product) =>
  product.photos.map((photo): GalleryPhoto => ({ ...photo, productName: product.name })),
);

/** Deals photos out one product at a time so "All" reads as a mix rather than in product blocks. */
const mixed = (() => {
  const queues = byProduct.map((photos) => [...photos]);
  const out: GalleryPhoto[] = [];
  while (queues.some((queue) => queue.length)) {
    for (const queue of queues) {
      const next = queue.shift();
      if (next) out.push(next);
    }
  }
  return out;
})();

interface Props {
  activeSlug?: string;
}

export default function GalleryPage({ activeSlug }: Props) {
  const activeIndex = products.findIndex((product) => product.slug === activeSlug);
  const photos = useMemo(() => (activeIndex >= 0 ? byProduct[activeIndex] : mixed), [activeIndex]);
  const [viewing, setViewing] = useState<number | null>(null);

  return (
    <main className="gallery-page">
      <section>
        <div className="gallery-page-header">
          <div className="section-label">Recent work</div>
          <h1 className="section-heading">Installation<br />Gallery</h1>
          <p>A selection of blinds, shutters, curtains and outdoor screens we've measured, made and fitted in homes across Sydney's Eastern Suburbs.</p>
        </div>

        <div className="gallery-filters" role="group" aria-label="Filter by product">
          <a href="#/gallery" aria-current={activeIndex < 0 ? 'page' : undefined}>
            All <span>{mixed.length}</span>
          </a>
          {products.map((product) => (
            <a
              key={product.slug}
              href={`#/gallery/${product.slug}`}
              aria-current={product.slug === activeSlug ? 'page' : undefined}
            >
              {product.name} <span>{product.photos.length}</span>
            </a>
          ))}
        </div>

        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <button
              type="button"
              className="gallery-tile"
              key={photo.image}
              onClick={() => setViewing(index)}
              aria-label={`View larger: ${photo.alt}`}
            >
              <ResponsivePicture
                name={photo.image}
                widths={[600, 1200]}
                sizes="(max-width: 600px) 50vw, (max-width: 1100px) 33vw, 25vw"
                width={photo.width}
                height={photo.height}
                alt={photo.alt}
              />
              <span className="gallery-tile-label">{photo.productName}</span>
            </button>
          ))}
        </div>
      </section>

      {viewing !== null && (
        <Lightbox
          photos={photos}
          index={viewing}
          title={photos[viewing].productName}
          onIndexChange={setViewing}
          onClose={() => setViewing(null)}
        />
      )}
    </main>
  );
}
