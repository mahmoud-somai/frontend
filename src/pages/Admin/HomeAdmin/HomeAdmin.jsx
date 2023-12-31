import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios'; 
import './HomeAdmin.css';


const appointmentData = [
    { date: '2023-01-05', patient: 'Patient A' },
    { date: '2023-02-10', patient: 'Patient B' },
    { date: '2023-02-15', patient: 'Patient C' },
    { date: '2023-02-15', patient: 'Patient D' },
    { date: '2023-02-20', patient: 'Patient E' },
    { date: '2023-02-22', patient: 'Patient F' },
    { date: '2023-02-23', patient: 'Patient G' },
    { date: '2023-02-25', patient: 'Patient H' },
    { date: '2023-02-26', patient: 'Patient I' },
    { date: '2023-02-28', patient: 'Patient J' },
    { date: '2023-03-02', patient: 'Patient K' },
    { date: '2023-03-05', patient: 'Patient L' },
    { date: '2023-03-08', patient: 'Patient M' },
    { date: '2023-03-10', patient: 'Patient N' },
    { date: '2023-03-15', patient: 'Patient O' },
    { date: '2023-03-18', patient: 'Patient P' },
    { date: '2023-03-20', patient: 'Patient Q' },
    { date: '2023-03-25', patient: 'Patient R' },
    { date: '2023-03-28', patient: 'Patient S' },
    { date: '2023-04-02', patient: 'Patient T' },
    { date: '2023-04-05', patient: 'Patient U' },
    { date: '2023-04-10', patient: 'Patient V' },
    { date: '2023-04-15', patient: 'Patient W' },
    { date: '2023-04-18', patient: 'Patient X' },
    { date: '2023-04-20', patient: 'Patient Y' },
    { date: '2023-04-25', patient: 'Patient Z' },
    { date: '2023-05-02', patient: 'Patient AA' },
    { date: '2023-05-05', patient: 'Patient BB' },
    { date: '2023-05-10', patient: 'Patient CC' },
    { date: '2023-05-15', patient: 'Patient DD' },
    { date: '2023-05-18', patient: 'Patient EE' },
    { date: '2023-06-20', patient: 'Patient FF' },
    { date: '2023-06-25', patient: 'Patient GG' },
    { date: '2023-06-28', patient: 'Patient HH' },
    { date: '2023-07-02', patient: 'Patient II' },
    { date: '2023-07-05', patient: 'Patient JJ' },
    { date: '2023-07-10', patient: 'Patient KK' },
    { date: '2023-08-15', patient: 'Patient LL' },
    { date: '2023-08-18', patient: 'Patient MM' },
    { date: '2023-08-20', patient: 'Patient NN' },
    { date: '2023-08-25', patient: 'Patient OO' },
    { date: '2023-08-28', patient: 'Patient PP' },
    { date: '2023-09-02', patient: 'Patient QQ' },
    { date: '2023-09-05', patient: 'Patient RR' },
    { date: '2023-09-10', patient: 'Patient SS' },
    { date: '2023-09-15', patient: 'Patient TT' },
    { date: '2023-09-18', patient: 'Patient UU' },
    { date: '2023-09-20', patient: 'Patient VV' },
    { date: '2023-09-25', patient: 'Patient WW' },
    { date: '2023-09-28', patient: 'Patient XX' },
    { date: '2023-10-02', patient: 'Patient YY' },
    { date: '2023-10-05', patient: 'Patient ZZ' },
    // Add more appointments...
  ];
  


  

const HomeAdmin = () => {
  const [userCount, setUserCount] = useState(0);
  const [doctorCount, setDoctorCount] = useState(0);
  const [appointmentsByMonth, setAppointmentsByMonth] = useState({});
  const pieChartContainer = useRef(null);
  const barChartContainer = useRef(null);
  const pieChartInstance = useRef(null);
  const barChartInstance = useRef(null);
  

  const groupAppointmentsByMonth = () => {
    const appointmentsByMonth = {};
  
    const currentYear = new Date().getFullYear();
    const allMonths = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    allMonths.forEach(month => {
      const key = `${currentYear}-${month}`;
      appointmentsByMonth[key] = 0;
    });
  
    return appointmentsByMonth;
  };

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await axios.get('http://34.196.153.174:4000/api/Listusers'); // Make GET request using Axios
        if (response.status === 200) {
          setUserCount(response.data.NbUsers);
           // Update user count state
        } else {
          console.error('Error fetching user count:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching user count:', error);
      }
    };

    fetchUserCount();
  }, []);


  useEffect(() => {
    const fetchDoctorCount = async () => {
      try {
        const response = await axios.get('http://34.196.153.174:4000/api/ListDoctor'); // Make GET request using Axios
        if (response.status === 200) {
          setDoctorCount(response.data.NbDoctors);
           // Update user count state
        } else {
          console.error('Error fetching Doctor count:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching Doctor count:', error);
      }
    };

    fetchDoctorCount();
  }, []);

  useEffect(() => {
    const fetchAppointmentsByMonth = async () => {
      try {
        const response = await axios.get('http://34.196.153.174:4000/api/Appointment');
        if (response.status === 200) {
          const appointments = response.data.appointments;
          const currentYear = new Date().getFullYear();
  
          const appointmentsByMonth = groupAppointmentsByMonth();
  
          appointments.forEach(appointment => {
            const date = new Date(appointment.DateApp);
            const year = date.getFullYear();
            const month = date.toLocaleString('en-US', { month: 'long' });
            const key = `${year}-${month}`;
  
            if (year === currentYear ) {
              appointmentsByMonth[key]++;
            }
          });
  
          setAppointmentsByMonth(appointmentsByMonth);
        } else {
          console.error('Error fetching appointments:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };
  
    fetchAppointmentsByMonth();
  }, []);
  

  useEffect(() => {
    // Recreate the pie chart when userCount or doctorCount changes
    if (pieChartContainer && pieChartContainer.current) {
      if (pieChartInstance.current) {
        pieChartInstance.current.destroy();
      }

      const ctx = pieChartContainer.current.getContext('2d');

      pieChartInstance.current = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Total Subscribers', 'Users', 'Doctors'],
          datasets: [{
            label: 'Total ',
            data: [userCount + doctorCount, userCount, doctorCount],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
          }],
        },
        options: {
          responsive: true,
        },
      });
    }
  }, [userCount, doctorCount]);

  useEffect(() => {
    // Recreate the bar chart when appointmentsByMonth changes
    if (barChartContainer && barChartContainer.current && Object.keys(appointmentsByMonth).length > 0) {
      if (barChartInstance.current) {
        barChartInstance.current.destroy();
      }

      const ctx = barChartContainer.current.getContext('2d');

      barChartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: Object.keys(appointmentsByMonth),
          datasets: [{
            label: 'Appointments By Month (2023)',
            data: Object.values(appointmentsByMonth),
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          }],
        },
        options: {
          indexAxis: 'x',
          responsive: true,
          scales: {
            x: {
              title: {
                display: true,
                text: 'Months',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Number of Appointments',
              },
              suggestedMin: 0, // Ensure the y-axis starts from 0
            ticks: {
              stepSize: 1,
              precision: 0, // Force integers, no decimal places
            },
             
            },
          },
        },
      });
    }
  }, [appointmentsByMonth]);

  return (
    <div className="home-admin">
    <h1>Welcome to Admin Dashboard</h1>

    <div className="chart-container">
      <div className="chart-item stats">
        <h2>User Statistics</h2>
        <p>Total Subscribers in website: {userCount + doctorCount}</p>
        <p>Users: {userCount}</p>
        <p>Doctors: {doctorCount}</p>
      </div>

      <div   className="chart-item graph">
        <h2>User Stats </h2>
        <canvas  ref={pieChartContainer} width="400" height="300"></canvas>
      </div>
    </div>

    <div className="appointment-bar-chart">
      <h2>Appointments By Month (2023)</h2>
      <canvas ref={barChartContainer} width="400" height="300"></canvas>
    </div>
  </div>
  );
}

export default HomeAdmin;
