import React from "react";
import "./Contact.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    return (
      <div className="contact-content">
          <h1>Contact</h1>
          <div className="sns-icons">
              <p>TwitterはDMかリプライからお願いいたします</p>
              <a href="https://twitter.com/1rUJCQrbBYqlv1m">
                  <FontAwesomeIcon icon={faTwitter} size={"4x"} color="#00ACEE" />
              </a>
          </div>
          <div className="mail-addr">
              <p>e-mail : k.nagase.biz@gmail.com</p>
          </div>
      </div>
    );
};

export default Contact;