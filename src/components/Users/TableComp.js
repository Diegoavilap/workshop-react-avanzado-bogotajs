import React, { useContext } from "react";
import { Context } from './Context';
import {
    Table
  } from "react-bootstrap";

function TableComp(){

    const { crud: { data }, dispath: { handleShow, handleDelete} } = useContext(Context);

    return(
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>State</th>
            <th>Password</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => (
              <tr key={"item" + index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.state}</td>
                <td>{item.password}</td>
                <td>
                  <a href="#" onClick={() => handleShow(item)}>
                    {" "}
                    EDIT{" "}
                  </a>{" "}
                  <a href="#" onClick={() => handleDelete(item.id)}>
                    {" "}
                    X{" "}
                  </a>{" "}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    );
}

export default TableComp;