import { useState } from "react";
import Chat from "./components/chat";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch , Route } from "react-router-dom";


const App = () => {
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
        {/* <Navbar/> */}
        <Chat/>

      </Router>
    
    </div>
  );
};

export default App;