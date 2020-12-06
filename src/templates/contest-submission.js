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

  return  (
    <Layout className="contact-page">
      <SEO 
        title={frontmatter.title}
        description={frontmatter.title + " " + site.siteMetadata.title}
      />
      
      <div className="wrapper">
        <h1>{frontmatter.title}</h1>
        <div className="description" dangerouslySetInnerHTML={{ __html: html }} />
        <form className="contact-form" action="/thanks" name="contest" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Name<input type="text" name="name" required /></label>   
          </p>
          <p>
            <label>Email<input type="email" name="email" required /></label>
          </p>
          <p>
            <label>Pick the country</label>
            <input type="radio" name="text" list="countries" />
            <datalist id="countries">
              <option value="England"></option>
              <option value="Mongolia"></option>    
              <option value="Italy"></option>
              <option value="Singapore"></option>
              <option value="Finland"></option>
            </datalist>           
          </p>
          <p>
            <label>Capital City<input type="text" name="city" required /></label>
            <input type="radio" id="North America" name="continent" value="North America"/>
            <label for="North America">North America</label>
          </p>
          <p>
            <label>Population<input type="text" name="population" required /></label>
          </p>
          <p>
            <label>National Language<input type="text" name="National Language" required /></label>
          </p>
          <p>
          <label>Currency<input type="text" name="Currency" required /></label>
          </p>
          <p>
            <label>Culture and interesting facts<textarea name="Information" required ></textarea></label>
          </p>
          <p className="text-align-right">
            <button className="button" type="submit">Submit response <span className="icon -right"><RiSendPlane2Line/></span></button>
          </p>
        </form>
      </div>
     
    </Layout>
  )
}

export default contest