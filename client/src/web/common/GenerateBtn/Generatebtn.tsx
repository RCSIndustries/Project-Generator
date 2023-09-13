import React from 'react';
import styled from 'styled-components';

const GenerateButton = styled.button`
  background-color: #4CAF50; /* Green background color */
  color: #fff; /* White text color */
  padding: 12px 24px; /* Padding for the button */
  font-size: 18px; /* Font size */
  border: none; /* Remove the default button border */
  border-radius: 8px; /* Rounded corners */
  cursor: pointer; /* Add a pointer cursor on hover */
  transition: background-color 0.3s ease; /* Smooth transition for background color */
  position: absolute;

  bottom: 5%;
  /* Add hover styles */
  &:hover {
    background-color: #45a049; /* Darker green on hover */
    border: 2px solid transparent; /* Transparent border initially */
    background-clip: padding-box; /* Apply background to padding area only */
    background-image: linear-gradient(to top, #4CAF50 0%, #4CAF50 100%); /* Gradient border color */
  }
`;

function GenerateButtonComponent({ onClick }) {
  return (
    <GenerateButton onClick={onClick}>
      Generates
    </GenerateButton>
  );
}

export default GenerateButtonComponent;