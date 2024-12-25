import { InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { BiCube } from "react-icons/bi";
import { HiMenuAlt1 } from "react-icons/hi";
import { ImUsers } from "react-icons/im";
import { IoHomeOutline, IoSearch, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineAllInbox } from "react-icons/md";
import { TiStarOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div
        className={`sidebar ${isExpanded ? "expanded" : ""}`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <Link to="/">
          <div className="logoWrapper py-3 px-3 flex items-center mb-5">
            <img width='80px' src={logo} alt="logo" className="w-40 h-10 " />
          </div>
        </Link>

        <div className="sidebarTabs gap-15">
          <div className="sidebarTabs gap-10 relative">
              <Link to="/">
              <div className="home text-white text-md flex items-center ml-5 gap-2 mb-6 cursor-pointer">
                <IoHomeOutline size={21} className="text-white" />
                <p
                  className={`${
                    isExpanded ? "block" : "hidden"
                  } font-medium text-sm`}
                >
                  Home
                </p>
              </div>
              </Link>

            <Link to='./invoice-table'>
            <div className="home text-white flex items-center ml-5 gap-2 mb-6 cursor-pointer">
              <HiMenuAlt1 size={21} className="text-white" />
              <p
                className={`${
                  isExpanded ? "block" : "hidden"
                } font-medium text-sm`}
              >
                Invoice Data
              </p>
            </div>
            </Link>
            <Link to="./userTable" style={{ textdeoration: "none" }}>
              <div className="home text-white flex items-center ml-5 gap-2 mb-6 cursor-pointer">
                <ImUsers size={21} className="text-white" />
                <p
                  className={`${
                    isExpanded ? "block" : "hidden"
                  } font-medium text-sm`}
                >
                  Customers Data
                </p>
              </div>
            </Link>
            <Link to='./order-table'>
            <div className="home text-white flex items-center ml-5 gap-2 mb-6 cursor-pointer">
              <BiCube size={21} className="text-white" />
              <p
                className={`${
                  isExpanded ? "block" : "hidden"
                } font-medium text-sm`}
              >
                Orders
              </p>
            </div>
            </Link>

            <Link to='/email-template'>
            <div className="home text-white flex items-center ml-5 gap-2 mb-6 cursor-pointer">
              <MdOutlineAllInbox size={21} className="text-white" />
              <p
                className={`${
                  isExpanded ? "block" : "hidden"
                } font-medium text-sm`}
              >
                Email Template
              </p>
            </div>
            </Link>

            <div className="home text-white flex items-center ml-5 gap-2 mb-6 cursor-pointer">
              <IoSettingsOutline size={21} className="text-white" />
              <p
                className={`${
                  isExpanded ? "block" : "hidden"
                } font-medium text-sm`}
              >
                Settings
              </p>
            </div>

            <div className="home text-white flex items-center ml-5 gap-2 mb-6 cursor-pointer">
              <AiOutlineMessage size={21} className="text-white" />
              <p
                className={`${
                  isExpanded ? "block" : "hidden"
                } font-medium text-sm`}
              >
                Help & Support
              </p>
            </div>

            <div className="flex items-center gap-3 mt-[120px] px-4">
              {isExpanded ? (
                <TextField
                  variant="outlined"
                  placeholder="Go Pro"
                  size="small"
                  fullWidth
                  className="transition-all duration-300"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        className="flex justify-between"
                      >
                        <TiStarOutline size={24} className="text-white" />
                      </InputAdornment>
                    ),
                  }}
                  style={{
                    backgroundColor: "rgb(101,101,190)", 
                    color: "white",
                    border: "none", 
                    borderRadius: "20px",
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "none", 
                      },
                      "&:hover fieldset": {
                        border: "none", 
                      },
                      "&.Mui-focused fieldset": {
                        border: "none", 
                      },
                      "& .MuiInputBase-input::placeholder": {
                        color: "white", 
                        fontWeight: "bold", 
                      },
                    },
                  }}
                  onFocus={(e) => e.target.select()} 
                />
              ) : (
                <div className="flex justify-center items-center w-[60px] h-9 bg-[transparent] rounded-full transition-all duration-300">
                  <TiStarOutline size={24} className="text-white" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
