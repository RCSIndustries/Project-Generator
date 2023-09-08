import { Route, Routes } from 'react-router';
import { ResponsiveNavBar } from './web/common/ResponseiveNavBar';
import Generator from './components/Generator/Generator';
import { GeneratorProps } from './components/Generator/Generator';
const initProps:GeneratorProps ={
  "projectName":"DEF",
  "projectDesc":"",
  "projectDiff":"",
  "projectLang":""
};
function ProjectGenerator() {
  return (
    <div className="ProjectGenerator">
      <ResponsiveNavBar />
      <Routes>
        { <Route path='/' element={<Generator {...initProps}/>} />
        /*<Route path='/generator' element={<Generator />} />
        <Route path='/aboutus' element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default ProjectGenerator;
