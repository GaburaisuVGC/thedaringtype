import React, { useState } from 'react';
import {
  Button,
  MenuItem,
  Menu,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

function NavLinks({ isMobile = false, handleCloseNavMenu, handleOpenContactModal }) {
  const links = [
    { text: "Accueil", href: '/' },
    { text: "Qui suis-je", href: '/#about' },
    { text: "Mon approche", href: '/approach' },
    { text: "Accompagnement", href: '/services', submenu: [
      { text: "Pour les professionnels", href: '/services#pro' },
      { text: "Pour les particuliers", href: '/services#particuliers' },
      { text: "Tarif des prestations", href: '/services#tarif' },
    ] },
    { text: "The Daring Lab", href: '/lab' },
    { text: "Contact", action: 'openContactModal' },
  ];

  // État pour le menu en mode desktop
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const handleOpenMenu = (event, index) => {
    setAnchorEl(event.currentTarget);
    setOpenMenuIndex(index);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setOpenMenuIndex(null);
  };

  // État pour les sous-menus en mode mobile
  const [mobileOpenIndexes, setMobileOpenIndexes] = useState({});

  const handleMobileToggle = (index) => {
    setMobileOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  if (isMobile) {
    return (
      <List component="nav">
        {links.map((link, index) => (
          <div key={link.text}>
            <ListItem
              button
              onClick={() => {
                if (link.submenu) {
                  handleMobileToggle(index);
                } else if (link.action === 'openContactModal') {
                  handleCloseNavMenu();
                  handleOpenContactModal();
                } else {
                  handleCloseNavMenu();
                  window.location.href = link.href;
                }
              }}
              sx={{
                fontFamily: 'Diphylleia',
                fontWeight: 'bold',
                background: 'linear-gradient(90deg, rgba(181,204,220,1) 10%, rgba(216,212,233,1) 70%, rgba(239,237,234,1) 85%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              <ListItemText
                primary={link.text}
                primaryTypographyProps={{
                  sx: {
                    fontFamily: 'Diphylleia',
                    fontWeight: 'bold',
                    background: 'linear-gradient(90deg, rgba(181,204,220,1) 10%, rgba(216,212,233,1) 70%, rgba(239,237,234,1) 85%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }
                }}
              />
              {link.submenu ? (
                mobileOpenIndexes[index] ? (
                  <ExpandLess
                    sx={{
                      background: 'linear-gradient(90deg, rgba(181,204,220,1) 10%, rgba(216,212,233,1) 70%, rgba(239,237,234,1) 85%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  />
                ) : (
                  <ExpandMore
                    sx={{
                      background: 'linear-gradient(90deg, rgba(181,204,220,1) 10%, rgba(216,212,233,1) 70%, rgba(239,237,234,1) 85%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  />
                )
              ) : null}
            </ListItem>
            {link.submenu && (
              <Collapse in={mobileOpenIndexes[index]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {link.submenu.map((sublink) => (
                    <ListItem
                      button
                      key={sublink.text}
                      sx={{ pl: 4 }}
                      onClick={() => {
                        handleCloseNavMenu();
                        window.location.href = sublink.href;
                      }}
                    >
                      <ListItemText
                        primary={sublink.text}
                        primaryTypographyProps={{
                          sx: {
                            fontFamily: 'Diphylleia',
                            fontWeight: 'bold',
                            background: 'linear-gradient(90deg, rgba(181,204,220,1) 10%, rgba(216,212,233,1) 70%, rgba(239,237,234,1) 85%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                          }
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </div>
        ))}
      </List>
    );
  } else {
    return (
      <div style={{ display: 'flex', height: '100%' }}>
        {links.map((link, index) => (
          <div key={link.text}>
            {link.submenu ? (
              <>
                <Button
                  color="inherit"
                  onClick={(e) => handleOpenMenu(e, index)}
                  sx={{
                    height: '100%',
                    borderRadius: 0,
                    borderBottom: '4px solid transparent',
                    '&:hover': {
                      borderBottom: '4px solid currentColor',
                    },
                    display: 'flex',
                    alignItems: 'center',
                    fontFamily: "Diphylleia",
                    fontWeight: "bold",
                  }}
                >
                  {link.text}
                  <ExpandMore sx={{ ml: 0.5 }} />
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={openMenuIndex === index}
                  onClose={handleCloseMenu}
                  disableScrollLock={true}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  {link.submenu.map((sublink) => (
                    <MenuItem
                      key={sublink.text}
                      component="a"
                      href={sublink.href}
                      onClick={handleCloseMenu}
                      sx={{
                        fontFamily: 'Diphylleia',
                        fontWeight: 'bold',
                        background: 'linear-gradient(90deg, rgba(181,204,220,1) 10%, rgba(216,212,233,1) 70%, rgba(239,237,234,1) 85%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {sublink.text}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : link.action === 'openContactModal' ? (
              <Button
                color="inherit"
                onClick={handleOpenContactModal}
                sx={{
                  height: '100%',
                  borderRadius: 0,
                  borderBottom: '4px solid transparent',
                  '&:hover': {
                    borderBottom: '4px solid currentColor',
                  },
                  fontFamily: "Diphylleia",
                  fontWeight: "bold",
                }}
              >
                {link.text}
              </Button>
            ) : (
              <Button
                color="inherit"
                href={link.href}
                sx={{
                  height: '100%',
                  borderRadius: 0,
                  borderBottom: '4px solid transparent',
                  '&:hover': {
                    borderBottom: '4px solid currentColor',
                  },
                  fontFamily: "Diphylleia",
                  fontWeight: "bold",
                }}
              >
                {link.text}
              </Button>
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default NavLinks;