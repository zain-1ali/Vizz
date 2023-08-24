import "./App.css";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  redirect,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import EditCard from "./pages/EditCard/EditCard";
import Contacts from "./pages/Contacts/Contacts";
import Settings from "./pages/Settings/Settings";
function App() {
  let width = screen.width;
  return (
    <>
      {width > 900 ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/editcard" element={<EditCard />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <div
          style={{
            height: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          Please open the application on your laptop or desktop
        </div>
      )}
    </>
  );
}

export default App;
