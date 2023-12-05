import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BookingCard.css';
import { Link } from 'react-router-dom';



const BookingCard = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/Listdoctor');
        if (response.status === 200) {
          setDoctors(response.data.doctors);
        }
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };
    fetchDoctors();
  }, []);




  return (
    <div className="card-ctn">
      {doctors.map((doctor) => (
          <div className="card"  key={doctor._id}>
            
            <div className="content-box">
              <span className="card-title">{doctor.firstName} {doctor.lastName}</span>
              <p className="card-content">{doctor.speciality}</p>
              <Link to={`/booking/doctor/${doctor._id}`} className="see-more">
              <span>Book Now</span>
            </Link>
            </div>
            <div className="date-box">
              <span className="month">Price</span>
              <span className="date">{doctor.price} DT</span>
            </div>
          </div>
      
      ))}
    </div>
  );
};

export default BookingCard;
