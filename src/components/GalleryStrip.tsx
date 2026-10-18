import { products } from '../content';
import ResponsivePicture from './ResponsivePicture';

// A spread across products; the full set lives on the Gallery page.
const picks = [
  'curtains-6', 'shutters-3', 'roller-blinds-1', 'roman-blinds-5',
  'venetian-blinds-1', 'awnings-1', 'shutters-6', 'curtains-1',
];
const thumbs = picks.map((pick) => {
  const product = products.find((p) => p.photos.some((photo) => photo.image === `products/${pick}`))!;
  return { product, photo: product.photos.find((photo) => photo.image === `products/${pick}`)! };
});

export default function GalleryStrip() {
  return (
    <section className="gallery-strip" id="gallery" style={{ paddingTop: 96, paddingBottom: 96 }}>
      <div className="gallery-strip-header">
        <div>
          <div className="section-label">Recent work</div>
          <h2 className="section-heading">Installation<br />Gallery</h2>
        </div>
        <a href="#/gallery" className="gallery-strip-link">View full gallery →</a>
      </div>
      <div className="gallery-row">
        {thumbs.map(({ product, photo }) => (
          <a className="gallery-thumb" key={photo.image} href={`#/gallery/${product.slug}`}>
            <ResponsivePicture
              name={photo.image}
              widths={[600, 1200]}
              sizes="280px"
              width={photo.width}
              height={photo.height}
              alt={photo.alt}
            />
          </a>
        ))}
      </div>
    </section>
  );
}
