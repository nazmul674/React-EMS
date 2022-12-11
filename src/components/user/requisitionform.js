// import React, { Component, Fragment, Row, Col, Form, Button } from "react";
// import { Container } from "react-bootstrap";

// export default class RequisitionForm extends Component {
//   render() {
//     return (
//       <Fragment>
//         <Container>
//           <Row>
//             <Col lg={6} md={6} sm={12}>
//               <h2 className="requisition">Requisition </h2>
//               <Form>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                   <Form.Label>Name</Form.Label>
//                   <Form.Control type="text" placeholder="Enter name" />
//                   {/* <Form.Text className="text-muted">
//                     We'll never share your email with anyone else.
//                   </Form.Text> */}
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                   <Form.Label>Description</Form.Label>
//                   <Form.Control as="textarea" rows="3" />
//                 </Form.Group>

//                 <Button variant="primary" type="submit">
//                   Submit
//                 </Button>
//               </Form>
//             </Col>
//             <Col lg={6} md={6} sm={12}></Col>
//           </Row>
//         </Container>
//       </Fragment>
//     );
//   }
// }
////////////////////////////////////////////////////////////

import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./requisitionform.css";
import TopBar from "../admin/TopBar";
import SidebarAdmin from "../admin/sidebarAdmin";
import Grid from "@mui/material/Grid";
import "react-bootstrap-icons";
import "react-bootstrap";
import { Form, Button } from "react-bootstrap";
function RequisitionForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleSubmit = (e) => {
    alert(
      'A form was submitted with Name :"' +
        name +
        '" ,description:"' +
        description +
        '" and Email :"' +
        email +
        '"'
    );

    e.preventDefault();
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
            {/* <header className="Req-header"> */}
            <h3 className="mt-5" style={{ color: "gray", textAlign: "center" }}>
              Requisition Form
            </h3>

            <form
              className="m-5"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className="row ">
                <div className=" w-100 col-md-12">
                  <div className="form-group">
                    {/* <label>Name:</label>
                      <br /> */}
                    <input
                      type="text"
                      placeholder="Model Name"
                      className="form-control"
                      value={name}
                      required
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                    /
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                      value={email}
                      required
                      onChange={(e) => {
                        handleEmailChange(e);
                      }}
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      type="textarea"
                      placeholder="Description"
                      className="form-control"
                      rows="3"
                      cols="130"
                      value={description}
                      required
                      onChange={(e) => {
                        handleDescriptionChange(e);
                      }}
                    />
                    {/* <textarea rows="4" cols="50" name="comment">
                      Enter text here...
                    </textarea> */}
                    ;
                  </div>
                </div>
                <div className="input-group">
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
                </div>
                <div className="col-md-4">
                  <div className="mt-4"></div>
                </div>
                <div className="col-md-12">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{
                      display: "block",
                      backgroundColor: "	#FFA500",
                      borderColor: "	#FFA500",
                    }}
                  >
                    SEND
                  </button>
                </div>
              </div>
            </form>
            {/* </header> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default RequisitionForm;