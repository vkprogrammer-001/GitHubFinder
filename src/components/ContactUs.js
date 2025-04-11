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
              color: "var(--text-tertiary)"
            }}
          >
            Stay connected with us
          </h1>
          <p
            style={{
              fontFamily: "Inria Serif",
              fontSize: "20px",
              fontWeight: "normal",
              color: "var(--text-tertiary)"
            }}
          >
            Feel free to contact us anytime!
          </p>
        </div>
        <div className="contact-us-form">
          <form action="#">
            <div className="form-group">
              <label htmlFor="full name" style={{color: "var(--text-tertiary)"}}>Full Name</label>
              <input
                type="text"
                id="full name"
                placeholder="Your full name..."
                style={{color: "var(--text-tertiary)"}}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" style={{color: "var(--text-tertiary)"}}>Email</label>
              <input type="email" id="email" placeholder="Your email..." style={{color: "var(--text-tertiary)"}} />
            </div>
            <div className="form-group">
              <label htmlFor="message" style={{color: "var(--text-tertiary)"}}>Message</label>
              <textarea
                id="message"
                cols="30"
                rows="5"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button type="submit" className="contact-submit" style={{backgroundColor: "var(--accent-color)", color: "var(--text-tertiary)"}}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
