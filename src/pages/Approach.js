import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTheme } from "@mui/material/styles";

function Approach() {
  const theme = useTheme();

  return (
    <Box sx={{ fontFamily: "Josefin Sans" }}>
      <Navbar showLanguageSelector={false} showThemeSwitch={false} />

      {/* Première section */}
      <Box
        sx={{
          width: "100%",
          marginTop: "100px",
          padding: { xs: 2, md: 8 },
          backgroundColor: "#ffffff",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
              <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  sx={{
                    fontFamily: "Diphylleia",
                    fontWeight: "bold",
                    color: "#a2adbb",
                    overflowY: "hidden",
                  }}
                >
                  Une approche basée sur l’<i>insight</i>
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: "#7f7f7f" }}>
                  Le mot <i>Insight</i> vient de l'anglais, où il signifie
                  littéralement « vue intérieure » ou « compréhension profonde
                  ». Son origine remonte au vieil anglais <i>insīh(t)</i>,
                  combinant les termes <i>in-</i> (à l’intérieur) et{" "}
                  <i>sīh(t)</i> (vision). Par extension, il désigne une
                  compréhension intuitive ou un éclairage particulier sur une
                  situation, une capacité à percevoir ce qui est essentiel mais
                  souvent invisible aux autres.
                </Typography>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{
                    fontFamily: "Diphylleia",
                    fontWeight: "bold",
                    color: "#a2adbb",
                    mt: 4,
                    overflowY: "hidden",
                  }}
                >
                  Mon approche basée sur l’insight personnel et professionnel
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: "#7f7f7f" }}>
                  Mon approche repose sur cette notion d’insight : une
                  compréhension fine, à la fois personnelle et professionnelle,
                  des enjeux et des opportunités qui façonnent aujourd’hui
                  l'industrie du luxe, de la cosmétique, sur des fonctions
                  marketing, communication, retail et éducation. Forte de plus
                  de dix ans d’expérience à différents postes dans ces secteurs,
                  je propose un accompagnement qui va au-delà des solutions
                  préconçues.
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: "#7f7f7f" }}>
                  L’insight, c’est aussi la capacité de faire émerger des
                  stratégies pertinentes et adaptées aux spécificités de chacun.
                  Que vous soyez un talent souhaitant se développer dans sa
                  carrière, ou une entreprise en quête de positionnement
                  inclusif, mon rôle est de vous apporter un regard réaliste,
                  fondé sur une expertise éprouvée et une compréhension
                  intuitive des dynamiques du marché.
                </Typography>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{
                    fontFamily: "Diphylleia",
                    fontWeight: "bold",
                    color: "#a2adbb",
                    mt: 4,
                    overflowY: "hidden",
                  }}
                >
                  Pourquoi choisir un accompagnement basé sur l’insight ?
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: "#7f7f7f" }}>
                  Parce qu’il s’agit d’une approche qui ne se limite pas à la
                  théorie : elle va à la racine de ce qui compte vraiment, pour
                  vous et pour votre projet. Mon but est de vous aider à trouver
                  et incarner votre propre pertinence et unicité dans un secteur
                  en constante évolution.
                </Typography>
              </Box>
            </Grid>

            {/* Image */}
            <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  boxSizing: "border-box",
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src="/images/diana4.jpg"
                  alt="Approche"
                  sx={{
                    width: "100%",
                    maxWidth: "400px",
                    height: "auto",
                    borderRadius: "25px",
                    boxShadow: theme.shadows[3],
                    display: "block",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Deuxième section */}
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
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography
              variant={{ xs: "h5", md: "h4" }}
              component="h2"
              gutterBottom
              sx={{
                fontFamily: "Diphylleia",
                fontWeight: "bold",
                color: "#7f7f7f",
              }}
            >
              Valeurs & engagements
            </Typography>
          </Box>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: "relative", mb: 6, overflowY: "hidden" }}>
                {/* 
                <Typography
                  variant="h1"
                  component="div"
                  sx={{
                    position: 'absolute',
                    top: '-20px',
                    left: '-10px',
                    fontSize: '120px',
                    fontWeight: 'bold',
                    color: '#e4eff7',
                    zIndex: 1,
                  }}
                >
                  #1
                </Typography>
                */}
                <Box sx={{ position: "relative", zIndex: 2 }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontFamily: "Diphylleia",
                      fontWeight: "bold",
                      color: "#7f7f7f",
                    }}
                  >
                    1. Excellence & Expertise
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ color: "#7f7f7f" }}
                  >
                    Forte de plus de 10 ans d’expérience dans les secteurs de la
                    cosmétique, du luxe et de la mode, j’apporte un savoir-faire
                    éprouvé et une compréhension approfondie des attentes et
                    dynamiques de ces industries.
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ position: "relative", mb: 6, overflowY: "hidden" }}>
                {/*
                <Typography
                  variant="h1"
                  component="div"
                  sx={{
                    position: 'absolute',
                    top: '-20px',
                    left: '-10px',
                    fontSize: '120px',
                    fontWeight: 'bold',
                    color: '#e4eff7',
                    zIndex: 1,
                  }}
                >
                  #2
                </Typography>
                */}
                <Box sx={{ position: "relative", zIndex: 2 }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontFamily: "Diphylleia",
                      fontWeight: "bold",
                      color: "#7f7f7f",
                    }}
                  >
                    2. Authenticité & Transparence
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ color: "#7f7f7f" }}
                  >
                    Je privilégie une approche honnête et transparente, en
                    partageant des recommandations sincères et en apportant des
                    conseils stratégiques sans détour.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ position: "relative", mb: 6, overflowY: "hidden" }}>
                {/*
                <Typography
                  variant="h1"
                  component="div"
                  sx={{
                    position: 'absolute',
                    top: '-20px',
                    left: '-10px',
                    fontSize: '120px',
                    fontWeight: 'bold',
                    color: '#e4eff7',
                    zIndex: 1,
                  }}
                >
                  #3
                </Typography>
                */}
                <Box sx={{ position: "relative", zIndex: 2 }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontFamily: "Diphylleia",
                      fontWeight: "bold",
                      color: "#7f7f7f",
                    }}
                  >
                    3. Inclusivité & Respect de la Diversité
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ color: "#7f7f7f" }}
                  >
                    Je suis déterminée à promouvoir une représentation
                    authentique et inclusive, en aidant les entreprises à
                    valoriser leur clientèle dans toute sa diversité, et en
                    inspirant les jeunes talents à croire en leurs capacités.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: "relative", mb: 6, overflowY: "hidden" }}>
                {/*
                <Typography
                  variant="h1"
                  component="div"
                  sx={{
                    position: 'absolute',
                    top: '-20px',
                    left: '-10px',
                    fontSize: '120px',
                    fontWeight: 'bold',
                    color: '#e4eff7',
                    zIndex: 1,
                  }}
                >
                  #4
                </Typography>
                */}
                <Box sx={{ position: "relative", zIndex: 2 }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontFamily: "Diphylleia",
                      fontWeight: "bold",
                      color: "#7f7f7f",
                    }}
                  >
                    4. Engagement envers l’Impact Social
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ color: "#7f7f7f" }}
                  >
                    J’ai pour mission de rendre chaque action significative en
                    tenant compte des répercussions sociales, en particulier sur
                    les questions d’inclusion et de diversité dans l’industrie.
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ position: "relative", mb: 6, overflowY: "hidden" }}>
                {/*
                <Typography
                  variant="h1"
                  component="div"
                  sx={{
                    position: 'absolute',
                    top: '-20px',
                    left: '-10px',
                    fontSize: '120px',
                    fontWeight: 'bold',
                    color: '#e4eff7',
                    zIndex: 1,
                  }}
                >
                  #5
                </Typography>
                */}
                <Box sx={{ position: "relative", zIndex: 2 }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontFamily: "Diphylleia",
                      fontWeight: "bold",
                      color: "#7f7f7f",
                    }}
                  >
                    5. Innovation et Vision Moderne
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ color: "#7f7f7f" }}
                  >
                    J’aide les marques à se réinventer, à innover et à s’adapter
                    aux changements rapides des attentes des consommateurs, tout
                    en guidant les individus vers des approches modernes et
                    audacieuses de leur carrière.
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ position: "relative", mb: 6, overflowY: "hidden" }}>
                {/*
                <Typography
                  variant="h1"
                  component="div"
                  sx={{
                    position: 'absolute',
                    top: '-20px',
                    left: '-10px',
                    fontSize: '120px',
                    fontWeight: 'bold',
                    color: '#e4eff7',
                    zIndex: 1,
                    overflowY: 'hidden'
                  }}
                >
                  #6
                </Typography>
                */}
                <Box
                  sx={{ position: "relative", zIndex: 2, overflowY: "hidden" }}
                >
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontFamily: "Diphylleia",
                      fontWeight: "bold",
                      color: "#7f7f7f",
                      overflowY: "hidden",
                    }}
                  >
                    6. Empathie et Bienveillance
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ color: "#7f7f7f", overflowY: "hidden" }}
                  >
                    Mon accompagnement est centré sur l’écoute active et la
                    bienveillance, que ce soit dans le cadre d’un coaching ou
                    d’une mission de conseil stratégique.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

export default Approach;
