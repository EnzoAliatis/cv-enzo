import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProfileImage from "./profile-image"
import UleamLogoImage from "./uleam-logo"

const ProProfile = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            jobProfile
            email
          }
        }
      }
    `
  )

  return (
    <section className="hero is-dark">
      <div className="hero-body">
        <div className="container profileContentBox devBox">
          <figure className="image profileImageBox">
            <ProfileImage />
          </figure>
          <div>
            <h1 className="title">{site.siteMetadata.title}</h1>
            <h2 className="subtitle" style={{ marginBottom: 0 }}>
              {site.siteMetadata.jobProfile}
            </h2>
            <h6 className="subtitle is-6">{site.siteMetadata.email}</h6>
          </div>
        </div>
        <div className="container profileSubContentBox devBox">
          <figure className="image uleamImageBox">
            <UleamLogoImage />
          </figure>
          <div className='content' style={{ maxWidth: 401}}>
            <p>I'm in last year of engineer in computational system. <br /> Passionate about the code and problem solver with technology as the main resource. Programming since 2016</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProProfile
