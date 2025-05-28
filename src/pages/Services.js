import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTheme } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Services() {
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

      {/* Première section */}
      <Box
        sx={{
          width: "100%",
          padding: { xs: 2, md: 8 },
          backgroundColor: "#ffffff",
          boxSizing: "border-box",
          overflow: "hidden",
          marginTop: "100px",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 4 }} id="particuliers">
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                fontFamily: "Diphylleia",
                fontWeight: "bold",
                color: "#7f7f7f",
              }}
            >
              Coaching pour les futurs talents de la cosmétique et du luxe
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
            >
              Vous avez une passion pour le luxe, la cosmétique et souhaitez
              orienter votre carrière vers le marketing, le retail ou
              l’éducation ? À travers un accompagnement personnalisé, je vous
              aide à mieux comprendre le secteur, à développer une approche
              audacieuse et à bâtir une candidature pertinente pour vos projets
              professionnels en France et à l’international.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontStyle: "italic",
                fontFamily: "Josefin Sans",
                color: "#7f7f7f",
              }}
            >
              Apprenez à oser et à saisir les opportunités !
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
  {/* Bloc Image */}
  <Grid item xs={12} sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
    <Card
      sx={{
        height: "100%",
        width: "100%",
        maxWidth: { xs: "100%", md: "300px" },
        padding: 0,
        borderRadius: "25px",
        boxShadow: "none",
        overflow: "hidden",
      }}
    >
      <div style={{ 
        position: 'relative', 
        paddingTop: '100%',
        overflow: 'hidden'
      }}>
        <img
          src="/images/diana11.jpg"
          alt="Description de l'image"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '25px',
          }}
        />
      </div>
    </Card>
  </Grid>

  {/* Bloc Coaching CV */}
  <Grid item xs={12} sm={6} md={4}>
    <Card
      sx={{
        backgroundColor: "#b5ccdc",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 2,
        boxSizing: "border-box",
        textAlign: "center",
        borderRadius: "25px",
        boxShadow: "none",
        fontFamily: "Josefin Sans",
        color: "#ffffff",
      }}
    >
      <CardContent sx={{ py: 1 }}>
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          sx={{
            fontFamily: "Josefin Sans",
            fontWeight: "bold",
            overflow: "hidden",
            color: "#ffffff",
            mb: 1,
          }}
        >
          Coaching CV
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ 
            fontFamily: "Josefin Sans", 
            color: "#ffffff",
            mb: 1, 
          }}
        >
          30 min
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center", mt: 1, mb: 1 }}>
        <Button
          variant="contained"
          href="mailto:hello@thedaringtype.com"
          target="_blank"
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
          Je prends rendez-vous
        </Button>
      </CardActions>
    </Card>
  </Grid>

  {/* Bloc Préparation d'entretien */}
  <Grid item xs={12} sm={6} md={4}>
    <Card
      sx={{
        backgroundColor: "#b5ccdc",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", 
        padding: 2,
        boxSizing: "border-box",
        textAlign: "center",
        borderRadius: "25px",
        boxShadow: "none",
        fontFamily: "Josefin Sans",
        color: "#ffffff",
      }}
    >
      <CardContent sx={{ py: 1 }}> 
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          sx={{
            fontFamily: "Josefin Sans",
            fontWeight: "bold",
            overflow: "hidden",
            color: "#ffffff",
            mb: 1,
          }}
        >
          Préparation d'entretien
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ 
            fontFamily: "Josefin Sans", 
            color: "#ffffff",
            mb: 1, 
          }}
        >
          60 min
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center", mt: 1, mb: 1 }}> 
        <Button
          variant="contained"
          href="mailto:hello@thedaringtype.com"
          target="_blank"
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
          Je prends rendez-vous
        </Button>
      </CardActions>
    </Card>
  </Grid>
</Grid>

          <Box sx={{ mt: 8 }}>
            <Typography
              variant="body1"
              paragraph
              sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
            >
              Les programmes de coaching proposés par The Daring Type sont
              conçus pour vous aider à clarifier vos options de carrière,
              identifier vos atouts et les axes à renforcer, et vous fournir les
              outils nécessaires pour réussir votre transition professionnelle.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
            >
              Déterminons ensemble lors d’un premier rendez-vous votre besoin
              d’accompagnement personnalisé pouvant inclure :
            </Typography>

            <Typography
              variant="body1"
              paragraph
              sx={{
                fontFamily: "Diphylleia",
                fontWeight: "bold",
                color: "#7f7f7f",
                mt: 2,
                mb: 0,
              }}
            >
              1. Créer des outils de candidature qui captent l’attention
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
            >
              Optimisez votre CV et votre lettre de motivation ou autre selon le
              poste visé, pour capter l'intérêt des recruteurs dans les secteurs
              du luxe et de la beauté.
            </Typography>

            <Typography
              variant="body1"
              paragraph
              sx={{
                fontFamily: "Diphylleia",
                fontWeight: "bold",
                color: "#7f7f7f",
                mt: 2,
                mb: 0,
              }}
            >
              2. Définir votre marque personnelle audacieuse
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
            >
              Ensemble, nous affinerons votre positionnement professionnel pour
              bâtir une image personnelle forte, cohérente et impactante, qui
              brillera tout au long du processus de recrutement.
            </Typography>

            <Typography
              variant="body1"
              paragraph
              sx={{
                fontFamily: "Diphylleia",
                fontWeight: "bold",
                color: "#7f7f7f",
                mt: 2,
                mb: 0,
              }}
            >
              3. Développer une stratégie de recherche d’emploi et de réseautage
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
            >
              Apprenez à postuler efficacement et à naviguer dans les
              opportunités grâce à des conseils stratégiques adaptés à vos
              objectifs.
            </Typography>

            <Typography
              variant="body1"
              paragraph
              sx={{
                fontFamily: "Diphylleia",
                fontWeight: "bold",
                color: "#7f7f7f",
                mt: 2,
                mb: 0,
              }}
            >
              4. Préparation aux entretiens
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
            >
              Préparez-vous aux sessions d’entretien avec des simulations
              ciblées et des retours constructifs pour aborder chaque échange
              avec confiance.
            </Typography>

            <Typography
              variant="body1"
              paragraph
              sx={{
                fontFamily: "Diphylleia",
                fontWeight: "bold",
                color: "#7f7f7f",
                mt: 2,
                mb: 0,
              }}
            >
              5. Coaching personnalisé
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
            >
              Profitez de séances sur mesure pour discuter de tout sujet clé qui
              peut accélérer votre recherche d’emploi ou renforcer votre
              confiance.
            </Typography>

            <Typography
              variant="body1"
              paragraph
              sx={{
                fontFamily: "Josefin Sans",
                color: "#7f7f7f",
                mt: 2,
                mb: 0,
              }}
            >
              Chez The Daring Type, je suis là pour vous aider à transformer vos
              aspirations en réussites professionnelles. Osez faire le premier
              pas vers une carrière qui vous ressemble.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Deuxième section */}
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
          <Box sx={{ textAlign: "center", mb: 4 }} id="pro">
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                fontFamily: "Diphylleia",
                fontWeight: "bold",
                color: "#7f7f7f",
              }}
            >
              Accompagnement des professionnels
            </Typography>
          </Box>

          <Box sx={{ mb: 6, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              sx={{
                fontFamily: "Diphylleia",
                fontWeight: "bold",
                overflow: "hidden",
                color: "#7f7f7f",
              }}
            >
              Conférences et interventions en écoles
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
            >
              Parce que les métiers de la cosmétique et du luxe évoluent sans
              cesse, il est essentiel pour les écoles de préparer les étudiants
              aux réalités de ces secteurs. Mes conférences visent à transmettre
              les clés de réussite en recrutement, diversité et inclusion, tout
              en incitant les futurs talents à oser dans leurs choix de
              carrière.
            </Typography>
          </Box>

          <Box sx={{ position: "relative", mb: 6 }}>
            <Box
              component="img"
              src="/images/illustration.png"
              alt="Conférences et interventions en écoles"
              sx={{
                width: "100%",
                height: { xs: "200px", md: "300px" },
                display: "block",
                borderRadius: "25px",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />

            <Box sx={{ textAlign: "center", mt: 4 }}>
              <Card
                sx={{
                  backgroundColor: "#a2adbbff",
                  padding: 2,
                  boxSizing: "border-box",
                  textAlign: "center",
                  boxShadow: "none",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderRadius: "25px",
                  fontFamily: "Josefin Sans",
                  color: "#ffffff",
                  width: { xs: "100%", md: "50%" },
                  margin: "0 auto",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    gutterBottom
                    sx={{
                      fontFamily: "Josefin Sans",
                      fontWeight: "bold",
                      overflow: "hidden",
                      color: "#ffffff",
                    }}
                  >
                    Ateliers & Masterclass
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ fontFamily: "Josefin Sans", color: "#ffffff" }}
                  >
                    écoles & universités
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center", mb: 2 }}>
                  <Button
                    variant="contained"
                    href="mailto:hello@thedaringtype.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      width: { xs: "90%", sm: "auto" },
                      maxWidth: "300px",
                      fontFamily: "Josefin Sans",
                      backgroundColor: "#7f7f7f",
                      color: "#ffffff",
                      lineHeight: "1.5",
                      padding: "10px 20px",
                      textTransform: "none",
                      fontSize: "1.2rem",
                      borderColor: "#7f7f7f",
                      boxShadow: "none",
                      "&:hover": {
                        backgroundColor: "#636363",
                        color: "#e6e6e6",
                        boxShadow: "none",
                      },
                      borderRadius: "8px",
                    }}
                  >
                    Préparons votre événement
                  </Button>
                </CardActions>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Troisième section */}
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
          <Box sx={{ textAlign: "left", mb: 4 }}>
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              sx={{
                fontFamily: "Diphylleia",
                fontWeight: "bold",
                overflow: "hidden",
                color: "#7f7f7f",
              }}
            >
              Conseil stratégique en entreprise : inclusion et diversité
            </Typography>
          </Box>

          <Box sx={{ mb: 6, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="body1"
              paragraph
              sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
            >
              Aujourd’hui, l'inclusion est bien plus qu'une tendance : c'est une
              nécessité pour les marques qui veulent rester pertinentes. Avec
              mon expérience en développement de produits pour cheveux texturés
              et en stratégie de marque inclusive, j’aide les entreprises à
              bâtir des campagnes et des produits qui résonnent profondément
              avec des clientèles diverses, tout en évitant les faux pas
              coûteux.
            </Typography>
          </Box>

          <Grid container spacing={2} sx={{ mb: 4 }} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Box
                component="img"
                src="/images/diana6.jpg"
                alt="Image 1"
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  maxWidth: "250px",
                  borderRadius: "16px",
                  margin: "0 auto",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                component="img"
                src="/images/diana7.jpg"
                alt="Image 2"
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  maxWidth: "250px",
                  borderRadius: "16px",
                  margin: "0 auto",
                }}
              />
            </Grid>
          </Grid>

          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Card
              sx={{
                backgroundColor: "#a2adbbff",
                padding: 2,
                boxSizing: "border-box",
                textAlign: "center",
                boxShadow: "none",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: "25px",
                fontFamily: "Josefin Sans",
                color: "#ffffff",
                width: { xs: "100%", md: "50%" },
                margin: "0 auto",
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  gutterBottom
                  sx={{
                    fontFamily: "Josefin Sans",
                    fontWeight: "bold",
                    overflow: "hidden",
                    color: "#ffffff",
                  }}
                >
                  Conseil stratégique Inclusion & Diversité
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontFamily: "Josefin Sans", color: "#ffffff" }}
                >
                  Entreprises
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center", mb: 2 }}>
                <Button
                  variant="contained"
                  href="mailto:hello@thedaringtype.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: { xs: "90%", sm: "auto" },
                    maxWidth: "300px",
                    fontFamily: "Josefin Sans",
                    backgroundColor: "#b5ccdc",
                    color: "#ffffff",
                    lineHeight: "1.5",
                    padding: "10px 20px",
                    textTransform: "none",
                    fontSize: "1.2rem",
                    borderColor: "#b5ccdc",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "#97aab8",
                      color: "#e6e6e6",
                      boxShadow: "none",
                    },
                    borderRadius: "8px",
                  }}
                >
                  Prenons rendez-vous
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Container>
      </Box>

      {/* Section Accompagnement Personnalisé */}
      <Box
        id="services"
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
            {/* Image */}
            <Grid item xs={12} md={6} order={{ xs: 1, md: 1 }}>
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
                  src="/images/diana2.jpg"
                  alt="Accompagnement Personnalisé"
                  sx={{
                    width: "60%",
                    maxWidth: "400px",
                    height: "auto",
                    borderRadius: "25px",
                    boxShadow: theme.shadows[3],
                    display: "block",
                  }}
                />
              </Box>
            </Grid>

            {/* Texte */}
            <Grid item xs={12} md={6} order={{ xs: 2, md: 2 }}>
              <Box sx={{ textAlign: { xs: "center", md: "left" }, mb: 3 }}>
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
                  Accompagnement Personnalisé
                </Typography>
                <Typography
                  variant={{ xs: "h6", md: "h6" }}
                  component="h3"
                  gutterBottom
                  sx={{ fontFamily: "Diphylleia", color: "#7f7f7f" }}
                >
                  Des solutions sur mesure pour chaque besoin.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
                >
                  Si vous avez une idée ou un projet particulier en tête,
                  contactez-moi directement par email et demandez un devis à{" "}
                  <a href="mailto:hello@thedaringtype.com">
                    hello@thedaringtype.com
                  </a>
                  .
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
                >
                  Je serais ravie d’en discuter avec vous !
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Section Tarif et prestations */}
      <Box
        id="tarif"
        sx={{
          width: "100%",
          padding: { xs: 2, md: 8 },
          backgroundColor: "#ffffff",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                fontFamily: "Diphylleia",
                fontWeight: "bold",
                color: "#7f7f7f",
              }}
            >
              Tarif et prestations
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Box
              component="img"
              src="/images/tarifs.png"
              alt="Tarifs et prestations"
              sx={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

export default Services;
