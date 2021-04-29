import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "../hooks/useScrollFadeIn";
function Main(props) {
  const SectionBox = styled.div`
    @media only screen and (max-width: 480px) {
      display: block;
      background-position-x: center;

      .sectionBox__left {
        width: 100% !important;
        height: 70vh !important;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .sectionBox__left__info {
        height: 300px !important;
        background-size: cover;
        width: 300px !important;
      }
      .sectionBox__right {
        width: 100% !important;
        height: 30vh !important;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .sectionBox__right__info {
        margin: 0;
        font-size: 20px !important;
        text-align: center;
      }
    }
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    margin-top: -4px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${(props) => props.url});
    background-size: cover;
    background-repeat: no-repeat;
    .sectionBox__left {
      width: 50%;
      height: 100vh;
      .sectionBox__left__info {
        background-image: url(${(props) => props.imgUrl});
        background-size: cover;
        background-repeat: no-repeat;
        width: 80%;
        height: 80%;
        margin: 10%;
        border-radius: 5px;
      }
    }
    .sectionBox__right {
      width: 50%;
      height: 100vh;
      background-color: black;
      .sectionBox__right__info {
        color: #fff;
        width: 80%;
        margin: 70% ${(props) => props.p};
        font-size: 30px;
      }
    }
  `;

  return (
    <>
      <SectionBox url="/assets/img/cat7.jpg" />
      <SectionBox imgUrl="/assets/img/cat5.jpg" p="8%">
        <div className="sectionBox__left">
          <div
            className="sectionBox__left__info"
            {...useScrollFadeIn("right", 2.5, 0.4)}
          ></div>
        </div>
        <div className="sectionBox__right">
          <div
            className="sectionBox__right__info"
            {...useScrollFadeIn("left", 2.5, 0.5)}
          >
            부모님은 고양이를 싫어하셨다
          </div>
        </div>
      </SectionBox>
      <SectionBox imgUrl="/assets/img/cat3.jpg" p="25%">
        <div className="sectionBox__right">
          <div
            className="sectionBox__right__info"
            {...useScrollFadeIn("right", 2.5, 0.4)}
          >
            그래서 나는 고양이를 데려왔다
          </div>
        </div>
        <div className="sectionBox__left">
          <div
            className="sectionBox__left__info"
            {...useScrollFadeIn("left", 2.5, 0.5)}
          ></div>
        </div>
      </SectionBox>
      <SectionBox imgUrl="/assets/img/cat2.jpg" p="8%">
        <div className="sectionBox__left">
          <div
            className="sectionBox__left__info"
            {...useScrollFadeIn("right", 2.5, 0.4)}
          ></div>
        </div>
        <div className="sectionBox__right">
          <div
            className="sectionBox__right__info"
            {...useScrollFadeIn("left", 2.5, 0.5)}
          >
            집에 온지 어느덧 5년...
          </div>
        </div>
      </SectionBox>
      <SectionBox imgUrl="/assets/img/cat6.jpg" p="25%">
        <div className="sectionBox__right">
          <div
            className="sectionBox__right__info"
            {...useScrollFadeIn("right", 2.5, 0.4)}
          >
            어머니가 말씀하셨다. <br />
            너없인 살아도 냥냥이 없인 못산다고..
          </div>
        </div>
        <div className="sectionBox__left">
          <div
            className="sectionBox__left__info"
            {...useScrollFadeIn("left", 2.5, 0.5)}
          ></div>
        </div>
      </SectionBox>
      <SectionBox imgUrl="/assets/img/cat8.jpg" p="8%">
        <div className="sectionBox__left">
          <div
            className="sectionBox__left__info"
            {...useScrollFadeIn("right", 2.5, 0.4)}
          ></div>
        </div>
        <div className="sectionBox__right">
          <div
            className="sectionBox__right__info"
            {...useScrollFadeIn("left", 2.5, 0.5)}
          >
            고양이는 사랑이다 ❤
          </div>
        </div>
      </SectionBox>
    </>
  );
}

export default Main;
