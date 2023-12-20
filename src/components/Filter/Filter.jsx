import React from 'react'
import './Filter.css'
const Filter = ({ filter, onFilterChange }) => {
  return (
    <div className="listSearch">
      <h1 className="lsTitle">Filter</h1>
      <div className="lsItem">
        <label>Speciality Of Doctors</label>
        <select name="doctortype" value={filter.doctortype} onChange={onFilterChange}>
          <option value="">All</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Dermatology">Dermatology</option>
          <option value="Gynecology">Gynecology</option>
          <option value="Gastroenterology">Gastroenterology</option>
          <option value="Neurology">Neurology</option>
          <option value="Ophthalmology">Ophthalmology</option>
          <option value="Pediatrics">Pediatrics</option>
        </select>
      </div>
      <div className="lsItem">
        <label>Location</label>
        <select name="location" value={filter.location} onChange={onFilterChange}>
          <option value="">All</option>
          <option value="Tunis">Tunis</option>
          <option value="Sfax">Sfax</option>
          <option value="Sousse">Sousse</option>
          <option value="Gabes">Gabes</option>
        </select>
      </div>
      <div className="lsItem">
        <label>Minimum Price</label>
        <input
          type="number"
          name="minPrice"
          value={filter.minPrice}
          onChange={onFilterChange}
        />
      </div>
      <div className="lsItem">
        <label>Maximum Price</label>
        <input
          type="number"
          name="maxPrice"
          value={filter.maxPrice}
          onChange={onFilterChange}
        />
      </div>
      <button>Search</button>
    </div>
  );

}

export default Filter