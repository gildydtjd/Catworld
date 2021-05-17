import React from "react";
import styled from "styled-components";
import CompanyHistoryBox from "../components/companyHistory/CompanyHistoryBox";
import Footer from "../components/footer/Footer";
import useScrollFadeIn from "../hooks/useScrollFadeIn";
function Company(props) {
  const SectionBox = styled.div`
    width: 100%;
    height: ${(props) => (props.height ? props.height : "100vh")};
    background-image: url(${(props) => props.url});
    background-size: cover;
    background-repeat: no-repeat;
    opacity: ${(props) => props.opa};
    display: ${(props) => (props.dis ? props.dis : "flex")};
    align-items: center;
    justify-content: center;
    background-position: center;
    .company__about {
      width: 80%;
      height: 80%;
      color: #fff;
      margin-left: 10%;
      .company__about__info {
        margin-top: 25%;
        h2 {
          font-size: 40px;
        }
        p {
          font-size: 25px;
        }
      }
    }
    @media screen and (max-width: 768px) {
      height: ${(props) => (props.hheight ? props.hheight : "100vh")};
      .company__about {
        width: 60% !important;
        margin-left: 8%;
        margin-top: ${(props) => (props.marginTT ? props.marginTT : "80%")};

        .company__about__info {
          h2 {
            font-size: 20px !important;
          }
          p {
            font-size: 15px !important;
          }
        }
      }
    }
  `;

  return (
    <>
      <SectionBox url="/assets/img/cat/cat13.jpg" dis="block">
        <div className="company__about">
          <div
            className="company__about__info"
            {...useScrollFadeIn("right", 1, 0.5)}
          >
            <h2>Catch Company</h2>
            <p>The above company was founded on July 31, 1993</p>
            <p> and currently has a surplus of 2 billion won in sales</p>
            <p>
              Catch is a promising company with support from many large
              companies
            </p>
          </div>
        </div>
      </SectionBox>
      <SectionBox dis="inline-block" height="100%">
        <CompanyHistoryBox />
      </SectionBox>
      <Footer />
    </>
  );
}

export default Company;
