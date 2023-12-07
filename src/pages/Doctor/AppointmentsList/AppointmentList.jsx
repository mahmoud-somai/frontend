import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import{useNavigate} from "react-router-dom"

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://34.196.153.174:4000/api/Appointment');
        if (response.status === 200) {
          const today = new Date().toISOString().split('T')[0];
          console.log(today); // Get current date in YYYY-MM-DD format
          const filteredAppointments = response.data.appointments.filter(
            (appointment) => appointment.status === true 
          );
          setAppointments(filteredAppointments);
        }
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="parent_apt">
      <div className="div1_apt">
        <div className="appointment-container">
          <h2>Appointments List</h2>
          <table className="appointment-table">
            <thead>
              <tr>
                <th>ID User</th>
                <th>User Name</th>
                <th>Date</th>
                <th>Time</th>
          
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment._id}>
                  <td>{appointment._id.slice(-10)}</td>
                  <td>{appointment.NameUser}</td>
                  <td>{appointment.DateApp} </td>
                  <td>{appointment.TimeApp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppointmentList;
