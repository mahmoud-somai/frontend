import React from 'react'
import BookingCard from '../../components/BookingCard/BookingCard'
import Filter from '../../components/Filter/Filter'

const Booking = () => {
  return (
    <div className="parentBooking">
    <div className="FilterBooking">
      <Filter />
    </div>
    <div className="cardBooking">
      <BookingCard />
      <BookingCard />
    </div>
  </div>

  )
}

export default Booking