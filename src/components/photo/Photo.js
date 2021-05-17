import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";
// const backUrl = [
//   {
//     url: "/assets/img/cat/cat13.jpg",
//     duraction: 1,
//     delay: 0.5,
//     name: "이순신",
//     age: 4,
//     price: "200,000",
//   },
//   {
//     url: "/assets/img/cat/cat10.jpg",
//     duraction: 1,
//     delay: 0.6,
//     name: "곽재우",
//     age: 4,
//     price: "200,000",
//   },
//   {
//     url: "/assets/img/cat/cat11.jpg",
//     duraction: 1,
//     delay: 0.7,
//     name: "김유신",
//     age: 4,
//     price: "200,000",
//   },
//   {
//     url: "/assets/img/cat/cat12.jpg",
//     duraction: 1,
//     delay: 0.8,
//     name: "이이",
//     age: 4,
//     price: "200,000",
//   },
// ];
// const backUrl2 = [
//   {
//     url: "/assets/img/toy/toy1.jpg",
//     duraction: 1,
//     delay: 0.9,
//   },
//   {
//     url: "/assets/img/toy/toy2.jpg",
//     duraction: 1,
//     delay: 1.0,
//   },
//   {
//     url: "/assets/img/toy/toy3.jpg",
//     duraction: 1,
//     delay: 1.1,
//   },
//   {
//     url: "/assets/img/toy/toy4.jpg",
//     duraction: 1,
//     delay: 1.2,
//   },
// ];
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

    @media screen and (max-width: 768px) {
      :hover {
        background-size: 150%;
      }
    }
  `;
  return <PhotoDiv {...useScrollFadeIn("left", duraction, delay)}></PhotoDiv>;
}

export default Photo;
