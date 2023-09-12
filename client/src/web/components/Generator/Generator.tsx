import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useGeneratorServices } from '../../../services/generator/useGeneratorServices';
import './test.css';
import { styled } from 'styled-components';

const Wrapper = styled.div`
`;

export const Generator = ({data, setData}) => {
   
  const updateData = async () => {
   useGeneratorServices(setData);
 };

 useEffect(() => {
   //Execute this everytime the data changes
 }, [data])

   return(
      <React.Fragment>
         <Wrapper>
         <h2>{data.project_name}</h2>
         <p id="projectdesc">{data.project_desc}</p>
         <p id="projectlang">{data.project_lang}</p>
         <p id="projectdiff">{data.project_diff}</p>
         <button id="generate-btn" onClick={updateData}>Generate</button>
         </Wrapper>
      </React.Fragment>
   );
};

Generator.propTypes = {
   data: PropTypes.shape({}).isRequired,
   setData: PropTypes.func.isRequired
};