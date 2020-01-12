import React from 'react'

const LvlCircle = ({ color, lvl ,text }) => (
  <div className='columns is-mobile is-vcentered is-centered'>
    <div className='column is-narrow circle-k has-text-centered' style={{ backgroundColor: color}}>
      {lvl}
    </div>
    <div className='column is-12-mobile' style={{paddingBottom:0, paddingTop:0}}>
      {text}
    </div>
  </div>
)

export default LvlCircle