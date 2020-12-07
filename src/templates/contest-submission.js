
      
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
          <label> Please select the country </label>
            <label class="container">Mongolia
            <input type="radio" name="country"/>
            <span class="checkmark"></span>
            </label>
            <label class="container">Germany
            <input type="radio" name="country"/>
            <span class="checkmark"></span>
            </label>
            <label class="container">Belgium
            <input type="radio" name="country"/>
            <span class="checkmark"></span>
            </label>
            <label class="container">Thailand
            <input type="radio" name="country"/>
            <span class="checkmark"></span>
            </label> 

          </p>
          <p>
          <label> Population of the selected country </label>
            <label class="container">3.17 million
            <input type="radio" name="population"/>
            <span class="checkmark"></span>
            </label>
            <label class="container">11.46 million
            <input type="radio" name="population"/>
            <span class="checkmark"></span>
            </label>
            <label class="container">69.43 million
            <input type="radio" name="population"/>
            <span class="checkmark"></span>
            </label>
            <label class="container">83.02 million
            <input type="radio" name="population"/>
            <span class="checkmark"></span>
            </label> 
          </p>
          <p>
          <label> Currency of the selected country </label>
            <label class="container">Euro
            <input type="radio" name="radio"/>
            <span class="checkmark"></span>
            </label>
            <label class="container">Tugric
            <input type="radio" name="radio"/>
            <span class="checkmark"></span>
            </label>
            <label class="container">Baht
            <input type="radio" name="radio"/>
            <span class="checkmark"></span>
            </label>
          </p>

          <p>
          <label> Capital of the selected country </label>
            <label class="container">Berlin
            <input type="radio" name="capital"/>
            <span class="checkmark"></span>
            </label>
            <label class="container">Bangkok
            <input type="radio" name="capital"/>
            <span class="checkmark"></span>
            </label>
            <label class="container">Brussels
            <input type="radio" name="capital"/>
            <span class="checkmark"></span>
            </label>
            <label class="container">Ulaanbataar
            <input type="radio" name="capital"/>
            <span class="checkmark"></span>
            </label> 

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
     
