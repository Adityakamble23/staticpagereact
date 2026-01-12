import githubIcon from "./assets/github.png";
import facebookIcon from "./assets/facebook.png";
import instagramIcon from "./assets/instagram.png";
import twitterIcon from "./assets/twitter.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <img src={githubIcon} alt="GitHub" />
        <img src={facebookIcon} alt="Facebook" />
        <img src={instagramIcon} alt="Instagram" />
        <img src={twitterIcon} alt="Twitter" />
      </div>
    </footer>
  );
}
