import React, { useState, useEffect } from "react";
import SidebarAdmin from "./sidebarAdmin";
import TopBar from "./TopBar";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import swal from "sweetalert";
import userApiUrl from "../../url/userApiUrl";

const UpdateUser = () => {
  const location = useLocation();
  const userId = location.state.id;
  const initialEmail = location.state.email;
  const initialName = location.state.name;
  const initialRole = location.state.role;

  //console.log("Here it is = ",userId);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    id: userId,
    email: initialEmail,
    name: initialName,
    role: initialRole,
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //console.log(inputs);

    axios.put(userApiUrl, inputs).then(function (response) {
      //console.log(response);
      swal("Saved changes!");
      setTimeout(() => {
        navigate("/profile");
      }, 1000);
    });

    // const password = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);

    // const password = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);

    // inputs['password'] = password ;

    //console.log(inputs);

    // axios.put('http://localhost:8888/src/php/api/users.php',inputs)
    // .then(function(response){
    //   navigate('/profile');
    // });
  };

  return (
    <div>
      <TopBar />
      <div className="dashboard-1">
        <div >
          <SidebarAdmin />
        </div>
        <div >
          {/*starts here*/}
          <h1 className="mt-5" style={{ color: "gray", textAlign: "center" }}>
            Update User
          </h1>

          <form className="m-5" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group pl-0">
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    className="form-control"
                    id="name"
                    defaultValue={initialName}
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <div className="pl-0">
                    <input
                      type="text"
                      name="email"
                      onChange={handleChange}
                      className="form-control"
                      id="email"
                      defaultValue={initialEmail}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <div className="pl-0">
                    <select
                      defaultValue={initialRole}
                      className="form-select"
                      name="role"
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select Role
                      </option>
                      <option value="admin">Admin</option>
                      <option value="user">User</option>
                      <option value="super_admin">Super Admin</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </div>
            </div>
          </form>
          {/*ends here*/}
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;

