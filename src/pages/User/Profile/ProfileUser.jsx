import React from 'react';
import './ProfileUser.css';

const ProfileUser = () => {
  const user = {
    firstName: 'Jane',
    lastName: 'Doe',
    address: '456 Elm St, Townsville',
    email: 'jane@example.com',
    lastLoggedIn: '2023-11-15',
    image: 'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg'
  };

  const appointments = [
    {
      date: '2023-12-01',
      time: '10:00 AM',
      doctorName: 'Dr. Smith',
      description: 'Check-up'
    },
    {
      date: '2023-12-15',
      time: '02:30 PM',
      doctorName: 'Dr. Johnson',
      description: 'Follow-up'
    },
    // Add more appointments as needed
  ];

  return (
    <div className="profile-container">
      <div className="profile">
        <div className="profile-info">
          <div className="profile-image">
            <img src={user.image} alt="User" />
          </div>
          <h2>{user.firstName} {user.lastName}</h2>
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
            {appointments.map((appointment, index) => (
              <tr key={index}>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>{appointment.doctorName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfileUser;
