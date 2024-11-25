import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const GetQuote = () => {
  const { t } = useTranslation(); // Çeviri fonksiyonu
  const regionalRentData = {
    Istanbul: {
      apartmentBase: 5000,
      villaBase: 200000,
      buildingBase: 20000,
      roomFactor: 1000,
    },
    Ankara: {
      apartmentBase: 3000,
      villaBase: 80000,
      buildingBase: 15000,
      roomFactor: 800,
    },
    Izmir: {
      apartmentBase: 4000,
      villaBase: 100000,
      buildingBase: 18000,
      roomFactor: 900,
    },
    Antalya: {
      apartmentBase: 4500,
      villaBase: 120000,
      buildingBase: 20000,
      roomFactor: 1200,
    },
    Mugla: {
      apartmentBase: 5000,
      villaBase: 150000,
      buildingBase: 25000,
      roomFactor: 1500,
    },
  };

  const [formData, setFormData] = useState({
    location: "Istanbul",
    propertyType: "",
    roomCount: "",
    squareMeters: "",
    amenities: [],
    apartmentCount: 10, // Varsayılan daire sayısı
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleAmenityChange = (amenity) => {
    const selectedAmenities = formData.amenities;
    if (selectedAmenities.includes(amenity)) {
      // Eğer zaten seçiliyse, kaldır.
      setFormData({
        ...formData,
        amenities: selectedAmenities.filter((item) => item !== amenity),
      });
    } else {
      // Eğer henüz seçilmediyse, en fazla 4 seçime izin ver.
      if (selectedAmenities.length < 4) {
        setFormData({
          ...formData,
          amenities: [...selectedAmenities, amenity],
        });
      }
    }
  };

  const calculateOffer = () => {
    const cityData = regionalRentData[formData.location] || {};
    const roomFactor = cityData.roomFactor || 0;
    const amenitiesFactor = formData.amenities.length * 10000;

    let basePrice = 0;

    if (formData.propertyType === "Apartment") {
      basePrice = cityData.apartmentBase * 10; // 100 m² varsayılan
      const roomCountIncrease =
        parseInt(formData.roomCount.split("+")[0]) * roomFactor;
      basePrice += roomCountIncrease;
    } else if (formData.propertyType === "Villa") {
      basePrice = cityData.villaBase;
      const roomCountIncrease =
        parseInt(formData.roomCount.split("+")[0]) * roomFactor;
      basePrice += roomCountIncrease;
    } else if (formData.propertyType === "Building") {
      basePrice = cityData.buildingBase * formData.apartmentCount;
    }

    return Math.round(basePrice + amenitiesFactor);
  };

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "32px",
        backgroundColor: "#F7F7F7",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        marginBottom: 4,
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <Typography
            variant="h5"
            sx={{ color: "#0056B3", fontWeight: "bold", marginBottom: "16px" }}
          >
            {t("earnings.find_out_earnings_title")}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#666", marginBottom: "24px" }}
          >
            {t("earnings.find_out_earnings_description")}
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>{t("propertyForm.location")}</InputLabel>
                <Select
                  value={formData.location}
                  onChange={(e) =>
                    handleInputChange("location", e.target.value)
                  }
                  label={t("propertyForm.location")}
                >
                  {Object.keys(regionalRentData).map((city) => (
                    <MenuItem value={city} key={city}>
                      {city}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>{t("propertyForm.propertyType")}</InputLabel>
                <Select
                  value={formData.propertyType}
                  onChange={(e) =>
                    handleInputChange("propertyType", e.target.value)
                  }
                  label={t("propertyForm.propertyType")}
                >
                  <MenuItem value="Apartment">
                    {t("propertyForm.apartment")}
                  </MenuItem>
                  <MenuItem value="Villa">{t("propertyForm.villa")}</MenuItem>
                  <MenuItem value="Building">
                    {t("propertyForm.entireBuilding")}
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {formData.propertyType === "Building" && (
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label={t("propertyForm.numberOfApartments")}
                  variant="outlined"
                  type="number"
                  value={formData.apartmentCount}
                  onChange={(e) =>
                    handleInputChange(
                      "apartmentCount",
                      parseInt(e.target.value)
                    )
                  }
                />
              </Grid>
            )}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>{t("propertyForm.roomCount")}</InputLabel>
                <Select
                  value={formData.roomCount}
                  onChange={(e) =>
                    handleInputChange("roomCount", e.target.value)
                  }
                  label={t("propertyForm.roomCount")}
                  disabled={formData.propertyType === "Building"}
                >
                  {["1+1", "2+1", "3+1", "4+2 üstü"].map((room) => (
                    <MenuItem value={room} key={room}>
                      {room}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2" sx={{ marginBottom: "8px" }}>
                {t("propertyForm.amenities")}
              </Typography>
              <Grid container spacing={1}>
                {[
                  "seaView",
                  "cityView",
                  "jacuzzi",
                  "balcony",
                  "elevator",
                  "garden",
                ].map((amenity) => (
                  <Grid item xs={6} sm={4} key={amenity}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.amenities.includes(amenity)}
                          onChange={() => handleAmenityChange(amenity)}
                        />
                      }
                      label={t(`propertyForm.${amenity}`)}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={5}>
          <Box
            sx={{
              backgroundColor: "#0056B3",
              color: "#FFF",
              padding: "24px",
              borderRadius: "8px",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginBottom: "16px" }}
            >
              {t("earnings.how_much_can_you_earn")}
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginBottom: "24px", lineHeight: "1.6" }}
            >
              {t("earnings.earnings_description")}
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              {calculateOffer()} TL*
            </Typography>
            <Typography variant="subtitle2" sx={{ marginBottom: "16px" }}>
              {t("earnings.monthly_occupancy_rate")}
            </Typography>
            <Typography
              variant="caption"
              sx={{ display: "block", marginBottom: "16px" }}
            >
              {t("earnings.price_disclaimer")}
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FFF",
                color: "#0056B3",
                fontWeight: "bold",
                padding: "12px 16px",
                "&:hover": {
                  backgroundColor: "#E3F2FD",
                },
              }}
            >
              {t("buttons.getOfferNow")}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GetQuote;
