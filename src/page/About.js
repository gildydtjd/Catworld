import React from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import useScrollFadeIn from "../hooks/useScrollFadeIn";

function About(props) {
  const SectionBox = styled.div`
    width: 100%;
    height: ${(props) => (props.height ? props.height : "100vh")};
    background-image: url(${(props) => props.url});
    background-size: cover;
    background-repeat: no-repeat;
    opacity: ${(props) => props.opa};
    display: ${(props) => (props.dis ? props.dis : "flex")};
    align-items: center;
    color: #fff;

    background-position: center;
    .about__info {
      width: 100%;
      text-align: center;
      height: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      h2 {
        font-size: 150px;
        text-shadow: 10px 5px 10px #000000;
      }
    }
  `;
  return (
    <>
      <SectionBox url="/assets/img/cat/cat19.jpg" dis="block">
        <Header />
        <div className="about__info" {...useScrollFadeIn("right", 1, 0.5)}>
          <h2 style={{ color: "red" }}>A</h2>
          <h2 style={{ color: "yellow" }}>b</h2>
          <h2 style={{ color: "blue" }}>o</h2>
          <h2 style={{ color: "orange" }}>u</h2>
          <h2 style={{ color: "aqua" }}>t</h2>
          <h2 style={{ color: "green" }}>!</h2>
        </div>
      </SectionBox>
      <SectionBox></SectionBox>
    </>
  );
}

export default About;
