import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "../hooks/useScrollFadeIn";
function Main(props) {
  const SectionBox = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${(props) => props.url});
    background-size: cover;
    background-repeat: no-repeat;
    opacity: ${(props) => props.opa};
    display: ${(props) => props.dis};
    align-items: center;
    justify-content: center;
    background-position: center;
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
          color: gold;
          cursor: pointer;
        }
      }
    }
    p {
      text-align: center;
      font-weight: 700;
      font-size: 50px;
    }

    .sectionBox__sub {
      height: 60vh;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .sectionBox__sub2 {
      height: 100vh;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      .sectionBox__sub2__info {
        background-color: wheat;
        width: 50%;
        height: 40vh;
        color: white;
      }
    }
    .sectionBox__sub3 {
      background-color: slateblue;
      width: 80%;
      height: 90vh;
    }
  `;
  const SectionBOxSUBINFO = styled.div`
    background-image: url(${(props) => props.infoUrl});
    background-color: pink;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: ${(props) => (props.width ? props.width : "400px")};
    height: ${(props) => (props.height ? props.height : "400px")};
    margin: 20px;
    border: 2px solid #fff;
  `;

  return (
    <>
      <SectionBox url="/assets/img/cat7.jpg">
        <div className="sectionBox__header">
          <span {...useScrollFadeIn("left", 1, 0.3)}>HOME</span>
          <span {...useScrollFadeIn("left", 1, 0.4)}>ABOUT</span>
          <span {...useScrollFadeIn("left", 1, 0.5)}>SHOP</span>
          <span {...useScrollFadeIn("left", 1, 0.6)}>Q&A</span>
        </div>
      </SectionBox>
      <SectionBox>
        <p {...useScrollFadeIn("right", 1, 0.3)}>
          There is everything in the world in a cat's eyes
        </p>
        <p {...useScrollFadeIn("right", 1, 0.3)}>
          Time with a cat is never wasted
        </p>
        <div className="sectionBox__sub">
          <SectionBOxSUBINFO
            className="sectionBox__sub__info"
            infoUrl="/assets/img/cat10.jpg"
            {...useScrollFadeIn("left", 1, 0.5)}
          ></SectionBOxSUBINFO>
          <SectionBOxSUBINFO
            className="sectionBox__sub__info"
            infoUrl="/assets/img/cat11.jpg"
            {...useScrollFadeIn("left", 1, 0.6)}
          ></SectionBOxSUBINFO>
          <SectionBOxSUBINFO
            className="sectionBox__sub__info"
            infoUrl="/assets/img/cat12.jpg"
            {...useScrollFadeIn("left", 1, 0.7)}
          ></SectionBOxSUBINFO>
        </div>
        <p {...useScrollFadeIn("right", 1, 0.3)}>
          There is everything in the world in a cat's eyes
        </p>
        <p {...useScrollFadeIn("right", 1, 0.3)}>
          Time with a cat is never wasted
        </p>
      </SectionBox>
      <SectionBox>
        <div className="sectionBox__sub2">
          <SectionBOxSUBINFO
            className="sectionBox__sub__info"
            infoUrl="/assets/img/cat2.jpg"
            width="70%"
            height="50%"
            {...useScrollFadeIn("up", 1, 0.5)}
          ></SectionBOxSUBINFO>
        </div>
      </SectionBox>
      <SectionBox url="/assets/img/cat5.jpg"></SectionBox>
      <SectionBox dis="flex">
        <div className="sectionBox__sub3">
          <div className="sectionBox__sub3__info"></div>
          <div className="sectionBox__sub3__info"></div>
        </div>
      </SectionBox>
    </>
  );
}

export default Main;
