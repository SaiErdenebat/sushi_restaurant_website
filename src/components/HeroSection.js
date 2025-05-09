import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video
        class="background_video"
        //src="/videos/Yosuke_v2_compressed.mp4"
        playsinline
        loop
        muted
        autoPlay
        poster="images/background_pic.png"
      ></video>

      <h1>Sakana Sushi Bar & Japanese Cuisine</h1>
      <p>DINE-IN & PICK UP AVAILABLE!</p>
      <a
        class="button"
        href="https://app.masa.plus/store/9950"
        target="_blank"
      >
        <span>Order Online</span>
      </a>
    </div>
  );
}

export default HeroSection;
