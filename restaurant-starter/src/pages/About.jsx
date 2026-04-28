function About() {
  return (
    <div className="page">
      
      <div className="about-header">
        <h1>About Harlows Steakhouse & Smokehouse</h1>
        <p className="subtitle">[The Fancy Barbeque]</p>
      </div>

      
      <div className="about-story">
        <p>
          Harlow's started with a question: why did barbecue and fine dining have to be two separate things? In 2024, the founders opened Harlow's in Kansas City to answer that. Bring the craft of slow smoking into a space where it could be taken seriously.
        </p>
        <p>
          From the start, Harlow's built a reputation around doing things the right way. Sourcing quality, smoking every cut low and slow, never rushing what takes time. Today it is the place in Kansas City where you go when the meal actually matters.
        </p>
        <p>
          The mission has always been simple. Give people a meal worth remembering in a room worth sitting in. The food is the reason for the first visit. The experience is the reason for every visit after that.
        </p>
      </div>

      <div className="about-divider"></div>

      
      <div className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-avatar">👨‍🍳</div>
            <h3>Tyler Johnson Aka "Chef Big Sauce"</h3>
            <p className="role">The Head Chef</p>
            <p>Big Sauce is the mastermind behind our incredible menu, bringing years of experience and passion to every dish.</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">👩‍💼</div>
            <h3>Darlene Smith</h3>
            <p className="role">General Manager</p>
            <p>Darlene is the heart of our operation, ensuring every guest has an exceptional experience from the moment they walk in.</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">👨‍🍳</div>
            <h3>Chris Chambers</h3>
            <p className="role">Sous Chef</p>
            <p>Chris brings a wealth of knowledge and creativity to our kitchen, always striving to perfect each dish.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
