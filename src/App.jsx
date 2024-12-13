import React from "react";
import Nav from "./component/Nav";
import Header from "./component/Header";
import Services from "./component/Services";
import Aboutus from "./component/Aboutus";
import Works from "./component/Works";
import Contact from "./component/Contact";

const App = () => {
  return (
    <div>
      <Nav />
      <div id="Header">
        <Header />
      </div>
      <div id="Services">
        <Services />
      </div>
      <div id="Aboutus">
        <Aboutus />
      </div>
      <div id="Works">
        <Works />
      </div>
      <div id="Contact">
        <Contact />
      </div>
    </div>
  );
};

export default App;
