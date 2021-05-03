import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "../hooks/useScrollFadeIn";
import PhotoGallery from "../components/photo/PhotoGallery";
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

    @media screen and (max-width: 768px) {
      .sectionBox__header {
        flex-direction: column;
        text-align: center;
        .sectionBox__header__span {
          margin-right: 0px;
          padding: 20px 20px;
          background-color: #c9c9c9;
          border: 1px solid #fff;
        }
      }
    }
    .sectionBox__header {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      span {
        color: white;
        padding: 30px 20px;
        font-size: 22px;
        margin-right: 100px;
        font-weight: 800;
        :hover {
          cursor: pointer;
        }
      }
    }
  `;

  return (
    <>
      <SectionBox url="/assets/img/cat7.jpg" dis="inline-block">
        <div className="sectionBox__header">
          <span
            className="sectionBox__header__span"
            {...useScrollFadeIn("left", 1, 0.3)}
          >
            HOME
          </span>
          <span
            className="sectionBox__header__span"
            {...useScrollFadeIn("left", 1, 0.4)}
          >
            ABOUT
          </span>
          <span
            className="sectionBox__header__span"
            {...useScrollFadeIn("left", 1, 0.5)}
          >
            SHOP
          </span>
          <span
            className="sectionBox__header__span"
            {...useScrollFadeIn("left", 1, 0.6)}
          >
            Q&A
          </span>
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
