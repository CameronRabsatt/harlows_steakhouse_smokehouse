import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <section className="hero">
        <h1>Harlows Steakhouse and Smokehouse</h1>
        <p className="tagline">Crafted Slow. Served Bold. Delivered in Gold.</p>
        <Link to="/menu" className="cta-button">
          The Menu
        </Link>
      </section>


      <section className="welcome-section">
        <div className="welcome-text">
          <h2>Welcome</h2>
          <p>
            Harlow's was built on a simple belief: great barbecue and a great dining experience are not mutually exclusive. For a long time, the two existed in different worlds. Roadside pits on one side, white tablecloths on the other. I personally did not think that was the way it had to be, and Harlow's was the answer to that. The idea started with the food. We wanted cuts that were taken seriously, sourced from farms that do things the right way, and smoked the way they were meant to be smoked. No shortcuts, no timers cutting it short. Along with the food, we wanted the atmosphere to match. Dark wood, warm lighting, leather booths. It feels like a classic American steakhouse, but sharper. Because of this, Harlow's has become a restaurant people return to. Not just for the food, but for the full experience.
          </p>
          <p style={{ marginTop: "1rem" }}>
            We source every cut from farms that do things the right way, and every piece of meat that comes out of our kitchen has had time. That is not something we are willing to compromise on. Along with the quality of the ingredients, we take the atmosphere just as seriously. Dark wood, warm lighting, leather booths. It is the kind of place that feels familiar but still feels special. That combination is what makes Harlow's different from anything else in Kansas City.
          </p>
        </div>
        <div className="welcome-image">
          <img src="/Harlows.png" alt="Harlows Steakhouse" />
        </div>
      </section>

      
      <section>
        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">🍽️</div>
            <h3>Prime Cuts, Done Right</h3>
            <p>Every piece of meat we serve is sourced from farms that actually care about quality. We do not cut corners on what goes in, because it shows up on the plate every single time</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⭐</div>
            <h3>Low and Slow, Always</h3>
            <p>Nothing at Harlow's is rushed. Every brisket, every rack, every cut goes through the same process it always has. Time is the ingredient most places skip. We do not.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">❤️</div>
            <h3>The Full Experience</h3>
            <p>From the moment you walk in, you're immersed in an atmosphere that combines the warmth of a classic steakhouse with the boldness of our smokehouse.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
