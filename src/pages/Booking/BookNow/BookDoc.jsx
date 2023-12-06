import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
import './BookDoc.css';
import Swal from 'sweetalert2';

const BookDoc = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const navigate=useNavigate()

  const idUser = localStorage.getItem('idUser');
  const nameUser = localStorage.getItem('NameUser');


  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await axios.get(`http://localhost:8800/api/doctor/${id}`);
        if (response.status === 200) {
          setDoctor(response.data);
        }
      } catch (error) {
        console.error('Error fetching doctor:', error);
      }
    };
    fetchDoctor();
  }, [id]);


  const handleTakeAppointment = async () => {
    try {
      const { firstName, lastName, speciality } = doctor;
      const response = await axios.post('http://34.196.153.174:4000/api/Appointment', {
        NameUser: nameUser,
        NameDoctor: `${firstName} ${lastName}`,
        DateApp: selectedDate,
        TimeApp: selectedTime,
        idDoctor: doctor._id,
        idUser: idUser,
      });

      if (response.status === 200) {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Appointment saved with success",
            showConfirmButton: false,
            timer: 1500
          });
          navigate("/user/profile")
      }
    } catch (error) {
      console.error('Error saving the appointment:', error);
    }
  };

  return (
    <div className="parentDoc">
      <div className="divDoc">
        {doctor && (
          <div className="cardDoc">
            {/* Render doctor information */}
            <div className="infos">
              <div className="imageDoc"></div>
              <div className="info">
                <div>
                  <p className="name">
                    {doctor.firstName} {doctor.lastName}
                  </p>
                  <p className="function">{doctor.speciality}</p>
                </div>
                <div className="stats">
                  <h3>Time Of Appointment</h3>
                  <input
                    type="time"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                  />
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <button className="request" type="button"  onClick={handleTakeAppointment}>
              Take Appointment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDoc;
