import React from 'react'
import './Appointment.css'
const Appointment = () => {
    const appointments = [
        {
          id: '12345',
          doctorName: 'Dr. John Doe',
          doctorPhone: '123-456-7890',
          dateTime: 'November 25, 2023 at 10:00 AM',
          status: 'Confirmed'
        },
        {
            id: '12345',
            doctorName: 'Dr. John Doe',
            doctorPhone: '123-456-7890',
            dateTime: 'November 25, 2023 at 10:00 AM',
            status: 'Confirmed'
          },
       
      ];
  return (
    <div class="parent_apt">
<div class="div1_apt"> 
 <div className="appointment-container">
    <h2>Appointments</h2>
    <table className="appointment-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Doctor</th>
          <th>Doctor's Phone</th>
          <th>Date & Time</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appointment, index) => (
          <tr key={index}>
            <td>{appointment.id}</td>
            <td>{appointment.doctorName}</td>
            <td>{appointment.doctorPhone}</td>
            <td>{appointment.dateTime}</td>
            <td>{appointment.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div> 
  </div>
</div>
  
  )
}

export default Appointment