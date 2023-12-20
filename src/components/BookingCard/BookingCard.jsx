import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BookingCard.css';
import { Link } from 'react-router-dom';



const BookingCard = ({ filter }) => {
  const [doctors, setDoctors] = useState([]);



  useEffect(() => {
    loadDoctors();
  }, [filter]);

  const loadDoctors = async () => {
    try {
      const response = await axios.get('http://34.196.153.174:4000/api/Listdoctor');
      const filteredDoctors = applyFilter(response.data.doctors, filter);
      setDoctors(filteredDoctors);
    } catch (error) {
      console.log('Error loading doctors:', error);
    }
  };

  const applyFilter = (doctors, filter) => {
    const { doctortype, location, minPrice, maxPrice } = filter;
    return doctors.filter((doctor) => {
      if (doctortype && doctor.speciality !== doctortype) {
        return false;
      }
      if (location && doctor.location !== location) {
        return false;
      }
      if (minPrice && doctor.price < minPrice) {
        return false;
      }
      if (maxPrice && doctor.price > maxPrice) {
        return false;
      }
      return true;
    });
  };






  return (
    <div className="card-ctn">
      {doctors.map((doctor) => (
          <div className="card"  key={doctor._id}>
            
            <div className="content-box">
              <span className="card-title">{doctor.firstName} {doctor.lastName}</span>
              <p className="card-content">{doctor.speciality}</p>
              <p className="card-content">{doctor.location}</p>
              <Link to={`/booking/doctor/${doctor._id}`} className="see-more">
              <span>Book Now</span>
            </Link>
            </div>
            <div className="date-box">
              <span className="date">{doctor.price} DT</span>
            </div>
          </div>
      
      ))}
    </div>
  );
};

export default BookingCard;
