import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import LogoImage from "./path-to-logo.png"; // Logonun dosya yolunu buraya ekleyin

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#1a1a1a", color: "#b0b0b0", py: 4, px: 3 }}>
      <Grid container spacing={4}>
        {/* Logo and Description */}
        <Grid item xs={12} md={3} sx={{ textAlign: "left" }}>
          <Box
            component="img"
            src={LogoImage}
            alt="Kep Homes & Travel Logo"
            sx={{ maxWidth: "200px", mb: 2 }}
          />
          <Typography
            variant="h6"
            gutterBottom
            sx={{ color: "#fff", fontWeight: "bold", mb: 1 }}
          >
            Your ultimate travel companion
          </Typography>
          <Typography variant="body2" sx={{ color: "#b0b0b0", mb: 2 }}>
            Ready to start your next adventure? Download KEP Homes & Travel now
            and join the thousands of travelers who have made us their go-to
            travel app.
          </Typography>
          <Button
            variant="text"
            sx={{ color: "#00aaff", textTransform: "none", fontWeight: "bold" }}
          >
            Details
          </Button>
        </Grid>

        {/* Social Media Links */}
        <Grid item xs={12} md={2}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ color: "#fff", textAlign: "left", mb: 2 }}
          >
            Social Media
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            sx={{ textAlign: "left", gap: 1 }}
          >
            <Button
              startIcon={<FacebookIcon />}
              variant="contained"
              sx={{
                backgroundColor: "#3b5998",
                color: "#fff",
                justifyContent: "center",
                width: "100%",
                minWidth: "150px",
                maxWidth: "180px",
                padding: "8px",
              }}
            >
              Facebook
            </Button>
            <Button
              startIcon={<InstagramIcon />}
              variant="contained"
              sx={{
                background:
                  "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                color: "#fff",
                justifyContent: "center",
                width: "100%",
                minWidth: "150px",
                maxWidth: "180px",
                padding: "8px",
              }}
            >
              Instagram
            </Button>
            <Button
              startIcon={<TwitterIcon />}
              variant="contained"
              sx={{
                backgroundColor: "#1DA1F2",
                color: "#fff",
                justifyContent: "center",
                width: "100%",
                minWidth: "150px",
                maxWidth: "180px",
                padding: "8px",
              }}
            >
              Twitter
            </Button>
            <Button
              startIcon={<YouTubeIcon />}
              variant="contained"
              sx={{
                backgroundColor: "#FF0000",
                color: "#fff",
                justifyContent: "center",
                width: "100%",
                minWidth: "150px",
                maxWidth: "180px",
                padding: "8px",
              }}
            >
              YouTube
            </Button>
          </Box>
        </Grid>

        {/* Useful Links */}
        <Grid item xs={12} md={2}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ color: "#fff", textAlign: "left", mb: 2 }}
          >
            Links
          </Typography>
          <Box sx={{ textAlign: "left" }}>
            <Typography variant="body2" sx={{ color: "#b0b0b0", mb: 1 }}>
              Home
            </Typography>
            <Typography variant="body2" sx={{ color: "#b0b0b0", mb: 1 }}>
              App Features
            </Typography>
            <Typography variant="body2" sx={{ color: "#b0b0b0", mb: 1 }}>
              Blog
            </Typography>
            <Typography variant="body2" sx={{ color: "#b0b0b0", mb: 1 }}>
              Announcements
            </Typography>
            <Typography variant="body2" sx={{ color: "#b0b0b0", mb: 1 }}>
              Help Center
            </Typography>
          </Box>
        </Grid>

        {/* Corporate Links */}
        <Grid item xs={12} md={2}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ color: "#fff", textAlign: "left", mb: 2 }}
          >
            Corporate
          </Typography>
          <Box sx={{ textAlign: "left" }}>
            <Typography variant="body2" sx={{ color: "#b0b0b0", mb: 1 }}>
              Contact
            </Typography>
            <Typography variant="body2" sx={{ color: "#b0b0b0", mb: 1 }}>
              Be a Partner
            </Typography>
            <Typography variant="body2" sx={{ color: "#b0b0b0", mb: 1 }}>
              Privacy Policy
            </Typography>
            <Typography variant="body2" sx={{ color: "#b0b0b0", mb: 1 }}>
              Cookie Policy
            </Typography>
            <Typography variant="body2" sx={{ color: "#b0b0b0", mb: 1 }}>
              FAQ
            </Typography>
            <Typography variant="body2" sx={{ color: "#b0b0b0", mb: 1 }}>
              About
            </Typography>
          </Box>
        </Grid>

        {/* Preferences and Contact */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom sx={{ color: "#fff", mb: 2 }}>
            Preferences
          </Typography>
          <Button
            variant="outlined"
            sx={{ color: "#fff", borderColor: "#fff", mr: 1, mb: 1 }}
          >
            EN
          </Button>
          <Button
            variant="outlined"
            sx={{ color: "#fff", borderColor: "#fff", mb: 1 }}
          >
            GBP
          </Button>

          <Typography variant="h6" sx={{ mt: 2, color: "#fff", mb: 1 }}>
            Chat with us!
          </Typography>
          <Typography variant="body2" sx={{ color: "#b0b0b0", mb: 2 }}>
            We are here to help you. Chat with us now.
          </Typography>
          <Button
            startIcon={<WhatsAppIcon />}
            variant="contained"
            sx={{
              mt: 1,
              backgroundColor: "#25D366",
              color: "#fff",
              justifyContent: "center",
              width: "100%",
              minWidth: "150px",
              maxWidth: "180px",
              padding: "8px",
            }}
          >
            WhatsApp
          </Button>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2 }}>
        <Button startIcon={<AppleIcon />} sx={{ color: "#b0b0b0" }} href="#">
          Download on the App Store
        </Button>
        <Button startIcon={<AndroidIcon />} sx={{ color: "#b0b0b0" }} href="#">
          Get it on Google Play
        </Button>
      </Box>

      <Typography
        variant="body2"
        align="center"
        sx={{ mt: 4, color: "#b0b0b0" }}
      >
        Copyright © 2024, Kep Homes & Travel | All Rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
