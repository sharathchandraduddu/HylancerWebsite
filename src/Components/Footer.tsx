import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { ReactComponent as BlackLogo } from './images/BlackLogo.svg';
import { ReactComponent as Facebook } from './images/Facebook.svg';
import { ReactComponent as Instagram } from './images/Instagram.svg';
import { ReactComponent as Twitter } from './images/Twitter.svg';
import { ReactComponent as Linkedin } from './images/Linkedin.svg';

const Footer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        borderTop: '1px solid #ddd',
        flexDirection: isMobile ? 'column' : 'row',
        textAlign: isMobile ? 'center' : 'left',
        gap: isMobile ? '1rem' : '0',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
        <BlackLogo style={{ width: '100px', height: 'auto',marginLeft:'30px' }} /> {/* Adjust logo size */}
      </Box>
      <Typography variant="body2" sx={{ flexGrow: 1,ml:3, textAlign: 'left', mt: isMobile ? '1rem' : '0' }}>
        © 2024 abc.com | All rights reserved
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-end', gap: '1rem', mt: isMobile ? '1rem' : '0' }}>
        <Facebook style={{ width: '30px', height: 'auto' }} /> 
        <Instagram style={{ width: '30px', height: 'auto' }} />
        <Twitter style={{ width: '30px', height: 'auto' }} />
        <Linkedin style={{ width: '30px', height: 'auto' }} />
      </Box>
    </Box>
  );
};

export default Footer;
