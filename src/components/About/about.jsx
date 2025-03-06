import React from 'react'
import './about.css'

import UIDesign from '../../assets/ui ux design.svg'
import webDesign from '../../assets/web design.svg'
import responsiveDesign from '../../assets/responsive app.svg'

import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()

  return (
    <section id="about">
      <h2 className="aboutTitle">{t('What I do')}</h2>
      <p className="aboutDesc">
        {t('description1')}
        {/* As a self-taught web developer I'm characterized by having the strength
        to learn independently. Constantly exploring new technologies and trends
        in the field. */}
      </p>
      <p className="aboutDesc">
        {t('description2')}
        {/* This strength drives me to face complex challenges and seek creative
        solutions for every problem. */}
      </p>
      <p className="aboutDesc">
        {t('description3')}
        {/* Self-discipline and perseverance are my tools to improve my skills and
        create projects that reflect my dedication and talent in the world of
        web development. */}
      </p>
      <ul className="aboutBars">
        <li className="aboutBar">
          <img
            src={UIDesign}
            className="aboutImg"
            alt="imagen descriptiva UI Design"
          />
          <div className="aboutBarText">
            <h3>{t('UI/UX Design')}</h3>
            <p>
              {t('UI/UX Description')}
              {/* Fusing aesthetics with functionality in an intuitive and
              attractive way. */}
            </p>
          </div>
        </li>

        <li className="aboutBar">
          <img
            src={webDesign}
            className="aboutImg"
            alt="imagen descriptiva Web Design"
          />
          <div className="aboutBarText">
            <h3>{t('Website Design')}</h3>
            <p>
              {t('Website Description')}
              {/* Modern designs with vibrant colors, easy to navigate and an
              intuitive layout of information. */}
            </p>
          </div>
        </li>

        <li className="aboutBar">
          <img
            src={responsiveDesign}
            className="aboutImg"
            alt="imagen descriptiva disenos responsives"
          />
          <div className="aboutBarText">
            <h3>{t('Responsive Design')}</h3>
            <p>
              {t('Responsive Description')}
              {/* Websites that automatically adjust and reorganize depending on the
              device used. */}
            </p>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default About
