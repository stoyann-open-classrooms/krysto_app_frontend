import React from "react";
import { Link } from "react-router-dom";
import AccessDenied from "../../../pages/accessDenied/AccessDenied";

function HomeAdminArea({ profil }) {
  return (
    <>
      {profil.role === "admin" ? (
        <>
          <Link to={"/private/articles-admin"} className="btn btn-block">
            Gerer les articles
          </Link>
        </>
      ) : (
        <>
          <AccessDenied />
        </>
      )}
    </>
  );
}

export default HomeAdminArea;
