import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { ReactComponent as curvedline } from './images/curvedline.svg';
import { ReactComponent as connection } from './images/connection.svg';

const LandingPage: React.FC = () => {
    // const cardImages = [
    //     'https://via.placeholder.com/250/F5C10A/FFFFFF?text=Image+1', // Placeholder image 1 with background color
    //     'https://via.placeholder.com/250/F5C10A/FFFFFF?text=Image+2', // Placeholder image 2 with background color
    //     'https://via.placeholder.com/250/F5C10A/FFFFFF?text=Image+3', // Placeholder image 3 with background color
    //     'https://via.placeholder.com/250/F5C10A/FFFFFF?text=Image+4', // Placeholder image 4 with background color
    //     'https://via.placeholder.com/250/F5C10A/FFFFFF?text=Image+5', // Placeholder image 5 with background color
    //     'https://via.placeholder.com/250/F5C10A/FFFFFF?text=Image+6', // Placeholder image 6 with background color
    //   ];
  const cardImage = require('./images/Yellow.jpg'); // Import the local image

  return (
    <>
      <Box sx={{ marginTop: '85px', display: 'flex', justifyContent: 'center' }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontSize: '65px',
            fontWeight: 600,
            width: 700,
            lineHeight: '75px',
            textAlign: 'center',
          }}
        >
          Get your Skilled{' '}
          <Box component="span" sx={{ position: 'relative', display: 'inline-block' }}>
            Job
            <Box
              component={curvedline}
              sx={{
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100px',
                height: 'auto',
              }}
            />
          </Box>
          done, Effortlessly!
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          position: 'relative',
          width: '100%',
        }}
      >
        <Box
          component={connection}
          sx={{
            position: 'absolute',
            top: '53%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '550px',
            zIndex: 0,
            opacity: 1,
          }}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            width: '100%',
            zIndex: 1,
          }}
        >
          {[...Array(6)].map((_, index) => (
            <Box
              key={index}
              sx={{
                transform: index % 2 === 0 ? 'translateY(-30px)' : 'translateY(30px)',
                marginLeft: index === 0 ? 0 : '-80px',
                zIndex: 6 - index,
                transition: 'transform 0.3s ease-in-out',
                width: 'calc(100% / 4)',
              }}
            >
              <Card
                sx={{
                  width: '100%',
                  height: 250,
                  borderRadius: '16px',
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={cardImage} // Use the local image for the card
                  alt={`Card ${index + 1}`}
                  sx={{
                    backgroundColor: '#F5C10A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                />
              </Card>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default LandingPage;
