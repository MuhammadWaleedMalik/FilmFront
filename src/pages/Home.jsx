import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import Logo from "/images/Filmora.jpeg";

const Home = () => {
  return (
    <div id="main" className="dark-theme">
      <div id="page1" className="section">
        <h2 className="highlight-text">Editing at a Clip, Get Ready to Flip</h2>
        <h2 className="glowing-text">Filmora</h2>
        <p className="fade-in-text">
        Editing at a Clip, Get Ready to Flip </p>
      </div>

      <div id="page2" className="section">
        <div id="about_us">
          <div id="about_us_p">
            <h3 className="highlight-text">About Us</h3>
            <p>
              Filmora simplifies content creation with AI-generated video clips, images, charactersgeneration. Designed for creatives, it streamlines workflows, making high-quality multimedia production effortless.
            </p>
          </div>
          <img src="https://t4.ftcdn.net/jpg/04/19/34/29/360_F_419342999_u4s8VjJqfO5atQDO5j6OqTwtfPCUNT28.jpg" alt="About Us" className="about-image" />
        </div>
      </div>

      <div id="page3" className="section">
        <div id="box1" className="feature-box">
          <div id="box_left">
            <img src={Logo} alt="Filmora Logo" className="feature-image" />
          </div>
          <div id="box_right" className="feature-content">
            <h3 className="glowing-text">How It Works</h3>
            <p>
              Filmora offers AI-powered tools for video creation, image generation, and lifelike character design. Streamline your content workflow with intuitive features that enhance creativity effortlessly.
            </p>
           
          </div>
        </div>
      </div>

      <div id="page4" className="section">
        <h1 className="cta-text glowing-text">Join Filmora Now and Get Exclusive Offers</h1>
      </div>
    </div>
  );
};

export default Home;
