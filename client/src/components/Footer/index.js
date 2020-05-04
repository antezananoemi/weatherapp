import React from "react";
import styled from "styled-components";
import fotImg from "../../assets/happy.svg";

const FooterContainer = styled.div`
  height: 120px;
  position: static;
  display: block;
  padding: 2%;
  background-color: #b1c4ce;
  img {
    float: left;
  }
  .license {
    float: right;
  }
`;
const FooterContent = () => {
  return (
    <FooterContainer>
      <img src={fotImg} alt="footer message" width="300" />
      <div className="license">
        A weather checker made by{" "}
        <a
          href="mailto:antezananoemi@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="icon icon-mail"></i> Noemi Antezana
        </a>
      </div>
    </FooterContainer>
  );
};
export default FooterContent;
