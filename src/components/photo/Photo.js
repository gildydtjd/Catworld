import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";
function Photo({ back, duraction, delay, name, age, price }) {
  const PhotoDiv = styled.div`
    background-image: url(${back});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 300px;
    height: 300px;
    margin: 20px;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 12px 12px 2px 1px #c9c9c9;
    color: #fff;
    :hover {
      background-size: 180%;
      color: gold;
    }
    .photo__info__box {
      width: 100%;
      height: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 80%;
      span {
        margin: 10px;
        font-weight: 600;
      }
    }
  `;
  return (
    <PhotoDiv {...useScrollFadeIn("left", duraction, delay)}>
      <div className="photo__info__box">
        <span>{name}</span>
        <span>{age}살</span>
        <span>${price}</span>
      </div>
    </PhotoDiv>
  );
}

export default Photo;
