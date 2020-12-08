import React from "react"
import { Link } from "gatsby"

// Style the website logo
const Logo = (props) => (
  <div className="site-logo">
    <Link to="/">{props.title}</Link>
  </div>
)

export default Logo