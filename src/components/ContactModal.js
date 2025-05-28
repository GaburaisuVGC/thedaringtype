import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  InputLabel
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import emailjs from 'emailjs-com';

function ContactModal({ open, onClose }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    userType: '',
    message: '',
  });
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    // Déterminer le type d'utilisateur pour le sujet
    const userTypeLabel = formData.userType === 'company' 
      ? 'Professionnel' 
      : formData.userType === 'individual' 
        ? 'Particulier' 
        : '';

    // Construire le sujet du mail
    const emailSubject = `${formData.firstName} ${formData.lastName}, ${userTypeLabel}, souhaite vous contacter !`;

    // Construire le contenu du message
    const emailMessage = `
      Prénom: ${formData.firstName}
      Nom: ${formData.lastName}
      Email: ${formData.email}
      Téléphone: ${formData.phone}
      Type: ${formData.userType === 'company' 
        ? 'Entreprise/École' 
        : 'En reconversion, en recherche ou jeunes diplômés'}
      Message: ${formData.message}
    `;

    const templateParams = {
      to_name: 'The Daring Type',
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      reply_to: formData.email,
      subject: emailSubject,
      message: emailMessage,
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('E-mail envoyé avec succès !', response.status, response.text);
        setFormSubmitted(true);
      }, (err) => {
        console.error('Échec de l\'envoi de l\'e-mail :', err);
        setError('Une erreur est survenue lors de l\'envoi. Veuillez réessayer.');
      });
  };

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClose = () => {
    setFormSubmitted(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      userType: '',
      message: '',
    });
    onClose();
  };

  return (
    <Modal open={open} onClose={handleClose} closeAfterTransition>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backdropFilter: 'blur(5px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1300,
        }}
      >
        <Box
          sx={{
            width: { xs: '90%', md: '75%' },
            height: { xs: 'auto', md: '75%' },
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            boxShadow: 24,
            borderRadius: '16px',
            overflow: 'hidden',
          }}
        >
          {/* Partie gauche : illustration */}
          <Box
            sx={{
              flex: 1,
              backgroundImage: 'url(/images/illustration.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: { xs: 'none', md: 'block' },
              borderTopLeftRadius: '16px',
              borderBottomLeftRadius: '16px',
            }}
          ></Box>

          {/* Partie droite : formulaire */}
          <Box
            sx={{
              flex: 1,
              padding: 4,
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              overflowY: 'auto',
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{ position: 'absolute', top: 8, right: 8 }}
            >
              <CloseIcon />
            </IconButton>
            {!formSubmitted ? (
              <>
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  sx={{ fontFamily: 'Diphylleia', fontWeight: 'bold', color: '#7f7f7f' }}
                >
                  Contactez-moi
                </Typography>

                {error && (
                  <Typography variant="body1" sx={{ color: 'red' }}>
                    {error}
                  </Typography>
                )}

                <form onSubmit={handleSubmit}>
                  {/* Conteneur pour prénom et nom  */}
                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 0, md: 2 } }}>
                    <TextField
                      fullWidth
                      label="Prénom"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      margin="normal"
                      required
                      sx={{ mb: { xs: 2, md: 0 } }}
                    />
                    <TextField
                      fullWidth
                      label="Nom"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      margin="normal"
                      required
                      sx={{ mb: { xs: 2, md: 0 } }}
                    />
                  </Box>

                  {/* Conteneur pour email et téléphone  */}
                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 0, md: 2 } }}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      margin="normal"
                      required
                      sx={{ mb: { xs: 2, md: 0 } }}
                    />
                    <TextField
                      fullWidth
                      label="Téléphone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      margin="normal"
                      required
                      sx={{ mb: { xs: 2, md: 0 } }}
                    />
                  </Box>

                  <FormControl fullWidth margin="normal" required>
                    <InputLabel id="user-type-label">Vous êtes...</InputLabel>
                    <Select
                      labelId="user-type-label"
                      name="userType"
                      value={formData.userType}
                      onChange={handleChange}
                      label="Vous êtes..."
                    >
                      <MenuItem value="company">Entreprise/École</MenuItem>
                      <MenuItem value="individual">En reconversion, en recherche ou jeunes diplômés</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    fullWidth
                    label="Votre message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    margin="normal"
                    required
                    multiline
                    rows={4}
                    sx={{ mb: 2 }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      mt: 2,
                      backgroundColor: '#a2adbb',
                      color: '#ffffff',
                      '&:hover': {
                        backgroundColor: '#88929e',
                      },
                    }}
                    fullWidth
                  >
                    Envoyer
                  </Button>
                </form>
              </>
            ) : (
              <>
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  sx={{ fontFamily: 'Diphylleia', fontWeight: 'bold', color: '#7f7f7f' }}
                >
                  Merci !
                </Typography>
                <Typography variant="body1" sx={{ color: '#7f7f7f' }}>
                  Vous recevrez une réponse sous peu.
                </Typography>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default ContactModal;