import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Pancake } from './pages/pancake';
import { Uniswap } from './pages/uniswap';
import { Mdex } from './pages/mdex';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Pancake />}></Route>
          <Route path='/pancake' element={<Pancake />}></Route>
          <Route path='/uniswap' element={<Uniswap />}></Route>
          <Route path='/mdex' element={<Mdex />}></Route>
          <Route path='*' element={<h1>NOT FOUND</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
