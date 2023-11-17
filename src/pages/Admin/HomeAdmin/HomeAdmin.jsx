import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js

import './HomeAdmin.css';

const userStatsData = {
  totalUsers: 130,
  users: 80,
  doctors: 50,
};
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
  

const groupAppointmentsByMonth = () => {
  const appointmentsByMonth = {};

  const allMonths = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  appointmentData.forEach(appointment => {
    const year = new Date(appointment.date).getFullYear();
    const month = new Date(appointment.date).toLocaleString('en-US', { month: 'long' });

    if (year === 2023) { // Considering appointments only for the year 2023
      const key = `${year}-${month}`;

      if (!appointmentsByMonth[key]) {
        appointmentsByMonth[key] = 0;
      }
      appointmentsByMonth[key]++;
    }
  });

  // Fill missing months with zero appointments
  allMonths.forEach(month => {
    const key = `2023-${month}`;
    if (!appointmentsByMonth[key]) {
      appointmentsByMonth[key] = 0;
    }
  });

  return appointmentsByMonth;
};

const HomeAdmin = () => {
  const pieChartContainer = useRef(null);
  const barChartContainer = useRef(null);
  const pieChartInstance = useRef(null);
  const barChartInstance = useRef(null);

  useEffect(() => {
    // Pie Chart
    if (pieChartContainer && pieChartContainer.current) {
      if (pieChartInstance.current) {
        pieChartInstance.current.destroy(); // Destroy the existing chart instance
      }

      const ctx = pieChartContainer.current.getContext('2d');

      pieChartInstance.current = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Total Subscribers', 'Users', 'Doctors'],
          datasets: [{
            label: 'User Stats',
            data: [userStatsData.totalUsers, userStatsData.users, userStatsData.doctors],
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

    // Bar Chart
    if (barChartContainer && barChartContainer.current) {
      if (barChartInstance.current) {
        barChartInstance.current.destroy(); // Destroy the existing chart instance
      }

      const ctx = barChartContainer.current.getContext('2d');
      const appointmentsByMonth = groupAppointmentsByMonth();

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
                text: 'Number of Appointments',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Months',
              },
            },
          },
        },
      });
    }

    return () => {
      if (pieChartInstance.current) {
        pieChartInstance.current.destroy(); // Cleanup pie chart on component unmount
      }
      if (barChartInstance.current) {
        barChartInstance.current.destroy(); // Cleanup bar chart on component unmount
      }
    };
  }, []);

  return (
    <div className="home-admin">
      <h1>Welcome to Admin Dashboard</h1>

      <div className="chart-container">
        <div className="chart-item stats">
          <h2>User Statistics</h2>
          <p>Total Subscribers in website: {userStatsData.totalUsers}</p>
          <p>Users: {userStatsData.users}</p>
          <p>Doctors: {userStatsData.doctors}</p>
        </div>

        <div className="chart-item graph">
          <h2>User Stats Pie Chart</h2>
          <canvas ref={pieChartContainer} width="400" height="300"></canvas>
        </div>
      </div>

      <div className="appointment-bar-chart">
        <h2>Appointments By Month (Bar Chart for 2023)</h2>
        <canvas ref={barChartContainer} width="400" height="300"></canvas>
      </div>
    </div>
  );
}

export default HomeAdmin;
