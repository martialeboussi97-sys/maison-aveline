function Suites() {
  const suites = [
    {
      name: "Suite Méditerranée",
      description: "Un refuge élégant avec une vue imprenable sur la Méditerranée.",
      price: "280 €",
      image: "https://images.squarespace-cdn.com/content/v1/65ef4abb4920c9406deec533/3ae66398-721b-439c-bd1c-c708c2f20461/CORSICA_TERRA_DESIGN_HOTEL00039.jpg",
      detail: "45 m² · Vue mer · Lit king-size",
    },
    {
      name: "Suite Aveline",
      description: "Un espace raffiné où le charme méditerranéen rencontre le confort absolu.",
      price: "350 €",
      image: "https://stone-luxury-suites.hotels-in-rhodes-greece.com/data/Pics/OriginalPhoto/15929/1592962/1592962361/stone-luxury-suites-adults-only-archangelos-rhodes-pic-42.JPEG",
      detail: "60 m² · Terrasse privée · Lit king-size",
    },
    {
      name: "Villa Signature",
      description: "Une expérience exclusive dans une villa privée au cœur de la Méditerranée.",
      price: "650 €",
      image: "https://i.plumcache.com/listings/6a0f039f-165f-4dd3-88cf-9a5a694efdd9/b84ca7d3-c5ac-480d-a06d-42060473b9db..jpg?fit=min&w=1280",
      detail: "120 m² · Piscine privée · Vue panoramique",
    },
  ];

  return (
    <section className="suites" id="suites">
      <div className="suites-header">
        <span className="section-label">SÉJOURNER À MAISON AVELINE</span>

        <h2>Des espaces pensés pour <em>vous.</em></h2>

        <p>
          Trois façons de vivre l'élégance méditerranéenne,
          dans un cadre où chaque détail compte.
        </p>
      </div>

      <div className="suites-grid">
        {suites.map((suite, index) => (
          <article className="suite-card" key={index}>
            <div className="suite-image">
              <img src={suite.image} alt={suite.name} />

              <span className="suite-number">
                0{index + 1}
              </span>
            </div>

            <div className="suite-info">
              <h3>{suite.name}</h3>

              <p className="suite-description">
                {suite.description}
              </p>

              <span className="suite-detail">
                {suite.detail}
              </span>

              <div className="suite-bottom">
                <p>
                  À partir de <strong>{suite.price}</strong> / nuit
                </p>

                <a href="#reservation">Découvrir ↗</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Suites;