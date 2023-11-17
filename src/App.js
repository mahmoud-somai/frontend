import './App.css';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Background from './components/Background/Background';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Booking from './pages/Booking/Booking';
import BookDoc from './pages/Booking/BookNow/BookDoc';
import Appointment from './pages/User/Appointments/Appointment';
import Notification from './pages/User/Notifs/Notification';
import AppointmentList from './pages/Doctor/AppointmentsList/AppointmentList';
import NotifsList from './pages/Doctor/NotifsList/NotifsList';
import HomeAdmin from './pages/Admin/HomeAdmin/HomeAdmin';
import Doctors from './pages/Admin/Doctors/Doctors';
import DoctorsList from './pages/Admin/DoctorsList/DoctorsList';
import UsersList from './pages/Admin/UsersList/UsersList';
import Users from './pages/Admin/Users/Users';
import Settings from './pages/Doctor/Settings/Settings';
import ProfileUser from './pages/User/Profile/ProfileUser';
function App() {
  return (
    <>
      <Navbar/>
      <Background/>
      <BrowserRouter>
      <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/booking" element={<Booking/>}/>
      <Route path="/doctor" element={<BookDoc/>}/>
      <Route path="/appoitment" element={<Appointment/>}/>
      <Route path="/notifications" element={<Notification/>}/>
      <Route path="/appoitmentList" element={<AppointmentList/>}/>
      <Route path="/notifsList" element={<NotifsList/>}/>
      <Route path="/admin" element={<HomeAdmin/>}/>
      <Route path="/admin/doctor" element={<Doctors/>}/>
      <Route path="/admin/doctorsList" element={<DoctorsList/>}/>
      <Route path="/admin/usersList" element={<UsersList/>}/>
      <Route path="/admin/user" element={<Users/>}/>
      <Route path="/doctor/settings" element={<Settings/>}/>
      <Route path="/doctor/profile" element={<ProfileUser/>}/>
      <Route path="/user/profile" element={<ProfileUser/>}/>
      
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
