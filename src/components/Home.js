import React from "react";
import "./Home.css";
import Typewriter from 'typewriter-effect';


export default function Home() {
  return (
    <div className="right">
      Shreyash Dewanagna<br/>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Web Dev")
            .callFunction(() => {})
            .pauseFor(1000)
            .deleteAll()
            .callFunction(() => {})
            .start();
          typewriter
            .typeString("BTech Grad")
            .callFunction(() => {})
            .pauseFor(1000)
            .deleteAll()
            .callFunction(() => {})
            .start();
          typewriter
            .typeString("React dev")
            .callFunction(() => {})
            .pauseFor(1000)
            .deleteAll()
            .callFunction(() => {})
            .start();
          typewriter
            .typeString("Django dev")
            .callFunction(() => {})
            .pauseFor(1000)
            .deleteAll()
            .callFunction(() => {})
            .start();
        }}
      />
    </div>
  );
}
