import React from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";  

function Login() {
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
              {" "}
              <CloseOutlinedIcon />{" "}
            </button>
          </form>
          <h5 className="pt-10 text-center text-xl font-semibold">
            ADMIN LOGIN
          </h5>
          <form className="flex justify-center items-center pt-5">
            <div className="artboard phone-1 space-y-4">
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="input input-bordered w-full bg-red-50 focus:outline-none"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="input input-bordered w-full bg-red-50 focus:outline-none"
                required
              />
              <button className="btn bg-red-700 text-white border-transparent w-full hover:bg-red-600 focus:outline-none">
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
