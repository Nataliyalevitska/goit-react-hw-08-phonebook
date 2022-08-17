import { useTranslation } from 'react-i18next';
import s from './LangSwitcher.module.css';
import ukrFlag from './Ua.png';
import ukFlag from './Uk.png';

const lang = {
  en: { icon: ukFlag, nativeName: 'english' },
  uk: { icon: ukrFlag, nativeName: 'українська' },
};
const LangSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className={s.switcher}>
      {Object.keys(lang).map(lng => (
        <div className={s.btnWrp} key={lng}>
          <button
            className={i18n.resolvedLanguage === lng ? s.active : s.btn}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            <img src={lang[lng].icon} alt={lang[lng].nativeName} width="40" />
          </button>
        </div>
      ))}
    </div>
  );
};
export default LangSwitcher;
