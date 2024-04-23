import "./Styles/utilities.css"
import Authentication from "./Authentication";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element ={<Authentication />}/>
          <Route path="/" element ={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
