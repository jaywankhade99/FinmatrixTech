import React, { useState } from "react";
import cmpLogo from "../Images/Logos/finmatrix-logo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faBell,
  faEnvelope,
  faUserGear,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Slices/loginInfoSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [userDetails, showUserDetails] = useState(false);
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  return (
    <>
      <div className="row z-10 w-screen bg-white h-16 shadow-lg text-center flex justify-between p-4">
        <div>
          <Link to="/">
            <img
              className="w-16 mx-4 hover:scale-110 transform-origin-center transition-transform"
              src={cmpLogo}
              alt="Logo"
            />
          </Link>
        </div>
        {isAdmin && (
          <h4>
            Welcome to <strong>Finmatrix Pay</strong> Retailer Panner
          </h4>
        )}
        <div className="flex gap-5 pr-9">
          <FontAwesomeIcon
            icon={faBell}
            size="lg"
            style={{ color: "#cbd5e1" }}
          />
          <FontAwesomeIcon
            icon={faEnvelope}
            size="lg"
            style={{ color: "#cbd5e1" }}
          />
          <div className="flex self-end flex-col">
            <div
              className="cursor-pointer"
              onClick={() => showUserDetails(!userDetails)}
            >
              <FontAwesomeIcon
                icon={faUserGear}
                size="2xl"
                style={{ color: "#ca8a04" }}
              />
            </div>
            {userDetails && (
              <div className="absolute bg-white shadow-xl rounded w-36 h-60 top-16 right-12 p-2 mix-blend-darken">
                <ul className="pt-3">
                  <li>Change Password</li>
                  <li onClick={() => dispatch(logout())}>Log Out</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
