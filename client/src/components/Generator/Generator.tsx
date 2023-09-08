import React, { FC } from 'react';
import './Generator.css'; 
interface GeneratorProps {}

function generateIdea(){
   console.log("Generate");
}

const Generator: FC<GeneratorProps> = () => (
<div className='Generator-Page'>
   <button id="generate-btn" onClick={generateIdea}>Generate</button>


</div>
);

export default Generator;
