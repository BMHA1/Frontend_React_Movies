import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.scss';
import Login from "./Container/Login/Login";
// import Header from "./Container/Components/Header/Header";
import ProfileAdmin from "./Container/ProfileAdmin/ProfileAdmin"
import CreateUser from "./Container/CreateUser/CreateUser";
import UsersList from "./Container/Components/UsersList/UsersList";
import MoviePage from "./Container/MoviePage/MoviePage";
import PayPage from "./Container/PayPage/PayPage";
import Myrentals from "./Container/Myrentals/Myrentals"


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        {/* <Header  /> */}
        <Routes>
          <Route path="/" element={<Login />} exact />
          <Route path="/register" element={<CreateUser />} exact />
          <Route path="/homepage" element={<MoviePage />} exact />
          <Route path="/myrentals" element={<Myrentals/>} exact />
          <Route path="/profileAdmin" element={<ProfileAdmin />} exact />
          <Route path="/UsersList" element={<UsersList />} exact />
          <Route path="/cart" element={<PayPage />} exact />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
