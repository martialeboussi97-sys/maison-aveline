function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">

        <div className="footer-brand">
          <h2>MAISON AVELINE</h2>
          <span>HÔTEL & ART DE VIVRE</span>
          <p>Le luxe du temps retrouvé.</p>
        </div>

        <div className="footer-column">
          <h3>EXPLORER</h3>
          <a href="#experience">Notre histoire</a>
          <a href="#suites">Nos suites</a>
          <a href="#experiences">Expériences</a>
          <a href="#galerie">Galerie</a>
        </div>

        <div className="footer-column">
          <h3>INFORMATIONS</h3>
          <a href="#reservation">Réservations</a>
          <a href="mailto:contact@maisonaveline.com">Nous contacter</a>
          <a href="#reservation">Conditions de séjour</a>
        </div>

        <div className="footer-column">
          <h3>NOUS SUIVRE</h3>
          <a href="#">Instagram ↗</a>
          <a href="#">Pinterest ↗</a>
          <a href="#">Facebook ↗</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 MAISON AVELINE. TOUS DROITS RÉSERVÉS.</p>
        <p>IMAGINÉ PAR M.26 DIGITAL</p>
      </div>
    </footer>
  );
}

export default Footer;