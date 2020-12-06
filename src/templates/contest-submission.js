import React from "react"
import { graphql } from "gatsby"
import {RiSendPlane2Line} from "react-icons/ri";

import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

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

        ReactDOM.render(
          <React.StrictMode>
          <App />
            </React.StrictMode>,
        document.getElementById('root')
        );
      </div>

      
    </Layout>
  )
}

export default contest