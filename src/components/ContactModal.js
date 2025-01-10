import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import emailjs from 'emailjs-com';

function ContactModal({ open, onClose }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
  });
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    const templateParams = {
      to_name: 'The Daring Type',
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,   
      reply_to: formData.email,
      subject: formData.subject, 
      message: 'Je souhaite prendre contact avec vous.', 
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
      subject: '',
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
            width: { xs: '90%', md: '60%' },
            height: { xs: 'auto', md: '60%' },
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            boxShadow: 24,
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
                  <TextField
                    fullWidth
                    label="Prénom"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Nom"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Votre message"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    margin="normal"
                    required
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
