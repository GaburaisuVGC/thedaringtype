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
    { text: "Accompagnement", href: '/services' },
    // { text: "Ressources", href: '/resources' },
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
            >
              <ListItemText primary={link.text} />
              {link.submenu ? (
                mobileOpenIndexes[index] ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
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
                      <ListItemText primary={sublink.text} />
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