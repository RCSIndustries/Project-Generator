import React, { FC } from 'react';
import { GeneratorWrapper,GenerateButton } from './Generator.styled';

interface GeneratorProps {}

const Generator: FC<GeneratorProps> = () => (
 <GeneratorWrapper>
   
        <input type="text" placeholder="Enter text"/>
        <br></br>
        <GenerateButton>
          Generate
        </GenerateButton>
 </GeneratorWrapper>
);

export default Generator;
