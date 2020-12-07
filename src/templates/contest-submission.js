import React from "react"
import { graphql } from "gatsby"
import {RiSendPlane2Line} from "react-icons/ri";

import Layout from "../components/layout"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query ContestQuery($id: String!){
		markdownRemark(id: { eq: $id }) {
      id
			html
			excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

const contest = ({data}) => {
  const { markdownRemark, site } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  function Country(name, iso, capital, population) {
    "use strict";
    //  Add the missing source code in the Country constructor
    this.name = name;
    this.iso = iso;
    this.capital = capital;
    this.population = population;
  }
  (function() {
    "use strict";
    //  create an array of sample country objects
    var countries = [
      new Country("Bahamas", "BS", "Nassau", 301790),
      new Country("Canada", "CA", "Ottawa", 33679000),
      new Country("Germany", "DE", "Berlin", 81802257)
  
  
    ];
    //  you can also push each new country object onto the end of the array
    countries.push(new Country("Spain", "ES", "Madrid", 46505963));
    countries.push(new Country("United Kingdom", "GB", "London", 62348447));
    // Countries I added
    countries.push(new Country("Georgia", "GE", "Tbilisi", 3989167));
    countries.push(new Country("Japan", "JP", "Tokyo", 126476461));
    countries.push(new Country("Thailand", "TH", "Bangkok", 69866092));
    countries.push(new Country("Philippines", "PH", "Manila",  109581078));
    countries.push(new Country("Vietnam", "VN", "Hanoi", 97141003));
  
    // now loop through all this array of country objects
    
    // note that many web developers do not consider it a best practice
    // to modify the DOM through the document.write method. Please talk
    // with the course instructor to learn more about this idea.
    for (var i = 0; i < countries.length; i++) {
      var c = countries[i];
      // Add in the source code to start the div marker
      document.write("<div class= 'box'>");
      // Convert ISO codes into lowercase because the GatorGrader looks for flag images with lower case names
      document.write("<img src='img/flags/" + c.iso.toLowerCase() + ".png' class='boxImg'>");
      document.write("<p>");
      // now loop through all of the details about the country
      for (var propertyName in c) {
        document.write("<strong>");
        document.write(propertyName + ": ");
        document.write("</strong>");
        document.write(c[propertyName]);
        document.write("<br>");
      }
      // Add in the source code to conclude the div marker
      document.write("</div>")
    }
  })();
  return  (
    <Layout className="contact-page">
      <SEO 
        title={frontmatter.title}
        description={frontmatter.title + " " + site.siteMetadata.title}
      />
      
      <div className="wrapper">
        <h1>{frontmatter.title}</h1>
        
        <div className="description" dangerouslySetInnerHTML={{ __html: html }} />
        <script type="text/javascript" language = "javascript" src="./contest.js"></script>
      </div>

      
    </Layout>
  )
}

export default contest