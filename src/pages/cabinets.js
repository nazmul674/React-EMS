import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import TopBar from "../components/admin/TopBar";
import SidebarAdminItems from "../components/admin/SidebarAdminItems";
import SidebarAdmin from "../components/admin/sidebarAdmin";
import CabinetData from "../data/cabinets.json";
import ReactPaginate from "react-paginate";
import CabinetDetails from "../components/admin/CabinetDetails";

function Cabinets() {
  const addCabinetNav = useNavigate();
  const updateCabinetNav = useNavigate();
  const cabinetDetails = useNavigate();

  const [filter, setFilter] = useState("");
  const searchText = (event) => {
    setFilter(event.target.value);
  };
  //dataSearch is working...
  let dataSearch = CabinetData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase(0)
        .includes(filter.toString().toLowerCase())
    );
  }, []);

  const TocabinetDetails = (cabinet_id) => {
    cabinetDetails("/cabinets/cabinetDetails", { state: { cabinet_id } });
  };

  const [pageNumber, setPageNumber] = useState(0);

  const cabinetPerPage = 5;
  const pageVisited = pageNumber * cabinetPerPage;

  const displayCabinets = dataSearch
    .slice(pageVisited, pageVisited + cabinetPerPage)
    .map((cabinet) => {
      return (
        <tr>
          <td>{cabinet.cabinet_id}</td>
          <td>{cabinet.location}</td>
          <td>{cabinet.row}</td>
          <td>{cabinet.cabinet_no}</td>
          <td>{cabinet.capacity}</td>
          <td>
            <button
              type="button"
              className="btn btn-info mr-2"
              onClick={() => updateCabinetNav("/cabinets/addCabinets")}
            >
              <i class="bi bi-pencil-square"></i>
            </button>
            <button type="button" className="btn btn-danger">
              <i className="bi bi-trash"></i>
            </button>
            <button
              type="button"
              className="btn btn-warning ml-2"
              id="details"
              onClick={() => {
                TocabinetDetails(cabinet.cabinet_id);
              }}
            >
              <i class="bi bi-folder2-open"></i>
            </button>
          </td>
        </tr>
      );
    });

  const pageCount = Math.ceil(dataSearch.length / cabinetPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  /* .....Redirect To LoginPage..... */
  const redirectBack = useNavigate();
  useEffect(() => {
    const isLoggedIn = () => {
      let flag = false;

      flag = localStorage.length > 0 ? true : false;
      //console.log(flag);
      return flag;
    };

    if (!isLoggedIn()) {
      return redirectBack("/login");
    }
  }, []);

  /* .....**********************..... */

  return (
    <div>
      <TopBar />
      <div className="dashboard-1">
        <div>
          <SidebarAdmin />
        </div>
        <div className="dashboard">
          {/*starts here*/}
          <div className="col-md-4">
            <div className="mt-4">
              <input
                type="text"
                placeholder="Search"
                className="from-control"
                value={filter}
                onChange={searchText.bind(this)}
              />
            </div>
          </div>
          <div className="col-md-12">
            <button
              type="button"
              className="btn btn-primary"
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "60px",
              }}
              onClick={() => addCabinetNav("/cabinets/addCabinets")}
            >
              Add Cabinet
            </button>
          </div>

          <div className="mt-5 ml-0">
            <table className="table table-hover table-striped table-bordered">
              <thead>
                <tr>
                  <th scope="col" style={{ width: "100px" }}>
                    #
                  </th>
                  <th scope="col">Location</th>
                  <th scope="col">Row No</th>
                  <th scope="col">Cabinet No</th>
                  <th scope="col">Capacity</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>{displayCabinets}</tbody>
            </table>
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </div>
          {/*ends here*/}
        </div>
      </div>
    </div>
  );
}

export default Cabinets;
