import React from "react";
import { Container, Box, Typography, Button, Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTheme } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  const theme = useTheme();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const anchor = document.querySelector(location.hash);
      if (anchor) {
        const yOffset = -80;
        const yPosition = anchor.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
          top: yPosition,
          behavior: "smooth",
        });
      }
    }
  }, [location.pathname, location.hash]); 

  return (
    <Box sx={{ fontFamily: "Josefin Sans" }}>
      <Navbar showLanguageSelector={false} showThemeSwitch={false} />

      {/* Hero */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "100vh", md: "80vh" },
          "@media (orientation: landscape) and (max-width:980px)": {
            height: "200vh",
          },
          background:
            "linear-gradient(90deg, rgba(181,204,220,1) 10%, rgba(216,212,233,1) 70%, rgba(239,237,234,1) 85%)",
          color: "#ffffff",
          marginTop: { xs: "0px", md: "-5vh" },
          paddingTop: { xs: "50px", md: "100px" },
          boxSizing: "border-box",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
        }}
      >
        {/* Titre principal */}
        <Box sx={{ zIndex: 2, mb: { xs: "50px", md: 4 }, mt: { xs: 0, md: 2 } }}>
          <Typography
            variant="h1"
            component="div"
            gutterBottom
            sx={{
              lineHeight: 0.5,
              color: "#ffffff",
              fontSize: { xs: "3.5rem", md: "5rem" },
              fontWeight: "normal",
            }}
          >
            <Box
              component="span"
              sx={{ fontFamily: "Diphylleia", fontWeight: "normal" }}
            >
              Osez{" "}
            </Box>
            <Box
              component="span"
              sx={{ fontFamily: "Josefin Sans", fontWeight: "bold" }}
            >
              faire
            </Box>
          </Typography>
          <Typography
            variant="h1"
            component="div"
            gutterBottom
            sx={{
              lineHeight: 1,
              color: "#ffffff",
              fontSize: { xs: "3.5rem", md: "5rem" },
              fontWeight: "normal",
            }}
          >
            <Box
              component="span"
              sx={{ fontFamily: "Josefin Sans", fontWeight: "bold" }}
            >
              la{" "}
            </Box>
            <Box
              component="span"
              sx={{ fontFamily: "Diphylleia", fontWeight: "normal" }}
            >
              différence
            </Box>
            <Box
              component="span"
              sx={{ fontFamily: "Josefin Sans", fontWeight: "bold" }}
            >
              .
            </Box>
          </Typography>
        </Box>

        {/* Bloc "Conseil Carrière" etc. */}
        <Box
          sx={{
            position: { xs: "static", md: "absolute" },
            left: { xs: "auto", md: "10%" },
            bottom: { xs: "auto", md: "15%" },
            width: { xs: "100%", md: "auto" },
            textAlign: "left",
            pl: { xs: 2, md: 0 },
            color: "#ffffff",
            transform: "translateY(100px)",
            opacity: 0,
            animation: "slideUp 0.8s ease-out 1s forwards",
            "@keyframes slideUp": {
              "0%": {
                transform: "translateY(100px)",
                opacity: 0,
                visibility: "hidden",
              },
              "100%": {
                transform: "translateY(0)",
                opacity: 1,
                visibility: "visible",
              },
            },
            visibility: "hidden",
          }}
        >
          <Typography
            variant="h6"
            component="h3"
            gutterBottom
            sx={{ fontFamily: "Diphylleia", fontWeight: "bold" }}
          >
            Conseil Carrière
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: "Josefin Sans" }}>
            Marketing • Retail • Education
          </Typography>

          <Box sx={{ mt: 2 }} />

          <Typography
            variant="h6"
            component="h3"
            gutterBottom
            sx={{ fontFamily: "Diphylleia", fontWeight: "bold" }}
          >
            Conseil Inclusion des marques
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: "Josefin Sans" }}>
            dans l’industrie du luxe et de la cosmétique
          </Typography>
        </Box>

        {/* CTA du Hero */}
        <Box
          sx={{
            zIndex: 2,
            mt: { xs: 8, md: 2 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            href="/services"
            rel="noopener noreferrer"
            sx={{
              width: { xs: "90%", sm: "auto" },
              maxWidth: "300px",
              fontFamily: "Josefin Sans",
              backgroundColor: "#a2adbb",
              color: "#ffffff",
              lineHeight: "1.5",
              padding: "10px 20px",
              textTransform: "none",
              fontSize: "1.2rem",
              borderColor: "#a2adbb",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#88929e",
                color: "#e6e6e6",
                boxShadow: "none",
              },
              borderRadius: "8px",
            }}
          >
            Découvrir
          </Button>
        </Box>
      </Box>

      {/* Section "À propos de moi" */}
      <Box
        sx={{
          width: "100%",
          padding: { xs: 2, md: 8 },
          backgroundColor: "#ffffff",
          boxSizing: "border-box",
          overflow: "hidden",
          fontFamily: "Josefin Sans",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  boxSizing: "border-box",
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src="/images/diana1.jpg"
                  alt="Section Droite"
                  sx={{
                    width: "100%",
                    maxWidth: "400px",
                    height: "auto",
                    borderRadius: "25px",
                    boxShadow: theme.shadows[3],
                    zIndex: 3,
                    display: "block",
                    boxSizing: "border-box",
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
              <Box
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  boxSizing: "border-box",
                  overflow: "hidden",
                  fontFamily: "Josefin Sans",
                }}
              >
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  sx={{
                    fontFamily: "Diphylleia",
                    fontWeight: "bold",
                    overflow: "hidden",
                    color: "#a2adbb",
                  }}
                >
                  Hello !
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
                >
                  Chez The Daring Type, je vous aide à transformer vos
                  aspirations en projets concrets grâce à une approche basée sur
                  l’insight : rendre simples des sujets complexes pour que vous
                  passiez de “Par où commencer ?” à “Incroyable, je peux
                  vraiment y arriver !” au traver ’une expérience
                  professionnelle et personnelle dans l’industrie.
                </Typography>
                <Typography
                  variant="body1"
                  component="h3"
                  sx={{
                    fontFamily: "Josefin Sans",
                    fontWeight: "bold",
                    color: "#7f7f7f",
                  }}
                >
                  J’accompagne :
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f", mb: 0 }}
                >
                  Les talents : en les guidant vers des carrières alignées avec
                  leurs ambitions.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
                >
                  Les entreprises : en les conseillant sur les meilleures
                  pratiques et stratégies en inclusion et diversité.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
                >
                  Je suis Diana Vilsaint, experte en marketing, diplômée en
                  management international et de l’ESCP Europe, spécialisée en
                  Marketing & Communication. Avec plus de dix ans d’expérience
                  dans la cosmétique, le luxe, et la mode, j’ai occupé des
                  postes clés entre le marketing, le retail et l’éducation,
                  notamment au Comex d’une entreprise internationale en tant que
                  Directrice Marketing & Communication.
                </Typography>
                {/* <Typography
                  variant="h6"
                  component="h3"
                  gutterBottom
                  sx={{ fontFamily: 'Josefin Sans', fontWeight: 'bold', color: '#7f7f7f' }}
                >
                  Une expertise basée sur l’insight
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontFamily: 'Josefin Sans', color: '#7f7f7f' }}>
                Mon approche repose sur la notion d’insight, une vision éclairée et intuitive des enjeux actuels. J’accompagne aussi bien les talents, en les aidant à atteindre leurs ambitions professionnelles, que les entreprises, en proposant des workshops sur les meilleures pratiques en inclusion et diversité. 
                </Typography> */}
                <Button
                  variant="contained"
                  href="/approach"
                  rel="noopener noreferrer"
                  sx={{
                    mt: 2,
                    width: { xs: "80%", sm: "auto" },
                    alignSelf: { xs: "center", md: "flex-start" },
                    maxWidth: "300px",
                    fontFamily: "Josefin Sans",
                    backgroundColor: "#b5ccdc",
                    color: "#ffffff",
                    boxShadow: "none",
                    lineHeight: "1.5",
                    padding: "10px 20px",
                    textTransform: "none",
                    fontSize: "1.2rem",
                    borderColor: "#a2adbb",
                    "&:hover": {
                      backgroundColor: "#97aab8",
                      color: "#e6e6e6",
                      boxShadow: "none",
                    },
                    borderRadius: "16px",
                  }}
                >
                  Mon approche
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Section Coaching & Accompagnement Stratégique */}
      <Box
        sx={{
          width: "100%",
          padding: { xs: 2, md: 8 },
          backgroundColor: "#f9f9f9",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              fontFamily: "Diphylleia",
              fontWeight: "bold",
              textAlign: { xs: "center", md: "left" },
              color: "#7f7f7f",
            }}
          >
            Coaching & conseil stratégique
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            Quel que soit votre point de départ, mon objectif est de vous donner
            des outils concrets, des conseils clairs et le coup de pouce
            nécessaire pour oser et avancer vers vos objectifs.
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <Box
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  boxSizing: "border-box",
                  overflow: "hidden",
                }}
              >
                <Typography
                  variant="body1"
                  component="h3"
                  sx={{
                    fontFamily: "Josefin Sans",
                    fontWeight: "bold",
                    color: "#7f7f7f",
                  }}
                >
                  Pour les talents
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
                >
                  Je vous aide à naviguer dans des secteurs exigeants et en
                  constante évolution, en vous donnant les outils nécessaires
                  pour construire une carrière alignée avec vos ambitions.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={12}>
              <Box
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  boxSizing: "border-box",
                  overflow: "hidden",
                }}
              >
                <Typography
                  variant="body1"
                  component="h3"
                  sx={{
                    fontFamily: "Josefin Sans",
                    fontWeight: "bold",
                    color: "#7f7f7f",
                  }}
                >
                  Pour les professionnels
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
                >
                  J’interviens auprès des écoles et des entreprises pour initier
                  des changements stratégiques sur des sujets d’inclusion et de
                  diversité multiculturel, dans un société toujours plus
                  cosmopolite où prendre le bon virage le plus tôt possible est
                  une nécessité.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ textAlign: { xs: "center", md: "left" }, mt: 4 }}>
            <Button
              variant="contained"
              href="/services"
              sx={{
                width: { xs: "80%", sm: "auto" },
                maxWidth: "300px",
                fontFamily: "Josefin Sans",
                backgroundColor: "#a2adbb",
                color: "#ffffff",
                boxShadow: "none",
                lineHeight: "1.5",
                padding: "10px 20px",
                textTransform: "none",
                fontSize: "1.2rem",
                borderColor: "#a2adbb",
                "&:hover": {
                  backgroundColor: "#88929e",
                  color: "#e6e6e6",
                  boxShadow: "none",
                },
                borderRadius: "8px",
              }}
            >
              Mes prestations
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Deuxième Section "À propos de moi" */}
      <Box
        id="about"
        sx={{
          width: "100%",
          padding: { xs: 2, md: 8 },
          backgroundColor: "#ffffff",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  boxSizing: "border-box",
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src="/images/diana3.jpg"
                  alt="Section Gauche"
                  sx={{
                    width: "100%",
                    maxWidth: "400px",
                    height: "auto",
                    borderRadius: "25px",
                    boxShadow: theme.shadows[3],
                    zIndex: 3,
                    display: "block",
                    boxSizing: "border-box",
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
              <Box
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  boxSizing: "border-box",
                  overflow: "hidden",
                }}
              >
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  sx={{
                    fontFamily: "Diphylleia",
                    fontWeight: "bold",
                    overflow: "hidden",
                    color: "#7f7f7f",
                  }}
                >
                  À propos
                </Typography>
                <Typography
                  variant="body1"
                  component="h2"
                  gutterBottom
                  sx={{
                    fontFamily: "Josefin Sans",
                    overflow: "hidden",
                    color: "#7f7f7f",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                  }}
                >
                  De directrice marketing & communication à l’accompagnement
                  personnalisé.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
                >
                  Après avoir exercé en tant que Directrice Marketing et
                  Communication pour une multinationale dans le secteur de la
                  beauté, j’ai également accompagné plusieurs entreprises
                  françaises dans leur croissance et leur positionnement premium
                  et inclusif. Ces expériences m'ont permis d'acquérir une
                  compréhension approfondie des défis stratégiques,
                  opérationnels et humains des marques de toutes tailles.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
                >
                  Au travers de The Daring Type, mon but est de partager ces
                  connaissances et d’inspirer ceux qui souhaitent se lancer ou
                  progresser dans ces secteurs en vous donnant une vision
                  d’insider.
                </Typography>
                <Button
                  variant="contained"
                  href="/approach"
                  rel="noopener noreferrer"
                  sx={{
                    mt: 2,
                    width: { xs: "80%", sm: "auto" },
                    alignSelf: { xs: "center", md: "flex-start" },
                    maxWidth: "300px",
                    fontFamily: "Josefin Sans",
                    backgroundColor: "#a2adbb",
                    color: "#ffffff",
                    boxShadow: "none",
                    lineHeight: "1.5",
                    padding: "10px 20px",
                    textTransform: "none",
                    fontSize: "1.2rem",
                    borderColor: "#a2adbb",
                    "&:hover": {
                      backgroundColor: "#88929e",
                      color: "#e6e6e6",
                      boxShadow: "none",
                    },
                    borderRadius: "8px",
                  }}
                >
                  Découvrir mon approche
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

export default Home;
