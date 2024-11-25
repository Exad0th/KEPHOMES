import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";
import CleaningIcon from "../images/cleaning-icon.png";
import CheckinIcon from "../images/checkin-icon.png";
import SelectionIcon from "../images/selection-icon.png";
import PhotographyIcon from "../images/photography-icon.png";
import ManagementIcon from "../images/management-icon.png"; // Yeni ikon dosyası
import SupportIcon from "../images/support-icon.png"; // Yeni ikon dosyası
import cleaningImage from "../images/cleaning-image.jpg";
import checkinImage from "../images/checkin-image.jpg";
import selectionImage from "../images/selection-image.jpg";
import photographyImage from "../images/photography-image.jpg";
import managementImage from "../images/management-image.jpg"; // Yeni görsel dosyası
import supportImage from "../images/support-image.jpg"; // Yeni görsel dosyası

const services = [
  {
    titleTR: "Profesyonel Temizlik",
    titleEN: "Professional Cleaning",
    descriptionTR:
      "Odalarınızın hijyenini daima en üst seviyede tutuyoruz. Misafirleriniz için rahat, temiz ve güvenli bir ortam sağlamak bizim önceliğimizdir.",
    descriptionEN:
      "We always maintain the highest level of hygiene in your rooms. Providing a comfortable, clean, and safe environment for your guests is our priority.",
    icon: CleaningIcon,
    image: cleaningImage,
  },
  {
    titleTR: "7/24 Check-in ve Misafir Desteği",
    titleEN: "24/7 Check-in and Guest Support",
    descriptionTR:
      "Uygun bir rezervasyon süreci ve misafir desteği ile, misafirlerinizin her zaman yanında olmaya hazırız.",
    descriptionEN:
      "With a smooth reservation process and guest support, we are always ready to assist your guests.",
    icon: CheckinIcon,
    image: checkinImage,
  },
  {
    titleTR: "Misafir Seçimi",
    titleEN: "Guest Selection",
    descriptionTR:
      "Ev sahipleri için en ideal misafirleri buluyoruz, misafirlerinizin konaklama deneyimini en iyi hale getiriyoruz.",
    descriptionEN:
      "We find the most ideal guests for homeowners, optimizing the stay experience for your guests.",
    icon: SelectionIcon,
    image: selectionImage,
  },
  {
    titleTR: "Listeleme ve Fotoğraf Çekimi",
    titleEN: "Listing and Photography",
    descriptionTR:
      "Dairenizin profesyonel fotoğraflarını çekip en iyi şekilde tanıtımını yapıyoruz, daha fazla misafir çekiyoruz.",
    descriptionEN:
      "We take professional photos of your property and promote it effectively to attract more guests.",
    icon: PhotographyIcon,
    image: photographyImage,
  },
  // Yeni hizmet: Ev Sahiplerine Yönetim Paneli
  {
    titleTR: "Ev Sahiplerine Yönetim Paneli",
    titleEN: "Management Panel for Homeowners",
    descriptionTR:
      "Ev sahipleri için kapsamlı ve kullanıcı dostu bir yönetim paneli sunuyoruz. Tüm işlemlerinizi tek bir yerden kolayca yönetin.",
    descriptionEN:
      "We provide a comprehensive and user-friendly management panel for homeowners. Manage all your operations easily from one place.",
    icon: ManagementIcon,
    image: managementImage,
  },
  // Yeni hizmet: 7/24 Destek Hattı
  {
    titleTR: "7/24 Destek Hattı",
    titleEN: "24/7 Support Line",
    descriptionTR:
      "Ev sahiplerinin tüm sorularını ve taleplerini yanıtlayacak profesyonel bir destek hattımız her zaman hizmetinizde.",
    descriptionEN:
      "A professional support line is available to answer all homeowners' questions and requests at any time.",
    icon: SupportIcon,
    image: supportImage,
  },
];

const WhatWeOffer = ({ isEnglish }) => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 4 }}
      >
        {isEnglish
          ? "What We Offer at Kep Homes?"
          : "Kep Homes Olarak Neler Sunuyoruz?"}
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                boxShadow: 3,
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: { xs: "100%", md: 200 }, height: 200 }}
                image={service.image}
                alt={isEnglish ? service.titleEN : service.titleTR}
              />
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: 3,
                }}
              >
                <Box display="flex" alignItems="center" mb={1}>
                  <Box
                    component="img"
                    src={service.icon}
                    alt={`${
                      isEnglish ? service.titleEN : service.titleTR
                    } icon`}
                    sx={{ width: 40, height: 40, mr: 2 }}
                  />
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", color: "#D32F2F" }}
                  >
                    {isEnglish ? service.titleEN : service.titleTR}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {isEnglish ? service.descriptionEN : service.descriptionTR}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhatWeOffer;
