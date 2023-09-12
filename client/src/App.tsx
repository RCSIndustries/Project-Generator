import { Route, Routes } from 'react-router';
import { ResponsiveNavBar } from './web/common/ResponseiveNavBar';
import Generator from './web/components/Generator/Generator';
import { GeneratorProps } from './structs/generatorinterface';
import { useState } from 'react';
const initProps:GeneratorProps ={
  "project_name":"",
  "project_desc":"",
  "project_diff":"",
  "project_lang":""
};
function ProjectGenerator() {
  const [data, setData] = useState<GeneratorProps>(initProps);

  // Function to update data
  const updateData = (params:GeneratorProps) => {
    setData(params);
  };
  return (
    <div className="ProjectGenerator">
      <ResponsiveNavBar />
      <Routes>
        { <Route path='/' element={<Generator {...data} setData={setData}/>} />
        /*<Route path='/generator' element={<Generator />} />
        <Route path='/aboutus' element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default ProjectGenerator;
