import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./New.css";
import { UseStateProvider } from "./Contexts/StateProvider";
import { Link } from "react-router-dom";
import auth from "../firbase";

// Images
import New1 from "./Resources/image/New.jpg";

const New = () => {
  const [{ basket, user }, dispatch] = UseStateProvider();

  const Spike = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="New m-1 p-1 w-100 ">
      <div className="sign-in bg-white">
        <p className="fs-6.5 text-center pb-3 sign">
          Sign in for the best Experince
        </p>
        <Link
          to={!user && "/login"}
          onClick={Spike}
          className="d-flex mx-auto bg-warning mx-auto rounded-2 py-2 sub text-black text-decoration-none pb-2 pt-3"
        >
          {user ? "Sign Out" : "Sign In Securly"}
        </Link>
      </div>

      <br />
      <div className="million-product">
        <img className="w-100" src={New1} alt="" />
      </div>
    </div>
  );
};

export default New;
