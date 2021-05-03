import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "../hooks/useScrollFadeIn";
function Photo({ back, duraction, delay }) {
  const PhotoDiv = styled.div`
    background-image: url(${back});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 400px;
    height: 400px;
    margin: 20px;
  `;
  return <PhotoDiv {...useScrollFadeIn("left", duraction, delay)} />;
}

export default Photo;
