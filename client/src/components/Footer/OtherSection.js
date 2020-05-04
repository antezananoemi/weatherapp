import React from "react";
import styled from "styled-components";
import fotImg from "../../assets/coolrainbow.svg";

const OtherContainer = styled.div`
  height: 200px;
  display: flex;
  background-color: #efefef;
  justify-content:center;
  img {
    width:50%
    margin:auto;
  }
  
`;
const FooterContent = () => {
  return (
    <OtherContainer>
      <img src={fotImg} alt="a nice rainbow" width="300" />
    </OtherContainer>
  );
};
export default FooterContent;
