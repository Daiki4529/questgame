import React from "react";
import { NavLink } from "react-router-dom";

function NoPage() {
  return (
    <>
      <p style={{ fontWeight: "bold" }}>404.</p>
      <p>Oh no ! The page you're looking for is not found.</p>
      <p>
        Maybe try going back to the <NavLink to="/">Home page</NavLink>
      </p>
    </>
  );
}
export default NoPage;
