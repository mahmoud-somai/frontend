import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './BookDoc.css';
import Swal from 'sweetalert2';

const BookDoc = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const navigate = useNavigate();

  const idUser = localStorage.getItem('idUser');
  const nameUser = localStorage.getItem('NameUser');

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await axios.get(`http://34.196.153.174:4000/api/doctor/${id}`);
        if (response.status === 200) {
          setDoctor(response.data);
        }
      } catch (error) {
        console.error('Error fetching doctor:', error);
      }
    };
    fetchDoctor();
  }, [id]);

  const generateTimeOptions = () => {
    const times = [];
    for (let i = 8; i <= 23; i++) {
      times.push(`${i < 10 ? '0' : ''}${i}:00`);
      times.push(`${i < 10 ? '0' : ''}${i}:30`);
    }
    return times;
  };

  const timeOptions = generateTimeOptions();

  const handleTakeAppointment = async () => {
    try {
      const appointmentResponse = await axios.post('http://34.196.153.174:4000/api/Appointment', {
        NameUser: nameUser,
        NameDoctor: `${doctor.firstName} ${doctor.lastName}`,
        DateApp: selectedDate,
        TimeApp: selectedTime,
        idDoctor: doctor._id,
        idUser: idUser,
      });

      if (appointmentResponse.status === 200) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Request Sended with success',
          showConfirmButton: false,
          timer: 1500,
        });

        const notifResponse = await axios.post('http://34.196.153.174:4000/api/Notif', {
          idDoctor: doctor._id, // Assuming doctor._id holds the ID of the selected doctor
          idUser: idUser, // Assuming idUser is the ID of the logged-in user
          DateApp: selectedDate,
          TimeApp: selectedTime,
          message: `Your Demand is sended wth success to Dr. ${doctor.firstName} ${doctor.lastName}`,
        });

        if (notifResponse.status === 200) {
          console.log('Notification sent with success');
        }

        navigate('/user/profile');
      }
    } catch (error) {
      console.error('Error handling appointment:', error);
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
                  <div>
                    <select
                      name="selectedTime"
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)} // Updated to setSelectedTime
                      required
                    >
                      {timeOptions.map((time, index) => (
                        <option key={index} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <button className="request" type="button" onClick={handleTakeAppointment}>
              Take Appointment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDoc;
