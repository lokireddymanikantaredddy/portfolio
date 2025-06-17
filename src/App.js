import React from "react";
import WaveBackground from "./components/background/WaveBackground";
import Navbar from "./components/navbar/navbar";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/skills";
import Works from "./components/works/works";
import Education from "./components/education/education";

function App() {
  return (
    <div className="App">
      <WaveBackground />
      <Navbar />
      <Intro />
      <Skills />
      <Education />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
