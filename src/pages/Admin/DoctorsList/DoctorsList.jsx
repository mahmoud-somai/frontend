import React from 'react';
import './DoctorsList.css'; 
import { Link } from 'react-router-dom';

const DoctorsList = () => {
  const doctors = [
    {
      id: '1',
      doctorName: 'Dr. John Doe',
      doctorPhone: '123-456-7890',
      specialization: 'Cardiology',
    },
    {
      id: '2',
      doctorName: 'Dr. Jane Smith',
      doctorPhone: '987-654-3210',
      specialization: 'Dermatology',
    },
    // Add more doctor information...
  ];

  return (
    <div className="parent_apt">
      <div className="div1_apt">
        <div className="appointment-container">
          <h2>Doctors List</h2>
          <Link to="/admin/doctor">
              <button className="add-doctor-btn">Add Doctor</button>
            </Link>
          <table className="appointment-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Doctor</th>
                <th>Doctor's Phone</th>
                <th>Doctor's Specialization</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((appointment, index) => (
                <tr key={index}>
                  <td>{appointment.id}</td>
                  <td>{appointment.doctorName}</td>
                  <td>{appointment.doctorPhone}</td>
                  <td>{appointment.specialization}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DoctorsList;
