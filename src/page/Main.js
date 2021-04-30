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

    .sectionBox__sub {
      height: 50vh;
      background-color: green;
      display: flex;
      justify-content: center;
      align-items: center;
      .sectionBox__sub__info {
        background-color: pink;
        width: 400px;
        height: 400px;
        margin: 20px;
      }
    }
    .sectionBox__sub2 {
      height: 50vh;
      background-color: aqua;
      display: flex;
      justify-content: center;
      align-items: center;
      .sectionBox__sub2__info {
        background-color: wheat;
        width: 800px;
        height: 430px;
      }
    }
    .sectionBox__sub3 {
      background-color: slateblue;
      width: 80%;
      height: 90vh;
    }
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
        <div className="sectionBox__sub">
          <div
            className="sectionBox__sub__info"
            {...useScrollFadeIn("left", 1, 0.5)}
          ></div>
          <div
            className="sectionBox__sub__info"
            {...useScrollFadeIn("left", 1, 0.6)}
          ></div>
          <div
            className="sectionBox__sub__info"
            {...useScrollFadeIn("left", 1, 0.7)}
          ></div>
        </div>
        <div className="sectionBox__sub2">
          <div
            className="sectionBox__sub2__info"
            {...useScrollFadeIn("left", 1.5, 0.7)}
          ></div>
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
