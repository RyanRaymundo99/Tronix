import { Watch } from "@mui/icons-material";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import './App.scss';
import Home from './pages/Home/Home'
import Login from './pages/login/Login';
import Register from './pages/Register/Register';

const App = () => {
  const user = true;
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ user ? <Home /> : <Navigate to="/register" /> } />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />

        {  user && (
          <>
          <Route path="/movies" element={<Home type="movies" />} />
          <Route path="/series" element={<Home type="series" />} />
          <Route path="/wacth" element={<Watch />} />
          </>
        )}
      </Routes>
    </div>
  )
}

export default App
