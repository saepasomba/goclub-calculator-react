import React from 'react'
import './ProgressBar.scss'

export default function ProgressBar({ progress = 0 }) {
  return (
    <div className='progress'>
      <div className='container container-progress'>
        <div className='progress-bar progress-bar-bg'></div>
        <div style={{width: `${progress}%`}} className='progress-bar progress-indicator'></div>
      </div>
    </div>
  )
}
