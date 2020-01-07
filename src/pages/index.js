import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import "./mystyles.scss"
import ProProfile from "../components/pro-profile"

const IndexPage = ({ siteTitle }) => (
  <Layout>
    <SEO title='CV' />
    <ProProfile />
    <div className="container">
      <div className="columns">
        <div className="column">
          <h2 className="title is-2">Level 2 heading</h2>
          <p className="content">Cool content. Using Bulma!</p>
        </div>
        <div className="column is-four-fifths">
          <h2 className="title is-2">Level 2 heading</h2>
          <p className="content">This column is cool too!</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
