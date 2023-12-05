import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import{useNavigate} from "react-router-dom"

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate=useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/Appointment');
        if (response.status === 200) {
          const today = new Date().toISOString().split('T')[0];
          console.log(today); // Get current date in YYYY-MM-DD format
          const filteredAppointments = response.data.appointments.filter(
            (appointment) => appointment.pending === true && appointment.DateApp === today
          );
          setAppointments(filteredAppointments);
        }
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchData();
  }, []);

  const handleApprove = async (id) => {
    try {
      const response = await axios.patch(`http://localhost:8800/api/approve/${id}`);
      if (response.status === 200) {
        console.log('Appointment approved successfully');
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "approved",
          showConfirmButton: false,
          timer: 1500
        });
        navigate("/doctor")
      }
    } catch (error) {
      console.error('Error approving appointment:', error);
    }
  };

  const handleCanceled= async (id) => {
    try {
      const response = await axios.patch(`http://localhost:8800/api/cancel/${id}`);
      if (response.status === 200) {
        console.log('Appointment canceled successfully');
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "canceled",
          showConfirmButton: false,
          timer: 1500
        });
        navigate("/doctor")
      }
    } catch (error) {
      console.error('Error canceling appointment:', error);
    }
  };

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
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment._id}>
                  <td>{appointment._id.slice(-10)}</td>
                  <td>{appointment.NameUser}</td>
                  <td>{appointment.DateApp} </td>
                  <td>{appointment.TimeApp}</td>
                  <td>
                    <button onClick={() => handleApprove(appointment._id)}>Approved</button>&nbsp;&nbsp;
                    <button onClick={() => handleCanceled(appointment._id)}>Cancel</button>
                  </td>
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
