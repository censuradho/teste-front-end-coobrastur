import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import * as Styles from './styles'

import logo from 'src/img/logo-header.png'
import plus from 'src/img/plus.svg'
import exit from 'src/img/exit.svg'
import menu from 'src/img/menu.svg'

function Header () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Styles.Container>
      <Link to="/">
        <img src={logo} alt="logo Coobrastur" />
      </Link>
      <Styles.Exit>
        <img src={exit} alt="icone sair" />
        sair
      </Styles.Exit>
      <Styles.Menu onClick={() => setIsOpen(!isOpen)}>
        <img src={menu} alt="icone menu" />
      </Styles.Menu>
      <Styles.Nav state={isOpen}>
        <li>
          <button>
            <img src={plus} alt="icone adicionar" />
            novo cliente
          </button>
        </li>
      </Styles.Nav>
    </Styles.Container>
  )
}

export default Header