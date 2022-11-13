
import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Stylists from "./components/Stylist";
import Appointments from "./components/Appointments";
import ContactInfo from "./components/ContactInfo";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
// import { Button, Flex, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';


function App() {
  const [isShowLogin, setIsShowLogin] = useState(true);

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };

  return (
    <div className="App">
      <NavBar handleLoginClick={handleLoginClick} />
      <LoginForm isShowLogin={isShowLogin} />
      <main>
      {/* {!LoginForm ? (
          <> */}
            <About></About>
            <Stylists></Stylists>
            <Appointments></Appointments>
            <ContactInfo></ContactInfo>
          {/* </>
        ) : (
          <LoginForm></LoginForm>
        )} */}
        
      </main>
    </div>
    
  );
}

export default App;