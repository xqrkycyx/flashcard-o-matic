import React from "react";
import Breadcrumbs from "./Breadcrumbs";
function NotFound({ item = null }) {
  return (
    <>
      <Breadcrumbs />
      <div className="NotFound">
        <h1>{item} Not Found</h1>
      </div>
    </>
  );
}

export default NotFound;
