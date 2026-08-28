import React from "react";
import { Pagination } from "@mui/material";

// TMDB rejects any request for a page above 500, so never offer more than that.
const MAX_TMDB_PAGE = 500;

const CustomPagination = ({ setPage, numOfPages = 10 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 80,
        fontWeight: "bolder",
        fontSize: "10px",
      }}
    >
      <Pagination
        onChange={(event, page) => handlePageChange(page)}
        count={Math.min(numOfPages, MAX_TMDB_PAGE)}
        color="primary"
      />
    </div>
  );
};

export default CustomPagination;
