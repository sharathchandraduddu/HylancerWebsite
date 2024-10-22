import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { ReactComponent as CurvedLine } from './images/curvedline.svg';
import { ReactComponent as Connection } from './images/connection.svg';
import { ReactComponent as CardLogo } from './images/CardLogo.svg';
import { ReactComponent as Teacher } from './images/Teacher.svg';
import { ReactComponent as MusicTeacher } from './images/MusicTeacher.svg';
import { ReactComponent as Yoga } from './images/Yoga.svg';
import { ReactComponent as Physiotherapist } from './images/Physiotherapist.svg';
import { ReactComponent as PersonalTrainer } from './images/PersonalTrainer.svg';
import { ReactComponent as Beautician } from './images/Beautician.svg';

const LandingPage: React.FC = () => {
  const cardImages = [
    Teacher,
    PersonalTrainer,
    Physiotherapist,
    MusicTeacher,
    Yoga,
    Beautician,
  ];

  const cardTexts = [
    'Teacher',
    'Personal Trainer',
    'Physiotherapist',
    'Music Teacher',
    'Yoga Instructor',
    'Beautician',
  ];

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
              component={CurvedLine}
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
          component={Connection}
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
          {cardImages.map((SvgComponent, index) => (
            <Box
              key={index}
              sx={{
                transform: index % 2 === 0 ? 'translateY(-40px)' : 'translateY(30px)',
                marginLeft: index === 0 ? 0 : '-80px',
                transition: 'transform 0.3s ease-in-out',
                width: 'calc(100% / 2)',
              }}
            >
              <Card
                sx={{
                  width: '100%',
                  height: 250,
                  borderRadius: '16px',
                  position: 'relative', // To position the SVG and text absolutely
                }}
              >
                <Box
                  sx={{
                    backgroundColor: '#F5C10A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                  }}
                >
                  <SvgComponent width="100%" height="100%" /> {/* Render SVG component */}
                </Box>
                {/* SVG and Fixed Text Below */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 8,
                    left: 8,
                    display: 'flex',
                    flexDirection: 'column', // Ensure SVG and text are stacked
                    alignItems: 'left',
                  }}
                >
                  <CardLogo width="24px" height="24px" style={{ marginTop: 1,border:'1px solid black',borderRadius:'5px'}} /> {/* Bottom-left SVG */}
                  <Typography variant="body2" sx={{ mt: 1, color: 'white', fontWeight: 700 }}>
                    {cardTexts[index]} {/* Fixed text */}
                  </Typography>
                </Box>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default LandingPage;
