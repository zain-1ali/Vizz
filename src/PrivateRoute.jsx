// import React from "react";
// import { Route, Navigate, useNavigate } from "react-router-dom";

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const token = localStorage.getItem("vizzToken");
//   const navigate = useNavigate();
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         token ? <Component {...props} /> : <Navigate to="/" />
//       }
//     />
//   );
// };

// export default PrivateRoute;
