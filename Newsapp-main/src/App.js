import './App.css';
import React, { useState } from 'react';
import NavBar from './component/NavBar';
import News   from './component/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
const App=()=>{
  
  const [progress, setProgress] = useState(0)
  
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
          color='#f11946'
          progress={progress}
         />
          <Routes>
            <Route exact path="/" element={<News   key="general" category="general" />} />
            <Route exact path="/Home" element={<News   key="Home" category="general" />} />
            <Route exact path="/business" element={<News   key="business" category="business" />} />
            <Route exact path="/entertainment" element={<News   key="entertainment" category="entertainment" />} />
            <Route exact path="/general" element={<News   key="general" category="general" />} />
            <Route exact path="/health" element={<News   key="health" category="health" />} />
            <Route exact path="/science" element={<News   key="science" category="science" />} />
            <Route exact path="/sports" element={<News   key="sports" category="sports" />} />
            <Route exact path="/technology" element={<News   key="technology" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
export default App;

