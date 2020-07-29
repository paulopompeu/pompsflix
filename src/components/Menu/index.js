import React from 'react'
import Logo from '../../assests/img/Logo.png'
import './Menu.css'
import Button from '../Button'
// import ButtonLink from './components/ButtonLink'


function Menu() {
  return (
    <nav className='Menu'>
      <a href='/'>
        <img className='Logo' src={Logo} alt='Pompsflix' />
      </a>
      <Button as='a' className='ButtonLink' href='/'>
        Novo Video
      </Button>
    </nav>
  )
}

export default Menu
