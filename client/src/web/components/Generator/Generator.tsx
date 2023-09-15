import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useGeneratorServices } from "../../../services/generator/useGeneratorServices";
import { styled } from "styled-components";
import GenerateButtonComponent from "../../common/GenerateBtn/Generatebtn";
import { Box } from "@mui/material";

const Wrapper = styled.main({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center', /* Vertically center the child element */
	/* Additional styles for the wrapper if needed */
	height: '80vh', /* Set a specific height to the wrapper, e.g., full viewport height */
});

const GenBox = styled.div({
	minWidth: '40%',
	maxWidth: '40%',
	minHeight: '50%',
	maxHeight: '50%',
	backgroundColor: '#27213c', /* Background color for the page */
	borderRadius: '10px', /* Adjust the value to control the amount of rounding */
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	position: 'relative',
	color: '#fff',
	padding: '20px'
});

const DataBox = styled.div({
  maxHeight: '75%',
  overflow: 'auto',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	position: 'relative',
	color: '#fff',
	padding: '20px',
});

const StyledHeader = styled.h2({
  textAlign: 'center',
})

const StyledText = styled.p({
  textAlign: 'center',
})

export const Generator = ({ data, setData }) => {

  const [levelColor, setLevelColor] = useState('#007bff')

  const updateData = () => {
    useGeneratorServices(setData);
  };

  useEffect(() => {
    //Execute this everytime the data changes
    setLevelColor('#007bff');
    if (data?.project_diff) {
      if (data.project_diff === 'Advanced') {
        setLevelColor('#FF0000')
      } else if (data.project_diff === 'Intermediate') {
        setLevelColor('#FFFF00')
      } else if (data.project_diff === 'Beginner') {
        setLevelColor('#008000')
      } else if (data.project_diff.includes('Varies')) {
        setLevelColor('#FF8095')
      }
    }
  }, [data]);

  return (
    <React.Fragment>
      <Wrapper>
        <GenBox style={{ border: `2px solid ${levelColor}` }}>
          <DataBox>
            <StyledHeader>{data.project_name}</StyledHeader>
            <StyledText>{data.project_desc}</StyledText>
            <StyledText>{data.project_lang}</StyledText>
            <StyledText>{data.project_diff}</StyledText>
          </DataBox>
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
