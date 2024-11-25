import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Çeviri kaynakları
const resources = {
  en: {
    translation: {
      discoverTitle: "Reliable Short-Term Rental Partner",
      mainTitle: "What we do as Kep Homes team?",
      description:
        "For two decades, we've been perfecting the art of hospitality, ensuring every stay is memorable and every experience is unparalleled. Our commitment to luxury and comfort is evident in every corner of our resorts.",
      listItems: [
        "We Pick the Best Guests",
        "Professional Cleaning Services",
        "Listing and Interior Photo Shooting",
        "We prioritize the best for all our guests",
        "We aim the maximum revenue for our home owners.",
      ],
      buttonText: "How we work?",
      navigation: {
        homePage: "Home Page",
        aboutUs: "About Us",
        services: "Services",
        whatWeOffer: "What We Offer",
        blog: "Blog",
        contact: "Contact",
      },
      buttons: {
        bookNow: "Book Now",
        listYourHome: "List Your Home",
        getOfferNow: "Get an Offer Now",
      },
      dialog: {
        quickReservation: "Quick Reservation",
      },
      propertyForm: {
        location: "Location",
        propertyType: "Property Type",
        apartment: "Apartment",
        villa: "Villa",
        entireBuilding: "Entire Building",
        roomCount: "Room Count",
        numberOfApartments: "Number of Apartments",
        amenities: "Amenities (Choose up to 4)",
        seaView: "Sea View",
        cityView: "City View",
        jacuzzi: "Jacuzzi",
        balcony: "Balcony",
        elevator: "Elevator",
        garden: "Garden",
      },
      earnings: {
        find_out_earnings_title: "Find Out How Much You Can Earn!",
        find_out_earnings_description:
          "Short-term rentals generate at least 70% more income than traditional long-term rentals. Based on the property details you provide, we calculate your potential earnings.",
        how_much_can_you_earn: "How Much Can You Earn?",
        earnings_description:
          "Based on the property details you provide, we determine the value of your property at the most profitable price. This way, we aim for maximum profit for you.",
        monthly_occupancy_rate: "Monthly Occupancy Rate: ~65%",
        price_disclaimer:
          "*Prices are estimated and may vary based on additional inspections.",
      },
    },
  },
  tr: {
    translation: {
      discoverTitle: "Kısa Dönem Kiralama Ortağınız",
      mainTitle: "Kep Homes olarak neler yapıyoruz?",
      description:
        "Kısa dönem kiralamanın kolaylıkla kazanca dönüştüğü bir deneyim sunuyoruz. Evinizin potansiyelini en üst düzeye çıkarırken, her adımda yanınızdayız. Misafirlerinize konforlu ve unutulmaz bir deneyim sağlamak için buradayız!",
      listItems: [
        "Misafir Seçimi",
        "Listeleme ve Fotoğraf Çekimi",
        "Profesyonel temizlik ve bakım hizmetleri",
        "Ev sahiplerimiz için yüksek getiri hedefliyoruz.",
        "Tüm misafirlerimiz için en iyisini önceliklendiriyoruz",
      ],
      buttonText: "Nasıl Çalıştığımızı Öğrenin",
      navigation: {
        homePage: "Ana Sayfa",
        aboutUs: "Hakkımızda",
        services: "Hizmetlerimiz",
        whatWeOffer: "Ne Sunuyoruz",
        blog: "Blog",
        contact: "İletişim",
      },
      buttons: {
        bookNow: "Rezervasyon Yap",
        listYourHome: "Evinizi Listeleyin",
        getOfferNow: "Hemen Teklif Al",
      },
      dialog: {
        quickReservation: "Hızlı Rezervasyon",
      },
      propertyForm: {
        location: "Konum",
        propertyType: "Mülkün Tipi",
        apartment: "Apartman",
        villa: "Villa",
        entireBuilding: "Tüm Bina",
        roomCount: "Oda Sayısı",
        numberOfApartments: "Daire Sayısı",
        amenities: "Mülkte Bulunan Özellikler (Maksimum 4 Seçim)",
        seaView: "Deniz Manzarası",
        cityView: "Şehir Manzarası",
        jacuzzi: "Jakuzi",
        balcony: "Balkon",
        elevator: "Asansör",
        garden: "Bahçe",
      },
      earnings: {
        find_out_earnings_title: "Ne kadar kazanabileceğinizi öğrenin!",
        find_out_earnings_description:
          "Kısa süreli kiralamalar, geleneksel uzun süreli kiralamalardan en az %70 daha fazla kazanç sağlar. Bizlere sağladığınız bilgiler ile potansiyel kazancınızı hesaplıyoruz.",
        how_much_can_you_earn: "Ne Kadar Kazanabilirsiniz?",
        earnings_description:
          "Bizlere sağlamış olduğunuz mülkiyet özelliklerine göre size en kazançlı fiyattan mülkiyetinizin değer tespitini yapıyoruz. Bu şekilde maksimum kazancınızı hedefliyoruz.",
        monthly_occupancy_rate: "Aylık Doluluk Oranı: ~%65",
        price_disclaimer:
          "*Tahmini fiyatlardır, uzman incelemelerine göre değişebilir.",
      },
    },
  },
  de: {
    translation: {
      discoverTitle: "Ihr Partner für Kurzzeitvermietungen",
      mainTitle: "Was machen wir als Kep Homes Team?",
      description:
        "Seit zwei Jahrzehnten perfektionieren wir die Kunst der Gastfreundschaft und sorgen dafür, dass jeder Aufenthalt unvergesslich ist. Unser Engagement für Luxus und Komfort zeigt sich in jeder Ecke unserer Resorts.",
      listItems: [
        "Wir wählen die besten Gäste aus",
        "Professionelle Reinigungsdienste",
        "Auflistung und Fotoshooting",
        "Wir priorisieren das Beste für alle unsere Gäste",
        "Wir maximieren die Einnahmen für unsere Hausbesitzer.",
      ],
      buttonText: "Wie wir arbeiten?",
      navigation: {
        homePage: "Startseite",
        aboutUs: "Über uns",
        services: "Dienstleistungen",
        whatWeOffer: "Was wir anbieten",
        blog: "Blog",
        contact: "Kontakt",
      },
      buttons: {
        bookNow: "Jetzt buchen",
        listYourHome: "Ihr Zuhause listen",
        getOfferNow: "Angebot erhalten",
      },
      dialog: {
        quickReservation: "Schnelle Reservierung",
      },
      propertyForm: {
        location: "Standort",
        propertyType: "Objekttyp",
        apartment: "Wohnung",
        villa: "Villa",
        entireBuilding: "Ganzes Gebäude",
        roomCount: "Zimmeranzahl",
        numberOfApartments: "Anzahl der Apartments",
        amenities: "Ausstattung (Bis zu 4 auswählen)",
        seaView: "Meerblick",
        cityView: "Stadtblick",
        jacuzzi: "Whirlpool",
        balcony: "Balkon",
        elevator: "Aufzug",
        garden: "Garten",
      },
      earnings: {
        find_out_earnings_title: "Erfahren Sie, wie viel Sie verdienen können!",
        find_out_earnings_description:
          "Kurzzeitvermietungen generieren mindestens 70% mehr Einkommen als traditionelle Langzeitvermietungen. Basierend auf den von Ihnen bereitgestellten Details berechnen wir Ihr potenzielles Einkommen.",
        how_much_can_you_earn: "Wie viel können Sie verdienen?",
        earnings_description:
          "Basierend auf den von Ihnen bereitgestellten Details bewerten wir den Wert Ihrer Immobilie zu den profitabelsten Preisen. So streben wir den maximalen Gewinn für Sie an.",
        monthly_occupancy_rate: "Monatliche Belegungsrate: ~65%",
        price_disclaimer:
          "*Preise sind geschätzt und können je nach zusätzlichen Prüfungen variieren.",
      },
    },
  },
};

// i18n yapılandırması
i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Varsayılan dil İngilizce
  fallbackLng: "en", // Yedek dil İngilizce
  debug: false, // Debug modunu kapattık
  interpolation: {
    escapeValue: false, // React zaten XSS koruması sağlıyor
  },
});

export default i18n;
