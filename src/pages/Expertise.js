import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const AnimatedNumber = ({ target, prefix = "", sx = {} }) => {
  const [number, setNumber] = React.useState(0);

  React.useEffect(() => {
    const duration = 2000; // durée de l'animation en ms
    const frameDuration = 30; // ms par frame
    const totalFrames = Math.round(duration / frameDuration);
    const increment = target / totalFrames;
    let currentFrame = 0;
    const interval = setInterval(() => {
      currentFrame++;
      const newValue = Math.min(Math.round(increment * currentFrame), target);
      setNumber(newValue);
      if (currentFrame >= totalFrames) {
        clearInterval(interval);
      }
    }, frameDuration);
    return () => clearInterval(interval);
  }, [target]);

  return (
    <Typography variant="h4" sx={{ fontWeight: "bold", color: "#ffffff", m: 0, ...sx }}>
      {prefix}{number}
    </Typography>
  );
};

function Expertise() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ fontFamily: "Josefin Sans" }}>
      <Navbar showLanguageSelector={false} showThemeSwitch={false} />

      {/* Section : Expertise et passion de l'excellence */}
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
          {/* Titre et contenu textuel */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                fontFamily: "Diphylleia",
                fontWeight: "bold",
                color: "#a2adbb",
              }}
            >
              Expertise et passion de l'excellence
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: "#7f7f7f" }}>
              Mes expertises portent sur les domaines du Marketing, de la communication & Education en cosmétiques et retail luxe
              <br />
              - Marketing développement produit et innovation
              <br />
              - Marketing opérationnel: trade marketing, merchandising
              <br />
              - Concept de marque
              <br />
              - Stratégie de marque: créer une marque de A à Z: concept, formulation, packaging, pricing, lancement, distribution
              <br />
              - Gestion de projet
              <br />
              - Evenementiel
              <br />
              - +5 ans dans le domaine de retail sur diverses fonctions supports et points de vente pour des enseignes haut de gamme
            </Typography>
          </Box>

          {/* Rectangles avec statistiques animées */}
          <Grid container spacing={2} sx={{ mb: 4 }}>
            {[
              { target: 50, prefix: "+", label: "lancements d’innovations" },
              { target: 150, prefix: "+", label: "gestions de projets" },
              { target: 25, prefix: "+", label: "projets evenementiels" },
              { target: 500, prefix: "+", label: "candidatures étudiées" },
              { target: 80, prefix: "+", label: "candidats interviewés" },
              { target: 2017, prefix: "", label: "interventions ponctuelles depuis 2017" },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    backgroundColor: "#c7d0e3ff",
                    borderRadius: "16px",
                    padding: 2,
                    textAlign: "center",
                    fontFamily: "Josefin Sans",
                  }}
                >
                  <AnimatedNumber
                    target={item.target}
                    prefix={item.prefix}
                    sx={{ fontFamily: "Josefin Sans", mb: 0 }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ color: "#ffffff", mt: 0, fontFamily: "Josefin Sans" }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Image responsive */}
          <Box sx={{ mt: 4 }}>
            <Box
              component="img"
              src={isMobile ? "/images/logomobile.png" : "/images/logorect.png"}
              alt="Logo"
              sx={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* Première section : Approche basée sur l'insight */}
      <Box
        sx={{
          width: "100%",
          padding: { xs: 2, md: 8 },
          backgroundColor: "#ffffff",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          {/* Partie initiale avec le titre et le paragraphe "Le mot Insight" */}
          <Box sx={{ textAlign: { xs: "center", md: "left" }, mb: 4 }}>
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
              Le mot <i>Insight</i> vient de l'anglais, où il signifie littéralement « vue intérieure » ou « compréhension profonde ». Son origine remonte au vieil anglais <i>insīh(t)</i>, combinant les termes <i>in-</i> (à l’intérieur) et <i>sīh(t)</i> (vision). Par extension, il désigne une compréhension intuitive ou un éclairage particulier sur une situation, une capacité à percevoir ce qui est essentiel mais souvent invisible aux autres.
            </Typography>
          </Box>

          {/* Sous-section 1 : Mon approche basée sur l’insight personnel et professionnel */}
          <Grid container spacing={2} alignItems="center" sx={{ mb: 4 }}>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                <Box
                  component="img"
                  src="/images/diana9.jpg"
                  alt="Approche insight"
                  sx={{
                    width: "100%",
                    maxWidth: "300px",
                    height: "auto",
                    borderRadius: "16px",
                    boxShadow: theme.shadows[3],
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                sx={{
                  fontFamily: "Diphylleia",
                  fontWeight: "bold",
                  color: "#a2adbb",
                  overflowY: "hidden",
                }}
              >
                Mon approche basée sur l’insight personnel et professionnel
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: "#7f7f7f" }}>
                Mon approche repose sur cette notion d’insight : une compréhension fine, à la fois personnelle et professionnelle, des enjeux et des opportunités qui façonnent aujourd’hui l'industrie du luxe, de la cosmétique, sur des fonctions marketing, communication, retail et éducation.
              </Typography>
            </Grid>
          </Grid>

          {/* Sous-section 2 : Pourquoi choisir un accompagnement basé sur l’insight ? */}
          <Grid container spacing={2} alignItems="center">
            {/* En mode mobile, l'image apparaîtra au-dessus du texte */}
            <Grid
              item
              xs={12}
              md={4}
              order={{ xs: 1, md: 2 }}
            >
              <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}>
                <Box
                  component="img"
                  src="/images/diana4.jpg"
                  alt="Accompagnement insight"
                  sx={{
                    width: "100%",
                    maxWidth: "300px",
                    height: "auto",
                    borderRadius: "25px",
                    boxShadow: theme.shadows[3],
                  }}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={8}
              order={{ xs: 2, md: 1 }}
            >
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                sx={{
                  fontFamily: "Diphylleia",
                  fontWeight: "bold",
                  color: "#a2adbb",
                  overflowY: "hidden",
                }}
              >
                Pourquoi choisir un accompagnement basé sur l’insight ?
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: "#7f7f7f" }}>
                Parce qu’il s’agit d’une approche qui ne se limite pas à la théorie : elle va à la racine de ce qui compte vraiment, pour vous et pour votre projet. Mon but est de vous aider à trouver et incarner votre propre pertinence et unicité dans un secteur en constante évolution.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

{/* Deuxième section : Valeurs & engagements avec image à gauche */}
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
    <Grid container spacing={4} alignItems="center">
      {/* Colonne image */}
      <Grid item xs={12} md={4}>
        <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Box
            component="img"
            src="/images/diana10.jpg"
            alt="Valeurs & engagements"
            sx={{
              width: "100%",
              maxWidth: "500px",
              height: "auto",
              borderRadius: "16px",
              boxShadow: theme.shadows[3],
            }}
          />
        </Box>
      </Grid>
      {/* Colonne texte */}
      <Grid item xs={12} md={8}>
        <Box sx={{ textAlign: "left", mb: 4 }}>
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
            <Box sx={{ mb: 6 }}>
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
              <Typography variant="body1" paragraph sx={{ color: "#7f7f7f" }}>
                Forte de plus de 10 ans d’expérience dans les secteurs de la cosmétique, du luxe et de la mode, j’apporte un savoir-faire éprouvé et une compréhension approfondie des attentes et dynamiques de ces industries.
              </Typography>
            </Box>
            <Box sx={{ mb: 6 }}>
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
              <Typography variant="body1" paragraph sx={{ color: "#7f7f7f" }}>
                Je privilégie une approche honnête et transparente, en partageant des recommandations sincères et en apportant des conseils stratégiques sans détour.
              </Typography>
            </Box>
            <Box sx={{ mb: 6 }}>
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
              <Typography variant="body1" paragraph sx={{ color: "#7f7f7f" }}>
                Je suis déterminée à promouvoir une représentation authentique et inclusive, en aidant les entreprises à valoriser leur clientèle dans toute sa diversité, et en inspirant les jeunes talents à croire en leurs capacités.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 6 }}>
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
              <Typography variant="body1" paragraph sx={{ color: "#7f7f7f" }}>
                J’ai pour mission de rendre chaque action significative en tenant compte des répercussions sociales, en particulier sur les questions d’inclusion et de diversité dans l’industrie.
              </Typography>
            </Box>
            <Box sx={{ mb: 6 }}>
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
              <Typography variant="body1" paragraph sx={{ color: "#7f7f7f" }}>
                J’aide les marques à se réinventer, à innover et à s’adapter aux changements rapides des attentes des consommateurs, tout en guidant les individus vers des approches modernes et audacieuses de leur carrière.
              </Typography>
            </Box>
            <Box sx={{ mb: 6 }}>
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
                6. Empathie et Bienveillance
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: "#7f7f7f" }}>
                Mon accompagnement est centré sur l’écoute active et la bienveillance, que ce soit dans le cadre d’un coaching ou d’une mission de conseil stratégique.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Container>
</Box>



      <Footer />
    </Box>
  );
}

export default Expertise;
