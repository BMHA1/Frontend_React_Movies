import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import Login from "./Container/Login/Login";
import Header from "./Container/Components/Header/Header";
import  ProfileUser from "./Container/ProfileUser/ProfileUser"
import  ProfileAdmin from "./Container/ProfileAdmin/ProfileAdmin"
import CreateUser from "./Container/CreateUser/CreateUser";
import UsersList from "./Container/Components/UsersList/UsersList";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} exact />
          <Route path="/register" element={<CreateUser />} exact />
        </Routes>
        <Routes>
          <Route path="/profileUser" element={<ProfileUser/>} exact />
          <Route path="/profileAdmin" element={<ProfileAdmin/>} exact />
          <Route path="/UsersList" element={<UsersList/>} exact />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
