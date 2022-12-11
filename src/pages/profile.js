import React, { useState, useEffect } from "react";
import TopBar from "../components/admin/TopBar";
import SidebarAdmin from "../components/admin/sidebarAdmin";
import Grid from "@mui/material/Grid";
import ReactPaginate from "react-paginate";
import UserData from "../data/user.json";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UpdateUser from "../components/admin/UpdateUser";
import swal from "sweetalert";
import { CloudFogFill } from "react-bootstrap-icons";
import userApiUrl from "../url/userApiUrl";

const Profile = () => {
  const addUserNav = useNavigate();
  const updateUserNav = useNavigate();
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    //console.log(userApiUrl);
    axios
      .get(
        userApiUrl
      )
      .then((resp) => {
        //console.log(resp.data);
        setUserData(resp.data);
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
        axios
          .delete(
            userApiUrl,
            { data: id }
          )
          .then(function (response) {
            axios
              .get(
                userApiUrl
              )
              .then((resp) => {
                //console.log(resp.data);
                setUserData(resp.data);
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
  const handleUpdate = (id, email, name, role) => {
    updateUserNav("/profile/updateUser", {
      state: { id: id, email: email, name: name, role: role },
    });
  };

  const [filter, setFilter] = useState("");
  const searchText = (event) => {
    setFilter(event.target.value);
  };

  //console.log(userData);

  let dataSearch = userData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase(0)
        .includes(filter.toString().toLowerCase())
    );
  }, []);

  const [pageNumber, setPageNumber] = useState(0);

  const userPerPage = 5;
  const pageVisited = pageNumber * userPerPage;

  const displayUser = dataSearch
    .slice(pageVisited, pageVisited + userPerPage)
    .map((user, index) => {
      return (
        <tr>
          <td>#{index + 1 + pageVisited}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.role}</td>
          <td>
            <button
              type="button"
              className="btn btn-info mr-2"
              onClick={() =>
                handleUpdate(user.id, user.email, user.name, user.role)
              }
            >
              <i className="bi bi-pencil-square"></i>
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleDelete(user.id)}
            >
              <i className="bi bi-trash"></i>
            </button>
          </td>
        </tr>
      );
    });

  const pageCount = Math.ceil(dataSearch.length / userPerPage);
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
          <h1 className="mt-5" style={{ color: "gray", textAlign: "center" }}>
            All users
          </h1>

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
              onClick={() => addUserNav("/profile/addUser")}
            >
              Add User
            </button>
          </div>
          <div className="mt-5 ml-0">
            <table className="table table-hover table-striped table-bordered">
              <thead>
                <tr>
                  <th scope="col" style={{ width: "100px" }}>
                    #SI
                  </th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>{displayUser}</tbody>
            </table>
            <ReactPaginate
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
          {/*ends here*/}
        </div>
      </div>
    </div>
  );
};

export default Profile;
