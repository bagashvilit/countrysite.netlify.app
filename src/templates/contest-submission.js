
      
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
// Create and style the form for contests, that will include multiple choice questions that use radio buttons for checks, the form submission will appear on the Netlify site dashboard.
const contest = ({data}) => {
  const { markdownRemark, site } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return  (
    <Layout className="form-page">
      <SEO 
        title={frontmatter.title}
        description={frontmatter.title + " " + site.siteMetadata.title}
      />
      
      <div className="wrapper">
        <h1>{frontmatter.title}</h1>
        <div className="description" dangerouslySetInnerHTML={{ __html: html }} />
        <form className="form" action="/thanks" name="contest" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contest" />
          <p>
            <label>Name<input type="text" name="name" required /></label>   
          </p>
          <p>
            <label>Email<input type="email" name="email" required /></label>
          </p>           
          <p>
          <label> Please select the country </label>
            <label class="checkbox">Mongolia
            <input type="radio" name="country"/>
            <span class="checkmark"></span>
            </label>
            <label class="checkbox">Germany
            <input type="radio" name="country"/>
            <span class="checkmark"></span>
            </label>
            <label class="checkbox">Belgium
            <input type="radio" name="country"/>
            <span class="checkmark"></span>
            </label>
            <label class="checkbox">Thailand
            <input type="radio" name="country"/>
            <span class="checkmark"></span>
            </label> 

          </p>
          <p>
          <label> Population of the selected country </label>
            <label class="checkbox">3.17 million
            <input type="radio" name="population"/>
            <span class="checkmark"></span>
            </label>
            <label class="checkbox">11.46 million
            <input type="radio" name="population"/>
            <span class="checkmark"></span>
            </label>
            <label class="checkbox">69.43 million
            <input type="radio" name="population"/>
            <span class="checkmark"></span>
            </label>
            <label class="checkbox">83.02 million
            <input type="radio" name="population"/>
            <span class="checkmark"></span>
            </label> 
          </p>
          <p>
          <label> Currency of the selected country </label>
            <label class="checkbox">Euro
            <input type="radio" name="radio"/>
            <span class="checkmark"></span>
            </label>
            <label class="checkbox">Tugric
            <input type="radio" name="radio"/>
            <span class="checkmark"></span>
            </label>
            <label class="checkbox">Baht
            <input type="radio" name="radio"/>
            <span class="checkmark"></span>
            </label>
          </p>

          <p>
          <label> Capital of the selected country </label>
            <label class="checkbox">Berlin
            <input type="radio" name="capital"/>
            <span class="checkmark"></span>
            </label>
            <label class="checkbox">Bangkok
            <input type="radio" name="capital"/>
            <span class="checkmark"></span>
            </label>
            <label class="checkbox">Brussels
            <input type="radio" name="capital"/>
            <span class="checkmark"></span>
            </label>
            <label class="checkbox">Ulaanbataar
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
     
