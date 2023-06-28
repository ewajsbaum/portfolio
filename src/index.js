import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import Home from './components/Home';
import Projects from './components/Projects';
import Work from './components/Work';
import CurrentProject from './components/CurrentProject';
import CurrentEmployment from './components/CurrentEmployment';
import Education from './components/Education';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/work' element={<Work />} />
          <Route path='/currentProject' element={<CurrentProject />}></Route>
          <Route path='/currentEmployment' element={<CurrentEmployment />}></Route>
          <Route path='/education' element={<Education />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);

reportWebVitals();
