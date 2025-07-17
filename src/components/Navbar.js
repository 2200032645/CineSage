import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../auth/firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#6c1212", color: "white" }}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link to={"/"} className="navbar-brand text-white">
            <h5><b>CineSage</b></h5>
          </Link>
          <div className="d-flex align-items-center">
            {currentUser ? (
              <h6 className="mb-0 text-capitalize me-3">{currentUser?.displayName}</h6>
            ) : (
              <button className="btn btn-outline-light me-2" onClick={() => navigate("/login")}>
                <b>Login</b>
              </button>
            )}
            {currentUser ? (
              <button className="btn btn-outline-light" onClick={() => logOut()}>
                Logout
              </button>
            ) : (
              <button className="btn btn-outline-light" onClick={() => navigate("/register")}>
                <b>Sign Up</b>
              </button>
            )}
          </div>
        </div>
      </nav>

      <div className="footer navbar navbar-expand-lg fixed-bottom" style={{ backgroundColor: "#6c1212", color: "white", padding: "10px" }}>
        <div className="container-fluid d-flex justify-content-center align-items-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} Movie Recommendation System. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;