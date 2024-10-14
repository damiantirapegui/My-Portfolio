import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Footer() {
  return (
    <footer>
      <div className="contact">
        <h1>Contact</h1>

        <div className="contact-info">
          <p>
            Email:{" "}
            <a href="mailto:damiantirapegui@gmail.com">
              damiantirapegui@gmail.com
            </a>
          </p>
          <p>Phonenumber: 0725148608</p>
        </div>
      </div>
      <div className="link-contact">
        <a href="https://github.com/damiantirapegui">
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            style={{ color: "black" }}
          />
        </a>
        <a href="https://www.linkedin.com/in/jonathan-tirapegui-a490962a0/">
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            style={{ color: "#0077B5" }}
          />
        </a>
      </div>
    </footer>
  );
}
