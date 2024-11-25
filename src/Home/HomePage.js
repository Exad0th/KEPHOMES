import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Discover from "./Discover";
import Estates from "./Estates";
import ImageSlider from "./ImageSlider";
import ResortSection from "./ResortSection";
import ManuelSlider from "./ManuelSlider";
import GetQuote from "./GetQuote"; // GetQuote bileşenini ekledik
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material"; // Box bileşenini ekliyoruz

const HomePage = () => {
  const { t } = useTranslation(); // i18n'den çevrim fonksiyonunu alıyoruz

  return (
    <div>
      {/* Discover Bölümü */}
      <Box sx={{ mb: 4 }}>
        {" "}
        {/* Margin Bottom ile altına boşluk ekliyoruz */}
        <Discover />
      </Box>

      {/* GetQuote Bölümü */}
      <Box sx={{ mb: 4 }}>
        <GetQuote />
      </Box>

      {/* Estates Bölümü */}
      <Box sx={{ mb: 4 }}>
        <Estates />
      </Box>

      {/* Image Slider */}
      <Box sx={{ mb: 24 }}>
        <ImageSlider />
      </Box>

      {/* Resort Section */}
      <Box sx={{ mb: 8 }}>
        <ResortSection />
      </Box>

      {/* Manuel Slider */}
      <Box sx={{ mb: 4 }}>
        <ManuelSlider />
      </Box>
    </div>
  );
};

export default HomePage;
