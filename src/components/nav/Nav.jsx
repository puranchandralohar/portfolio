import React from 'react'
import { Link } from 'react-router-dom'

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
      name: 'Projects',
      to: '/projects',
      active: 'projects'
  }
]

export const Nav = () => {

  return (
    <nav>
      {links.map((link,index)=>{
          return(
            <Link to={link.to} key={index}>{link.name}</Link>
          )
      })}
    </nav>
  )
}
