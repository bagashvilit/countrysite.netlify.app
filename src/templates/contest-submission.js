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
          <div class="select-size">
            <input type="radio" name="s-size" id="small" checked/>
            <input type="radio" name="s-size" id="medium" />
            <input type="radio" name="s-size" id="large" />
            <input type="radio" name="s-size" id="x-large" />
            <input type="radio" name="s-size" id="xx-large" />

            <label for="small">S</label>
            <label for="medium">M</label>
            <label for="large">L</label>
            <label for="x-large">XL</label>
            <label for="xx-large">XXL</label>

          </div>
          <script type="text/javascript" language = "javascript" src="contest.js"></script>
        </form>
      </div>

      
    </Layout>
  )
}

export default contest