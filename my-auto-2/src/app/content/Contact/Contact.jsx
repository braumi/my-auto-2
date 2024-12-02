import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div>
      <a className="contactbtn">
        <div class="flex h-[40px] rounded-[12px] items-center pl-[12px] pr-[16px] font-medium text-raisin-100 hover:bg-grey-100 hover:border-raisin-30 text-[12px] lg:text-[14px] border border-raisin-10 ml-[16px] cursor-pointer transition-all header-auth-button">
          <span class="icon-h-[22px] flex mr-[8px]">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.31213 15.4645C6.24981 14.5268 7.52158 14 8.84766 14H16.8477C18.1738 14 19.4456 14.5268 20.3832 15.4645C21.3209 16.4021 21.8477 17.6739 21.8477 19V21C21.8477 21.5523 21.4 22 20.8477 22C20.2954 22 19.8477 21.5523 19.8477 21V19C19.8477 18.2044 19.5316 17.4413 18.969 16.8787C18.4064 16.3161 17.6434 16 16.8477 16H8.84766C8.05201 16 7.28895 16.3161 6.72634 16.8787C6.16373 17.4413 5.84766 18.2044 5.84766 19V21C5.84766 21.5523 5.39994 22 4.84766 22C4.29538 22 3.84766 21.5523 3.84766 21V19C3.84766 17.6739 4.37444 16.4021 5.31213 15.4645Z"
                fill="#222222"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.8477 4C11.1908 4 9.84766 5.34315 9.84766 7C9.84766 8.65686 11.1908 10 12.8477 10C14.5046 10 15.8477 8.65686 15.8477 7C15.8477 5.34315 14.5046 4 12.8477 4ZM7.84766 7C7.84766 4.23858 10.0862 2 12.8477 2C15.6091 2 17.8477 4.23858 17.8477 7C17.8477 9.76142 15.6091 12 12.8477 12C10.0862 12 7.84766 9.76142 7.84766 7Z"
                fill="#222222"
              ></path>
            </svg>
          </span>
          Contact
        </div>
      </a>
    </div>
  );
}
