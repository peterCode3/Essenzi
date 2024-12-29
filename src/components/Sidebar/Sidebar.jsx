import { InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { BiCube } from "react-icons/bi";
import { FaBoxes, FaWhatsapp, FaEnvelope, FaSms } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import { ImUsers } from "react-icons/im";
import { IoHomeOutline, IoSearch, IoSettingsOutline, IoPersonOutline } from "react-icons/io5";
import { MdOutlineAllInbox } from "react-icons/md";
import { TiStarOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { SlPeople } from "react-icons/sl";
import logo from "../../assets/logo.svg";
import favicon from "/vite.svg"; // Assuming you have a favicon.ico for default display

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEmailExpanded, setIsEmailExpanded] = useState(false);
  const [isUsersExpanded, setIsUsersExpanded] = useState(false);
  return (
    <div
      className={`sidebar ${isExpanded ? "expanded" : ""}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}>
      <Link to="/">
        <div className="logoWrapper py-3 px-3 flex items-center mb-5">
          <img
            src={isExpanded ? logo : favicon}
            alt="logo"
            className={`w-${isExpanded ? "40" : "10"} h-10 transition-all duration-300`}
          />
        </div>
      </Link>

      <div className="sidebarTabs gap-15">
        <div className="sidebarTabs gap-10 relative pr-4">
          {/* Other Sidebar Links */}

          <Link to="/">
            <div className="home text-white text-md flex items-center ml-5 gap-2 mb-6 cursor-pointer">
              <IoHomeOutline size={21} className="text-white" />
              <p className={`${isExpanded ? "block" : "hidden"} font-medium text-sm`}>Home</p>
            </div>
          </Link>

          <Link to="./invoice-table">
            <div className="home text-white flex items-center ml-5 gap-2 mb-6 cursor-pointer">
              <HiMenuAlt1 size={21} className="text-white" />
              <p className={`${isExpanded ? "block" : "hidden"} font-medium text-sm`}>Invoice Data</p>
            </div>
          </Link>

          <Link to="./userTable">
            <div className="home text-white flex items-center ml-5 gap-2 mb-6 cursor-pointer">
              <ImUsers size={21} className="text-white" />
              <p className={`${isExpanded ? "block" : "hidden"} font-medium text-sm`}>Customers Data</p>
            </div>
          </Link>

          <Link to="./order-table">
            <div className="home text-white flex items-center ml-5 gap-2 mb-6 cursor-pointer">
              <BiCube size={21} className="text-white" />
              <p className={`${isExpanded ? "block" : "hidden"} font-medium text-sm`}>Orders</p>
            </div>
          </Link>

          <Link to="/inventory-products">
            <div className="home text-white flex items-center ml-5 gap-2 mb-6 cursor-pointer">
              <FaBoxes size={21} className="text-white" />
              <p className={`${isExpanded ? "block" : "hidden"} font-medium text-sm`}>Inventory Products</p>
            </div>
          </Link>

          {/* Users Menu */}
          <div className="relative mb-6">
            <div
              onClick={() => setIsUsersExpanded(!isUsersExpanded)}
              className="home text-white flex items-center justify-between ml-5 gap-2 mb-2 cursor-pointer">
              <div className="flex gap-2">
                <ImUsers size={21} className="text-white" />
                <p className={`${isExpanded ? "block" : "hidden"} font-medium text-sm`}>Users</p>
              </div>
              {isExpanded && (
                <span className={`transition-transform duration-200 ${isUsersExpanded ? "rotate-180" : ""}`}>▼</span>
              )}
            </div>

            {isExpanded && isUsersExpanded && (
              <div className="ml-8 mt-4">
                <Link to="/user-list">
                  <div className="text-white flex items-center gap-2 mb-2 cursor-pointer">
                    <ImUsers size={18} className="text-white" />
                    <p className="font-medium text-sm">User List</p>
                  </div>
                </Link>

                <Link to="/add-user">
                  <div className="text-white flex items-center gap-2 mb-2 cursor-pointer">
                    <ImUsers size={18} className="text-white" />
                    <p className="font-medium text-sm">Add User</p>
                  </div>
                </Link>

                <Link to="/user-roles">
                  <div className="text-white flex items-center gap-2 mb-2 cursor-pointer">
                    <ImUsers size={18} className="text-white" />
                    <p className="font-medium text-sm">User Roles</p>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Email Template Section */}
          <div className="relative mb-6">
            <div
              onClick={() => setIsEmailExpanded(!isEmailExpanded)}
              className="home text-white flex items-center justify-between ml-5 gap-2 mb-2 cursor-pointer">
              <div className="flex gap-2">
                <MdOutlineAllInbox size={21} className="text-white" />
                <p className={`${isExpanded ? "block" : "hidden"} font-medium text-sm`}>Template</p>
              </div>
              {isExpanded && (
                <span className={`transition-transform duration-200 ${isEmailExpanded ? "rotate-180" : ""}`}>▼</span>
              )}
            </div>

            {isExpanded && isEmailExpanded && (
              <div className="ml-8 mt-4">
                <Link to="/email-template/email">
                  <div className="text-white flex items-center gap-2 mb-2 cursor-pointer">
                    <FaEnvelope size={18} className="text-white" />
                    <p className="font-medium text-sm">Email Template</p>
                  </div>
                </Link>

                <Link to="/templete/whatsapp">
                  <div className="text-white flex items-center gap-2 mb-2 cursor-pointer">
                    <FaWhatsapp size={18} className="text-white" />
                    <p className="font-medium text-sm">WhatsApp Template</p>
                  </div>
                </Link>

                <Link to="/templete/sms">
                  <div className="text-white flex items-center gap-2 mb-2 cursor-pointer">
                    <FaSms size={18} className="text-white" />
                    <p className="font-medium text-sm">SMS Template</p>
                  </div>
                </Link>
              </div>
            )}
          </div>

          <Link to="/settings">
            <div className="home text-white flex items-center ml-5 gap-2 mb-6 cursor-pointer">
              <IoSettingsOutline size={21} className="text-white" />
              <p className={`${isExpanded ? "block" : "hidden"} font-medium text-sm`}>Settings</p>
            </div>
          </Link>

          {/* New My Account Section */}
          <Link to="/my-account">
            <div className="home text-white flex items-center ml-5 gap-2 mb-6 cursor-pointer">
              <IoPersonOutline size={21} className="text-white" />
              <p className={`${isExpanded ? "block" : "hidden"} font-medium text-sm`}>My Account</p>
            </div>
          </Link>

          <div className="home text-white flex items-center ml-5 gap-2 mb-6 cursor-pointer">
            <AiOutlineMessage size={21} className="text-white" />
            <p className={`${isExpanded ? "block" : "hidden"} font-medium text-sm`}>Help & Support</p>
          </div>

          <Link to="/customer-feedback">
            <div className="home text-white flex items-center ml-5 gap-2 mb-6 cursor-pointer">
              <SlPeople size={21} className="text-white" />
              <p className={`${isExpanded ? "block" : "hidden"} font-medium text-sm`}>Customer Feedback</p>
            </div>
          </Link>
          {/* <div className="flex items-center gap-3 mt-[120px] px-4">
							{isExpanded ? (
								<TextField
									variant="outlined"
									placeholder="Go Pro"
									size="small"
									fullWidth
									className="transition-all duration-300"
									InputProps={{
										startAdornment: (
											<InputAdornment position="start" className="flex justify-between">
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
						</div> */}

        </div>
      </div>
    </div>
  );
};

export default Sidebar;
