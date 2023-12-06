import React from 'react'
import BookingCard from '../../components/BookingCard/BookingCard'
import Filter from '../../components/Filter/Filter'
import './Booking.css'
import { useState } from 'react';

const Booking = () => {
  const [filter, setFilter] = useState({
    doctorType: '',
    location: '',
    minPrice: '',
    maxPrice: '',
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };
  return (
    <div className="parentBooking">
    <div className="FilterBooking">
      <Filter  filter={filter} onFilterChange={handleFilterChange} />
    </div>
    <div className="cardBooking">
      <BookingCard filter={filter} />
    </div>
  </div>

  )
}

export default Booking