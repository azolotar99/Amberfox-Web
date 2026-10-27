import { suppliersPage as page } from '../content';
import ResponsivePicture from '../components/ResponsivePicture';
import SupplierMark from '../components/SupplierMark';

const { featured } = page;

export default function SuppliersPage() {
  return (
    <main className="suppliers-page">
      <header className="suppliers-page-hero">
        <div className="section-label">Quality you can trust</div>
        <h1 className="section-heading">{page.heading}</h1>
        <p>{page.intro}</p>
      </header>

      <section className="supplier-featured" id={featured.slug}>
        <div className="supplier-featured-image">
          <ResponsivePicture
            name={`suppliers/${featured.image}`}
            widths={[600, 1200]}
            sizes="(max-width: 900px) 100vw, 50vw"
            width={1200}
            height={800}
            alt={featured.imageAlt}
            priority
          />
        </div>
        <div className="supplier-featured-text">
          <SupplierMark slug={featured.slug} />
          <h2 className="section-heading">{featured.heading}</h2>
          {featured.text.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <a href={featured.link.href} className="btn-primary" target="_blank" rel="noreferrer">Visit {featured.link.label}</a>
        </div>
      </section>

      <section className="suppliers-list">
        <div className="section-label">Other suppliers</div>
        <h2 className="section-heading">Fabrics we work with</h2>
        <div className="suppliers-grid">
          {page.others.map((supplier) => (
            <article className="supplier-card" id={supplier.slug} key={supplier.slug}>
              <div className="supplier-card-image">
                <ResponsivePicture
                  name={`suppliers/${supplier.image}`}
                  widths={[600, 1200]}
                  sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  width={1200}
                  height={800}
                  alt={supplier.imageAlt}
                />
              </div>
              <div className="supplier-card-body">
                <h3>{supplier.name}</h3>
                <p>{supplier.description}</p>
                <a href={supplier.link.href} target="_blank" rel="noreferrer">Visit {supplier.link.label} ↗</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
