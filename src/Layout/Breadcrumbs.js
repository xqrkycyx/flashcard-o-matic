import React from "react";
import { HouseDoorFill } from "react-bootstrap-icons";
import Breadcrumb from "react-bootstrap/Breadcrumb";

function Breadcrumbs({ additionalItems = null }) {
  const hasAdditionalItems = additionalItems !== null ? true : false;

  return (
    <Breadcrumb>
      <Breadcrumb.Item href={`/`}>
        <HouseDoorFill />
        Home
      </Breadcrumb.Item>

      {hasAdditionalItems &&
        additionalItems.map((item, index, array) => (
          <Breadcrumb.Item
            key={index}
            href={index + 1 !== array.length ? item[1] : null} // Sets href for non-final breadcrumb
            active={index + 1 === array.length ? true : false} // Styling for final breadcrumb (not a link)
          >
            {index + 1 !== array.length ? item[0] : item}
          </Breadcrumb.Item>
        ))}
    </Breadcrumb>
  );
}

export default Breadcrumbs;
