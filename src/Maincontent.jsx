function Maincontent() {
  return (
    <div className="main">
      <p>laurasmith.website</p>
      <div class="contact-buttons">
        <a href="mailto:your@email.com" class="btn email-btn">
          <span class="icon  ">✉️</span> Email
        </a>
        <span className="sizebox"></span>

        <a
          href="https://www.linkedin.com/in/yourprofile"
          class="btn linkedin-btn"
          target="_blank"
        >
          <span class="icon">in</span> LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Maincontent;
