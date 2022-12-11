import { auto } from "@popperjs/core";
import PieChart from "../components/admin/PieChart";
import "./dashboard.css";
import EquipmentData from "../data/equipments.json";
import CabinetData from "../data/cabinets.json";
import RequisitionData from "../data/requisitions.json";
import UserData from "../data/user.json";
import Grid from "@mui/material/Grid";
import React, {useEffect} from "react";
import "react-bootstrap";
import SidebarAdmin from "../components/admin/sidebarAdmin";
import TopBar from "../components/admin/TopBar";
import { BrowserRouter, Link, Routes, useNavigate, Route } from "react-router-dom";
import Login from "../components/login";

const Dashboard = () => {
  /* .....Redirect To LoginPage..... */
  const redirectBack = useNavigate();
  useEffect(()=>{
    
  
  const isLoggedIn = () => {
    let flag = false;

    flag = localStorage.length>0 ? true : false;
    
    //console.log(flag1);
    return flag;
  }

  if (!isLoggedIn()){
    return(
      redirectBack('/login')
    )
  }
  },[]);
  

  /* .....**********************..... */


  var equipmentData = [];

  EquipmentData.map((item, key) => {
    const { id, name, price, assigned_date, assigned_to, img } = item;
    return equipmentData.push({
      id: id,
      name: name,
      price: price,
      assigned_date: assigned_date,
      assigned_to: assigned_to,
      img: img,
    });
  });
  
  equipmentData.reverse();

  return (
    <div>
      <TopBar />

      <div className="dashboard-1" >
        <div>
          <SidebarAdmin />
        </div>
        
        <div className="dashboard">
          <div>
            <p
              style={{ color: "black"}}
              className="lead d-none d-sm-block text-secondary"
            >
              Equipment Details and Requisitions
            </p>
          </div>

          <div className="row card-container">
            
            <div className="card-box col-xl-3 col-sm-6 py-2">
              <div className="card bg-success text-white h-40">
                <div
                  className="card-body bg-success"
                  style={{ backgroundColor: "#57b960" }}
                >
                  <div className="rotate">
                    <i className="fa fa-user fa-4x"></i>
                  </div>
                  <h6 className="text-uppercase">Total Users</h6>
                  <h1 className="display-4">{Object.keys(UserData).length}</h1>
                </div>
              </div>
            </div>
            <div className="card-box col-xl-3 col-sm-6 py-2">
              <div className="card text-white bg-danger h-40">
                <div className="card-body bg-danger">
                  <div className="rotate">
                    <i className="fab fa-telegram fa-4x"></i>
                  </div>
                  <h6 className="text-uppercase">Pending Requisitions</h6>
                  <h1 className="display-4">
                    {Object.keys(RequisitionData).length}
                  </h1>
                </div>
              </div>
            </div>

            <div className="card-box col-xl-3 col-sm-6 py-2">
              <div className="card text-white bg-info h-40">
                <div className="card-body bg-info">
                  <div className="rotate">
                    <i className="fa fa-list fa-4x"></i>
                  </div>
                  <h6 className="text-uppercase">Total Equipments</h6>
                  <h1 className="display-4">{equipmentData.length}</h1>
                </div>
              </div>
            </div>

            <div className="card-box col-xl-3 col-sm-6 py-2">
              <div className="card text-white bg-warning h-40">
                <div className="card-body">
                  <div className="rotate">
                    <i className="fa fa-archive fa-4x"></i>
                  </div>
                  <h6 className="text-uppercase">Total Cabinets</h6>
                  <h1 className="display-4">
                    {Object.keys(CabinetData).length}
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="row container-card2">
            <div className="card-border card-1 col-7">
             
              <h5 className="mt-3 mb-3 text-secondary">
                Newly Arrived Equipments
              </h5>
              <div className="table-responsive">
                <table className="table table-hover table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Assigned To</th>
                      <th scope="col">Assigned Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {equipmentData.slice(0, 5).map((output) => (
                      <tr>
                        <td>{output.id}</td>
                        <td>{output.name}</td>
                        <td>{output.price}</td>
                        <td>{output.assigned_to}</td>
                        <td>{output.assigned_date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card-border card-2 col-5">
              <h4 className="title text-center text-secondary">
                Data in Chart
              </h4>
              <div
                className="pie-chart"
                style={{ height: "auto", width: "270px"}}
              >
                <PieChart />
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;