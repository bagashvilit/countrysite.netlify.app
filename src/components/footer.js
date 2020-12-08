import React from "react"
import {Link} from "gatsby"
import { RiHeart2Line } from "react-icons/ri";

// Define the footer of the website, and style it with site-footer and container classes
const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <p>Blog posts and quizes. Made with <span className="icon -love"><RiHeart2Line/></span> by <Link to="/">countrysite.netlify.app</Link></p>
    </div>
  </footer>
)

export default Footer