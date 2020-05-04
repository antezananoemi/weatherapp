import React from "react";
import hero from "../../assets/background.jpg";
import rainbow from "../../assets/rainbow2.svg";
import styled from "styled-components";
import StepsContent from "./stepsContent";
const Hero = styled.div`
  height: ${(p) => (p.height ? `${p.height}px` : "500px")};
  ${(p) =>
    p.img
      ? `background-image: url(${p.img});
  background-position: 50% 50%;
  background-size: cover;
  background - repeat: no - repeat;`
      : `margin-top: 64px;`}
`;
const Container = styled.div`
  position: relative;
  display: flex;
  height: 80vh;
  padding: 1px 0px;
  flex-direction: column;
  text-align: center;
  img {
    margin-top: 60px;
  }
  h1 {
    color: #273c48;
    font-size: 60px;
    line-height: 66px;
    margin-top: 40px;
    margin-bottom: 20px;
  }
  .text-block {
    margin-top: 21px;
    margin-bottom: 25px;
    font-family: Lato, Arial, sans-serif;
    color: #2a2a2a;
    font-size: 19px;
    line-height: 27px;
    text-align: center;
  }
  a {
    display: block;
    width: 240px;
    margin-right: auto;
    margin-left: auto;
    padding-top: 17px;
    padding-bottom: 17px;
    border: 2px solid #273c48;
    background-color: transparent;
    opacity: 1;
    transition: background-color 108ms ease;
    color: #273c48;
    font-size: 13px;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
  }
`;

const HeroContent = () => {
  return (
    <>
      <Hero>
        <Container>
          <img src={rainbow} style={{ height: "100px" }} alt="rainbow" />
          <h1>Weather Checker</h1>
          <div className="text-block">Check the weather of your city</div>
          <a
            href="https://rapidapi.com/community/api/open-weather-map"
            target="_blank"
            rel="noopener noreferrer"
          >
            Weather Api
          </a>
        </Container>
      </Hero>
      <Hero img={hero} height={300} />
      <StepsContent />
    </>
  );
};
export default HeroContent;
