import React from "react"
import LvlCircle from "./lvl-circle"

const KnoledgeBox = ({children, title, knoledge }) => (
  <div className="columns marginB35">
    <div className="column is-narrow">
      <span className="is-content-centered">
        {children}
      </span>
    </div>
    <div className="column">
      <div className="columns is-multiline">
        <div className="column is-full has-text-centered-mobile">
          <h3 className="title is-3">{title || 'Languages'}</h3>
        </div>
        <div className="column is-6-mobile is-full has-text-centered-mobile" style={{margin:'auto'}}>
          { knoledge.map(k => (
            <LvlCircle key={k.id} color={k.color} lvl={k.lvl} text={k.text} />
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default KnoledgeBox
