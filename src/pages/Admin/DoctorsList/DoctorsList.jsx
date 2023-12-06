import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DoctorsList.css'; 
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
  const [doctorsCount, setDoctorsCount] = useState(0);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://34.196.153.174:4000/api/Listdoctor');
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

  const handleDeleteDoctor = async (doctorId) => {
    if (window.confirm("Are you sure you want to delete this doctor?")) {
      try {
        const response = await axios.delete(`http://34.196.153.174:4000/api/doctor/${doctorId}`);
        
        if (response.status === 200) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Doctor deleted with success',
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(() => {
            window.location.reload();
          }, 1500);

          console.log(`Doctor with ID ${doctorId} deleted.`);
        }
      } catch (error) {
        console.error(`Error deleting doctor with ID ${doctorId}:`, error);
      }
    }
  };


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
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
      {doctors.map((doctor) => (
        <tr key={doctor._id}>
          <td> {doctor._id} </td>
          <td> {doctor.firstName} {doctor.lastName} </td>
          <td>{doctor.phoneNumber}</td>
          <td>{doctor.speciality}</td>
          <td>
          <Link to={`/admin/updatedoctor/${doctor._id}`}>
             <button className="update-btn">Update</button>
          </Link>
            <button className="delete-btn" onClick={() => handleDeleteDoctor(doctor._id)}>Delete</button>
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

export default DoctorsList;
