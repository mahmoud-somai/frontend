import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './Notification.css';


const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [filteredNotifications, setFilteredNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('http://34.196.153.174:4000/api/Notif');
        if (response.status === 200) {
          setNotifications(response.data);
          setFilteredNotifications(response.data); // Set initial filtered notifications to all notifications
        } else {
          console.error('Error fetching notifications:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  const showNotifications = (status) => {
    const filtered = notifications.filter((notification) => notification.Status === status);
    setFilteredNotifications(filtered);
  };

  const markAllAsRead = async () => {
    try {
      const response = await axios.patch('http://34.196.153.174:4000/api/Notif');
      if (response.status === 200) {
        const updatedNotifications = notifications.map((notification) => {
          return { ...notification, Status: true };
        });
        setNotifications(updatedNotifications);
        setFilteredNotifications(updatedNotifications);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "approved",
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        console.error('Error marking all as read:', response.statusText);
      }
    } catch (error) {
      console.error('Error marking all as read:', error);
    }
  };

  return (
    <div className="notification-container">
    <div className="notification-buttons">
    <button onClick={() => showNotifications(true)}>Seen</button>&nbsp;&nbsp;
        <button onClick={() => showNotifications(false)}>Unseen</button>
    </div>
    <table className="notification-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Message</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
          {filteredNotifications.length > 0 &&
            filteredNotifications.map((notification) => (
              <tr key={notification._id}>
                <td>{notification._id.slice(-10)}</td>
                <td>{notification.message}</td>
                <td>{notification.Status ? 'Seen' : 'Unseen'}</td>
              </tr>
            ))}
        </tbody>
    </table>
    <div className="mark-all">
      <button onClick={markAllAsRead}>Mark All as Read</button>
    </div>
  </div>
  )
}

export default Notification