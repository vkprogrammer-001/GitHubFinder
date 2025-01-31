let ContactUs = () => {
  return (
    <div id="contact-us">
      <div className="contact-us-container">
        <div className="contact-us-content">
          <h1
            style={{
              fontFamily: "Inknut Antiqua",
              fontSize: "42px",
              fontWeight: "500",
            }}
          >
            Stay connected with us
          </h1>
          <p
            style={{
              fontFamily: "Inria Serif",
              fontSize: "20px",
              fontWeight: "normal",
            }}
          >
            Feel free to contact us anytime!
          </p>
        </div>
        <div className="contact-us-form">
          <form action="#">
            <div className="form-group">
              <label htmlFor="full name">Full Name</label>
              <input
                type="text"
                id="full name"
                placeholder="Your full name..."
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your email..." />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                cols="30"
                rows="5"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button type="submit" className="contact-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
