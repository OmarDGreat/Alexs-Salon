import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Appointments from './components/Appointments';
import Stylists from './components/Stylist';
import ContactInfo from './components/Contact Info';

function App() {

  return (
    <div>
      <Nav />
      <main>
       <About />
       <Stylists />
      <Appointments />
      <ContactInfo />
      </main>
    </div>
  );
}

export default App;
