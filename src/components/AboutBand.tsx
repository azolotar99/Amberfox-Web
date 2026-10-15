import ResponsivePicture from './ResponsivePicture';

export default function AboutBand() {
  return (
    <section className="about-band" id="about" style={{ padding: 0 }}>
      <div className="about-band-img">
        <ResponsivePicture
          name="serge"
          widths={[720, 958]}
          sizes="(max-width: 900px) 100vw, 50vw"
          width={958}
          height={1642}
          alt="Serge from Amberfox Blinds & Shutters"
        />
      </div>
      <div className="about-band-content">
        <div className="section-label">Meet the team</div>
        <h2 className="section-heading" style={{ color: '#fff' }}>Meet<br />Serge</h2>
        <p className="about-band-lead">The technical mind behind the business</p>
        <p>With an engineering background and a practical, hands-on approach, Serge brings a unique technical perspective to every project. He understands not only how blinds, curtains and shutters should look, but how they need to work — from precise measurements and installation to motorisation and smart-home integration.</p>
        <p style={{ marginTop: 12 }}>His practical knowledge of the installation process means he can anticipate technical challenges before they become problems and recommend solutions that are both beautiful and functional.</p>
        <p className="about-band-quote">Behind every great installation is experience, technical knowledge and attention to detail — and that’s where Serge comes in.</p>
        <a href="#contact" className="btn-primary" style={{ marginTop: 36 }}>Talk to Serge</a>
      </div>
    </section>
  );
}
