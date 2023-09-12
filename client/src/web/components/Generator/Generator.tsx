import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useGeneratorServices } from '../../../services/generator/useGeneratorServices';

export const Generator = ({data, setData}) => {
   
  const updateData = async () => {
   useGeneratorServices(setData);
 };

 useEffect(() => {
   console.log('Data: ', data);
 }, [data])

   return(
      <React.Fragment>
         <h2>{data.project_name}</h2>
         <button id="generate-btn" onClick={updateData}>Generate</button>
      </React.Fragment>
   );
};

Generator.propTypes = {
   data: PropTypes.shape({}).isRequired,
   setData: PropTypes.func.isRequired
};