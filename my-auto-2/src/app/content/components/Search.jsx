import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <>
      <div className="search">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 32 32"
          >
            <path
              d="M13992.56 5132.11c1.27 0 2.466-.42 3.46-1.212l.478-.38.384-.476a5.487 5.487 0 0 0 1.236-3.486 5.563 5.563 0 0 0-5.558-5.555 5.563 5.563 0 0 0-5.559 5.555 5.563 5.563 0 0 0 5.559 5.554m7.614 2.89a.815.815 0 0 1-.58-.24l-2.326-2.299a7.527 7.527 0 0 1-4.708 1.65c-4.167 0-7.559-3.391-7.559-7.555 0-4.168 3.392-7.555 7.559-7.555s7.558 3.387 7.558 7.555a7.52 7.52 0 0 1-1.681 4.745l2.32 2.293a.823.823 0 0 1-.583 1.406z"
              fill="#272a37"
              transform="translate(-13976.999 -5111.001)"
            ></path>
          </svg>
        </button>
        <input className="searchBar" placeholder="Search..."></input>
      </div>
    </>
  );
}
