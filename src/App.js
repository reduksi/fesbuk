import './App.css';
import { Routes, Route} from "react-router-dom"
import Navbar from "./components/navbar";
import Container from "./components/container";

import Users from './pages/Users'
import UserDetail from './pages/UserDetail'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Container>
        <Routes>
          <Route path={"/"} element={<Users/>} />
          <Route path={"/user/:userId"} element={<UserDetail/>} />
        </Routes>
      </Container>
      
    </div>
  );
}

export default App;
