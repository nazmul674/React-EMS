import React, { useState, useEffect } from "react";
import TopBar from "./TopBar";
import SidebarAdmin from "./sidebarAdmin";
import Grid from "@mui/material/Grid";
import { Form, Button } from "react-bootstrap";
//import UserData from "../../data/user.json";
import CabinetData from "../../data/cabinets.json";
import { useNavigate } from "react-router-dom";
import "react-bootstrap-icons";
import "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import equipmentApiUrl from "../../url/equipmentApiUrl";

function AddEquipment() {
  const [UserData, setUserData] = useState([]);
  const addCabinetNav = useNavigate();
  const [assignedDate, setAssignedDate] = useState(null);
  const [purchasedDate, setPurchasedDate] = useState(null);

  // // console.log(DisplayData);
  // const [user, setUser] = useState([]);
  // //  const addUserNav = useNavigate();

  // const loaduser = async () => {
  //   const result = await axios.post(
  //     "http://localhost:8888/src/php/api/users.php"
  //   );
  //   setUser(result.data.phpResult);
  //   console.log(result.data.phpResult);
  // };
  // useEffect(() => {
  //   loaduser();
  // }, []);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://localhost:8888/equipment-management-system/src/php/api/users.php"
      )
      .then((resp) => {
        //console.log(resp.data);
        setUserData(resp.data);
      })
      .catch((error) => {
        console.log("Not found! " + error);
      });
  }, []);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post(equipmentApiUrl, inputs).then(function (response) {
      console.log(response.data);
    });
    navigate("/equipments");
  };

  return (
    <>
      <TopBar />
      <div className="dashboard-1">
        <div>
          <SidebarAdmin />
        </div>
        <div className="dashboard">
          <div>
            <div
              className="col-md-3 mt-5"
              style={{ display: "flex", marginLeft: "2rem" }}
            >
              <button
                type="button"
                className="form-control"
                style={{ backgroundColor: "orange", color: "white" }}
                onClick={() => addCabinetNav("/equipments")}
              >
                All Equipments
              </button>
            </div>

            <h1 className="mt-5" style={{ color: "gray", textAlign: "center" }}>
              ADD Equipment
            </h1>
            <form className="m-5" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                      id="equipname"
                      placeholder="Equipment Name"
                      name="equipname"
                    />
                  </div>
                </div>

                <div className="col-md-8">
                  <div className="form-group pl-0">
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                      id="category"
                      placeholder="Category Name"
                      name="category"
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <div className="pl-0">
                      <input
                        type="number"
                        className="form-control"
                        onChange={handleChange}
                        id="price"
                        placeholder="Price"
                        name="price"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-8 form-group">
                  <select
                    className="form-control"
                    id="cabinet"
                    name="cabinet"
                    onChange={handleChange}
                  >
                    <option value="Kitchen-2-1">Kitchen-2-1 </option>
                    <option value="Workstation--1-1"> Workstation-1-1 </option>
                    <option value="Workstation--3-2"> Workstation-3-2</option>
                    <option value="Kitchen-2-3"> Kitchen-1-3 </option>
                    {/* {Object(CabinetData).map((cab) => (
                      <option
                        key={
                          cab.location + "-" + cab.row + "-" + cab.cabinet_no
                        }
                        value={
                          cab.location + "-" + cab.row + "-" + cab.cabinet_no
                        }
                      >
                        {cab.location + "-" + cab.row + "-" + cab.cabinet_no}
                      </option>
                    ))} */}
                  </select>
                </div>

                <div
                  className="col-md-1"
                  style={{ color: "gray", left: "1.4rem" }}
                >
                  {" "}
                  or{" "}
                </div>

                <div className="col-md-3">
                  <button
                    type="button"
                    className="form-control"
                    style={{ backgroundColor: "orange", color: "white" }}
                    onClick={() => addCabinetNav("/cabinets/addCabinets")}
                  >
                    Add Cabinet
                  </button>
                </div>

                <div className="col-md-12 form-group">
                  <select
                    className="form-control"
                    id="assignto"
                    name="assignto"
                    onChange={handleChange}
                  >
                    {/* <option value="0">Assigned To...</option>
                    <option value="sajjad">sajjad</option>
                    <option value="babor">babor</option>
                    <option value="soron">soron</option>
                    <option value="oyon">oyon</option> */}
                    {Object(UserData).map((user) => (
                      <option key={user} value={user.name}>
                        {user.name}
                      </option>
                    ))}
                    console.log(user.id);
                  </select>
                </div>

                {/* <div className="input-group">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                      id="inputGroupFileAddon01"
                    >
                      Upload an Image
                    </span>
                  </div>
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="equipmentImage"
                    />
                    <label className="custom-file-label">Choose file...</label>
                  </div>
                </div> */}

                <div className="col-md-4">
                  <div className="form-group">
                    <div className="pl-0">
                      <input
                        type="date"
                        className="form-control"
                        onChange={handleChange}
                        id="assigndate"
                        placeholder="assigndate"
                        name="assigndate"
                      />
                    </div>
                  </div>
                </div>
                {/* <div>
                  <input
                    className="col-md-8 form-group mt-2"
                    style={{ color: "black" }}
                    id="assigndate"
                    onChange={handleChange}
                    name="assigndate"
                    placeholder="assigndate"
                  />
                </div> */}
                {/* <div className="input-group mb-3">
                  <p style={{ color: "gray", marginRight: "2em" }}>
                    Assigned date
                  </p> */}
                {/* <DatePicker
                      dateFormat="yyyy/MM/dd"
                      selected={assignedDate}
                      onChange={(date) => setAssignedDate(date)}
                    /> */}
                {/* </div> */}
                {/* </div> */}
                <div className="col-md-4">
                  <div className="form-group">
                    <div className="pl-0">
                      <input
                        type="date"
                        className="form-control"
                        onChange={handleChange}
                        id="purchasedate"
                        placeholder="purchasedate"
                        name="purchasedate"
                      />
                    </div>
                  </div>
                </div>

                {/* <div
                  className="col-md-4 form-group mt-2"
                  style={{ color: "black" }}
                  id="purchasedate"
                  name="purchasedate"
                  onChange={handleChange}
                >
                  <div className="input-group mb-3">
                    <p style={{ color: "gray", marginRight: "2em" }}>
                      Purchased date
                    </p>
                    <DatePicker
                      dateFormat="yyyy/MM/dd"
                      selected={purchasedDate}
                      onChange={(date) => setPurchasedDate(date)}
                    />
                  </div>
                </div> */}

                <div className="col-md-12">
                  <button type="submit" className="btn btn-primary">
                    ADD
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddEquipment;
