import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import "./mystyles.scss"
import ProProfile from "../components/pro-profile"
import TimelineSection from "../components/timeline-section"
import KnowledgeSection from "../components/knowledge-section"
import LanguageSection from "../components/language-section"

const IndexPage = () => (
  <Layout>
    <SEO title='Enzo Aliatis' />
    <ProProfile />
    <TimelineSection />
    <KnowledgeSection />
    <LanguageSection />
  </Layout>
)

export default IndexPage
