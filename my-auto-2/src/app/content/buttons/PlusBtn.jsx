import React from "react";
import "./PlusBtn.css";

export default function PlusBtn() {
  return (
    <div>
      <button className="plusBtn">
        <button
          type="button"
          class="flex h-[40px] bg-orange-10 hover:bg-orange-20 rounded-[12px] items-center px-[16px] xl:px-[24px] font-medium text-orange-100 text-[12px] ml-[16px] transition-all header-add-button"
          data-ga="header-add-button"
        >
          <span class="flex">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.8108 16C13.2238 16 16.8013 12.4183 16.8013 8C16.8013 3.58172 13.2238 0 8.8108 0C4.39778 0 0.820312 3.58172 0.820312 8C0.820312 12.4183 4.39778 16 8.8108 16Z"
                fill="#FD4100"
              ></path>
              <path
                d="M9.81012 5C9.81012 4.44772 9.36294 4 8.81131 4C8.25968 4 7.8125 4.44772 7.8125 5V11C7.8125 11.5523 8.25968 12 8.81131 12C9.36294 12 9.81012 11.5523 9.81012 11V5Z"
                fill="white"
              ></path>
              <path
                d="M5.81522 7C5.26359 7 4.81641 7.44772 4.81641 8C4.81641 8.55228 5.26359 9 5.81522 9H11.8081C12.3597 9 12.8069 8.55228 12.8069 8C12.8069 7.44772 12.3597 7 11.8081 7H5.81522Z"
                fill="white"
              ></path>
            </svg>
          </span>
          <span class="xl:ml-[8px] hidden xl:flex"></span>
        </button>
      </button>
    </div>
  );
}
