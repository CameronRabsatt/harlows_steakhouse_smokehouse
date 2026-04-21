import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <section className="hero">
        <h1>[Harlows Steakhouse and Smokehouse]</h1>
        <p className="tagline">[Crafted Slow. Served Gold.]</p>
        <Link to="/menu" className="cta-button">
          View Our Menu
        </Link>
      </section>


      <section className="welcome-section">
        <div className="welcome-text">
          <h2>Welcome</h2>
          <p>
            [Harlow's was built on a simple belief: great barbecue and a great dining experience are not mutually exclusive. For a long time, the two existed in different worlds. Roadside pits on one side, white tablecloths on the other. I personally did not think that was the way it had to be, and Harlow's was the answer to that. The idea started with the food. We wanted cuts that were taken seriously, sourced from farms that do things the right way, and smoked the way they were meant to be smoked. No shortcuts, no timers cutting it short. Along with the food, we wanted the atmosphere to match. Dark wood, warm lighting, leather booths. It feels like a classic American steakhouse, but sharper. Because of this, Harlow's has become a restaurant people return to. Not just for the food, but for the full experience..]
          </p>
          <p style={{ marginTop: "1rem" }}>
            [Write a second paragraph. Maybe talk about your history, your
            ingredients, your philosophy, or what makes the dining experience
            unique.]
          </p>
        </div>
        <div className="welcome-image">
          {/* TODO: Replace with an <img> tag once you add images in Week 4 */}
          📸 Add your restaurant photo here
        </div>
      </section>

      {/* ============================================================
          FEATURE CARDS
          TODO: Change the icons, titles, and descriptions below
          to highlight 3 things that make YOUR restaurant special.
          ============================================================ */}
      <section>
        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">🍽️</div>
            <h3>[Feature 1 Title]</h3>
            <p>[Describe what makes this feature special about your restaurant.]</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⭐</div>
            <h3>[Feature 2 Title]</h3>
            <p>[Describe another highlight of your restaurant.]</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">❤️</div>
            <h3>[Feature 3 Title]</h3>
            <p>[Describe a third thing that sets you apart.]</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
