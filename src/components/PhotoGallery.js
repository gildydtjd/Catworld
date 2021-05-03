import React from "react";
import styled from "styled-components";
import Photo from "./Photo";
function PhotoGallery(props) {
  const PhotoGallery = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const backUrl = [
    {
      url: "/assets/img/cat13.jpg",
      duraction: 1,
      delay: 0.5,
    },
    {
      url: "/assets/img/cat14.jpg",
      duraction: 1,
      delay: 0.6,
    },
    {
      url: "/assets/img/cat15.jpg",
      duraction: 1,
      delay: 0.7,
    },
    {
      url: "/assets/img/cat17.jpg",
      duraction: 1,
      delay: 0.8,
    },
  ];

  const photoRender = backUrl.map((props) => {
    return (
      <Photo back={props.url} duraction={props.duraction} delay={props.delay} />
    );
  });
  return <PhotoGallery>{photoRender}</PhotoGallery>;
}

export default PhotoGallery;
