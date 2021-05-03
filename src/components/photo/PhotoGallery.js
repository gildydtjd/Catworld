import React from "react";
import styled from "styled-components";
import Photo from "./Photo";
function PhotoGallery(props) {
  const PhotoGallery = styled.div`
    width: 80%;
    height: 80vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  `;
  const backUrl = [
    {
      url: "/assets/img/cat13.jpg",
      duraction: 1,
      delay: 0.5,
      name: "이순신",
      age: 4,
      price: "200,000",
    },
    {
      url: "/assets/img/cat10.jpg",
      duraction: 1,
      delay: 0.6,
      name: "곽재우",
      age: 4,
      price: "200,000",
    },
    {
      url: "/assets/img/cat11.jpg",
      duraction: 1,
      delay: 0.7,
      name: "김유신",
      age: 4,
      price: "200,000",
    },
    {
      url: "/assets/img/cat12.jpg",
      duraction: 1,
      delay: 0.8,
      name: "이이",
      age: 4,
      price: "200,000",
    },
    {
      url: "/assets/img/cat5.jpg",
      duraction: 1,
      delay: 0.9,
      name: "세종대왕",
      age: 4,
      price: "200,000",
    },
    {
      url: "/assets/img/cat14.jpg",
      duraction: 1,
      delay: 1.0,
      name: "일지매",
      age: 4,
      price: "200,000",
    },
    {
      url: "/assets/img/cat15.jpg",
      duraction: 1,
      delay: 1.1,
      name: "장길산",
      age: 4,
      price: "200,000",
    },
    {
      url: "/assets/img/cat16.jpg",
      duraction: 1,
      delay: 1.2,
      name: "임꺽정",
      age: 4,
      price: "200,000",
    },
  ];

  const photoRender = backUrl.map((props) => {
    return (
      <Photo
        back={props.url}
        duraction={props.duraction}
        delay={props.delay}
        name={props.name}
        age={props.age}
        price={props.price}
      />
    );
  });
  return <PhotoGallery>{photoRender}</PhotoGallery>;
}

export default PhotoGallery;
