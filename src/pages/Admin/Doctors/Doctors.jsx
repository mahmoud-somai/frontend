import React, { useState } from 'react';
import axios from 'axios';
import './Doctors.css'; 
import{useNavigate,Link} from "react-router-dom"
import Swal from 'sweetalert2';


const Doctors = () => {
  const [doctorData, setDoctorData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    location: '',
    email: '',
    speciality: '',
    price: '',
    timeWorkStart: '',
    timeWorkEnd: '',
    startDay: '',
    endDay: '',
    password: '12345678' // Assuming the password is needed for adding
  });

  const navigate = useNavigate();

  const specialityOptions = [
    'Cardiology',
    'Dermatology',
    'Gynecology',
    'Gastroenterology',
    'Neurology',
    'Ophthalmology',
    'Pediatrics',
  ];

  const daysOfWeek = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
  ];

  const generateTimeOptions = () => {
    const times = [];
    for (let i = 6; i <= 23; i++) {
      times.push(`${i < 10 ? '0' : ''}${i}:00`);
      times.push(`${i < 10 ? '0' : ''}${i}:30`);
    }
    return times;
  };

  const timeOptions = generateTimeOptions();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://34.196.153.174:4000/api/doctor', doctorData);
      if (response.status === 200) {
        console.log('Doctor added with success:', response.data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Doctor added with success",
          showConfirmButton: false,
          timer: 1500
        });
        navigate(`/admin/doctorsList`); // Redirect to the doctor details page
      } else {
        console.error('Failed to add doctor:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding doctor:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorData({ ...doctorData, [name]: value });
  };
  

  return (
    <div className="doctors-container">
      <h2>Add a Doctor</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex-container">
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={doctorData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={doctorData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input
              type="tel"
              name="phoneNumber"
              value={doctorData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex-container">
          <div className="form-group">
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={doctorData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={doctorData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Speciality:</label>
            <select
              name="speciality"
              value={doctorData.speciality}
              onChange={handleChange}
              required
            >
              <option value="">Select specialization</option>
              {specialityOptions.map((speciality, index) => (
                <option key={index} value={speciality}>
                  {speciality}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex-container">
          <div className="form-group">
            <label>Price:</label>
            <input
              type="text"
              name="price"
              value={doctorData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Start Time:</label>
            <select
              name="timeWorkStart"
              value={doctorData.timeWorkStart}
              onChange={handleChange}
              required
            >
              {timeOptions.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>End Time:</label>
            <select
              name="timeWorkEnd"
              value={doctorData.timeWorkEnd}
              onChange={handleChange}
              required
            >
              {timeOptions.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex-container">
        <div className="form-group">
        <label>Start Day Work:</label>
        <select
              name="startDay"
              value={doctorData.startDay}
              onChange={handleChange}
              required
            >
              {daysOfWeek.map((day, index) => (
                <option key={index} value={day}>
                  {day}
                </option>
              ))}
            </select>
        </div>
        <div className="form-group">
          <label>End Day Work:</label>
          <select
              name="endDay"
              value={doctorData.endDay}
              onChange={handleChange}
              required
            >
              {daysOfWeek.map((day, index) => (
                <option key={index} value={day}>
                  {day}
                </option>
              ))}
            </select>
        </div>
        </div>
        <button type='submit'>Add New Doctor</button> &nbsp;&nbsp; <Link to="/admin/doctorsList"> <button>Cancel</button> </Link> 
      </form>
    </div>
  );
};

export default Doctors;
