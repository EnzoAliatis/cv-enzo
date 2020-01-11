import React from 'react'

const LvlCircle = ({ color, lvl ,text }) => (
  <div className='columns is-mobile'>
    <div className='column is-narrow'>
      {lvl}
    </div>
    <div className='column is-narrow'>
      {text}
    </div>
  </div>
)

export default LvlCircle