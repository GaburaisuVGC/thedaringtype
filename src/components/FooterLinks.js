import React from 'react';
import { Typography, Link, Box } from '@mui/material';

function FooterLinks({ title, links }) {
  return (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Josefin Sans' }}>
        {title}
      </Typography>
      <Box component="ul" sx={{ listStyleType: 'none', p: 0, m: 0 }}>
        {links.map((link) => (
          <li key={link.text}>
            <Link href={link.href} color="inherit" variant="body2" underline="none" sx={{ fontFamily: 'Josefin Sans' }}>
              {link.text}
            </Link>
          </li>
        ))}
      </Box>
    </Box>
  );
}

export default FooterLinks;
