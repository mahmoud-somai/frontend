import React from 'react';
import './Filter.css';

const Filter = ({ filter, onFilterChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ ...filter, [name]: value });
  };

  return (
    <div className="listSearch">
      <h1 className="lsTitle">Filter</h1>
      <div className="lsItem">
        <label>Speciality</label>
        <select name="doctorType" value={filter.doctorType} onChange={handleInputChange}>
          <option value="">All</option>
          <option value="General practitioner">General practitioner</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Otolaryngologist">Otolaryngologist</option>
        </select>
      </div>


      /*
      <div className="lsItem">
        <label>Location</label>
        <select name="location" value={filter.location} onChange={handleInputChange}>
          <option value="">All</option>
          <option value="Tunis">Tunis</option>
          <option value="Ben Arous">Ben Arous</option>
          <option value="Sfax">Sfax</option>
          <option value="Sousse">Sousse</option>
        </select>
      </div>
      <div className="lsItem">
        <label>Minimum Price</label>
        <input
          type="number"
          name="minPrice"
          value={filter.minPrice}
          onChange={handleInputChange}
        />
      </div>
      <div className="lsItem">
        <label>Maximum Price</label>
        <input
          type="number"
          name="maxPrice"
          value={filter.maxPrice}
          onChange={handleInputChange}
        />
      </div>
      <button>Search</button>
    </div>
  );
};

export default Filter;
