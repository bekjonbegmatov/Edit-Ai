import Chat from "./components/chat";
import Register from "./components/register/register";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';


const App = () => {
  const [is_reg, setIs_reg] = useState(false)
  useEffect(() => {
    if (localStorage.getItem('is_registred') == 'true') {
      setIs_reg(true)
    } else {
      setIs_reg(false)
    }
  })
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    <div className="container">
      <Router>
        {is_reg == true &&
          <Chat />
        }{is_reg == false &&
          <Register />
        }
      </Router>

    </div>
  );
};

export default App;