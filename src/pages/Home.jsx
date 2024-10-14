import React from "react";
import "./Home.css";
import headerVideo from "./../assets/headerVideo.mp4";
const Home = () => {
  return (
    <>
      <section className="home">
        <div className="home-video">
          <video
            src={headerVideo}
            className="w-100"
            autoPlay
            loop
            muted
          ></video>
        </div>
        <div className="video-text">
          <h6>Yoga is a Therapy Why Not Do With Us</h6>
        </div>
      </section>
    </>
  );
};

export default Home;
