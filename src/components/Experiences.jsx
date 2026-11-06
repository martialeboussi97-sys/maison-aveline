function Experiences() {
  const experiences = [
    {
      number: "01",
      title: "Gastronomie",
      description:
        "Une cuisine méditerranéenne inspirée des saveurs locales et sublimée par notre chef.",
      image:
         "/images/experience-gastronomie.png",
      category: "L'ART DE RECEVOIR",
    },
    {
      number: "02",
      title: "Bien-être",
      description:
        "Un espace de sérénité dédié à la relaxation, aux soins et au ressourcement.",
      image:
        "/images/experience-bien-etre.png",
      category: "L'ART DE SE RETROUVER",
    },
    {
      number: "03",
      title: "Évasion en mer",
      description:
        "Explorez les eaux méditerranéennes lors d'une escapade privée inoubliable.",
      image:
         "/images/experience-mer.png",
      category: "L'ART DE S'ÉVADER",
    },
    {
      number: "04",
      title: "Art de vivre",
      description:
        "Découvrez les traditions, les paysages et les trésors de notre destination.",
      image:
      "/images/experience-art-de-vivre.png",
      category: "L'ART DE VIVRE",
    },
  ];

  return (
    <section className="experiences" id="experiences">
      <div className="experiences-header">
        <span>AU-DELÀ DU SÉJOUR</span>

        <h2>
          Vivez la Méditerranée,
          <br />
          <em>autrement.</em>
        </h2>

        <p>
          Des expériences imaginées pour éveiller les sens
          et créer des souvenirs précieux.
        </p>
      </div>

      <div className="experiences-grid">
        {experiences.map((experience) => (
          <article
            className="experience-card"
            key={experience.number}
          >
            <div className="experience-card-image">
              <img
                src={experience.image}
                alt={experience.title}
              />
              <span>{experience.number}</span>
            </div>

            <div className="experience-card-content">
              <span>{experience.category}</span>
              <h3>{experience.title}</h3>
              <p>{experience.description}</p>
              <a href="#reservation">Explorer l'expérience ↗</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experiences;