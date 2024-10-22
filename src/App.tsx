import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar.tsx';
import LandingPage from './Components/LandingPage.tsx';
import InfoPage from './Components/InfoPage.tsx';
import FAQSection from './Components/FAQ.tsx';
import Footer from './Components/Footer.tsx';

function App() {
  return (
    <div className="App">
     <>
     <NavBar/>
     <LandingPage/>
     <InfoPage/>
     <FAQSection/>
     <Footer/>
     </>
    </div>
  );
}

export default App;
