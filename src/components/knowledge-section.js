import React from "react"
import LvlCircle from "./lvl-circle"

const KnowledgeSection = () => {
  return (
    <section class="hero is-black">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered">Knowledge</h1>
          <div className="columns is-centered">
            <div className="column is-half-desktop">
              <div className='columns is-mobile is-multiline'>
                <div className="column is-6-mobile is-content-centered">
                  <LvlCircle lvl="E" text="Expert" />
                </div>
                <div className="column is-6-mobile is-content-centered">
                  <LvlCircle lvl="E" text="Expert" />
                </div>
                <div className="column is-6-mobile is-content-centered" >
                  <LvlCircle lvl="E" text="Expert" />
                </div>
                <div className="column is-6-mobile is-content-centered">
                  <LvlCircle lvl="E" text="Expert" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default KnowledgeSection
