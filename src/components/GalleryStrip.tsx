// Placeholder tiles until gallery photography is supplied.
const thumbs = Array.from({ length: 6 }, (_, i) => `Gallery ${i + 1}`);

export default function GalleryStrip() {
  return (
    <section className="gallery-strip" id="gallery" style={{ paddingTop: 96, paddingBottom: 96 }}>
      <div className="gallery-strip-header">
        <div>
          <div className="section-label">Recent work</div>
          <h2 className="section-heading">Installation<br />Gallery</h2>
        </div>
        <a href="#" className="gallery-strip-link">View full gallery →</a>
      </div>
      <div className="gallery-row">
        {thumbs.map((label) => (
          <div className="gallery-thumb" key={label}>
            <div className="img-placeholder">
              <div className="img-placeholder-label">{label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
