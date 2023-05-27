import React from "react";
import "./Search.css";
function Search() {
  return (
    <div className="box">
      <div className="search-box">
        <div className="Search-select">
          <div className="sec">
            <div className="label">
              <label for="Property-Status">Property Status</label>
            </div>
            <div className="select">
              <select name="property-Status" id="Property-status">
                <option value="for-rent">For Rent</option>
                <option value="for-sale">For Sale</option>
                <option value="any">Any</option>
              </select>
            </div>
          </div>
        </div>
        <div className="Search-select">
          <div className="sec">
            <div className="label">
              <label for="location">Location</label>
            </div>
            <div className="select">
              <select name="location" id="location">
                <option value="Cairo">Cairo</option>
                <option value="Giza">Giza</option>
                <option value="Alex">Alex</option>
                <option value="Luxor">Luxor</option>
              </select>
            </div>
          </div>
        </div>

        <div className="Search-select">
          <div className="sec">
            <div className="label">
              <label for="Property-Type">Property Type</label>
            </div>
            <div className="select">
              <select name="Property-Type" id="Property-Type">
                <option value="Office">Office</option>
                <option value="Shop">Shop</option>
                <option value="Apartment">Apartment</option>
              </select>
            </div>
          </div>
        </div>
        <div className="btn">
          <button type="button" id="search-button">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
