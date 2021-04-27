import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "../hooks/useScrollFadeIn";
function Main(props) {
  const animatedItem = {
    0: useScrollFadeIn("left", 2.5, 0.5),
    1: useScrollFadeIn("right", 2.5, 0.4),
    2: useScrollFadeIn("left", 2.5, 0.5),
    3: useScrollFadeIn("right", 2.5, 0.4),
  };
  const SectionBox = styled.div`
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    margin-top: -4px;
    display: flex;
    justify-content: center;
    align-items: center;
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
        font-size: 21px;
      }
    }
  `;
  const VideoSectionBox = styled.video`
    width: 100%;
    height: 100vh;
    object-fit: cover;
  `;

  return (
    <>
      <VideoSectionBox autoPlay loop muted="muted">
        <source src="/assets/video/cat.mp4" type="video/mp4" />
      </VideoSectionBox>
      <SectionBox imgUrl="/assets/img/cat4.jpg" p="8%">
        <div className="sectionBox__left">
          <div className="sectionBox__left__info" {...animatedItem[3]}></div>
        </div>
        <div className="sectionBox__right">
          <div className="sectionBox__right__info" {...animatedItem[2]}>
            As anyone who has ever been around a cat for any length of time well
            knows, cats have enormous patience with the limitations of the human
            kind.
          </div>
        </div>
      </SectionBox>
      <SectionBox imgUrl="/assets/img/cat3.jpg" p="25%">
        <div className="sectionBox__right">
          <div className="sectionBox__right__info" {...animatedItem[0]}>
            It is difficult to obtain the friendship of a cat. It is a
            philosophical animal.... <br />
            one that does not place its affections thoughtlessly.
          </div>
        </div>
        <div className="sectionBox__left">
          <div className="sectionBox__left__info" {...animatedItem[1]}></div>
        </div>
      </SectionBox>
    </>
  );
}

export default Main;
