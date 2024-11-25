import React, { useState } from "react";
import { Grid, Box, Typography, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TRDeluxeSuit1 from "../ImgAKD/TRDeluxeSuit1.jpg";
import TRDeluxeSuit2 from "../ImgAKD/TRDeluxeSuit2.jpg";
import TRDeluxeSuit3 from "../ImgAKD/TRDeluxeSuit3.jpg";

const slides = [
  {
    image: TRDeluxeSuit1,
    title: "Hakan Bey",
    subtitle: "Antalya",
  },
  {
    image: TRDeluxeSuit2,
    title: "Rabia Hanım",
    subtitle: "Dubai",
  },
  {
    image: TRDeluxeSuit3,
    title: "Ahmet Bey",
    subtitle: "Amerika Birleşik Devletleri",
  },
];

function CustomSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <Grid
      container
      justifyContent="center"
      direction="column"
      alignItems="center"
      sx={{ mt: 4 }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 6,
          fontWeight: "bold",
          textAlign: "center",
          fontFamily: '"Segoe Print", cursive',
          color: "black",
        }}
      >
        Ev Sahiplerimizin Görüşleri
      </Typography>

      <Grid item xs={12} md={6} lg={4}>
        {/* Turuncu çerçeve eklemek için dış Box */}
        <Box
          sx={{
            border: "10px solid orange", // Turuncu çerçeve
            borderRadius: "12px", // Çerçeve köşelerini yuvarlama
            overflow: "hidden", // İç içe uyum için
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: 700,
              borderRadius: "12px",
              boxShadow: 5,
              overflow: "hidden",
              position: "relative",
              "@media (max-width: 452px)": {
                maxWidth: 452,
              },
            }}
          >
            {/* Sol ok butonu */}
            <IconButton
              onClick={prevSlide}
              sx={{
                position: "absolute",
                top: "50%",
                left: "12px",
                zIndex: 10,
                transform: "translateY(-50%)",
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                },
              }}
            >
              <ArrowBackIosIcon />
            </IconButton>

            {/* Sağ ok butonu */}
            <IconButton
              onClick={nextSlide}
              sx={{
                position: "absolute",
                top: "50%",
                right: "12px",
                zIndex: 10,
                transform: "translateY(-50%)",
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                },
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>

            {slides.map((slide, index) => (
              <Box
                key={index}
                sx={{
                  display: index === currentSlide ? "block" : "none",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "#fff",
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px",
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">
                    {slide.title}
                  </Typography>
                  <Typography variant="body2">{slide.subtitle}</Typography>
                </Box>

                <Box
                  component="img"
                  src={slide.image}
                  alt={slide.title}
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 0, // İç Box’ın köşelerini sıfırladık
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CustomSlider;
