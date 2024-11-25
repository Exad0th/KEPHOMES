import React from "react";
import {
  Grid,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import TRDeluxeSuit1 from "../ImgAKD/TRDeluxeSuit1.jpg";
import TRDeluxeSuit2 from "../ImgAKD/TRDeluxeSuit2.jpg";
import TRDeluxeSuit3 from "../ImgAKD/TRDeluxeSuit3.jpg";

function CustomSlider() {
  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9", // Açık gri arka plan
        padding: "60px 20px", // Daha fazla boşluk
        borderRadius: "12px", // Kutuyu yuvarlama
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Hafif gölge
        margin: "40px auto",
        maxWidth: "1200px", // Genişlik sınırı
      }}
    >
      <Grid
        container
        spacing={6}
        justifyContent="center"
        alignItems="center"
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Görseller bölümü */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box
                component="img"
                src={TRDeluxeSuit1}
                alt="Havuz"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "12px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)", // Hover zoom efekti
                  },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Box
                component="img"
                src={TRDeluxeSuit2}
                alt="Fitness"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "12px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Box
                component="img"
                src={TRDeluxeSuit3}
                alt="Mutfak"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "12px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Box
                component="img"
                src={TRDeluxeSuit1}
                alt="Oturma Odası"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "12px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* Yazılar ve listeler bölümü */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 3,
              color: "#2c3e50", // Koyu renk başlık
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Eviniz İçin Her Şey Düşünüldü!
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: "#7f8c8d", // Açık gri metin
              lineHeight: 1.8,
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            Mükemmeliyetin her detayda hissedildiği bir rezidans deneyimi
            sunuyoruz. Misafirlerimizin konforunu en üst düzeye çıkarmak için
            özel olarak tasarlanmış modern yaşam alanlarımız, şıklığı ve
            işlevselliği bir araya getiriyor.
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <List>
                <ListItem>
                  <ListItemText
                    primary="✓ Yüksek Hızlı İnternet"
                    primaryTypographyProps={{ fontWeight: "bold" }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="✓ Beyaz Eşyalar ve Küçük Ev Aletleri"
                    primaryTypographyProps={{ fontWeight: "bold" }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="✓ Ev Gereçleri"
                    primaryTypographyProps={{ fontWeight: "bold" }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="✓ Temizlik Hizmetleri"
                    primaryTypographyProps={{ fontWeight: "bold" }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="✓ Beyaz Tekstil Ürünleri"
                    primaryTypographyProps={{ fontWeight: "bold" }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="✓ Hoşgeldin Kutusu"
                    primaryTypographyProps={{ fontWeight: "bold" }}
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={6}>
              <List>
                <ListItem>
                  <ListItemText
                    primary="✓ Spa ve Wellness Merkezi"
                    primaryTypographyProps={{ fontWeight: "bold" }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="✓ Yüzme Havuzu"
                    primaryTypographyProps={{ fontWeight: "bold" }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="✓ Spor Salonu"
                    primaryTypographyProps={{ fontWeight: "bold" }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="✓ Çocuk Oyun Alanı"
                    primaryTypographyProps={{ fontWeight: "bold" }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="✓ Ortak Yaşam Alanları"
                    primaryTypographyProps={{ fontWeight: "bold" }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="✓ 7/24 Güvenlik Hizmeti"
                    primaryTypographyProps={{ fontWeight: "bold" }}
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CustomSlider;
