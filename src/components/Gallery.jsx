function Gallery() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      alt: "Architecture méditerranéenne",
      className: "gallery-large",
    },
    {
      src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
      alt: "Intérieur élégant",
    },
    {
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
      alt: "Piscine de l'hôtel",
    },
    {
      src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
      alt: "Suite raffinée",
    },
    {
      src: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
      alt: "Paysage méditerranéen",
    },
  ];

  return (
    <section className="gallery" id="galerie">
      <div className="gallery-header">
        <span>UN APERÇU DE NOTRE UNIVERS</span>
        <h2>
          L'élégance dans <em>chaque détail.</em>
        </h2>
        <p>
          Découvrez les lieux et les instants qui font
          l'expérience Maison Aveline.
        </p>
      </div>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            className={`gallery-item ${image.className || ""}`}
            key={index}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;