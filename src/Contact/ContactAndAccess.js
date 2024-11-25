import React from "react";
import { Box, Typography, TextField, Grid, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const ContactAndAccess = ({ isEnglish }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        p: 1,
        borderRadius: 1,
        maxWidth: "1200px",
        mx: "auto",
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{ textAlign: "center", mb: 3, color: "textSecondary" }}
      >
        {isEnglish ? "We're here to help" : "Yardıma hazırız"}
      </Typography>
      <Typography
        variant="h5"
        sx={{ textAlign: "center", fontWeight: "bold", mb: 2 }}
      >
        {isEnglish
          ? "Contact Kep Homes & Travel"
          : "Kep Homes & Travel ile İletişime Geçin"}
      </Typography>

      <Grid container spacing={5} sx={{ mb: 2 }}>
        {/* Google Maps Container */}
        <Grid item xs={12} md={6} sx={{ pr: 2 }}>
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3186.5866809437956!2d31.99537057597769!3d36.62565447335547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dcbc5f447f1a8b%3A0xe11c4dbdcd7e5ff1!2sAvsallar%2C%2007410%20Alanya%2FAntalya!5e0!3m2!1str!2str!4v1699301461977!5m2!1str!2str"
            width="100%"
            height="300" // Yükseklik küçültüldü
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid>

        <Grid item xs={12} md={6} sx={{ pl: 2 }}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={4} textAlign="center">
              <LocationOnIcon sx={{ fontSize: 28, color: "#3b5998" }} />
              <Typography variant="body2" sx={{ fontWeight: "bold", mt: 0.5 }}>
                {isEnglish ? "Address" : "Adres"}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {isEnglish
                  ? "Avsallar, 07410 Alanya/Antalya"
                  : "Avsallar, 07410 Alanya/Antalya"}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4} textAlign="center">
              <EmailIcon sx={{ fontSize: 28, color: "#1DA1F2" }} />
              <Typography variant="body2" sx={{ fontWeight: "bold", mt: 0.5 }}>
                {isEnglish ? "Email" : "Email"}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                bilgi@kepenekinsaat.com
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4} textAlign="center">
              <PhoneIcon sx={{ fontSize: 28, color: "#FF0000" }} />
              <Typography variant="body2" sx={{ fontWeight: "bold", mt: 0.5 }}>
                {isEnglish ? "Phone" : "Telefon"}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                0 (242) 517 34 40
              </Typography>
            </Grid>
          </Grid>
          {/* Contact Form */}
          <Box component="form" sx={{ mt: 2 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label={isEnglish ? "Name" : "Adınız"}
                  placeholder={isEnglish ? "Enter your name" : "Adınızı girin"}
                  variant="outlined"
                  size="small"
                  sx={{ fontSize: "0.75rem" }}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label={isEnglish ? "Email" : "E-posta"}
                  placeholder={
                    isEnglish ? "Enter your email" : "E-posta adresinizi girin"
                  }
                  variant="outlined"
                  type="email"
                  size="small"
                  sx={{ fontSize: "0.75rem" }}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={isEnglish ? "Subject" : "Konu"}
                  placeholder={isEnglish ? "Enter the subject" : "Konuyu girin"}
                  variant="outlined"
                  size="small"
                  sx={{ fontSize: "0.75rem" }}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={isEnglish ? "Message" : "Mesaj"}
                  placeholder={
                    isEnglish ? "Enter your message" : "Mesajınızı girin"
                  }
                  variant="outlined"
                  multiline
                  rows={2}
                  size="small"
                  sx={{ fontSize: "0.75rem" }}
                  required
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                mt: 1,
                display: "block",
                mx: "auto",
                backgroundColor: "#00aaff",
                fontSize: "0.75rem",
                padding: "4px 12px",
              }}
            >
              {isEnglish ? "Submit" : "Gönder"}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactAndAccess;
