import React from "react";
import { Container, Box, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function CGV() {
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
              Conditions Générales de Vente
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
            variant="h6"
            component="h3"
            sx={{
              fontFamily: "Josefin Sans",
              fontWeight: "bold",
              color: "#7f7f7f",
              textAlign: "left",
              mb: 2,
            }}
          >
            Préambule.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            Les présentes conditions générales de vente régissent les relations
            contractuelles entre : Le site internet www.thedaringtype.com,
            ci-après dénommé «le Vendeur». Et toute personne physique ou morale,
            ci-après dénommée « l’Acheteur » qui effectue un achat sur le Site
            Internet www.thedaringtype.com, ci-après dénommé « le Site Internet
            ». Les présentes conditions générales de vente s’appliquent à tout
            achat effectué par l’Acheteur sur le Site Internet
            www.thedaringtype.com.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            Le rôle du consultant consiste à accompagner les clients dans leur
            réflexion et leur démarche afin de les aider à mettre en œuvre des
            solutions adaptées à leurs problématiques ou objectifs. Cette
            approche vise à favoriser l’autonomie et la capacité d’action des
            clients, en leur apportant un éclairage structurant et stimulant
            pour surmonter leurs défis et élargir leur perspective.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            Le consultant agit comme un guide, en posant des questions
            pertinentes et en offrant des outils ou des méthodes qui facilitent
            la prise de décision et l’atteinte des objectifs fixés par le
            client. Cependant, il est important de noter que :
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            Le consultant n’a pas vocation à apporter des réponses toutes faites
            ou garanties. Les résultats dépendent essentiellement de
            l’implication du client, de ses choix, et de sa capacité à mettre en
            œuvre les actions discutées.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            Le consultant n’est pas responsable de l’atteinte des résultats, ces
            derniers étant influencés par de nombreux facteurs externes et
            internes propres au client.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            En acceptant cet accompagnement, le client reconnaît que le rôle du
            consultant est de proposer un cadre de réflexion, des outils, et un
            soutien adapté, mais que la responsabilité finale de toute décision
            ou résultat repose sur le client.
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
            Article 1 – Application des conditions générales de vente
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            Les présentes conditions générales de vente sont conclues entre le
            Vendeur et l’Acheteur qui effectue une commande sur le Site
            Internet. Elles expriment l’intégralité des obligations de
            l’Acheteur et du Vendeur. L’Acheteur est réputé les accepter sans
            réserve. Le Vendeur et l’Acheteur conviennent que les présentes
            conditions générales régissent exclusivement leur relation dans le
            cadre de l’achat par l’Acheteur des produits commercialisés par le
            Vendeur sur le Site Internet. Le Vendeur se réserve le droit de
            modifier ponctuellement ses conditions générales de vente. Elles
            seront applicables dès leur mise en ligne. La version opposable des
            conditions générales de vente est celle qui est en ligne le jour de
            la passation de la commande par l’Acheteur sur le Site Internet. Si
            une condition de vente venait à faire défaut, elle serait considérée
            être régie par les usages en vigueur dans le secteur de la vente à
            distance dont les sociétés ont siège en France.
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
            Article 2 – Objet
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            Les présentes conditions générales ont pour objet de définir les
            droits et obligations des parties dans le cadre de la vente en ligne
            de produits proposés par le Vendeur à l’Acheteur sur le Site
            Internet. Le fait d’effectuer un achat sur le Site Internet vaut
            acceptation des présentes conditions générales de vente.
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
            Article 3 – Services vendus sur le Site Internet
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            Les services régis par les présentes conditions générales sont ceux
            qui figurent sur le Site Internet du Vendeur et qui sont indiqués
            comme vendus par le Vendeur. Les services sont décrits et présentés
            avec la plus grande exactitude possible. Toutefois si des erreurs ou
            omissions ont pu se produire quant à cette présentation, la
            responsabilité du Vendeur ne pourrait être engagée. Les
            photographies des services ne sont pas contractuelles.
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
            Article 4 – Prix
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            Les prix sont indiqués en euros. Les prix tiennent compte de la TVA
            applicable au jour de la commande et tout changement du taux
            applicable TVA sera automatiquement répercuté sur le prix des
            produits de la boutique en ligne. Le paiement de la totalité du prix
            doit être réalisé lors de la commande. A aucun moment, les sommes
            versées ne pourront être considérées comme des arrhes ou des
            acomptes. L’Acheteur est informé que la validation définitive de sa
            commande nécessite un paiement immédiat sur le Site Internet. Si une
            ou plusieurs taxes ou contributions, notamment environnementales,
            venaient à être créées ou modifiées, en hausse comme en baisse, ce
            changement pourra être répercuté sur le prix de vente des produits.
            Le Vendeur se réserve le droit de modifier ses prix à tout moment
            mais s’engage à appliquer les tarifs en vigueur indiqués au moment
            de l’achat.
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
            Article 5 – Déontologie et confidentialité
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            Les contenus et les résultats en termes d’analyses obtenus à
            l’occasion des divers coachings, consulting, masterclass ou ateliers
            proposés sont considérés comme confidentiels. Aussi Le Vendeur et
            l’Acheteur s’engagent respectivement à ne pas transmettre à un tiers
            les informations portées à leur connaissance dans le cadre des
            coachings réalisés et relatives aux méthodes, procédures, procédés
            techniques, résultats ou autre ou toute autre information
            communiquée sans accord mutuel préalable.
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
            Article 6 – Mode de paiement
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            Pour régler sa commande, l’Acheteur doit procéder au paiement en
            ligne par carte bancaire (carte bleue, Visa, Mastercard, carte
            American Express) via la plateforme sécurisée Stripe ou via le site
            sécurisé Paypal. L’Acheteur accède au résumé de sa commande et aux
            différents types de cartes bleues qu’il peut utiliser. L’Acheteur
            garantit au Vendeur qu’il dispose des autorisations éventuellement
            nécessaires pour utiliser le mode de paiement choisi par lui, lors
            de la validation du formulaire de commande.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            Au moment du paiement, l’Acheteur est invité à fournir le numéro de
            sa carte bancaire, la date d’expiration et le cryptogramme. Le fait
            pour l’Acheteur de fournir ces informations de paiement ou de
            valider le virement bancaire vaut acceptation du débit de son compte
            bancaire à hauteur du montant des produits commandés. La validation
            du paiement par l’Acheteur vaut conclusion du contrat de vente entre
            l’Acheteur et le Vendeur. La commande est réputée, à cet instant,
            ferme et définitive.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            Le Vendeur se réserve le droit de suspendre toute gestion de
            commande en cas de refus d’autorisation de paiement de la part des
            organismes officiellement accrédités ou en cas de non-paiement. Le
            Vendeur se réserve notamment le droit de refuser d’honorer une
            commande émanant d’un Acheteur qui n’aurait pas réglé totalement ou
            partiellement une commande précédente ou avec lequel un litige de
            paiement serait en cours d’administration.
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
            Article 7 – Signature électronique
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            La fourniture en ligne du numéro de carte bancaire de l’Acheteur et
            la validation finale de la commande vaudront preuve de l’accord de
            l’Acheteur conformément aux dispositions de la loi du 13 mars 2000
            et vaudront :
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            – exigibilité des sommes dues au titre – signature et acception
            expresse de toutes les opérations effectuées.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            En cas d’utilisation frauduleuse de la carte bancaire, l’Acheteur
            est invité, dès le constat de cette utilisation, à contacter le
            Vendeur par mail à l’adresse suivante : hello@thedaringtype.com.
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
            Article 8 – Confirmation de commande
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            Après validation définitive de la commande, l’Acheteur reçoit un
            courrier électronique comportant un récapitulatif de sa commande.
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
            Article 9 – Preuve de la transaction
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            Les registres informatisés, conservés dans les systèmes
            informatiques du Vendeur dans des conditions raisonnables de
            sécurité, seront considérés comme les preuves des communications,
            des commandes et des paiements intervenus entre les parties.
            L’archivage des bons de commande et des factures est effectué sur un
            support fiable et durable (type mail, PDF,JPEG) pouvant être produit
            à titre de preuve.
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
            Article 10 – Force majeure
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            Toutes circonstances indépendantes de la volonté des parties
            empêchant l’exécution dans des conditions normales de leurs
            obligations sont considérées comme des causes d’exonération des
            obligations des parties et entraînent leur suspension. La partie qui
            invoque les circonstances visées ci-dessus doit avertir
            immédiatement l’autre partie de leur survenance, ainsi que de leur
            disparition. Seront considérés comme cas de force majeure ou cas
            fortuits, outre ceux habituellement retenus par la jurisprudence des
            cours et des tribunaux français : le blocage des moyens de
            transports ou d’approvisionnements, tremblements de terre,
            incendies, tempêtes, inondations, foudre, l’arrêt des réseaux de
            télécommunication ou difficultés propres aux réseaux de
            télécommunication externes aux clients.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            Les parties se rapprocheront pour examiner l’incidence de
            l’événement et convenir des conditions dans lesquelles l’exécution
            du contrat sera poursuivie. Si le cas de force majeur a une durée
            supérieure à trois mois, les présentes conditions générales pourront
            être résiliées par la partie lésée.
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
            Article 11 – Non-validation partielle
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            Si une ou plusieurs stipulations des présentes conditions générales
            sont tenues pour non valides ou déclarées telles en application
            d’une loi, d’un règlement ou à la suite d’une décision définitive
            d’une juridiction compétente, les autres stipulations garderont
            toute leur force et leur portée.
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
            Article 12 – Non-renonciation
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            Le fait pour l’une des parties de ne pas se prévaloir d’un
            manquement par l’autre partie à l’une quelconque des obligations
            visées dans les présentes conditions générales ne saurait être
            interprété pour l’avenir comme une renonciation à l’obligation en
            cause.
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
            Article 13 – Titre
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            En cas de difficulté d’interprétation entre l’un quelconque des
            titres figurant en tête des clauses, et l’une quelconque des
            clauses, les titres seront déclarés inexistants.
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
            Article 14 – Loi applicable
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "Josefin Sans", color: "#7f7f7f" }}
          >
            Les présentes conditions générales sont soumises à l’application du
            droit français, à l’exclusion des dispositions de la Convention de
            Vienne. Il en est ainsi pour les règles de fond comme pour les
            règles de forme. En cas de litige ou de réclamation, l’Acheteur
            s’adressera en priorité au Vendeur pour obtenir une solution
            amiable.
          </Typography>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

export default CGV;
