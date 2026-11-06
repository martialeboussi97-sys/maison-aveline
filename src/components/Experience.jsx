function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-image">
        <img
          src="/images/experience-architecture.png"
          alt="Architecture méditerranéenne de Maison Aveline"
        />
      </div>

      <div className="experience-content">
        <span className="experience-label">
          L'ART DE RECEVOIR
        </span>

        <h2>
          Bien plus qu’un séjour,
          <br />
          une expérience.
        </h2>

        <div className="experience-line"></div>

        <p>
          À Maison Aveline, chaque instant devient une invitation
          à ralentir. Entre architecture méditerranéenne, douceur
          de vivre et horizons marins, découvrez un lieu pensé
          pour vous offrir une parenthèse rare.
        </p>

        <a href="#suites" className="experience-link">
          DÉCOUVRIR NOTRE UNIVERS
          <span>↗</span>
        </a>
      </div>
    </section>
  );
}

export default Experience;