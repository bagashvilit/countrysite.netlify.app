import React from "react"
import { graphql } from "gatsby"
import {RiSendPlane2Line} from "react-icons/ri";

import Layout from "../components/layout"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query QuizQuery($id: String!){
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

const Quiz = ({data}) => {
  const { markdownRemark, site } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return  (
    <Layout className="quiz">
      <SEO 
        title={frontmatter.title}
        description={frontmatter.title + " " + site.siteMetadata.title}
      />
      <div className="wrapper">
        <h1>{frontmatter.title}</h1>
        <div className="description" dangerouslySetInnerHTML={{ __html: html }} />
        <form className="contact-form" action="/thanks" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <p>
          <label>What is your preferred city?<input type="text" name="name" list="cities" required /></label>
            <datalist id="cities">
                <option value="Tbilisi"></option>
                <option value="Tokyo"></option>    
                <option value="London"></option>
                <option value="Singapore"></option>
                <option value="Berlin"></option>
            </datalist>
          </p>
          <p>
            <label>Email<input type="email" name="email" required /></label>
          </p>
          <p>
            <label>Subject<input type="text" name="subject" required /></label>   
          </p>
          <p>
            <label>Message<textarea name="message" required ></textarea></label>
          </p>
          <p className="text-align-right">
            <button className="button" type="submit">Send Message <span className="icon -right"><RiSendPlane2Line/></span></button>
          </p>
        </form>
      </div>

    </Layout>
  )
}

export default Quiz