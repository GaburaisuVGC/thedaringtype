import React from 'react';
import { Typography, Container, Box, Grid2 } from '@mui/material';
import FooterLinks from './FooterLinks';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  const usefulLinks = [
    { text: "CGV", href: '/cgv' },
    { text: "Mentions légales", href: '/legal' },
    { text: "À propos", href: '/#about' },
    // { text: "Ressources", href: '/blog' },
  ];

  const socialLinks = [
    { text: "Mail", href: 'mailto:hello@thedaringtype.com' },
    { text: t('linkedin'), href: 'https://www.linkedin.com/in/dianavilsaint/' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(90deg, rgba(181, 204, 220, 1) 10%, rgba(216, 212, 233, 1) 70%, rgba(239, 237, 234, 1) 85%)",
        color: "#ffffff",
        pt: 4,
        pb: 2,
      }}
    >
      <Container maxWidth="lg">
        <Grid2 container spacing={4} justifyContent="center">
          <Grid2 xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Josefin Sans' }}>
              THE DARING TYPE
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: 'Josefin Sans' }}>
            Dare to stand out.
            </Typography>
            {/* link to the email */}
            <Typography variant="body2" sx={{ fontFamily: 'Josefin Sans', marginTop: "1rem" }}>
              <a href="mailto:hello@thedaringtype.com">
                hello@thedaringtype.com
              </a>
            </Typography>
          </Grid2>

          <Grid2 xs={12} md={4}>
            <FooterLinks title="Liens" links={usefulLinks} />
          </Grid2>

          <Grid2 xs={12} md={4}>
            <FooterLinks title="Contact" links={socialLinks} />
          </Grid2>
        </Grid2>

        <Typography
          variant="body2"
          color="#ffffff"
          align="center"
          sx={{ mt: 4, fontFamily: 'Josefin Sans' }}
        >
          Diana Vilsaint {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
