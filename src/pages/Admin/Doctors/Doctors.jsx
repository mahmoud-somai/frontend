import React, { useState } from 'react';
import './Doctors.css'; // Import the CSS file for styling

const Doctors = () => {
  const [doctorData, setDoctorData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    location: '',
    email: '',
    specialization: '',
    price: '',
    startTime: '',
    endTime: '',
    startDay: [],
    endDay: []
  });

  const specializationOptions = [
    'Cardiology',
    'Dermatology',
    'Endocrinology',
    'Gastroenterology',
    // Add more specializations as needed...
  ];

  const daysOfWeek = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'startDay' || name === 'endDay') {
      const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
      setDoctorData({ ...doctorData, [name]: selectedOptions });
    } else {
      setDoctorData({ ...doctorData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend or perform actions)
    console.log('Doctor Data:', doctorData);
    // You can add logic here to send the data to your backend
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
          <label>Specialization:</label>
          <select
              name="specialization"
              value={doctorData.specialization}
              onChange={handleChange}
              required
            >
              <option value="">Select specialization</option>
              {specializationOptions.map((specialization, index) => (
                <option key={index} value={specialization}>
                  {specialization}
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
          <input
            type="time"
            name="startTime"
            value={doctorData.startTime}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>End Time:</label>
          <input
            type="time"
            name="endTime"
            value={doctorData.endTime}
            onChange={handleChange}
            required
          />
        </div>
        </div>
        <div className="flex-container">
        <div className="form-group">
          <label>Start Day Work:</label>
          <select
              name="startday"
              value={doctorData.startDay}
              onChange={handleChange}
              required
            >
              <option value="">Select Start Day</option>
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
              <option value="">Select End Day</option>
              {daysOfWeek.map((day, index) => (
                <option key={index} value={day}>
                  {day}
                </option>
              ))}
            </select>
        </div>
        </div>
        <button type="submit">Add Doctor</button>
      </form>
    </div>
  );
};

export default Doctors;
