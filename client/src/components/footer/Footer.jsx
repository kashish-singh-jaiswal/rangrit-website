import "../../styles/footer.css";
import hut from "../../assets/images/Hut_edited.avif";

import {
 FaInstagram,
 FaYoutube,
 FaFacebookF,
 FaLinkedinIn,
 FaTwitter,
 FaPinterestP
} from "react-icons/fa";


function Footer() {
  return (
    <footer className="footer">
  <div className="container">

    <h2 className="footer-title">
      Happily Ever After starts here !
    </h2>

      <div className="footer-contact-row">

  {/* Left */}
  <div className="footer-left">

    <p>
      <span>Tel:</span>
      <a href="tel:+919039079507"> +91-9039079507</a>
    </p>

    <p>
      <span>Email:</span>
      <a href="mailto:rangrit04@gmail.com">
        {" "}rangrit04@gmail.com
      </a>
    </p>

  </div>

  {/* Right */}
  <div className="footer-right">

    <img
      src={hut}
      alt="Location"
      className="footer-hut"
    />

    <p>Bhopal | Worldwide</p>

  </div>

</div>

    <div className="footer-social">

      <a href="#"><FaInstagram/></a>

      <a href="#"><FaYoutube/></a>

      <a href="#"><FaFacebookF/></a>

      <a href="#"><FaLinkedinIn/></a>

      <a href="#"><FaTwitter/></a>

      <a href="#"><FaPinterestP/></a>

      </div>

    <div className="footer-bottom">
      ©2026 RANGRIT PHOTOGRAPHY
    </div>

  </div>
</footer>
  );
}

export default Footer;