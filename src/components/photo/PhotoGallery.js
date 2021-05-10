import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Photo from "./Photo";
function PhotoGallery({ arrays }) {
  const [photoArray, setArray] = useState([
    {
      url: "",
      duraction: "",
      delay: "",
      name: "",
      age: "",
      price: "",
    },
  ]);

  useEffect(() => {
    setArray(arrays);
  }, [arrays]);

  const PhotoGallery = styled.div`
    width: 80%;
    height: 40vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-left: 10%;
    @media screen and (max-width: 768px) {
      height: 100%;
    }
  `;

  const photoRender = photoArray.map((props, index) => {
    return (
      <Photo
        key={index}
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
