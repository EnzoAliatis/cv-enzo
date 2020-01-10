import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import ProfileImage from "./profile-image"
import UleamLogoImage from "./uleam-logo"

const ProProfile = () => {
  const { photo, background } = useStaticQuery(
    graphql`
      query {
        photo: site {
          siteMetadata {
            title
            jobProfile
            email
          }
        }
        background: file(relativePath: { eq: "backgorund3.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
  return (
    <BackgroundImage
      Tag="div"
      fluid={background.childImageSharp.fluid}
      backgroundColor={`#040e18`}
      style={{ width: "100%", backgroundSize: "cover", color: "white" }}
    >
      <section className="hero">
        <div className="hero-body">
          <div className="columns is-centered is-multiline">
            <div className="column is-three-quarters">
              <div className="columns">
                <div className="column is-one-fifth">
                  <figure className="image profileImageBox">
                    <ProfileImage />
                  </figure>
                </div>
                <div className="column">
                  <h1 className="title">{photo.siteMetadata.title}</h1>
                  <h2 className="subtitle" style={{ marginBottom: 0 }}>
                    {photo.siteMetadata.jobProfile}
                  </h2>
                  <h6 className="subtitle is-6">{photo.siteMetadata.email}</h6>
                </div>
              </div>
            </div>
            <div className="column is-three-quarters">
              <div className="columns">
                <div className="column">
                  <figure className="image uleamImageBox">
                    <UleamLogoImage />
                  </figure>
                </div>
                <div className="column">
                  <p>
                    I'm in last year of engineer in computational system. <br />
                    Passionate about the code and problem solver with technology
                    as the main resource. Programming since 2016
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BackgroundImage>
  )
}

export default ProProfile
