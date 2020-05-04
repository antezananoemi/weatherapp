import React from "react";
import styled from "styled-components";

const Content = styled.div`
  border-style: groove;
  position: relative;
  z-index: 100;
  margin-top: -250px;
  margin-bottom: 0px;
  padding: 20px 60px;
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
  max-width: 940px;
  h2 {
    text-align: center;
  }
`;
const stepsContent = () => {
  return (
    <Content>
      <h2>Check the weather</h2>
      <div>
        To check the weather in your country please follow the next steps:
      </div>
      <ul>
        <li>On the search bar of the map please enter your location</li>
        <li>Select your location</li>
        <li>See the weather of your city</li>
        <li>
          If you want to see the forecast for the next days, please add the
          quantity of days and then click on Forecast button.
        </li>
      </ul>
    </Content>
  );
};
export default stepsContent;
