import React, { useState, useEffect } from "react";
import SidebarAdmin from "./sidebarAdmin";
import TopBar from "./TopBar";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import swal from "sweetalert";

const UpdateEquipment = () => {
  const location = useLocation();
  const userId = location.state.id;
  const initialEquip = location.state.equipname;
  const initialCategory = location.state.category;
  const initialCabinet = location.state.cabinet;
  const initialPrice = location.state.price;
  const initialAssignto = location.state.assignto;
  const initialAssigndate = location.state.assigndate;

  //console.log("Here it is = ",userId);
  const navigate = useNavigate();
  const addCabinetNav = useNavigate();
  const addEquipmentNav = useNavigate();
  const [UserData, setUserData] = useState([]);
  const [inputs, setInputs] = useState({
    id: userId,
    equipname: initialEquip,
    category: initialCategory,
    cabinet: initialCabinet,
    price: initialPrice,
    assignto: initialAssignto,
    assigndate: initialAssigndate,
  });

  useEffect(() => {
    axios
      .get(
        "http://localhost:8888/equipment-management-system/src/php/api/users.php"
      )
      .then((response) => {
        console.log(response);
        setUserData(response.data);
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

    console.log(inputs);

    axios
      .put(
        "http://localhost:8888/equipment-management-system/src/php/api/equipment.php",
        inputs
      )
      .then(function (response) {
        console.log(response);
        swal("Saved changes!");
        setTimeout(() => {
          navigate("/equipments");
        }, 1000);
      });

    // const password = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);

    // inputs['password'] = password ;

    console.log(inputs);

    // axios.put('http://localhost:8888/src/php/api/users.php',inputs)
    // .then(function(response){
    //   navigate('/profile');
    // });
  };

  return (
    <>
      <TopBar />
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <SidebarAdmin />
        </Grid>
        <Grid item xs={10}>
          <div>
            <div
              className="col-md-3 mt-5"
              style={{ display: "flex", marginLeft: "2rem" }}
            >
              <button
                type="button"
                className="form-control"
                style={{ backgroundColor: "orange", color: "white" }}
                onClick={() => addEquipmentNav("/equipments")}
              >
                All Equipments
              </button>
            </div>

            <h1 className="mt-5" style={{ color: "gray", textAlign: "center" }}>
              Update Equipment
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
                      defaultValue={initialEquip}
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
                      defaultValue={initialCategory}
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
                        defaultValue={initialPrice}
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

                <div className="col-md-12 form-group">
                  <select
                    className="form-control"
                    id="assignto"
                    name="assignto"
                    onChange={handleChange}
                    defaultValue={initialAssignto}
                  >
                    {Object(UserData).map((user) => (
                      <option key={user} value={user.name}>
                        {user.name}
                      </option>
                    ))}
                  </select>
                </div>

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
                        defaultValue={initialAssigndate}
                      />
                    </div>
                  </div>
                </div>

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
                        // defaultValue={initialPurchasedate}
                      />
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
          </div>
          <h1>Hello</h1>
        </Grid>
      </Grid>
    </>
  );
};

export default UpdateEquipment;
