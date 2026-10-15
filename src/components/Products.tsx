import { products } from '../content';
import ResponsivePicture from './ResponsivePicture';

export default function Products() {
  return (
    <section className="products" id="products">
      <div className="products-header">
        <div>
          <div className="section-label">What we offer</div>
          <h2 className="section-heading">Our<br />Products</h2>
        </div>
        <div className="products-header-right">
          <p>From classic plantation shutters to motorised roller blinds, we supply and install quality window furnishings tailored to your space and budget.</p>
          <a href="#" className="products-link">View all products →</a>
        </div>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.name}>
            <ResponsivePicture
              name={product.image}
              widths={[480, 900]}
              sizes="(max-width: 900px) 50vw, 33vw"
              width={900}
              height={product.height}
              alt={product.alt}
            />
            <div className="product-card-info">
              <div className="product-card-name">{product.name}</div>
              <div className="product-card-arrow">→</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
