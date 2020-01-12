import React from "react"
import { FaGlobe } from 'react-icons/fa'

const LanguageSection = () => {
  return (
    <div className="hero is-dark">
      <div className="hero-body">
        <div className="container">
          <div className="column is-three-quarters" style={{margin:'auto'}}>
            <div className="columns is-centered is-vcentered">
              <div className="column">
                <h3 className="title is-2 has-text-centered">Language proficiency</h3>
              </div>
              <div className="column ">
                <h4 className="subtitle is-4  has-text-centered is-content-centered"><FaGlobe style={{marginRight: 10}} />Spanish{"-"}<small>(native)</small></h4>
              </div>
              <div className="column">
                <h4 className="subtitle is-4  has-text-centered is-content-centered"><FaGlobe  style={{marginRight: 10}} />English{"-"} <small> (intermediate)</small></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LanguageSection
