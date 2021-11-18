import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./Container/Login/Login";
import Header from "./Container/Components/Header/Header";
import  ProfileUser from "./Container/ProfileUser/ProfileUser"
import  ProfileAdmin from "./Container/ProfileAdmin/ProfileAdmin"
import CreateUser from "./Container/CreateUser/CreateUser";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} exact />
          <Route path="/register" element={<CreateUser />} exact />
        </Routes>
        <Header />
        <Routes>
          <Route path="/profileUser" element={<ProfileUser/>} exact />
          <Route path="/profileAdmin" element={<ProfileAdmin/>} exact />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
