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
import { ToastContainer } from "react-toastify";
import Analytics from "./pages/Analytics/Analytics";
import { useSelector } from "react-redux";
import Loader from "./components/Loader/Loader";
// import PrivateRoute from "./PrivateRoute";
// import Analytics from "./pages/Analytics/Analytics";
function App() {
  let width = screen.width;
  let theToken = localStorage.getItem("vizzToken");
  const RequireAuth = ({ children }) => {
    return theToken ? children : <Navigate to="/" />;
  };

  const RequireAuthlogin = ({ children }) => {
    return !theToken ? children : <Navigate to="/home" />;
  };
  return (
    <>
      {width > 900 ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/home"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path="/editcard/:id" element={<EditCard />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/analytics" element={<Analytics />} />
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
      <ToastContainer position="top-center" autoClose={1000} />
    </>
  );
}

export default App;
