import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { Grid, Typography, Button, Box, Container } from "@mui/material";
import arkaplan2 from "../images/arkaplan2.jpg";

const ResortSection = ({ isEnglish }) => {
  const content = {
    en: {
      title: "Relax in our Resort",
      subtitle: "Your Comfort, Our Priority.",
      description:
        "Experience the perfect blend of tranquility and comfort amidst the unique nature and sea of Alanya. With our customer satisfaction-focused service approach, we offer our esteemed guests an unforgettable holiday experience. This is the perfect place to relax and rejuvenate!.",
      buttonText: "Learn About Us",
    },
    tr: {
      title: "Resortumuzda Rahatlayın",
      subtitle: "Konforunuz, Önceliğimiz..",
      description:
        "Alanya'nın eşsiz doğası ve denizi eşliğinde huzur ve konforu bir arada yaşayın. Müşteri memnuniyeti odaklı hizmet anlayışımızla, siz değerli misafirlerimize unutulmaz bir tatil deneyimi sunuyoruz. Dinlenmek ve yenilenmek için en doğru adres burası!",
      buttonText: "Hakkımızda Bilgi Edinin",
    },
  };

  const selectedContent = isEnglish ? content.en : content.tr;

  // Blur seviyesini yönetmek için state
  const [blurLevel, setBlurLevel] = useState(1);

  useEffect(() => {
    let increment = true;
    const interval = setInterval(() => {
      setBlurLevel((prevBlur) => {
        if (prevBlur >= 8) {
          increment = false;
        } else if (prevBlur <= 0) {
          increment = true;
        }
        return increment ? prevBlur + 1 : prevBlur - 1;
      });
    }, 2000); // Blur seviyesi her 2 saniyede bir değişir.

    // Temizleme fonksiyonu
    return () => clearInterval(interval);
  }, []);

  return (
    <Container
      maxWidth="lg"
      sx={{
        my: 5,
        position: "relative",
        padding: "20px",
        //backgroundColor: "#cfcfcf", // Arka plan rengini gri olarak ayarla
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "105%",
          backgroundImage: `url(${arkaplan2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: `blur(${5}px)`, // Blur seviyesini dinamik olarak uygula
          transition: "filter 2s ease-in-out", // Yumuşak geçiş
          zIndex: -1,
          opacity: 0.5,
        },
      }}
    >
      <Grid container spacing={8} alignItems="center" justifyContent="center">
        <Grid item xs={18} md={9}>
          <Box
            sx={{
              transition: "opacity 2s ease-in-out",
              opacity: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Yatayda ortalamak için
              justifyContent: "center", // Dikeyde ortalamak için
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                color: "orange",
                fontSize: "60px",
                fontWeight: "bold",
                fontFamily: '"Segoe Print", cursive',
                textAlign: "center",
              }}
            >
              {selectedContent.subtitle}
            </Typography>
            <Typography
              variant="body3"
              color="textSecondary"
              paragraph
              sx={{
                color: "black",
                textAlign: "center",
                fontSize: "28px",
                fontFamily: '"calibri", cursive',
              }}
            >
              {selectedContent.description}
            </Typography>

            <Button
              variant="contained"
              color="warning"
              to="/about"
              component={Link}
            >
              {selectedContent.buttonText}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ResortSection;
