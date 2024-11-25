import React from "react";
import { Box, Grid, Typography, Button, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import transfer1 from "../images/transfer1.jpg";
import transfer2 from "../images/transfer2.png";
import activity1 from "../images/activity1.jpg";
import activity2 from "../images/activity2.jpg";
import activity3 from "../images/activity3.jpg";
import shopping1 from "../images/shopping1.jpg";
import shopping2 from "../images/shopping2.jpg";
import shopping3 from "../images/shopping3.jpg";
import health1 from "../images/health1.jpg";
import health2 from "../images/health2.jpg";
import health3 from "../images/health3.jpg";
import health4 from "../images/health4.jpg";
import dining1 from "../images/dining1.png";
import dining2 from "../images/dining2.png";
import dining3 from "../images/dining3.png";
import rental1 from "../images/rental1.png";
import rental2 from "../images/rental2.png";
const ServiceCard = ({ image, title, description, price }) => (
  <Box
    sx={{
      position: "relative",
      width: 250,
      height: 300,
      borderRadius: 2,
      overflow: "hidden",
      boxShadow: 3,
      m: 1,
      display: "flex",
      flexDirection: "column",
    }}
  >
    {/* Görsel alanı */}
    <Box sx={{ height: 200, overflow: "hidden" }}>
      <img
        src={image}
        alt={title}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </Box>

    {/* Metin alanı */}
    <Box
      sx={{
        p: 2,
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography variant="subtitle1" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </Box>
      {price && (
        <Typography variant="body1" color="text.primary" sx={{ mt: 1 }}>
          Başlangıç: {price}
        </Typography>
      )}
    </Box>

    {/* Favori butonu */}
    <IconButton sx={{ position: "absolute", top: 8, right: 8, color: "white" }}>
      <FavoriteBorderIcon />
    </IconButton>
  </Box>
);

const CategorySection = ({ title, services }) => (
  <Box sx={{ mb: 5 }}>
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 2,
      }}
    >
      <Typography variant="h5">{title}</Typography>
      <Button variant="text" color="primary">
        Tümünü Gör
      </Button>
    </Box>
    <Grid container wrap="nowrap" sx={{ overflowX: "auto" }}>
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          image={service.image}
          title={service.title}
          description={service.description}
          price={service.price}
        />
      ))}
    </Grid>
  </Box>
);

const MainPage = () => {
  const categories = [
    {
      title: "Aktiviteler",
      services: [
        {
          title: "Yat Turu",
          description: "Alanya'da yat turu.",
          image: activity1,
          price: "€50",
        },
        {
          title: "Dalış",
          description: "Akdeniz'in derinliklerini keşfedin.",
          image: activity2,
          price: "€70",
        },
        {
          title: "ATV Safari",
          description: "Macera dolu bir safari turu.",
          image: activity3,
          price: "€40",
        },
      ],
    },
    {
      title: "Alışveriş",
      services: [
        {
          title: "Alanya Çarşısı",
          description: "Geleneksel alışveriş deneyimi.",
          image: shopping1,
        },
        {
          title: "Alanya AVM",
          description: "Çeşitli mağazalar ve yemek seçenekleri.",
          image: shopping2,
        },
        {
          title: "El Sanatları Pazarı",
          description: "Özgün el yapımı ürünler.",
          image: shopping3,
        },
      ],
    },
    {
      title: "Sağlık Hizmetleri",
      services: [
        {
          title: "Özel Sağlık Hizmeti",
          description: "24 saat açık.",
          image: health1,
        },
        {
          title: "Eczaneler",
          description: "Yakındaki eczaneler.",
          image: health2,
        },
        {
          title: "Estetik Operasyonlar",
          description: "Kapsamlı güzellik hizmetleri.",
          image: health3,
        },
        {
          title: "Diş Sağlığı Hizmeti",
          description: "Kapsamlı diş tedavisi.",
          image: health4,
        },
      ],
    },
    {
      title: "Transfer",
      services: [
        {
          title: "Özel Transfer",
          description: "Antalya Havalimanı'ndan Alanya'ya.",
          image: transfer2,
          price: "€60",
        },
        {
          title: "VIP Transfer",
          description: "Lüks araçlarla konforlu ulaşım.",
          image: transfer1,
          price: "€100",
        },
      ],
    },
    {
      title: "Yeme-İçme",
      services: [
        {
          title: "Restoranlar",
          description: "Deniz veya Kale manzaralı yemek keyfi.",
          image: dining1,
        },
        {
          title: "Geleneksel Türk Mutfağı",
          description: "Otantik lezzetler.",
          image: dining2,
        },
        {
          title: "Dünya Mutfağı",
          description: "Dünyadan Lezzetler ile Tanışın.",
          image: dining3,
        },
      ],
    },
    {
      title: "Araç Kiralama",
      services: [
        {
          title: "Ekonomik Araçlar",
          description: "Uygun fiyatlı araç kiralama.",
          image: rental1,
          price: "€30",
        },
        {
          title: "SUV Araçlar",
          description: "Geniş ve konforlu araçlar.",
          image: rental2,
          price: "€50",
        },
      ],
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#f5f5f5", p: 3, borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center", mb: 4 }}>
        Hizmet Kategorilerimiz
      </Typography>
      {categories.map((category, index) => (
        <CategorySection
          key={index}
          title={category.title}
          services={category.services}
        />
      ))}
    </Box>
  );
};

export default MainPage;
