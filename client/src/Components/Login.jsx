import React, { useState } from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const AdminLogin = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "admin123") {
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div>
      <button
        className="btn bg-transparent btn-outline cursor-pointer hover:border-white shadow-none"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Admin Login
      </button>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-red-500 p-4">
          <form method="dialog">
            <button className="btn btn-sm border-transparent shadow-none bg-transparent absolute right-2 top-2">
              <CloseOutlinedIcon />
            </button>
          </form>
          <h5 className="pt-10 text-center text-xl font-semibold">
            ADMIN LOGIN
          </h5>
          <form className="flex justify-center items-center pt-5" onSubmit={AdminLogin}>
            <div className="artboard phone-1 space-y-4">
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full bg-red-50 focus:outline-none"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full bg-red-50 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="btn bg-red-700 text-white border-transparent w-full hover:bg-red-600 focus:outline-none"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;