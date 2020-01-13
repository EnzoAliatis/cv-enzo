import React from "react"
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const Footer = () => {
  return (
    <footer className="footer myfooter">
      <div className="content has-text-centered">
        <h3 className="subtitle is-3" style={{ color: "#fff" }}>
          Contacts
        </h3>
        <div className="column is-three-quarters" style={{ margin: "auto" }}>
          <div className="columns is-centered">
            <div className="column has-text-centered is-content-centered">
              <a
                href="https://github.com/EnzoAliatis"
                target="_blank"
                rel="noopener noreferrer"
                className="is-content-centered"
              >
                <FaGithub size={28} color="#fff" />{" "}
                <span style={{ marginLeft: 5, color: "#fff" }}>
                  EnzoAliatis
                </span>
              </a>
            </div>
            <div className="column has-text-centered">
              <a
                href="https://twitter.com/enzoa23"
                target="_blank"
                rel="noopener noreferrer"
                className="is-content-centered"
              >
                <FaTwitter size={28} color="#00acee" />{" "}
                <span style={{ marginLeft: 5, color: "#00acee" }}>@enzo23</span>
              </a>
            </div>
            <div className="column has-text-centered is-content-centered">
              <a
                href="https://www.linkedin.com/in/enzo-aliatis/"
                target="_blank"
                rel="noopener noreferrer"
                className="is-content-centered"
              >
                <FaLinkedin size={28} color="#0e76a8" />{" "}
                <span style={{ marginLeft: 5, color: "#0e76a8" }}>
                  enzo-aliatis
                </span>
              </a>
            </div>
            <div className="column has-text-centered is-content-centered">
              <a
                href="mailto:enzo.aliatis@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="is-content-centered"
              >
                <MdEmail size={28} color="#fff" />{" "}
                <span style={{ marginLeft: 5, color: "#fff" }}>
                  enzo.aliatis@gmail.com
                </span>
              </a>
            </div>
          </div>
          <div className="column" style={{ margin: "auto" }}>
            <small className="has-text-grey-dark">© 2020-2021</small>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
