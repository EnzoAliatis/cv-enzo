import React from 'react'

const LvlCircle = ({ color, lvl ,text }) => (
  <div className='columns is-mobile is-vcentered'>
    <div className='column is-narrow circle-k has-text-centered' style={{ backgroundColor: color}}>
      {lvl}
    </div>
    <div className='column'>
      {text}
    </div>
  </div>
)

export default LvlCircle