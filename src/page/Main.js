import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "../hooks/useScrollFadeIn";
import PhotoGallery from "../components/photo/PhotoGallery";
import Header from "../components/header/Header";
function Main(props) {
  const SectionBox = styled.div`
    width: 100%;
    height: 100vh;
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

    @media screen and (max-width: 768px) {
      .sectionBox__about {
        width: 80% !important;
        margin-left: 8%;
        margin-top: 60% !important;
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
            font-size: 22px !important;
          }
        }
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
            {...useScrollFadeIn("right", 1, 0.7)}
          >
            <h2>2021</h2>
            <p>Catch</p>
            <p>High Class Cat</p>
          </div>
          <div
            className="sectionBox__about__info2"
            {...useScrollFadeIn("right", 1, 0.7)}
          >
            <p>The above company is a company that only</p>
            <p>provides high-quality services for cats.</p>
            <p>If you have no love for cats, please return.</p>
          </div>
        </div>
      </SectionBox>
      <SectionBox>
        <PhotoGallery />
      </SectionBox>
      <SectionBox className="aaa" url="/assets/img/cat17.jpg"></SectionBox>
      <SectionBox></SectionBox>
    </>
  );
}

export default Main;
