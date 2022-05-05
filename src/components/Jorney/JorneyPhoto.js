import React from "react";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function JorneyPhoto({ id, image, onRemove = (f) => f }) {
  return (
    <Col md="4" lg="3">
      <div className="jorney-photo">
        <span
          className="jorney-delete"
          onClick={() => {
            onRemove(image);
          }}
          variant="link"
        >
          <FontAwesomeIcon icon={faXmark} />
        </span>
        <img alt="photo_" src={`/uploads/${id}/photos/${image}`} />
      </div>
    </Col>
  );
}
