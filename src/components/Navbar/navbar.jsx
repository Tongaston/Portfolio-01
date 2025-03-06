import React, { useState } from 'react'
import './navbar.css'
import DarkMode from '../DarkMode/DarkMode'
import LanguageSwitcher from '../Language/LanguageSwitcher'

import { Link } from "react-scroll";

import logoNavbar from '../../assets/imagen-favicon.png'
import iconMsj from '../../assets/icono-contact.svg'

import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const { t } = useTranslation()

  return (
    <nav className="navbar">
      <a href="/">
        <img
          src={logoNavbar}
          alt="Logo Gastón Moure Developer"
          className="logoNavbar"
        />{' '}
      </a>

      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          {t('Home')}
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          {t('About')}
        </Link>
        <Link
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          {t('Portfolio')}
        </Link>

        <Link
          activeClass="active"
          to="sectionTech"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          {t('Technologies')}
        </Link>
      </div>

      <LanguageSwitcher />

      <DarkMode />

      <button
        className="desktopMenuBtn"
        onClick={() => {
          document
            .getElementById('contactSection')
            .scrollIntoView({ behavior: 'smooth' })
        }}
      >
        <img src={iconMsj} alt="contact me icon" className="desktopMenuIcon" />
        {t('Contact Me')}
      </button>

      <svg
        viewBox="0 0 18 15"
        className="burguerLogo"
        onClick={() => setShowMenu(!showMenu)}
      >
        <path
          fill="var(--text-green)"
          d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.031C17.335,0,18,0.665,18,1.484L18,1.484z"
        />
        <path
          fill="var(--text-green)"
          d="M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0c0-0.82,0.665-1.484,1.484-1.484 h15.031C17.335,6.031,18,6.696,18,7.516L18,7.516z"
        />
        <path
          fill="var(--text-green)"
          d="M18,13.516C18,14.335,17.335,15,16.516,15H1.484C0.665,15,0,14.335,0,13.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.031C17.335,12.031,18,12.696,18,13.516L18,13.516z"
        />
      </svg>

      <div
        className="mobileMenu"
        style={{ display: showMenu ? 'flex' : 'none' }}
      >
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="mobileMenuListItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="mobileMenuListItem"
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="mobileMenuListItem"
          onClick={() => setShowMenu(false)}
        >
          Portfolio
        </Link>

        <Link
          activeClass="active"
          to="sectionTech"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="mobileMenuListItem"
          onClick={() => setShowMenu(false)}
        >
          Technologies
        </Link>

        <Link
          activeClass="active"
          to="contactSection"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="mobileMenuListItem"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
