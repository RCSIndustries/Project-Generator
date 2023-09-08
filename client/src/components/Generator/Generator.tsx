import React, { FC } from 'react';
import './Generator.css'; 
export interface GeneratorProps {
   projectName:String;
   projectDesc:String;
   projectDiff:String;
   projectLang:String;
}

function generateIdea(){
   console.log("Generate");
}


const Generator: FC<GeneratorProps> = (data:GeneratorProps) => (
<div className='Generator-Page'>
   <h2>{data.projectName}</h2>
   <button id="generate-btn" onClick={generateIdea}>Generate</button>
</div>
);

export default Generator;
