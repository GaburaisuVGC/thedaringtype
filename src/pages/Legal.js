import React from "react";
import { Container, Box, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Legal() {
  return (
    <Box sx={{ fontFamily: "Josefin Sans" }}>
      <Navbar showLanguageSelector={false} showThemeSwitch={false} />

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
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{
                fontFamily: "Josefin Sans",
                fontWeight: "bold",
                color: "#7f7f7f",
              }}
            >
              The Daring Type
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{
                fontFamily: "Josefin Sans",
                fontWeight: "bold",
                color: "#7f7f7f",
              }}
            >
              Mentions Légales
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Josefin Sans",
                color: "#7f7f7f",
                textAlign: "center",
                mb: 4,
              }}
            >
              Dernière mise à jour : 16/12/2024
            </Typography>
          </Box>

          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            Merci de lire avec attention les différentes modalités d’utilisation
            du présent site avant d’y parcourir ses pages. En vous connectant
            sur ce site, vous acceptez sans réserve les présentes modalités.
            Aussi, conformément à l’article n°6 de la Loi n°2004-575 du 21 Juin
            2004 pour la confiance dans l’économie numérique, les responsables
            du présent site internet{" "}
            <a
              href="https://www.thedaringtype.com"
              rel="noopener noreferrer"
            >
              www.thedaringtype.com
            </a>{" "}
            sont :
          </Typography>

          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontFamily: "Josefin Sans",
              fontWeight: "bold",
              color: "#7f7f7f",
              textAlign: "left",
              mt: 4,
            }}
          >
            Editeur du Site :
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            Entreprise: The Daring Type
            <br />
            Webdesign:{" "}
            <a
              href="https://matthieu-barbe.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://matthieu-barbe.dev
            </a>
            <br />
            Email :{" "}
            <a href="mailto:hello@thedaringtype.com">hello@thedaringtype.com</a>
            <br />
            Site Web :{" "}
            <a
              href="https://www.thedaringtype.com"
              rel="noopener noreferrer"
            >
              www.thedaringtype.com
            </a>
          </Typography>

          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontFamily: "Josefin Sans",
              fontWeight: "bold",
              color: "#7f7f7f",
              textAlign: "left",
              mt: 4,
            }}
          >
            Hébergement :
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            Netlify, Inc.
            <br />
            512 2nd Street, Fl 2<br />
            San Francisco, CA 94107
            <br />
            United States of America
            <br />
            Site Web :{" "}
            <a
              href="https://www.netlify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.netlify.com
            </a>
          </Typography>

          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontFamily: "Josefin Sans",
              fontWeight: "bold",
              color: "#7f7f7f",
              textAlign: "left",
              mt: 4,
            }}
          >
            Conditions d’utilisation :
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            Ce site (
            <a
              href="https://www.thedaringtype.com"
              rel="noopener noreferrer"
            >
              www.thedaringtype.com
            </a>
            ) est proposé en différents langages web (HTML, HTML5, Javascript,
            CSS, etc…) pour un meilleur confort d’utilisation et un graphisme
            plus agréable, nous vous recommandons de recourir à des navigateurs
            modernes comme Internet explorer, Safari, Firefox, Google Chrome,
            etc…
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            The Daring Type met en œuvre tous les moyens dont elle dispose, pour
            assurer une information fiable et une mise à jour fiable de ses
            sites internet. Toutefois, des erreurs ou omissions peuvent
            survenir. L’internaute devra donc s’assurer de l’exactitude des
            informations auprès de l’équipe du site, et signaler toutes
            modifications du site qu’il jugerait utile. The Daring Type n’est en
            aucun cas responsable de l’utilisation faite de ces informations, et
            de tout préjudice direct ou indirect pouvant en découler.
          </Typography>

          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontFamily: "Josefin Sans",
              fontWeight: "bold",
              color: "#7f7f7f",
              textAlign: "left",
              mt: 4,
            }}
          >
            Cookies :
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            Le site{" "}
            <a
              href="https://www.thedaringtype.com"
              rel="noopener noreferrer"
            >
              www.thedaringtype.com
            </a>{" "}
            peut être amené à vous demander l’acceptation des cookies pour des
            besoins de statistiques et d’affichage. Un cookie est une
            information déposée sur votre disque dur par le serveur du site que
            vous visitez. Il contient plusieurs données qui sont stockées sur
            votre ordinateur dans un simple fichier texte auquel un serveur
            accède pour lire et enregistrer des informations. Certaines parties
            de ce site ne peuvent être fonctionnelles sans l’acceptation de
            cookies.
          </Typography>

          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontFamily: "Josefin Sans",
              fontWeight: "bold",
              color: "#7f7f7f",
              textAlign: "left",
              mt: 4,
            }}
          >
            Liens hypertextes :
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            Les sites internet peuvent offrir des liens vers d’autres sites
            internet ou d’autres ressources disponibles sur Internet. The Daring
            Type ne dispose d’aucun moyen pour contrôler les sites en connexion
            avec ses sites internet. The Daring Type ne répond pas de la
            disponibilité de tels sites et sources externes, ni ne la garantit.
            Elle ne peut être tenue pour responsable de tout dommage, de quelque
            nature que ce soit, résultant du contenu de ces sites ou sources
            externes, et notamment des informations, produits ou services qu’ils
            proposent, ou de tout usage qui peut être fait de ces éléments.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            Les utilisateurs, les abonnés et les visiteurs des sites internet de
            The Daring Type ne peuvent mettre en place un hyperlien en direction
            de ce site sans l’autorisation expresse et préalable de The Daring
            Type. Dans l’hypothèse où un utilisateur ou visiteur souhaiterait
            mettre en place un hyperlien en direction d’un des sites internet de
            The Daring Type, il lui appartiendra d’adresser un email accessible
            sur le site afin de formuler sa demande de mise en place d’un
            hyperlien. The Daring Type se réserve le droit d’accepter ou de
            refuser un hyperlien sans avoir à en justifier sa décision.
          </Typography>

          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontFamily: "Josefin Sans",
              fontWeight: "bold",
              color: "#7f7f7f",
              textAlign: "left",
              mt: 4,
            }}
          >
            Services fournis :
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            L’ensemble des activités de la société ainsi que ses informations
            sont présentés sur notre site{" "}
            <a
              href="https://www.thedaringtype.com"
              rel="noopener noreferrer"
            >
              www.thedaringtype.com
            </a>
            . The Daring Type s’efforce de fournir sur le site
            www.thedaringtype.com des informations aussi précises que possible.
            Les renseignements figurant sur ce site ne sont pas exhaustifs et
            les photos non contractuelles. Ils sont donnés sous réserve de
            modifications ayant été apportées depuis leur mise en ligne. Par
            ailleurs, toutes les informations indiquées sur le site
            www.thedaringtype.com sont données à titre indicatif, et sont
            susceptibles de changer ou d’évoluer sans préavis.
          </Typography>

          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontFamily: "Josefin Sans",
              fontWeight: "bold",
              color: "#7f7f7f",
              textAlign: "left",
              mt: 4,
            }}
          >
            Limitation contractuelles sur les données :
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            Les informations contenues sur ce site sont aussi précises que
            possible et le site remis à jour à différentes périodes de l’année,
            mais peut toutefois contenir des inexactitudes ou des omissions. Si
            vous constatez une lacune, erreur ou ce qui parait être un
            dysfonctionnement, merci de bien vouloir le signaler par email, à
            l’adresse{" "}
            <a href="mailto:hello@thedaringtype.com">hello@thedaringtype.com</a>
            , en décrivant le problème de la manière la plus précise possible
            (page posant problème, type d’ordinateur et de navigateur utilisé,
            …).
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            Tout contenu téléchargé se fait aux risques et périls de
            l’utilisateur et sous sa seule responsabilité. En conséquence, The
            Daring Type ne saurait être tenu responsable d’un quelconque dommage
            subi par l’ordinateur de l’utilisateur ou d’une quelconque perte de
            données consécutives au téléchargement. De plus, l’utilisateur du
            site s’engage à accéder au site en utilisant un matériel récent, ne
            contenant pas de virus et avec un navigateur de dernière génération
            mis-à-jour.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            Les liens hypertextes mis en place dans le cadre du présent site
            internet en direction d’autres ressources présentes sur le réseau
            Internet ne sauraient engager la responsabilité de The Daring Type.
          </Typography>

          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontFamily: "Josefin Sans",
              fontWeight: "bold",
              color: "#7f7f7f",
              textAlign: "left",
              mt: 4,
            }}
          >
            Propriété intellectuelle :
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            Tout le contenu présent sur le site{" "}
            <a
              href="https://www.thedaringtype.com"
              rel="noopener noreferrer"
            >
              www.thedaringtype.com
            </a>{" "}
            incluant, de façon non limitative, les graphismes, images, textes,
            vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise
            en forme sont la propriété exclusive de The Daring Type à
            l’exception des marques, logos ou contenus appartenant à d’autres
            sociétés partenaires ou auteurs.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            Toute reproduction, distribution, modification, adaptation,
            retransmission ou publication, même partielle, de ces différents
            éléments est strictement interdite sans l’accord exprès par écrit de
            The Daring Type. Cette représentation ou reproduction, par quelque
            procédé que ce soit, constitue une contrefaçon sanctionnée par les
            articles L.335-2 et suivants du Code de la propriété intellectuelle.
            Le non-respect de cette interdiction constitue une contrefaçon
            pouvant engager la responsabilité civile et pénale du contrefacteur.
            En outre, les propriétaires des Contenus copiés pourraient intenter
            une action en justice à votre encontre.
          </Typography>

          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontFamily: "Josefin Sans",
              fontWeight: "bold",
              color: "#7f7f7f",
              textAlign: "left",
              mt: 4,
            }}
          >
            Déclaration à la CNIL :
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            Conformément à la loi 78-17 du 6 janvier 1978 (modifiée par la loi
            2004-801 du 6 août 2004 relative à la protection des personnes
            physiques à l’égard des traitements de données à caractère
            personnel) relative à l’informatique, aux fichiers et aux libertés,
            ce site n’a pas fait l’objet d’une déclaration auprès de la
            Commission nationale de l’informatique et des libertés (
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.cnil.fr
            </a>
            ).
          </Typography>

          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontFamily: "Josefin Sans",
              fontWeight: "bold",
              color: "#7f7f7f",
              textAlign: "left",
              mt: 4,
            }}
          >
            Litiges :
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            Les présentes conditions du site{" "}
            <a
              href="https://www.thedaringtype.com"
              rel="noopener noreferrer"
            >
              www.thedaringtype.com
            </a>{" "}
            sont régies par les lois françaises et toute contestation ou litiges
            qui pourraient naître de l’interprétation ou de l’exécution de
            celles-ci seront de la compétence exclusive des tribunaux dont
            dépend le siège social de la société. La langue de référence, pour
            le règlement de contentieux éventuels, est le français.
          </Typography>

          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontFamily: "Josefin Sans",
              fontWeight: "bold",
              color: "#7f7f7f",
              textAlign: "left",
              mt: 4,
            }}
          >
            Données personnelles :
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            De manière générale, vous n’êtes pas tenu de nous communiquer vos
            données personnelles lorsque vous visitez ce site Internet.
            Cependant, ce principe comporte certaines exceptions. En effet, pour
            certains services proposés par ce site, vous pouvez être amenés à
            nous communiquer certaines données telles que : votre nom, votre
            fonction, le nom de votre société, votre adresse électronique, et
            votre numéro de téléphone. Tel est le cas lorsque vous remplissez le
            formulaire qui vous est proposé en ligne, dans la rubrique « contact
            ». Dans tous les cas, vous pouvez refuser de fournir vos données
            personnelles. Dans ce cas, vous ne pourrez pas utiliser les services
            du site, notamment celui de solliciter des renseignements sur notre
            société, ou de recevoir les lettres d’information.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            Enfin, nous pouvons collecter de manière automatique certaines
            informations vous concernant lors d’une simple navigation sur notre
            site Internet, notamment : des informations concernant l’utilisation
            de notre site, comme les zones que vous visitez et les services
            auxquels vous accédez, votre adresse IP, le type de votre
            navigateur, vos temps d’accès. De telles informations sont utilisées
            exclusivement à des fins de statistiques internes, de manière à
            améliorer la qualité des services qui vous sont proposés. Les bases
            de données sont protégées par les dispositions de la loi du 1er
            juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative
            à la protection juridique des bases de données.
          </Typography>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

export default Legal;
