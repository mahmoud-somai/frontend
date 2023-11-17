import React,{ useState } from 'react'

const NotifsList = () => {
    const [notifications, setNotifications] = useState([
        { id: 1, message: 'Notification 1', status: 'unseen' },
        { id: 2, message: 'Notification 2', status: 'unseen' },
        { id: 3, message: 'Notification 3', status: 'seen' },
        // Add more notifications as needed
      ]);
    
      const [filteredNotifications, setFilteredNotifications] = useState([]);
    
      const showNotifications = (status) => {
        const filtered = notifications.filter((notification) => notification.status === status);
        setFilteredNotifications(filtered);
      };
    
      const markAllAsRead = () => {
        const updatedNotifications = notifications.map((notification) => {
          return { ...notification, status: 'seen' };
        });
        setNotifications(updatedNotifications);
        setFilteredNotifications([]);
      };

  return (
    <div className="notification-container">
    <div className="notification-buttons">
      <button onClick={() => showNotifications('seen')}>Seen</button>
      <button onClick={() => showNotifications('unseen')}>Unseen</button>
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
        {filteredNotifications.length > 0
          ? filteredNotifications.map((notification) => (
              <tr key={notification.id}>
                <td>{notification.id}</td>
                <td>{notification.message}</td>
                <td>{notification.status}</td>
              </tr>
            ))
          : notifications.map((notification) => (
              <tr key={notification.id}>
                <td>{notification.id}</td>
                <td>{notification.message}</td>
                <td>{notification.status}</td>
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

export default NotifsList