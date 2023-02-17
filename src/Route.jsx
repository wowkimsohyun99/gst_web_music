import React from 'react';
import 'antd/dist/antd.css';
import HomePage from "./HomePage";
import PlayersPage from "./PlayersPage";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
const App = () => {
  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path="/web_music" element = {<HomePage/>}/>
                  <Route path="/web_music/playing" element = {<PlayersPage/>}/>
              </Routes>
          </BrowserRouter>
      </div>
  );
};

export default App;
