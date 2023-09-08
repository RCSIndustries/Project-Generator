import React, { FC } from 'react';
import './Generator.css'; 
interface GeneratorProps {
   projectName:String;
   projectDesc:String;
   projectDiff:String;
   projectLang:String;
}

function generateIdea(){
   console.log("Generate");
}

const Generator: FC<GeneratorProps> = (projectName:"",projectDesc:"",projectDiff:"",projectLang:"") => (
<div className='Generator-Page'>
   <h2></h2>
   <button id="generate-btn" onClick={generateIdea}>Generate</button>
</div>
);

export default Generator;
