import React, { useContext } from "react";
import { Context } from './Context';
import {
    Spinner, Toast
  } from "react-bootstrap";

function Toasts(){

    const { crud: { saving, loading } } = useContext(Context);

    return(
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0
        }}
      >
        {loading && (
          <Toast show={loading}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Cargando...</strong>
            </Toast.Header>
            <Toast.Body style={{ textAlign: "center" }}>
              <Spinner animation="border" />
            </Toast.Body>
          </Toast>
        )}

        {saving && (
          <Toast show={saving}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Guardando...</strong>
            </Toast.Header>
            <Toast.Body style={{ textAlign: "center" }}>
              <Spinner animation="border" />{" "}
            </Toast.Body>
          </Toast>
        )}
      </div>
    );
}

export default Toasts;