import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import luxuryImage from "../images/alanya.png"; // Resmi kullanacağımız alan
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

const Discover = () => {
  const { t } = useTranslation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // `listItems` çeviri anahtarının bir dizi olup olmadığını kontrol ediyoruz
  const listItems = t("listItems", { returnObjects: true });

  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${luxuryImage})`, // Arka plan olarak resmi ekliyoruz
        backgroundSize: "cover", // Resmi kutuya sığdırıyoruz
        backgroundPosition: "center", // Resmi ortalıyoruz
        backgroundRepeat: "no-repeat", // Tekrarlamasını engelliyoruz
        width: "100%", // Genişliği tam sayfa yapıyoruz
        height: isMobile ? "500px" : "700px", // Ekran boyutuna göre yüksekliği ayarlıyoruz
        display: "flex", // İçeriği hizalamak için Flexbox kullanıyoruz
        alignItems: "center", // İçeriği dikeyde ortalıyoruz
        justifyContent: "center", // İçeriği yatayda ortalıyoruz
        padding: "20px", // İçerik kenarlarından biraz boşluk bırakıyoruz
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Arka planın üstünde içerik için yarı saydam bir kutu
          borderRadius: "10px", // Köşeleri yuvarlıyoruz
          padding: "20px", // İçeriği biraz boşlukla sarıyoruz
          maxWidth: "800px", // Kutunun maksimum genişliğini belirtiyoruz
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h4" color="primary" gutterBottom>
            {t("discoverTitle")}
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 750 }}
          >
            {t("mainTitle")}
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            paragraph
            sx={{ fontSize: "14px", color: "#666" }}
          >
            {t("description")}
          </Typography>
          <Box component="ul" sx={{ pl: 2 }}>
            {Array.isArray(listItems)
              ? listItems.map((text, index) => (
                  <Box
                    component="li"
                    display="flex"
                    alignItems="center"
                    key={index}
                  >
                    <CheckCircleOutlineIcon
                      sx={{ mr: 1, color: "textSecondary" }}
                    />
                    <Typography variant="body1" color="textSecondary">
                      {text}
                    </Typography>
                  </Box>
                ))
              : null}
          </Box>
          <Button
            variant="contained"
            sx={{
              mt: 3,
              backgroundColor:
                "linear-gradient(90deg, #ff5858 0%, #f09819 100%)",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "8px",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor:
                  "linear-gradient(90deg, #f09819 0%, #ff5858 100%)",
              },
            }}
          >
            {t("buttonText")}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Discover;
