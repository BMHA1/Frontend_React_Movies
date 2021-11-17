import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./Container/Login/Login";
import Header from "./Components/Header/Header";
import SingUp from "./Container/CreateUser/CreateUser";

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/login" element={<Login/>} exact />
        </Routes>
        <Routes>
          <Route path="/register" element={<SingUp/>} exact />
        </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
