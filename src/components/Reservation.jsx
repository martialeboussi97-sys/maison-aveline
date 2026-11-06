function Reservation() {
  return (
    <section className="reservation" id="reservation">
      <div className="reservation-content">
        <span className="reservation-label">
          VOTRE PROCHAIN SÉJOUR COMMENCE ICI
        </span>

        <h2>
          Le luxe du temps <em>retrouvé.</em>
        </h2>

        <p>
          Offrez-vous une parenthèse méditerranéenne.
          Notre équipe se tient à votre disposition
          pour imaginer votre prochain séjour.
        </p>

        <form className="reservation-form">
          <div className="reservation-field">
            <label htmlFor="arrival">ARRIVÉE</label>
            <input id="arrival" type="date" required />
          </div>

          <div className="reservation-field">
            <label htmlFor="departure">DÉPART</label>
            <input id="departure" type="date" required />
          </div>

          <div className="reservation-field">
            <label htmlFor="guests">VOYAGEURS</label>
            <select id="guests" defaultValue="2">
              <option value="1">1 voyageur</option>
              <option value="2">2 voyageurs</option>
              <option value="3">3 voyageurs</option>
              <option value="4">4 voyageurs</option>
              <option value="5">5 voyageurs</option>
              <option value="6">6 voyageurs</option>
            </select>
          </div>

          <button type="submit">
            Demander une réservation ↗
          </button>
        </form>
      </div>
    </section>
  );
}

export default Reservation;