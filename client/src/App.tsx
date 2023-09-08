import { Route, Routes } from 'react-router';
import { ResponsiveNavBar } from './web/common/ResponseiveNavBar';
import Generator from './components/Generator/Generator';
function ProjectGenerator() {
  return (
    <div className="ProjectGenerator">
      <ResponsiveNavBar />
      <Routes>
        { <Route path='/' element={<Generator />} />
        /*<Route path='/generator' element={<Generator />} />
        <Route path='/aboutus' element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default ProjectGenerator;