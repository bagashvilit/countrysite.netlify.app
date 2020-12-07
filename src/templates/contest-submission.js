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
      <p>Select a font to load:</p>


      <button data-font="Nerko One">Nerko One</button>
      <button data-font="Raleway">Raleway</button>
      <button data-font="Ubuntu">Ubuntu</button>
      <button data-font="Yanone Kaffeesatz">Yanone Kaffeesatz</button>

    
      <p>Hi! I am Teona Bagashvili, junior at <a href = "https://allegheny.edu/">Allegheny college</a>
        Majoring in Computer Science and minoring in Dance and Movement Studies.
        My working experience includes intership at <a href="https://www.napr.gov.ge/">IT department of National Agency of Public Registry</a>(Republic of Georgia),
        and Technical Leader position at <a href="https://www.cs.allegheny.edu/">Department of Computer Science</a> at Allegheny College.
        I am Currently working as Allegheny Software Engineer,
        and <a href="https://csethics.allegheny.edu/">Allegheny Mozilla Fellow</a>.
      </p>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js"></script>
    <script type="text/javascript" language = "javascript" src="contest.js"></script>
     

      
    </Layout>
  )
}

export default contest