import React from "react"
import LvlCircle from "./lvl-circle"

const KnowledgeSection = () => {
  return (
    <section className="hero is-black">
      <div className="hero-body">
        <div className="container">
          <h1 className="title has-text-centered">Knowledge</h1>
          <div className="columns is-centered">
            <div className="column is-two-fifths">
              <div className='columns is-mobile is-multiline'>
                <div className="column is-6-mobile is-content-centered is-vcentered">
                  <LvlCircle lvl="E" text="Expert" color='#ff8000' />
                </div>
                <div className="column is-6-mobile is-content-centered is-vcentered">
                  <LvlCircle lvl="A" text="Advance" color='#a335ee' />
                </div>
                <div className="column is-6-mobile is-content-centered is-vcentered" >
                  <LvlCircle lvl="I" text="Intermediate" color='#0070dd' />
                </div>
                <div className="column is-6-mobile is-content-centered is-vcentered">
                  <LvlCircle lvl="N" text="Novice" color='#1eff00' />
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
