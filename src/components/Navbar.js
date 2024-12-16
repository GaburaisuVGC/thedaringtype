import React, { useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ColorModeContext } from "../context/ThemeContext";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Avatar,
  Box,
  Switch,
  useTheme,
  Link,
} from "@mui/material";
import {
  Brightness4,
  Brightness7,
  Menu as MenuIcon,
  Language,
} from "@mui/icons-material";
import NavLinks from "./NavLinks";
import ContactModal from "./ContactModal";

function Navbar({ showLanguageSelector = true, showThemeSwitch = true }) {
  const { i18n } = useTranslation();
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const [isScrolled, setIsScrolled] = useState(false);

  const [anchorElNav, setAnchorElNav] = useState(null);

  const [anchorElLang, setAnchorElLang] = useState(null);

  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleOpenContactModal = () => {
    setContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setContactModalOpen(false);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenLangMenu = (event) => {
    setAnchorElLang(event.currentTarget);
  };

  const handleCloseLangMenu = () => {
    setAnchorElLang(null);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    handleCloseLangMenu();
  };

  // Gestion du défilement pour ajuster la hauteur de la navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Nettoyage de l'événement lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          top: "-1px",
          marginRight: "0px",
          background: "transparent",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            height: isScrolled ? 80 : 100,
            transition: "height 0.3s ease-in-out",
            boxShadow: "none",
            background:
              "linear-gradient(90deg, rgba(181, 204, 220, 1) 10%, rgba(216, 212, 233, 1) 70%, rgba(239, 237, 234, 1) 85%)",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(90deg, rgba(181, 204, 220, 1) 10%, rgba(216, 212, 233, 1) 70%, rgba(239, 237, 234, 1) 85%)",
              opacity: isScrolled ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
              zIndex: -1,
            },
          }}
        >
          {/* Icône du menu pour les écrans petits */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleOpenNavMenu}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Titre ou logo */}
          <Link href="/" underline="none" color="inherit" sx={{ flexGrow: 1 }}>
            <Typography variant="h6" sx={{ fontFamily: "Josefin Sans" }}>
              THE DARING TYPE
            </Typography>
          </Link>

          {/* Menu burger pour les petits écrans */}
          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { md: "none" } }}
          >
            <NavLinks
              isMobile
              handleCloseNavMenu={handleCloseNavMenu}
              handleOpenContactModal={handleOpenContactModal}
            />
          </Menu>

          {/* Liens de navigation pour les écrans moyens et grands */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              height: "100%",
            }}
          >
            <NavLinks handleOpenContactModal={handleOpenContactModal} />
          </Box>

          {/* Sélecteur de langue avec menu déroulant */}
          {showLanguageSelector && (
            <>
              <IconButton color="inherit" onClick={handleOpenLangMenu}>
                <Language />
              </IconButton>
              <Menu
                anchorEl={anchorElLang}
                open={Boolean(anchorElLang)}
                onClose={handleCloseLangMenu}
              >
                <MenuItem onClick={() => changeLanguage("fr")}>
                  <Avatar
                    src="/flags/fr.png"
                    alt="Français"
                    sx={{ width: 24, height: 24, mr: 1 }}
                  />
                  Français
                </MenuItem>
                <MenuItem onClick={() => changeLanguage("en")}>
                  <Avatar
                    src="/flags/gb.png"
                    alt="English"
                    sx={{ width: 24, height: 24, mr: 1 }}
                  />
                  English
                </MenuItem>
              </Menu>
            </>
          )}

          {/* Interrupteur pour le mode clair/sombre avec icône */}
          {showThemeSwitch && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Switch
                checked={theme.palette.mode === "dark"}
                onChange={colorMode.toggleColorMode}
                color="default"
                inputProps={{ "aria-label": "toggle theme" }}
              />
              {theme.palette.mode === "dark" ? (
                <Brightness4 sx={{ mr: 1 }} />
              ) : (
                <Brightness7 sx={{ mr: 1 }} />
              )}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Contact Modal */}
      <ContactModal open={contactModalOpen} onClose={handleCloseContactModal} />
    </>
  );
}

export default Navbar;
