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
// import Analytics from "./pages/Analytics/AnalyticsPage";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./components/Loader/Loader";
import Forget from "./pages/ForgetPassword/Forget";
import AnalyticsPage from "./pages/Analytics/AnalyticsPage";
import { useEffect } from "react";
import { getOrganization } from "./redux/ApisSlice";
import { setOrgLogo } from "./redux/profileInfoSlice";
import Sidebar from "./components/Sidebar/Sidebar";
// import PrivateRoute from "./PrivateRoute";
// import Analytics from "./pages/Analytics/Analytics";
function App() {
  let width = screen.width;
  // let dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getOrganization());
  // }, []);
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
            <Route path="/forgetpassword" element={<Forget />} />
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
            <Route path="/analyticsPage" element={<AnalyticsPage />} />
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
      <ToastContainer
        position="bottom-left"
        autoClose={1000}
        theme="colored"
        hideProgressBar
      />
    </>
  );
}

export default App;
