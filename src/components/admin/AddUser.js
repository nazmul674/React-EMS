import React, { useState } from "react";
import SidebarAdmin from "./sidebarAdmin";
import TopBar from "./TopBar";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { Audio, Circles, Oval } from "react-loader-spinner";
import CryptoJS from "crypto-js";
import userApiUrl from "../../url/userApiUrl";

function AddUser() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState([]);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    //auto generated password
    const password =
      Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
    // console.log('Initial Password');
    // console.log(password);

    //Encrypt the password
    var enPassword = CryptoJS.MD5(password).toString();
    // console.log('Encrypt Data -')
    // console.log(enPassword);

    //Decrypt the password
    // var bytes = CryptoJS.AES.decrypt(enPassword, password).toString();
    // console.log('decrypted Data -')
    // console.log(bytes);

    inputs["password"] = enPassword;

    inputs["raw_password"] = password;

    //console.log(inputs);

    // .post("http://localhost:8888/src/php/api/users.php", inputs)
    axios
      .post(
        userApiUrl,
        inputs
      )

      .then(function (response) {
        //console.log(response);
        swal("User Added Successfully!");
        navigate("/profile");
      });
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
            ADD User
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
                    placeholder="Name"
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
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <div className="pl-0">
                    <select
                      defaultValue={""}
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
                      {/* .map(UserData){} */}
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <button type="submit" className="btn btn-primary">
                  ADD
                </button>
              </div>
            </div>
          </form>
          {/*ends here*/}
        </div>
      </div>
    </div>
  );
}

export default AddUser;