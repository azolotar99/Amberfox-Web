import { suppliersPage } from '../content';
import SupplierMark from './SupplierMark';

const suppliers = [suppliersPage.featured, ...suppliersPage.others];

export default function SuppliersBand() {
  return (
    <section className="suppliers-band" id="suppliers">
      <div className="section-label">Our suppliers</div>
      <h2 className="section-heading">Brands we trust</h2>
      <ul className="suppliers-band-marks">
        {suppliers.map((supplier) => (
          <li key={supplier.slug}>
            <a href="#/suppliers" aria-label={supplier.name}><SupplierMark slug={supplier.slug} /></a>
          </li>
        ))}
      </ul>
      <a href="#/suppliers" className="btn-primary">View our suppliers</a>
    </section>
  );
}
