import React from 'react'
import './intro.css'
import { Link } from "react-scroll";
import Saludo from './Saludo'

import fotoGaston from '../../assets/image-1.png'
import iconHire from '../../assets/briefcase.svg'

import { useTranslation } from 'react-i18next'

const Intro = () => {
  const { t } = useTranslation()

  return (
    <section id="intro">
      <div className="introContent">
        {/* <h3 className="hello">{t('Hello')},</h3> */} <Saludo />
        <h1 className="introText">
          {t("I'm")} <span className="introName">Gastón</span> <br />{' '}
          {t('Web Developer')}
        </h1>
        <p className="introPara">
          {t('I specialize in developing responsive and')} <br />
          {t('search engine friendly websites')}.
        </p>
        <Link>
          <button
            className="introBtn"
            onClick={() => {
              document
                .getElementById('contactSection')
                .scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <img className="introBtnIcon" src={iconHire} alt="briefcase icon" />
            {t('Hire Me')}
          </button>
        </Link>
      </div>
      <img className="avatar" src={fotoGaston} alt="Caracter of Gastón" />
    </section>
  )
}

export default Intro
