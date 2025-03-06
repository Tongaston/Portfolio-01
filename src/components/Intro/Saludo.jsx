import { useTranslation } from 'react-i18next';
import './saludo.css';

const Saludo = () => {
  const { t } = useTranslation();
  const hora = new Date().getHours();

  let claveSaludo;
  if (hora >= 6 && hora < 12) {
    claveSaludo = 'good_morning';
  } else if (hora >= 12 && hora < 18) {
    claveSaludo = 'good_afternoon';
  } else if (hora >= 18 && hora < 21) {
    claveSaludo = 'good_evening';
  } else {
    claveSaludo = 'good_night';
  }

  return <h3 className="hello">{t(claveSaludo)}</h3>;
};

export default Saludo;

