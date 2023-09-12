import React from 'react';
import ReactDOM from 'react-dom/client';
import ProjectGenerator from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
  <React.StrictMode>
    <BrowserRouter>
      <ProjectGenerator />
    </BrowserRouter>
  </React.StrictMode>
);
