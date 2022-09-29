import React from 'react'
import './CuststomTextField.scss'

export default function CustomTextField({label, placeholder='ex: 5550', onChange}) {
  return (
    <div className='input-group'>
      <p>{label}</p>
      <input className='txt-field' type='text' placeholder={placeholder} onChange={onChange}></input>
    </div>
  )
}
