import Grid from "@mui/material/Grid";
import React, { useState, useEffect } from "react";
import "react-bootstrap";
import ReactPaginate from "react-paginate";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import SidebarAdmin from "../components/admin/sidebarAdmin";
import TopBar from "../components/admin/TopBar";
import EquipmentData from "../data/equipments.json";
import "./equipments.css";
import axios from "axios";
import Login from "../components/login";
import swal from "sweetalert";
import equipmentApiUrl from "../url/equipmentApiUrl";

const Equipments = () => {
  /*This First way of storing axios response in a array is working */
  const addEquipmentNav = useNavigate();
  const updateEquipmentNav = useNavigate();
  const [equipmentData, setEquipmentData] = useState([]);

  useEffect(() => {
    axios
      .get(equipmentApiUrl)
      .then((resp) => {
        // console.log(resp.data);
        setEquipmentData(resp.data);
      })
      .catch((error) => {
        console.log("Not found! " + error);
      });
  }, []);

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this user!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(equipmentApiUrl, { data: id }).then(function (response) {
          axios
            .get(equipmentApiUrl)
            .then((resp) => {
              //console.log(resp.data);
              setEquipmentData(resp.data);
            })
            .catch((error) => {
              console.log("Not found! " + error);
            });
        });
        swal("User has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Delete action canceled!");
      }
    });
  };

  const handleUpdate = (
    id,
    equipname,
    category,
    cabinet,
    price,
    assignto,
    assigndate
  ) => {
    updateEquipmentNav("/equipments/updateEquipments", {
      state: {
        id: id,
        equipname: equipname,
        category: category,
        cabinet: cabinet,
        price: price,
        assignto: assignto,
        assigndate: assigndate,
      },
    });
  };
  // const handleUpdate = (id, email, name, role) => {
  //   updateUserNav("/profile/updateUser", {
  //     state: { id: id, email: email, name: name, role: role },
  //   });
  // };
  const [filter, setFilter] = useState("");
  const searchText = (event) => {
    setFilter(event.target.value);
  };
  //dataSearch is working...
  let dataSearch = equipmentData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase(0)
        .includes(filter.toString().toLowerCase())
    );
  }, []);

  const [pageNumber, setPageNumber] = useState(0);

  const equipmentPerPage = 5;
  const pageVisited = pageNumber * equipmentPerPage;

  const displayEquipments = dataSearch
    .slice(pageVisited, pageVisited + equipmentPerPage)
    .map((equipment, index) => {
      return (
        <tr>
          <td>#{index + 1 + pageVisited}</td>
          {/* <td>{equipment.id}</td> */}
          <td>{equipment.equipname}</td>
          <td>{equipment.category}</td>
          <td>{equipment.cabinet}</td>
          <td>{equipment.price}</td>
          <td>{equipment.assignto}</td>
          <td>{equipment.assigndate}</td>
          <td>
            <button
              type="button"
              className="btn btn-info mr-2"
              onClick={() =>
                handleUpdate(
                  equipment.id,
                  equipment.equipname,
                  equipment.category,
                  equipment.cabinet,
                  equipment.price,
                  equipment.assignto,
                  equipment.assigndate
                )
              }
            >
              <i class="bi bi-pencil-square"></i>
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleDelete(equipment.id)}
            >
              <i className="bi bi-trash"></i>
            </button>
          </td>
        </tr>
      );
    });

  const pageCount = Math.ceil(dataSearch.length / equipmentPerPage);
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
              onClick={() => addEquipmentNav("../equipments/addEqipments")}
            >
              Add Equipment
            </button>
          </div>

          <div className="mt-5 ml-0">
            <table className="table table-hover table-striped table-bordered">
              <thead>
                <tr>
                  <th scope="col" style={{ width: "100px" }}>
                    #SN
                  </th>
                  <th scope="col">EquipmentName</th>
                  <th scope="col">Category</th>
                  <th scope="col">Cabinet</th>
                  <th scope="col">Price</th>
                  <th scope="col">Assigned To</th>
                  <th scope="col">Assigned Date</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>{displayEquipments}</tbody>
            </table>
            <ReactPaginate
              card={"card"}
              previousLabel={"<<"}
              nextLabel={">>"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipments;
