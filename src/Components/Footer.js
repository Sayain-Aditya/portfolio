import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
import React from "react";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>681 Sector 46</p>
              <p>Faridabad, Haryana</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              7704866437
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              singhaditya83189@gmail.com
            </h4>
            <p>
              Hi! I’m Aditya Singh, a fresher passionate about both web and game
              development. I enjoy building responsive web applications using
              HTML, CSS, JavaScript, and React. In game development, I bring
              creative ideas to life through Unity and C#. I’m eager to learn,
              solve challenges, and work on exciting projects. Let’s connect!
            </p>
            <div className="Social">
            <FaFacebook
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
              <FaGithub
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
              <FaLinkedin
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </div>
          </div>
        </div>

        <div className="right"></div>
      </div>
    </div>
  );
}

export default Footer;
