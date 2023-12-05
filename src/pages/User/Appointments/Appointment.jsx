import React, { useState, useEffect } from 'react';
import axios from 'axios';
import{useNavigate} from "react-router-dom"
import './Appointment.css'



const Appointment = () => {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/Appointment');
        if (response.status === 200) {
          const userAppointments = response.data.appointments.filter(
            (appointment) => appointment.idUser === localStorage.getItem('userId')
          );
          setAppointments(userAppointments);
        }
      } catch (error) {
            console.error('Error fetching appointments:', error);
      }
    };
    fetchData();
  }, []);



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
          <th>Date</th>
          <th>Time</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appointment) => (
          <tr key={appointments._id}>
            <td>{appointment._id.slice(-10)}</td>
            <td>{appointment.NameDoctor}</td>
            <td>{appointment.DateApp}</td>
            <td>{appointment.TimeApp}</td>
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