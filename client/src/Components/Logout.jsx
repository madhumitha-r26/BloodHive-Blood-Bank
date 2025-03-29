import React from "react";
import { NavLink } from "react-router-dom";

function Logout() {
  return (
    <div>
      <NavLink to="/">
        {" "}
        <button className="btn text-white border-white bg-transparent btn-outline cursor-pointer hover:border-white shadow-none">
          Logout
        </button>
      </NavLink>
    </div>
  );
}

export default Logout;
