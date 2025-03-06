import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import './LanguageSwitcher.css'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation() // Asegúrate de que esta línea está bien escrita
  const [language, setLanguage] = useState('en')

  const languages = {
    en: '🇬🇧',
    es: '🇪🇸',
  }

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en'
    i18n.changeLanguage(newLanguage) // Aquí debería funcionar correctamente
    setLanguage(newLanguage)
  }

  return (
    <button className="language-toggle" onClick={toggleLanguage}>
      {languages[language]}
    </button>
  )
}

export default LanguageSwitcher
