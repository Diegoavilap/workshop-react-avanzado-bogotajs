import React, { useContext } from "react";
import { Context } from './Context';
import Table from './TableComp'
import ModalForm from './ModalForm'
import Toast from './Toasts'
import {
  Button,
} from "react-bootstrap";


function Users() {

  const { dispath: { handleShow } } = useContext(Context);
  
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        + New
      </Button>
      <Toast />
      <ModalForm />
      <Table />
    </div>
  );
}
export default Users;
