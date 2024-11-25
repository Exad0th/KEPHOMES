import * as React from "react";
import { styled } from "@mui/material/styles";
import { Breadcrumbs, Link, Typography, Box, Grid } from "@mui/material";
import luxuryImage from "../images/HavadanGorsel.jpg";

const StyledBreadcrumb = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.text.secondary,
  "&:hover": {
    textDecoration: "underline",
  },
}));

const TitleAndDesc = ({ isEnglish, isTurkish }) => {
  const content = isEnglish
    ? {
        breadcrumbHome: "Home",
        breadcrumbCurrent: "About",
        pageTitle: "About Us",
        headline:
          "Taking Alanya’s Housing Standards to the Next Level with Our Kep Travel Project",
        paragraph1:
          "At Kepenek Construction, we have been serving the construction, real estate, and tourism accommodation sectors in Alanya for many years. We believe that success in every industry stems from creativity and a unique approach. Innovation, a visionary perspective, and a customer-centered focus are the core qualities that set industry leaders apart from the rest.",
        paragraph2:
          "Our Kep Travel represents our ambition to elevate our company to the next level. Targeting all residential properties in the Alanya region, this project will soon introduce you to apartments located in a wide range of prime locations, designed to exceed industry standards and cater specifically to your needs. We are dedicated to providing an exceptional blend of comfort and quality to meet the highest expectations of our clients.",
        imageCaption: "Best Luxury Rooms Hotels",
      }
    : {
        breadcrumbHome: "Ana Sayfa",
        breadcrumbCurrent: "Hakkımızda",
        pageTitle: "Hakkımızda",
        headline:
          "Kepenek İnşaat: Alanya’da İnşaat, Emlak ve Turizmde Güvenilir Çözüm Ortağınız",
        paragraph1:
          "Kepenek İnşaat olarak inşaat, emlak ve turizm konaklama alanlarında Alanya’da  uzun yıllardır hizmet vermekteyiz. Tüm sektörlerin dinamiğinin yaratıcılık ve yaklaşım farkı olduğu inancındayız. Sektörlerin gelişimini sağlayan öncüleri diğerlerinden farklı yapan unsurun, yenilikçilik, vizyon farkı ve müşteri odaklılık olduğuna inanıyoruz. ",
        headline1:
          "Kep Travel ile Alanya’daki Konutlara Yeni Bir Standart Getiriyoruz",
        paragraph2:
          "Kep Travel, şirketimizi bir üst seviyeye taşıma hedefimizi temsil ediyor. Alanya bölgesindeki tüm konutları kapsayan bu projede, sektör standartlarının üzerinde, isteğinize özel, geniş bir yelpazede konumlandırılmış daireler yakında sizlere sunulacaktır. Müşterilerimizin beklentilerini en üst düzeyde karşılamayı amaçlayan bu projede, konfor ve kaliteyi bir arada sunmaya hazırız.",
        imageCaption: "En Lüks Odalar Otelleri",
      };

  return (
    <Box sx={{ my: 5, mx: 3 }}>
      <Box
        sx={{
          backgroundColor: "lightgray",
          py: 5,
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{ justifyContent: "center", display: "flex", my: 2 }}
        >
          <StyledBreadcrumb href="/" underline="none">
            {content.breadcrumbHome}
          </StyledBreadcrumb>
          <Typography color="textPrimary">
            {content.breadcrumbCurrent}
          </Typography>
        </Breadcrumbs>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
            fontWeight: 400,
            lineHeight: 1.5,
            color: "#212529",
          }}
        >
          {content.pageTitle}
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Typography
            variant="h4"
            component="h3"
            gutterBottom
            sx={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
              fontWeight: 400,
              lineHeight: 1.5,
              color: "#212529",
              marginTop: "10%",
            }}
          >
            {content.headline}
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
              fontWeight: 400,
              lineHeight: 1.5,
              color: "#212529",
              top: "16px",
            }}
          >
            {content.paragraph1}
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
              fontWeight: 400,
              lineHeight: 1.5,
              color: "#212529",
              top: "16px",
            }}
          >
            {content.paragraph2}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ position: "relative" }}>
            <img
              src={luxuryImage}
              alt="Luxury Room"
              style={{ width: "100%", borderRadius: "8px" }}
            />
            {/* <Typography
              sx={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '8px',
                borderRadius: '4px',
              }}
              variant="h6"
            >
              {content.imageCaption}
            </Typography> */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TitleAndDesc;
