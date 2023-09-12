import React, { FC } from 'react';
import './Generator.css'; 
import { generateIdea } from '../../../services/generator/generatorservices';
import { GeneratorProps } from '../../../structs/generatorinterface';




const Generator: FC<GeneratorProps> = (data:any, setData:any) => {

return(
<div className='Generator-Page'>
   <h2>{data.project_name}</h2>
   <button id="generate-btn" onClick={generateIdea}>Generate</button>
</div>
);
};

export default Generator;
