import React from 'react'
import { useState } from 'react'

import './nav.css'

const links = [
  {
      name: 'Home',
      to: '/',
      active: 'home'
  },
  {
      name: 'About Me',
      to: '/about',
      active: 'about'
  },
  {
      name: 'Portfolio',
      to: '/portfolio',
      active: 'portfolio'
  }
]

export const Nav = () => {

  return (
    <nav>
      {links.map((link,index)=>{
          return(
            <li key={index}>{link.name}</li>
          )
      })}
    </nav>
  )
}
