function Location() {
  return (
    <div className="page">
      <div className="location-header">
        <h1>Find Us</h1>
      </div>

      <div className="location-content">
        {/* ============================================================
            LEFT COLUMN: Restaurant info
            TODO: Replace ALL placeholder text with YOUR restaurant's
            address, phone number, and hours of operation.
            ============================================================ */}
        <div className="location-info">
          <h2>Address</h2>
          <p>1738 main street</p>
          <p>Mooresville, NC </p>
          <p className="phone">402-204-6776</p>

          <h2>Hours of Operation</h2>
          <div>
            <div className="hours-row">
              <span className="day">Monday – Thursday</span>
              <span className="time">1:00 pm - 10:00 pm</span>
            </div>
            <div className="hours-row">
              <span className="day">Friday</span>
              <span className="time">1:00 pm - 11:00 pm</span>
            </div>
            <div className="hours-row">
              <span className="day">Saturday</span>
              <span className="time">11:00 am - 10:00 pm</span>
            </div>
            <div className="hours-row">
              <span className="day">Sunday</span>
              <span className="time">11:00 am - 8:00 pm</span>
            </div>
          </div>

          <h2>Getting Here</h2>
          <p>
            We are right off the highway, with plenty of parking in our lot. If you're using GPS, just enter our address and it should take you right to us. We can't wait to welcome you to Harlow's Steakhouse & Smokehouse!
          </p>
        </div>

        {/* ============================================================
            RIGHT COLUMN: Map
            WEEK 4: Replace the placeholder below with a Google Maps embed.
            Instructions:
            1. Go to Google Maps and search for any address
            2. Click "Share" > "Embed a map"
            3. Copy the src URL from the iframe code
            4. Uncomment the iframe below and paste your URL
            ============================================================ */}
        <div className="map-container">
          <iframe
            title="Harlow's Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1315.1947677813212!2d-80.82797638193867!3d35.15164708264847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88569f58b610e34b%3A0x66d994ce80bc5b5a!2sSteak%2048!5e0!3m2!1sen!2sus!4v1777425707784!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Location;
