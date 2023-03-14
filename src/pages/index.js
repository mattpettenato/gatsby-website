import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
    <Layout>
      <h1>Matt Pettenato</h1>
      <h3>Software Engineer</h3>
      <h5>My name is Matt, and I am a Software Engineer</h5>
      <p>I design, develop, and deploy web applications using React, Redux, Node, Express, Javascript, Ruby on Rails, PostgreSQL</p>
      <ul className="actions">
        <li><a className="button" href="https://www.linkedin.com/in/matt-pettenato-936236123/" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn</a></li>
        <li><a className="button" href="https://github.com/mattpettenato" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i> GitHub</a></li>
        <li><a className="button" href="https://angel.co/u/matthew-pettenato" target="_blank" rel="noreferrer">
          <i className="fab fa-angellist"></i> Wellfound</a></li>
        <li>
          {/* <a className="button" href="/resume.pdf" download>Here's my resume</a> */}
          <a href="https://raw.githubusercontent.com/mattpettenato/gatsby-website/main/resume/Matt-Pettenato-Resume.pdf" download>Download Resume</a>

        </li>
      </ul>
      <Link to="/page-2">Go to page 2</Link>
    </Layout>
  )

export const Head = () => <Seo title="Home" />

export default IndexPage
