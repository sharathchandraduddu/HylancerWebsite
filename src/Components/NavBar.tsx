import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { ReactComponent as Logo } from './images/logo.svg';
import CareersModal from "./CareersModal.tsx";

const Navbar: React.FC = () => {
    const [careersModalOpen, setCareersModalOpen] = useState(false);
    const [contactModalOpen, setContactModalOpen] = useState(false);
    const [hoveredButton, setHoveredButton] = useState<null | 'careers' | 'contact'>(null); // State to track hovered button

    const handleCareersOpen = () => {
        setCareersModalOpen(true);
    };

    const handleContactOpen = () => {
        setContactModalOpen(true);
    };

    const handleCareersClose = () => {
        setCareersModalOpen(false);
    };

    const handleContactClose = () => {
        setContactModalOpen(false);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none', border: 'none' }}>
                <Container maxWidth="lg">
                    <Toolbar disableGutters>
                        <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                            <Logo style={{ width: 140, height: 70 }} />
                        </Box>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: "flex", gap: 2 }}>
                            <Button 
                                sx={{
                                    color: (hoveredButton === 'careers' || careersModalOpen) ?'white':'black',
                                    backgroundColor: (hoveredButton === 'careers' || careersModalOpen) ? 'black' : 'transparent', // Change background on hover or when selected
                                    '&:hover': {
                                        backgroundColor: 'black' // Change background on hover
                                    }
                                }} 
                                onMouseEnter={() => setHoveredButton('careers')}
                                onMouseLeave={() => setHoveredButton(null)}
                                onClick={handleCareersOpen}
                            >
                                Careers
                            </Button>
                            <Button 
                                sx={{
                                    color: (hoveredButton === 'contact' || contactModalOpen) ?'white':'black',
                                    backgroundColor: (hoveredButton === 'contact' || contactModalOpen) ? 'black' : 'transparent', // Change background on hover or when selected
                                    '&:hover': {
                                        backgroundColor: 'black' // Change background on hover
                                    }
                                }} 
                                onMouseEnter={() => setHoveredButton('contact')}
                                onMouseLeave={() => setHoveredButton(null)}
                                onClick={handleContactOpen}
                            >
                                Contact Us
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <CareersModal 
                open={careersModalOpen} 
                onClose={handleCareersClose} 
                isContactUs={false} // Indicate this is for Careers
            />
            <CareersModal 
                open={contactModalOpen} 
                onClose={handleContactClose} 
                isContactUs={true} // Indicate this is for Contact Us
            />
        </Box>
    );        
};

export default Navbar;
