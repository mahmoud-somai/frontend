import React, { useState, useEffect } from 'react';
import './ProfileUser.css';
import axios from 'axios';

const ProfileUser = () => {
  const [userAppointments, setUserAppointments] = useState([]);
  const userId = localStorage.getItem('idUser');
  const username=localStorage.getItem('NameUser');


  const user = {
    firstName: 'Jane',
    lastName: 'Doe',
    address: '456 Elm St, Townsville',
    email: 'jane@example.com',
    lastLoggedIn: '2023-11-15',
    image: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Y5MzctYWV3LTEzOS5qcGc.jpg'
  };


  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://34.196.153.174:4000/api/Appointment');
        if (response.status === 200) {
          const appointments = response.data.appointments;
          const currentDate = new Date(); // Current date and time
          // Filter appointments after the current date and time
          const filteredAppointments = appointments.filter(
            (appointment) => {
              const appointmentDate = new Date(appointment.DateApp + 'T' + appointment.TimeApp);
              return appointment.idUser === userId && appointmentDate > currentDate;
            }
          );
          setUserAppointments(filteredAppointments);
        }
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };
    fetchAppointments();
  }, [userId]);



  return (
    <div className="profile-container">
      <div className="profile">
        <div className="profile-info">
          <div className="profile-image">
            <img src={user.image} alt="User" />
          </div>
          <h2>{username}</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <p><strong>Last Logged In:</strong> {user.lastLoggedIn}</p>
        </div>
      </div>
      <div className="next-appointment">
        <h2>Next Appointment</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Doctor</th>
            </tr>
          </thead>
          <tbody>
            {userAppointments.map((appointment, index) => (
              <tr key={index}>
                <td>{appointment.DateApp}</td>
                <td>{appointment.TimeApp}</td>
                <td>{appointment.NameDoctor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfileUser;
