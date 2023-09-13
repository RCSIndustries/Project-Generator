import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useGeneratorServices } from "../../../services/generator/useGeneratorServices";
import { styled } from "styled-components";
const Wrapper = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center; /* Vertically center the child element */
	/* Additional styles for the wrapper if needed */
	height: 80vh; /* Set a specific height to the wrapper, e.g., full viewport height */
`;
const GenBox = styled.div`
	min-width: 40%;
	max-width:40%;
	min-height: 50%;
	max-height: 50%;
	background-color: #27213c; /* Background color for the page */
	border-radius: 10px; /* Adjust the value to control the amount of rounding */
	border: 2px solid #007bff;
	display:flex;
	flex-direction: column;
	align-items:center;
	position: relative;
	color:#fff;
`;
import GenerateButtonComponent from "../../common/GenerateBtn/Generatebtn";
import { Box } from "@mui/material";

export const Generator = ({ data, setData }) => {
  const updateData = async () => {
    useGeneratorServices(setData);
  };

  useEffect(() => {
    //Execute this everytime the data changes
  }, [data]);

  return (
    <React.Fragment>
      <Wrapper>
        <GenBox>
          <h2>{data.project_name}</h2>
          <p id="projectdesc">{data.project_desc}</p>
          <p id="projectlang">{data.project_lang}</p>
          <p id="projectdiff">{data.project_diff}</p>
          <GenerateButtonComponent onClick={updateData} />
        </GenBox>
      </Wrapper>
    </React.Fragment>
  );
};

Generator.propTypes = {
  data: PropTypes.shape({}).isRequired,
  setData: PropTypes.func.isRequired,
};
