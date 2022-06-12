import React from 'react'
import { NavLink } from 'react-router-dom'

const AnchorLink = ({ linkTo , children}) => {
  const link = `${linkTo}`
  return (
        <NavLink to={link} className='nav-link-button'>
        {children} 
        </NavLink>
  )
}

export default AnchorLink