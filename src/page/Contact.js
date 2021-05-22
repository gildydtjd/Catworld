import React from "react";
import styled from "styled-components";
import Footer from "../components/footer/Footer";

function Contact(props) {
  const SectionBox = styled.div`
    width: 100%;
    height: ${(props) => (props.height ? props.height : "100vh")};
    background-image: url(${(props) => props.url});
    background-size: cover;
    background-repeat: no-repeat;
    opacity: ${(props) => props.opa};
    display: ${(props) => (props.dis ? props.dis : "flex")};
    background-position: center;
    align-items: center;
    color: #fff;
    .contact__div {
      width: 70%;
      height: 25%;
      margin-left: 15%;
      margin-top: 25%;
      text-align: end;
      h2 {
        font-size: 30px;
      }
    }
    @media screen and (max-width: 768px) {
      .contact__div {
        width: 100%;
        margin-left: unset;
        margin-top: 70%;
        text-align: center;
        h2 {
          font-size: 18px;
        }
      }
    }
  `;
  return (
    <>
      <SectionBox url="/assets/img/contact/contact3.jpg" dis="inline-block">
        <div className="contact__div">
          <h2>Catch Company</h2>
          <h2>Call : 010-3094-1587</h2>
          <h2>E-mail : gildydtjd@naver.com</h2>
        </div>
      </SectionBox>
      <Footer />
    </>
  );
}

export default Contact;
