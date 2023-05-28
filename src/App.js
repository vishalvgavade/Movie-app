import React from 'react'
import './App.css';
import Movies from './Components/Movies'
import Searchbar from './Components/Searchbar'
import { Route,Routes } from 'react-router-dom';
import Home from './Components/Home'
import SingleMovie from './Components/SingleMovie'
function App() {
  return (
    <>
    <div className="App">
    {/* <Searchbar />
      <Movies /> */}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movie/:id' element={<SingleMovie />}/>
      </Routes>
    </div>
    </> 
  );
}
export default App;
