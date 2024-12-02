import React from "react";
import "./Header.css";
import Logo from "../components/Logo.jsx";
import Search from "../components/Search.jsx";

export default function Header() {
  return (
    <header>
      <div className="headerWrapper">
        <div className="left">
          <Logo />
          <Search />
        </div>

        <button className="about">
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.49 0C4.97 0 0.5 4.48 0.5 10C0.5 15.52 4.97 20 10.49 20C16.02 20 20.5 15.52 20.5 10C20.5 4.48 16.02 0 10.49 0ZM17.42 6H14.47C14.15 4.75 13.69 3.55 13.09 2.44C14.93 3.07 16.46 4.35 17.42 6ZM10.5 2.04C11.33 3.24 11.98 4.57 12.41 6H8.59C9.02 4.57 9.67 3.24 10.5 2.04ZM2.76 12C2.6 11.36 2.5 10.69 2.5 10C2.5 9.31 2.6 8.64 2.76 8H6.14C6.06 8.66 6 9.32 6 10C6 10.68 6.06 11.34 6.14 12H2.76ZM3.58 14H6.53C6.85 15.25 7.31 16.45 7.91 17.56C6.07 16.93 4.54 15.66 3.58 14ZM6.53 6H3.58C4.54 4.34 6.07 3.07 7.91 2.44C7.31 3.55 6.85 4.75 6.53 6ZM10.5 17.96C9.67 16.76 9.02 15.43 8.59 14H12.41C11.98 15.43 11.33 16.76 10.5 17.96ZM12.84 12H8.16C8.07 11.34 8 10.68 8 10C8 9.32 8.07 8.65 8.16 8H12.84C12.93 8.65 13 9.32 13 10C13 10.68 12.93 11.34 12.84 12ZM13.09 17.56C13.69 16.45 14.15 15.25 14.47 14H17.42C16.46 15.65 14.93 16.93 13.09 17.56ZM14.86 12C14.94 11.34 15 10.68 15 10C15 9.32 14.94 8.66 14.86 8H18.24C18.4 8.64 18.5 9.31 18.5 10C18.5 10.69 18.4 11.36 18.24 12H14.86Z"
              fill="#272A37"
            ></path>
          </svg>
          About
        </button>

        <button className="contactbtn">
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
        </button>
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
    </header>
  );
}
