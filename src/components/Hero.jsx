function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-subtitle">
          UN REFUGE MÉDITERRANÉEN
        </p>

        <h1>
          Le luxe du temps
          <br />
          retrouvé.
        </h1>

        <p className="hero-description">
          Une parenthèse rare entre mer, pierre et lumière.
        </p>

        <a href="#reservation" className="hero-button">
          DÉCOUVRIR LA MAISON
        </a>
      </div>

      <div className="hero-bottom">
        <span>36° 27' N — 25° 22' E</span>
        <span>MAISON AVELINE · MÉDITERRANÉE</span>
      </div>
    </section>
  );
}

export default Hero;