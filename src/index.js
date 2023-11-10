import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import Home from './components/Home';
import Projects from './components/Projects';
import CurrentProject from './components/CurrentProject';
import Education from './components/Education';
import Calculator from './components/Calculator';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <HashRouter basename="">
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/currentProject' element={<CurrentProject />}></Route>
          <Route path='/education' element={<Education />}></Route>
          <Route path='/calculator' element={<Calculator />}></Route>
        </Route>
      </Routes>
    </HashRouter >
  </>


);

reportWebVitals();
