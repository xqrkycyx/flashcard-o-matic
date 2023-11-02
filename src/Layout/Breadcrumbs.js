import React from "react";
import { HouseDoorFill } from "react-bootstrap-icons";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";

function Breadcrumbs({ additionalItems = null }) {
  const hasAdditionalItems = additionalItems !== null ? true : false;

  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to={"/"}>
          <HouseDoorFill />
          Home
        </Link>
      </Breadcrumb.Item>

      {hasAdditionalItems &&
        additionalItems.map((item) => (
          <Breadcrumb.Item>{item}</Breadcrumb.Item>
        ))}
    </Breadcrumb>
  );
}

export default Breadcrumbs;
