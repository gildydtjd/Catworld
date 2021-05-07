import React from "react";
import styled from "styled-components";

function Footer(props) {
  const FooterDiv = styled.div`
    padding: 55px 0 45px;
    background-color: #252525;
    position: relative;
    ul,
    li {
      list-style: none;
    }
    ul {
      text-align: center;
    }
    li {
      color: #888;
      display: inline;
      margin-right: 12px;
    }
    p {
      float: center;
      color: #888;
      letter-spacing: 2px;
      font: 400 14px/ 40px "Open Sans", sans-serif;
      clear: both;
      text-align: center;
    }
    @media screen and (max-width: 768px) {
      font-size: 13px;
    }
  `;
  return (
    <FooterDiv>
      <ul>
        <li>Home</li>
        <li>ㆍ</li>
        <li>About</li>
        <li>ㆍ</li>
        <li>Shop</li>
        <li>ㆍ</li>
        <li>Q&A</li>
        <li>ㆍ</li>
        <li>Contact</li>
      </ul>
      <p>©2020 Catch Company - Dragon gil</p>
    </FooterDiv>
  );
}

export default Footer;
