import React from "react";
import styled from "styled-components";
import AboutInfoBox from "../components/about/AboutInfoBox";
import useScrollFadeIn from "../hooks/useScrollFadeIn";
import Footer from "../components/footer/Footer";

function About(props) {
  const SectionBox = styled.div`
    width: 100%;
    height: ${(props) => (props.height ? props.height : "100vh")};
    background-image: url(${(props) => props.url});
    background-size: cover;
    background-repeat: no-repeat;
    opacity: ${(props) => props.opa};
    display: ${(props) => (props.dis ? props.dis : "flex")};
    background-position: center;
    align-items: center;
    color: #fff;

    .company__about {
      width: 80%;
      height: 80%;
      color: #fff;
      margin-left: 10%;
      .company__about__info {
        padding-top: 25%;
        h2 {
          font-size: 40px;
        }
        p {
          font-size: 25px;
        }
      }
    }
    @media screen and (max-width: 768px) {
      height: ${(props) => (props.hheight ? props.hheight : "100vh")};
      .company__about {
        width: 60% !important;
        margin-left: 8%;
        padding-top: ${(props) => (props.paddingTT ? props.paddingTT : "80%")};

        .company__about__info {
          h2 {
            font-size: 20px !important;
          }
          p {
            font-size: 15px !important;
          }
        }
      }
    }
  `;
  return (
    <>
      <SectionBox url="/assets/img/cat/cat3.jpg" dis="block">
        <div className="company__about">
          <div
            className="company__about__info"
            {...useScrollFadeIn("right", 1, 0.5)}
          >
            <h2>Catch About</h2>
            <p>Here are some information on cats</p>
            <p> that exist in the Catch Company.</p>
            <p>Get solid information and find the cat you're looking for.</p>
          </div>
        </div>
      </SectionBox>
      <SectionBox dis="inline-block" height="100%" hheight="100%">
        <AboutInfoBox></AboutInfoBox>
      </SectionBox>
      <Footer />
    </>
  );
}

export default About;
