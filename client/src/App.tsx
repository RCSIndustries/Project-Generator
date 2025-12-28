import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import { ResponsiveNavBar } from './web/common/ResponseiveNavBar';
import { Generator } from './web/components/Generator';
import { initProps } from './web/components/maps/maps';
import { About } from './web/components/About/About';
function ProjectGenerator() {
  const [data, setData] = useState<object>(initProps);

  return (
    <React.Fragment>
      <ResponsiveNavBar />
      <Routes>
        <Route path='/' element={<Generator data={data} setData={setData} />} />
        <Route path='/generator' element={<Generator data={data} setData={setData} />} />
        <Route path='/aboutus' element={<About data={data} setData={setData} />} />
      </Routes>
    </React.Fragment>
  );
}

export default ProjectGenerator;
