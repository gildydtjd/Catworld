import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "../hooks/useScrollFadeIn";
import PhotoGallery from "../components/photo/PhotoGallery";
import Header from "../components/header/Header";
import { Link } from "react-router-dom";

function Main(props) {
  const SectionBox = styled.div`
    width: 100%;
    height: ${(props) => (props.height ? props.height : "100vh")};
    background-image: url(${(props) => props.url});
    background-size: cover;
    background-repeat: no-repeat;
    opacity: ${(props) => props.opa};
    display: ${(props) => (props.dis ? props.dis : "flex")};
    align-items: center;
    justify-content: center;
    background-position: center;

    .sectionBox__about {
      width: 50%;
      height: 50%;
      margin-left: 8%;
      margin-top: 10%;
      .sectionBox__about__info1 {
        color: #fff;
        h2 {
          font-size: 15px;
        }
        p {
          font-size: 40px;
          font-weight: 600;
        }
      }
      .sectionBox__about__info2 {
        color: #fff;
        p {
          font-size: 22px;
          opacity: 0.6;
        }
      }
    }
    .info__h2 {
      margin-left: 15%;
      padding: "20px 0px 0px 10px";
      color: black;
    }

    @media screen and (max-width: 768px) {
      .sectionBox__about {
        width: 80% !important;
        margin-left: 8%;
        margin-top: 70% !important;
        .sectionBox__about__info1 {
          h2 {
            font-size: 10px !important;
          }
          p {
            font-size: 20px !important;
          }
        }
        .sectionBox__about__info2 {
          p {
            font-size: 15px !important;
          }
        }
      }
      .info__h2 {
        margin-left: unset;
        padding: unset;
        text-align: center;
      }
    }
  `;

  return (
    <>
      <SectionBox url="/assets/img/cat7.jpg" dis="inline-block">
        <Header />
        <div className="sectionBox__about">
          <div
            className="sectionBox__about__info1"
            {...useScrollFadeIn("right", 1, 0.4)}
          >
            <h2>2021</h2>
            <p>Catch</p>
            <p>High Class Cat</p>
          </div>
          <div
            className="sectionBox__about__info2"
            {...useScrollFadeIn("right", 1, 0.4)}
          >
            <p>The above company is a company that only</p>
            <p>provides high-quality services for cats.</p>
            <p>If you have no love for cats, please return.</p>
          </div>
        </div>
      </SectionBox>
      <SectionBox dis="inline-block" height="100%">
        <div {...useScrollFadeIn("up", 1, 0.6)}>
          <h2 className="info__h2">New Family Information</h2>
        </div>
        <PhotoGallery />
        <Link {...useScrollFadeIn("up", 1, 0.6)} to="/about">
          <span
            style={{
              textDecoration: "none",
              float: "right",
              marginRight: "15%",
              color: "black",
              marginBottom: "10px",
            }}
          >
            + More
          </span>
        </Link>
      </SectionBox>
      <SectionBox url="/assets/img/cat18.jpg">
        <div className="sectionBox__about">
          <div
            className="sectionBox__about__info1"
            {...useScrollFadeIn("up", 1, 0.4)}
          >
            <h2 style={{ color: "red" }}>warning</h2>
            <p>Catch</p>
            <p>Cats faster than light</p>
          </div>
          <div
            className="sectionBox__about__info2"
            {...useScrollFadeIn("up", 1, 0.4)}
          >
            <p>If you bother the cat</p>
            <p>Faster than light</p>
            <p>you will be hit by a nyang nyang kick.</p>
          </div>
        </div>
      </SectionBox>
      <SectionBox></SectionBox>
    </>
  );
}

export default Main;
