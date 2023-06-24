
import './App.css';
import Home from "./Home";
import Header from "./Header";
import Checkout from './Checkout';

import{ BrowserRouter as Router , Route, Routes } from "react-router-dom";



function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path='/' element={<Header/>} />
             </Routes>

            <Routes>
                <Route path='/' element={<Home/>} />
            </Routes>
            
            <Routes>
                <Route path='/checkout' element={<Header/>} />
            </Routes>
            <Routes>
              <Route path='/checkout' element={<Checkout/>} />
            </Routes>
           
             
         
        </Router>
       

    </div>
  );
}

export default App;
