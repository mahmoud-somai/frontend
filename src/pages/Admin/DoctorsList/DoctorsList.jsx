import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DoctorsList.css'; 
import { Link } from 'react-router-dom';

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
  const [doctorsCount, setDoctorsCount] = useState(0);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/Listdoctor');
        if (response.status === 200) {
          const { doctors, NbDoctors } = response.data;
          setDoctors(doctors);
          setDoctorsCount(NbDoctors);
        } else {
          console.error('Failed to fetch doctors:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div className="parent_apt">
      <div className="div1_apt">
        <div className="appointment-container">
          <h2>Doctors List</h2>
          <Link to="/admin/newDoctor">
              <button className="add-doctor-btn">Add Doctor</button>
            </Link>
          <table className="appointment-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Doctor</th>
                <th>Phone</th>
                <th>Specialization</th>
              </tr>
            </thead>
            <tbody>
            {doctors.map((doctor) => (
                <tr key={doctor._id}>
                  <td>{doctor._id}</td>
                  <td>{doctor.firstName} {doctor.lastName}</td>
                  <td>{doctor.phoneNumber}</td>
                  <td>{doctor.speciality}</td>
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
