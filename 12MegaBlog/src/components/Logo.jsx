import React from 'react'
import logo from 'E:/React/12MegaBlog/Logo.png'

function Logo({width = '10px'}) {
  return (
    <img
    className='h-20 img-fluid rounded-xl'
    src={logo} alt="Logo" />
  )
}

export default Logo