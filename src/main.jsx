import React, { useEffect, useState } from "react";
import Workdata from "./mywork";
import HeaderAnimation from "./animation";
import Contact from "./contact";
import Contactres from "./contactres";
import WorkContainer from "./workElement";

export default function Content() {
  const [work, setWork] = useState(false);
  const [workdata, setWorkdata] = useState(false);
  const [lineTextWidth, setLinetextwidth] = useState(false);
  const [textRemove, setTextremove] = useState(true);
  // Responsive
  const [responsive, setresponsive] = useState(false);

  if (work) {
    setTimeout(() => {
      setWorkdata(true);
    }, 1000);
  } else {
    setTimeout(() => {
      setWorkdata(false);
    }, 5);
  }
  if (work) {
    setTimeout(() => {
      setLinetextwidth(true);
    }, 2000);
  }
  else{
    setTimeout(() => {
      setLinetextwidth(false);
      }, 0.5);
  }


  return (
    <>
      <div className="main">
        <nav>
          <div className="logo"></div>
          <ul>
            <a href="#contact">
              <div
                className={`line ${work ? "lineAnimation" : ""} ${
                  workdata ? "line-width" : ""
                }`}
              >
                <h6
                  className={`${
                    lineTextWidth ? "lineTextWidth" : ""}
                   ${textRemove ? "default-line": ""}`}
                  onClick={() => setWork(false) && setTextremove(false)} 
                  id="lineWidth"
                >
                  Cancel
                </h6>
                <div className={` ${
                    lineTextWidth ? "lineTextWidth" : ""
                  } ${textRemove ? "default-line": ""}`}>
                  <Contact/>
                </div>
              </div>
              <button
                className={`nav-contact nav-contact-desktop ${work ? "contact" : ""}`}
                onClick={() => setWork(true)}
              >
                CONTACT
              </button>
            </a>
          </ul>
          {/* Responsive */}
          <button
                className={`nav-contact contact-responsive`}
                onClick={() => setresponsive(!responsive)}
              >
                {!responsive ? "CONTACT" : "Cancel"}
              </button>
        </nav>
          <Contactres buttonres={`${responsive ? "form-show" : "form-hide"}`}/>
        <Hero />
        {/* <About /> */}
        <Mywork/>
      </div>
    </>
  );
}

function Hero() {
  const words = ["Frontend", "Responsive", "UI UX"];
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typeEffect = () => {
      if (isTyping) {
        setDisplayedText(words[wordIndex].slice(0, displayedText.length + 1));
        if (displayedText.length === words[wordIndex].length) {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            setDisplayedText("");
          }, 2000); // Pause before erasing
        }
      }
    };

    const typingInterval = setInterval(typeEffect, 200);

    return () => clearInterval(typingInterval);
  }, [displayedText, isTyping, wordIndex, words]);

  return (
    <>
      <ResponsiveNav />
      <div className="text">
        <h5>I'm a</h5>
        <h1>
          <p className="gradient-text">{displayedText}</p>
          <span>Developer</span>
        </h1>
        <a href="#my-work">
          <button id="hero-project-button" className="btn-none">
            About Me
          </button>
        </a>
      </div>
      <div className=" no-copy hero-img">
        <img src="assets/headimg.jpg" className="restric-img" alt="header-img" />
      </div>
    </>
  );
}

function ResponsiveNav() {
  let [menu, activemenu] = useState(true);
  return (
    <>
    <h2 className="resnav">Devansh <span>Rajput</span></h2>
      <div className={`menu ${menu ? "" : "activeMenu"}`}>
        
        <img
          src="assets/cross.svg"
          className="res-cross"
          onClick={() => activemenu(!menu)}
        />
        <ul>
          
        </ul>
      </div>
      <button
        id="hero-project-button"
        className="btn-2-none"
        onClick={() => activemenu(!menu)}
      >
        About Me
      </button>
    </>
  );
}

function About() {
  return (
    <div className="about-center">
      <div id="about-section">
        <video
          loop
          controls
          poster="assets/postervideoanimation.jpg"
          className="about-video"
          id="img-background"
          src="assets/animation with html code.mp4"
        ></video>

        <div id="paragraph">
          <h3>About Me</h3>
          <p>
            Hey' dear my name is Devansh Rajput i am a Front end developer, I
            have learnt about HTML 5, CSS, JAVASCRIPT, I have also learnt about
            frameworks of Frontend like BOOTSTRAP, TAILWIND CSS, NODE JS,
            EXPRESS JS and REACT JS. I use VERCEL, NETLIFY and GITHUB PAGES for
            Deployment, I can make some unique UI and UX for better user
            experience.
            <h4 id="about-signature">Dh.</h4>
          </p>
        </div>
      </div>
    </div>
  );
}

function Mywork() {
  return (
    <WorkContainer/>
    // <div className="my-work">
    //   <h1>MY WORK</h1>
    //   {Workdata.map((item, i) => {
    //     return (
    //       <>
    //         <div id={item.imageBackground}></div>
    //         <a href={item.imageLink}>
    //           <div id={item.imageId}></div>
    //         </a>
    //         <div id={item.id}>
    //           <h3>{item.title}</h3>
    //           <p>{item.description}</p>
    //         </div>
    //       </>
    //     );
    //   })}
    // </div>
  );
}
