import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';

const FAQSection: React.FC = () => {
  return (
    <Box
      sx={{
        maxWidth: '1400px', 
        margin: '0 auto',  
        padding: '2rem 2rem',
      }}
    >
      <Typography variant="h4" component="h2" sx={{ textAlign: 'left',mt:4, mb: 4 }}>
        FAQ
      </Typography>

  
      <Accordion
        sx={{
          borderBottom: '2px solid #F5C10A', 
          boxShadow: 'none',                 
          '&:before': {
            display: 'none',                 
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'grey' }} />}    
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What is the purpose of this platform?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{textAlign:'left'}}>
          <Typography sx={{ fontWeight: 'bold', lineHeight: 1.6 }}>What is the purpose of this platform?</Typography>
          <Typography sx={{ mt: 1, lineHeight: 1.6 }}>
            Our platform connects skilled professionals with clients who need their services, making it easier for you to get your job done effortlessly!
          </Typography>
        </AccordionDetails>
      </Accordion>

  
      <Accordion
        sx={{
          borderBottom: '2px solid #F5C10A',
          boxShadow: 'none',
          '&:before': {
            display: 'none',
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'grey' }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How do I hire a professional?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{textAlign:'left'}}>
          <Typography sx={{ fontWeight: 'bold', lineHeight: 1.6 }}>How do I hire a professional?</Typography>
          <Typography sx={{ mt: 1, lineHeight: 1.6 }}>
            You can hire a professional by browsing our categories, selecting the service you need, and contacting the professional directly through our platform.
          </Typography>
        </AccordionDetails>
      </Accordion>

   
      <Accordion
        sx={{
          borderBottom: '2px solid #F5C10A',
          boxShadow: 'none',
          '&:before': {
            display: 'none',
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'grey' }} />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>What payment methods are accepted?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{textAlign:'left'}}>
          <Typography sx={{ fontWeight: 'bold', lineHeight: 1.6 }}>What payment methods are accepted?</Typography>
          <Typography sx={{ mt: 1, lineHeight: 1.6 }}>
            We accept multiple payment methods, including credit cards, debit cards, and online payment platforms such as PayPal.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          borderBottom: '2px solid #F5C10A',
          boxShadow: 'none',
          '&:before': {
            display: 'none',
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'grey' }} />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>Is customer support available?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{textAlign:'left'}}> 
          <Typography sx={{ fontWeight: 'bold', lineHeight: 1.6 }}>Is customer support available?</Typography>
          <Typography sx={{ mt: 1, lineHeight: 1.6 }}>
            Yes, our customer support team is available 24/7 to assist you with any questions or issues you may encounter on the platform.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQSection;
