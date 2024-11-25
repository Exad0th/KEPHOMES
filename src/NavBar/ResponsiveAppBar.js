import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import kepLogo from "../ImgAKD/kepLogo.png";
import Estates from "../Home/Estates";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import LanguageIcon from "@mui/icons-material/Language";
import AddHomeIcon from "@mui/icons-material/AddHome";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { useTranslation } from "react-i18next";

const pages = [
  { key: "homePage", path: "/" },
  { key: "aboutUs", path: "/about" },
  { key: "services", path: "/services" },
  { key: "whatWeOffer", path: "/what-we-offer" },
  { key: "blog", path: "/blog" },
  { key: "contact", path: "/contact" },
];

function ResponsiveAppBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { t, i18n } = useTranslation();

  const [openDialog, setOpenDialog] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [language, setLanguage] = React.useState(i18n.language);

  const handleLanguageChange = (event) => {
    const value = event.target.value;
    setLanguage(value);
    i18n.changeLanguage(value);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "white", color: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                <Box
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  <List>
                    {pages.map((page) => (
                      <ListItem
                        button
                        key={page.key}
                        component={Link}
                        to={page.path}
                      >
                        <ListItemText primary={t(`navigation.${page.key}`)} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>

              <Box
                component="img"
                sx={{
                  height: 80,
                  width: 120,
                  mx: "auto",
                  display: "block",
                }}
                alt="kepLogo"
                src={kepLogo}
              />

              <Grid
                container
                justifyContent="center"
                alignItems="center"
                spacing={2}
                m={2}
              >
                <Grid item>
                  <FormControl
                    variant="standard"
                    sx={{
                      display: "flex",
                      flexDirection: "row", // İkonu ve açılır menüyü yatayda hizala
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <LanguageIcon sx={{ mr: 1, color: "#336699" }} />
                    <Select
                      value={language}
                      onChange={handleLanguageChange}
                      sx={{ minWidth: 120 }}
                    >
                      <MenuItem value="tr">Türkçe</MenuItem>
                      <MenuItem value="en">English</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    onClick={handleOpenDialog}
                    startIcon={<FlightTakeoffIcon />}
                    sx={{
                      background: "#336699",
                      color: "white",
                      borderRadius: "25px",
                      padding: "10px 20px",
                      fontWeight: "bold",
                      textTransform: "none",
                      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                      "&:hover": {
                        background: "#274777",
                      },
                    }}
                  >
                    {t("buttons.bookNow")}
                  </Button>
                </Grid>
              </Grid>
            </>
          ) : (
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Box
                  component="img"
                  sx={{
                    height: 80,
                    width: 120,
                    mr: 1,
                  }}
                  alt="kepLogo"
                  src={kepLogo}
                />
              </Grid>

              <Grid item>
                <Grid container spacing={2}>
                  {pages.map((page) => (
                    <Grid item key={page.key}>
                      <Button
                        component={Link}
                        to={page.path}
                        sx={{
                          color: "#FF6F61",
                          display: "block",
                          fontWeight: "bold",
                        }}
                      >
                        {t(`navigation.${page.key}`)}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              <Grid item>
                <Grid container spacing={2}>
                  <Grid item>
                    <FormControl
                      variant="standard"
                      sx={{
                        display: "flex",
                        flexDirection: "row", // İkonu ve açılır menüyü yatayda hizala
                        alignItems: "center",
                        justifyContent: "flex-start",
                      }}
                    >
                      <LanguageIcon sx={{ mr: 1, color: "#336699" }} />
                      <Select
                        value={language}
                        onChange={handleLanguageChange}
                        sx={{ minWidth: 120 }}
                      >
                        <MenuItem value="tr">Türkçe</MenuItem>
                        <MenuItem value="en">English</MenuItem>
                        <MenuItem value="de">Deutsch</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      onClick={handleOpenDialog}
                      startIcon={<FlightTakeoffIcon />}
                      sx={{
                        background: "#336699",
                        color: "white",
                        borderRadius: "25px",
                        padding: "10px 20px",
                        fontWeight: "bold",
                        textTransform: "none",
                        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                        "&:hover": {
                          background: "#274777",
                        },
                      }}
                    >
                      {t("buttons.bookNow")}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      component={Link}
                      to="/get-quote"
                      variant="contained"
                      startIcon={<AddHomeIcon />}
                      sx={{
                        background:
                          "linear-gradient(to right, #ff416c, #ff4b2b)",
                        color: "white",
                        borderRadius: "25px",
                        padding: "10px 20px",
                        fontWeight: "bold",
                        textTransform: "none",
                        "&:hover": {
                          background:
                            "linear-gradient(to right, #ff4b2b, #ff416c)",
                        },
                      }}
                    >
                      {t("buttons.listYourHome")}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </Container>

      {/* Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>
          {t("dialog.quickReservation")}
          <IconButton
            aria-label="close"
            onClick={handleCloseDialog}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Estates />
        </DialogContent>
      </Dialog>
    </AppBar>
  );
}

export default ResponsiveAppBar;
