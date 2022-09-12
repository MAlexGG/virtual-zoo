import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import List from '../pages/list/List';
import Show from '../pages/show/Show';

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/list" element={<List/>}/>
            <Route path="/animal-card" element={<Show/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router