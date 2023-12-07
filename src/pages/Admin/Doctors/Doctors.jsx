import React, { useState } from 'react';
import axios from 'axios';
import './Doctors.css'; 
import{useNavigate,Link} from "react-router-dom"
import Swal from 'sweetalert2';


const Doctors = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [price, setPrice] = useState('');
  const [timeWorkStart, setTimeWorkStart] = useState('');
  const [timeWorkEnd, setTimeWorkEnd] = useState('');
  const [startDay, setStartDay] = useState('');
  const [endDay, setEndDay] = useState('');
  const [password, setPassword] = useState('12345678');
  const navigate=useNavigate()

  const specialityOptions = [
    'Cardiology',
    'Dermatology',
    'Endocrinology',
    'Gastroenterology',
  ];

  const daysOfWeek = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
  ];

  const generateTimeOptions = () => {
    const times = [];
    for (let i = 8; i <= 23; i++) {
      times.push(`${i < 10 ? '0' : ''}${i}:00`);
      times.push(`${i < 10 ? '0' : ''}${i}:30`);
    }
    return times;
  };

  const timeOptions = generateTimeOptions();


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://34.196.153.174:4000/api/doctor',{
        firstName,
        lastName,
        phoneNumber,
        Location,
        email,
        speciality,
        price,
        timeWorkStart,
        timeWorkEnd,
        startDay,
        endDay,
        password,
      });
      if (response.status === 200) {
        console.log('Doctor added with success:', response.data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Doctor added with success",
          showConfirmButton: false,
          timer: 1500
        });
        navigate("/admin")
      } else {
        console.error('Failed to add doctor:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding doctor:', error);
    }
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
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input
              type="tel"
              name="PhoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
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
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Speciality:</label>
          <select
              name="specialization"
              value={speciality}
              onChange={(e) => setSpeciality(e.target.value)}
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
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Start Time:</label>
          <select
            name="startTime"
            value={timeWorkStart}
            onChange={(e) => setTimeWorkStart(e.target.value)}
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
            type="endTime"
            name="endTime"
            value={timeWorkEnd}
            onChange={(e) => setTimeWorkEnd(e.target.value)}
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
              value={startDay}
              onChange={(e) => setStartDay(e.target.value)}
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
              value={endDay}
              onChange={(e) => setEndDay(e.target.value)}
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
        <button type="submit">Add New Doctor</button> &nbsp;&nbsp; <Link to="/admin/doctorsList"> <button>Cancel</button> </Link> 
      </form>
    </div>
  );
};

export default Doctors;
