import React from "react";
import { NextIcon, PrevIcon } from "../icons";

const Pagination = () => {
  return (
    <div className="pagination">
      <div className="total">
        <span>Showing</span>
        <span className="control">100</span>
        <span>out of 100</span>
      </div>

      <div className="numbring">
        <button type="button">
          <PrevIcon />
        </button>
        <span className="active">1</span>
        <span>2</span>
        <span>3</span>
        <span>...</span>
        <span>15</span>
        <span>16</span>

        <button type="button">
          <NextIcon />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
