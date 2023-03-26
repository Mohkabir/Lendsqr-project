import React, { useEffect, useState } from "react";
import { NextIcon, PrevIcon } from "../icons";

type PaginateType = {
  currentPage: number;
  numberOfPages: number;
  next: () => void;
  previous: () => void;
  setPage: (num: number) => void;
};

const Pagination = ({
  currentPage,
  numberOfPages,
  next,
  previous,
  setPage,
}: PaginateType) => {
  const [numbring, setNumbring] = useState<number[] | []>([]);

  const getNum = () => {
    const num = [];
    for (let i: number = 0; i < numberOfPages; i++) {
      if (i < 2) {
        num.push(i + 1);
      }
      if (i > numberOfPages / 2) {
        num.push(i + 1);
      }
    }
    setNumbring([...num]);
  };

  useEffect(() => {
    getNum();
  }, [currentPage]);

  console.log(numbring, "numbring");
  return (
    <div className="pagination">
      <div className="total">
        <span>Showing</span>
        <span className="control">{currentPage}</span>
        <span>out of {numberOfPages}</span>
      </div>

      <div className="numbring">
        <button type="button" onClick={previous}>
          <PrevIcon />
        </button>

        {numbring.map((num, idx) => (
          <span
            className={`${num === idx + 1 && "active"} `}
            onClick={() => setPage(num)}
          >
            {num === 3 ? <span>{num} ...</span> : num}
          </span>
        ))}

        <button type="button" onClick={next}>
          <NextIcon />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
