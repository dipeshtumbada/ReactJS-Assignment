import React, { useState } from "react";
import "./Navbar.css";
import DisplayIcon from "../assets/icons/Display.svg"; 
import DownArrowIcon from "../assets/icons/down.svg"; 

const Navbar = ({ groupBy, setGroupBy, sortBy, setSortBy }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navbar">
      {/* Display Button with Icon */}
      <button className="display-button" onClick={handleDropdownToggle}>
        <img src={DisplayIcon} alt="Display" className="icon" />
        <span>Display</span>
        <img
          src={DownArrowIcon}
          alt="Arrow"
          className={`arrow-icon ${isDropdownOpen ? "rotate" : ""}`}
        />
      </button>

      {isDropdownOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-row">
            <label>Grouping</label>
            <div className="select-container">
              <select
                value={groupBy}
                onChange={(e) => setGroupBy(e.target.value)}
                className="dropdown-select"
              >
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
              <img src={DownArrowIcon} alt="Arrow" className="dropdown-arrow" />
            </div>
          </div>
          <div className="dropdown-row">
            <label>Ordering</label>
            <div className="select-container">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="dropdown-select"
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
              <img src={DownArrowIcon} alt="Arrow" className="dropdown-arrow" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
