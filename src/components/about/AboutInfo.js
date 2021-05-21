import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";

function AboutInfo({ img, name, about }) {
  const AboutBoxinfo = styled.div`
    width: 80%;
    height: 80%;
    background-color: #fff;
    display: flex;
    color: #000000;
    margin-left: 10%;
    padding: 20px;
    margin-top: 25px;
    margin-bottom: 25px;
    box-shadow: 0 0 16px 8px rgb(0 0 0 / 3%);
    border-radius: 0.5rem;

    .aboutBox__info__Information1 {
      width: 50%;
      height: 100%;
      .aboutBox__info__img {
        width: 600px;
        height: 500px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 0.5rem;
      }
    }
    .aboutBox__info__Information2 {
      width: 50%;
      height: 100%;
      padding: 20px 50px;
      line-height: 40px;

      p {
        padding: 20px;
        font-size: 23px;
      }
    }

    @media screen and (max-width: 768px) {
      width: 90%;
      margin-left: 5%;
      padding: unset;
      .aboutBox__info__Information1 {
        padding: 7px 5px;
        .aboutBox__info__img {
          width: 100%;
          padding: 10px 0px;
          height: 150px;
        }
      }
      .aboutBox__info__Information2 {
        padding: 5px 7px;
        line-height: unset;
        h2 {
          font-size: 10px;
        }
        p {
          padding: unset;
          font-size: 0.2em;
        }
      }
    }
  `;

  return (
    <AboutBoxinfo {...useScrollFadeIn("right", 0.7, 0.8)}>
      <div className="aboutBox__info__Information1">
        <img className="aboutBox__info__img" src={img} alt=""></img>
      </div>

      <div className="aboutBox__info__Information2">
        <h2>{name}</h2>
        <p style={{ opacity: "0.6" }}>{about}</p>
      </div>
    </AboutBoxinfo>
  );
}

export default AboutInfo;
