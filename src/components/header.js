import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../components/logo"
import VSEENLogo from "../images/VSEEN-LOGO-WHITE.png"

import "./header.css"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        background: "rgba(0, 0, 0, 0.8)",
        paddingTop: "6px",
        textDecoration: "none",
        position: "fixed",
        width: "100%",
        top: "0",
        zIndex: "10000",
      }}
    >
      <Link to="/">
        <img src={VSEENLogo} className="logo"></img>
      </Link>
      <ul className="navbar">
        <li className="buttonheader">
          <Link to="/about" className="tab">
            ABOUT
          </Link>
        </li>
        <li className="buttonheader">
          <Link to="/news" className="tab">
            NEWS
          </Link>
        </li>
        <li className="buttonheader">
          <Link to="/careers" className="tab">
            CAREERS
          </Link>
        </li>
        <li className="buttonheader">
          <Link to="/request-a-quote" className="tab">
            REQUEST A QUOTE
          </Link>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
