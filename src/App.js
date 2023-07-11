

import './App.css';
import Card from './Card';
import Home from './Home';
import {BrowserRouter,Route , Routes} from "react-router-dom"

function App() {
  return (
   
   
    <div className="App">
     {/* <Home/> */}
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/main' element={<Card/>} />
     </Routes>
   
     
    </div>
   
   
    
  );
}

export default App;
