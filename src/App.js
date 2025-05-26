import React from "react";
import Background from "./components/background/background";
import Navbar from "./components/navbar/navbar";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/skills";
import Works from "./components/works/works";

function App() {
  return (
    <div className="App">
      <Background />
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
