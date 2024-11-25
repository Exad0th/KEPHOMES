import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Çeviri dosyalarını içeri aktarıyoruz
import en from "./en";
import tr from "./tr";
import de from "./de";

// i18n yapılandırması
i18n.use(initReactI18next).init({
  resources: {
    en,
    tr,
    de,
  },
  lng: "en", // Varsayılan dil
  fallbackLng: "en", // Yedek dil
  debug: false,
  interpolation: {
    escapeValue: false, // React zaten XSS koruması sağlıyor
  },
});

export default i18n;
