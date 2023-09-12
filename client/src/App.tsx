import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import { ResponsiveNavBar } from './web/common/ResponseiveNavBar';
import { Generator } from './web/components/Generator';
import { initProps } from './web/components/maps/maps';

function ProjectGenerator() {
  const [data, setData] = useState<object>(initProps);

  return (
    <React.Fragment>
      <ResponsiveNavBar />
      <Routes>
        <Route path='/' element={<Generator data={data} setData={setData}/>} />
        {/*<Route path='/generator' element={<Generator />} />
        <Route path='/aboutus' element={<About />} /> */}
      </Routes>
    </React.Fragment>
  );
}

export default ProjectGenerator;
