import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ReactComponent as Price } from './images/Price.svg';
import { ReactComponent as FastEasy } from './images/FastEasy.svg';
import { ReactComponent as Data } from './images/Data.svg';
import { ReactComponent as Access } from './images/Access.svg';

const IconGrid: React.FC = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: '2rem', mt:5 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          gap: '2rem',
          
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
          <Price style={{ width: '50px', height: '50px', marginBottom: '0.5rem' }} />
          <span style={{textAlign:'left',fontSize:'28px',marginBottom:'10px'}}>Absolutely FREE</span>
          <Typography variant="body2"sx={{fontSize:'15px',width:'200px',textAlign:'left'}}>No hidden charges,No credit card requireds</Typography>
        </Box>
        <Box sx={{
          width: '1px',
          height: '130px',
          backgroundColor: '#F5C10A',
          mx: 2,
        }} />
        
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
          <FastEasy style={{ width: '50px', height: '50px', marginBottom: '0.5rem' }} />
          <span style={{textAlign:'left',fontSize:'28px',marginBottom:'10px'}}>Fast & Easy</span>
          <Typography variant="body2"sx={{fontSize:'15px',width:'200px',textAlign:'left'}}>Get access instantly, no downloads required</Typography>
        </Box>
        <Box sx={{
          width: '1px',
          height: '130px',
          backgroundColor: '#F5C10A',
          mx: 2,
        }} />
        
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
          <Data style={{ width: '50px', height: '50px', marginBottom: '0.5rem' }} />
          <span style={{textAlign:'left',fontSize:'28px',marginBottom:'10px'}} >Your Own Data</span>
          <Typography variant="body2"sx={{fontSize:'15px',width:'200px',textAlign:'left'}}>Enjoy the Free Trail with your company data</Typography>
        </Box>
        <Box sx={{
          width: '1px',
          height: '130px',
          backgroundColor: '#F5C10A',
          mx: 2,
        }} />
        
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
          <Access style={{ width: '50px', height: '50px', marginBottom: '0.5rem' }} />
          <span style={{textAlign:'left',fontSize:'28px',marginBottom:'10px'}}>Unlimited Features</span>  
          <Typography variant="body2"sx={{fontSize:'15px',width:'200px',textAlign:'left'}}>Access all features of the #1 gig website</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default IconGrid;
