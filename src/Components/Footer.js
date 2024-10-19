import { FaHome, FaPhone, FaMailBulk } from "react-icons/fa";
import "./Footer.css";
import React from "react";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer-comtainer">
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
          </div>
        </div>

        <div className="right"></div>
      </div>
    </div>
  );
}

export default Footer;
