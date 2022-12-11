import React, { useState } from "react";
import SidebarAdmin from "./sidebarAdmin";
import TopBar from "./TopBar";
import Grid from "@mui/material/Grid";
import { useLocation } from "react-router-dom";
import Cabinets from "../../pages/cabinets";
import { clippingParents } from "@popperjs/core";
import EquipmentData from "../../data/equipments.json";
import ReactPaginate from "react-paginate";


function CabinetDetails() {
  const location = useLocation();
  const cabinet_id_from_cabinet = location.state.cabinet_id;

  const [equipmentData, setEquipmentData] = useState(EquipmentData);

  const displaydata = equipmentData
    .filter(({ cabinet_id }) => cabinet_id === cabinet_id_from_cabinet)
    .map((equipment) => (
      <tr>
        <td>{equipment.id}</td>
        <td>{equipment.name}</td>
        <td>{equipment.category}</td>
        <td>{equipment.price}</td>
        <td>{equipment.assigned_to}</td>
        <td>{equipment.assigned_date}</td>
      </tr>
    ));

  return (
    <div>
      <TopBar />
      <div className= "dashboard-1">
        <div >
          <SidebarAdmin />
        </div>
        <div className="dashboard">
          {/*starts here*/}

          <div>
            <div className="card-body" style={{ backgroundColor: "#57b960" }}>
              
              <h6 className="text-uppercase">
                <i className="bi bi-info-circle"></i> {displaydata.length} Equipments in this Cabinet
              </h6>
            </div>
          </div>

          <h1 className="mt-5" style={{ color: "gray", textAlign: "center" }}>
            Items in this Cabinet
          </h1>
          {/* {console.log(location.state.cabinet_id)} */}
          <div className="mt-5 ml-0">
            <table className="table table-hover table-striped table-bordered">
              <thead>
                <tr>
                  <th scope="col" style={{ width: "100px" }}>
                    #
                  </th>
                  <th scope="col">Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">Price</th>
                  <th scope="col">Assigned To</th>
                  <th scope="col">Assigned Date</th>
                </tr>
              </thead>
              <tbody>{displaydata}</tbody>
            </table>
          </div>

          {/*ends here*/}
        </div>
      </div>
    </div>
  );
}

export default CabinetDetails;