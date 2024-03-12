// import login1 from "./Images/Logos/login1.svg";
// import { useDispatch, useSelector } from "react-redux";
// import * as sizes from "./Components/commonComps/Constants";
// import { useState , useEffect} from "react";
// import { login} from "./Slices/loginInfoSlice";
// import Spinner from "./Components/commonComps/Spinner";
// import { loginAsync} from "./Slices/loginInfoSlice";
// //import { loginAsync } from './Slices/authSlice';

// const Login = () => {

//   const dispatch = useDispatch();
//   const auth = useSelector((state) => state.auth);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//       console.log("call login")
//       dispatch(loginAsync({ email, password }));
//       console.log(auth)
//       // handle successful login, e.g., redirect or dispatch additional actions      // handle login error
//   };

//   // const handleRefreshToken = async () => {
//   //   const refreshToken = 'your_refresh_token_here'; // replace with actual refresh token
//   //   try {
//   //     const response = await dispatch(refreshTokenAsync(refreshToken));
//   //     // handle successful token refresh, e.g., dispatch setTokens action
//   //   } catch (error) {
//   //     // handle token refresh error
//   //     console.error('Token refresh failed:', error);
//   //   }
//   // };
//   // const dispatch = useDispatch();
//   // const isAuthenticated = useSelector((state) => state.loginInfo.isAuthenticated);
//   // const refreshToken = useSelector((state) => state.loginInfo.refreshToken);
//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");

//   // useEffect(() => {
//   //   if (isAuthenticated) {
//   //     // Perform actions for an authenticated user, e.g., redirect to dashboard
//   //   } else {
//   //     if (refreshToken) {
//   //       dispatch(refreshAccessTokenAsync(refreshToken))
//   //         .then((/* optional response */) => {
//   //           // Refresh successful, user is authenticated
//   //         })
//   //         .catch((refreshError) => {
//   //           console.error('Refresh token error:', refreshError);
//   //           // Handle refresh token error or prompt the user to log in
//   //         });
//   //     }
//   //   }
//   // }, [isAuthenticated, refreshToken, dispatch]);

//   // const handleLogin = async () => {
//   //   try {
//   //     const response = await dispatch(loginAsync(email, password));
//   //     console.log('Login successful:', response);
//   //     // Redirect or perform other actions after successful login
//   //   } catch (error) {
//   //     console.error('Login error:', error);
//   //     // Handle login error
//   //   }
//   // };

//   // const dispatch = useDispatch();
//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");
//   // const isMobile =
//   //   useSelector((store) => store.screenSize.screenSize) ===
//   //   (sizes.mdTablet || sizes.smMobile || sizes.xsMobile);

//   // const handleLogin = async () => {
//   //   try {
//   //     await dispatch(login({email, password }));
//   //     // Redirect or perform other actions after successful login
//   //   } catch (error) {
//   //     // Handle login error
//   //   }
//   // };

//   // const handleLogin = async () => {
//   //   var myHeaders = new Headers();
//   //   myHeaders.append("Content-Type", "application/json");

//   //   var raw = JSON.stringify({
//   //     email: `${email}`,
//   //     password: `${password}`,
//   //   });

//   //   var requestOptions = {
//   //     method: "POST",
//   //     headers: myHeaders,
//   //     body: raw,
//   //     redirect: "follow",
//   //   };
//   //   const data = await fetch(
//   //     "https://finmatrixnodejs.onrender.com/api/user/login",
//   //     requestOptions
//   //   );
//   //   const login = await data.json();
//   //   console.log(login);
//   //   dispatch(setLogin(login.user.isVerified));
//   // };

//   return (
//     <div className="bg-white">
//       <div className="flex items-center my-auto min-h-full flex-row justify-center px-6 pb-12 lg:px-8">
//         {/* {isLoading ? (
//           <Spinner/>
//         ) : ( */}
//           <>
//             {/* {!isMobile &&     ( */ (
//               <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//                 <img
//                   className="mx-auto w-auto"
//                   src={login1}
//                   alt="Your Company"
//                 />
//               </div>
//             )}

//             <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//               <form className="space-y-6">
//                 <div>
//                   <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//                     Sign in to your account
//                   </h2>

//                   <label
//                     className="block text-sm font-medium leading-6 text-gray-900"
//                   >
//                     Email address
//                   </label>
//                   <div className="mt-2">
//                     <input
//                       name="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       required
//                       className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <div className="flex items-center justify-between">
//                     <label
//                       className="block text-sm font-medium leading-6 text-gray-900"
//                     >
//                       Password
//                     </label>
//                   </div>
//                   <div className="mt-2">
//                     <input
//                       name="password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       required
//                       className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                     <button
//                       className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                       onClick={() => handleLogin()}
//                     >
//                       Sign in
//                     </button>
//                 </div>
//               </form>
//             </div>
//           </>
//         {/* )} */}
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "./Slices/loginInfoSlice";
import login1 from "./Images/Logos/login1.svg";

const Login = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(username, password);
    dispatch(loginAsync({ email: username, password }));
  };

  return (
    <>
      <div className="bg-white">
        <div className="flex items-center my-auto min-h-full flex-row justify-center px-6 pb-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img className="mx-auto w-auto" src={login1} alt="Your Company" />
          </div>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div>
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
              </h2>

              <label className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => handleLogin()}
                disabled={auth.status === "loading"}
              >
                {auth.status === "loading" ? "Logging in..." : "Login"}
              </button>
              {/* <button onClick={()=>handleLogin()} disabled={auth.status === "loading"}>
        {auth.status === "loading" ? "Logging in..." : "Login"}
      </button> */}
            </div>

            {auth.status === "failed" && <div>Error: {auth.error}</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
