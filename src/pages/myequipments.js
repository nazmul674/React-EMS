import React from 'react'
import SidebarAdmin from "../components/admin/sidebarAdmin";
import TopBar from "../components/admin/TopBar";
import Grid from "@mui/material/Grid";

function Myequipments() {
  return (
    <div>
      <TopBar />
      <div className="dashboard-1">
        <div>
          <SidebarAdmin />
        </div>
        <div className='dashboard'>
          {/*starts here*/}
          <h1 className="mt-5" style={{ color: "gray", textAlign: "center"}}>Currently using items</h1>
          {/*ends here*/}
        </div>
      </div>
    </div>
  )
}

export default Myequipments