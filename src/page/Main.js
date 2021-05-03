import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "../hooks/useScrollFadeIn";
import PhotoGallery from "../components/PhotoGallery";
function Main(props) {
  const SectionBox = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${(props) => props.url});
    background-size: cover;
    background-repeat: no-repeat;
    opacity: ${(props) => props.opa};
    display: ${(props) => (props.dis ? props.dis : "inline-block")};
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
        <PhotoGallery />
      </SectionBox>
    </>
  );
}

export default Main;
