import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signin from './Component/Signin/Signin';
import Signup from './Component/Signup/Signup';
import Content from './Component/Dashboard/Content';
import Details from './Component/Dashboard/Details';
import { useState } from 'react';

function App() {
const [data,setData] = useState("")

  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Signin/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Dashboard' element={<Content/>}/>
      <Route path='details' element={<Details data={data} setData={setData}/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
