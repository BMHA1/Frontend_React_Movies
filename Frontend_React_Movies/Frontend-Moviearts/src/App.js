import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.scss';
import Login from "./Container/Login/Login";
// import Header from "./Container/Components/Header/Header";
import ProfileAdmin from "./Container/ProfileAdmin/ProfileAdmin"
import CreateUser from "./Container/CreateUser/CreateUser";
import UsersList from "./Container/Components/UsersList/UsersList";
import MoviePage from "./Container/MoviePage/MoviePage";


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        {/* <Header  /> */}
        <Routes>
          <Route path="/" element={<Login />} exact />
          <Route path="/register" element={<CreateUser />} exact />
          <Route path="/moviepage" element={<MoviePage />} exact />
          <Route path="/profileAdmin" element={<ProfileAdmin />} exact />
          <Route path="/UsersList" element={<UsersList />} exact />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
