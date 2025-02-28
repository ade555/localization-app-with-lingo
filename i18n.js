import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// import translation files
import en from "./i18n/en.json";
import fr from "./i18n/fr.json";
import es from "./i18n/es.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en }, // this tells it to use our en.json file (imported as en) for English translations.
    fr: { translation: fr },
    es: { translation: es },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }, // this helps to avoid unnecessary HTML escaping
});

export default i18n;
