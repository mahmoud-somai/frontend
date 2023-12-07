import './App.css';
import { BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
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
import ProfileDoctor from './pages/Doctor/ProfilDoctor/ProfileDoctor';
import LoginDoc from './pages/Login/LoginDoc';
import RequestList from './pages/Doctor/RequestList/RequestList';
import UpdateDoc from './pages/Admin/DoctorsList/UpdateDoc';
import UpdateUser from './pages/Admin/UsersList/UpdateUser';
import Home from './pages/Home/Home';
function App() {
  return (
    <>
   
      <Navbar/>
      <Background/>
      <BrowserRouter>
      <Routes>

      <Route path="/" element={<Navigate replace to="/home"/>}/>
        <Route path="/home" element={<Home/>}/>


      <Route path="/login" element={<Login/>}/>
      <Route path="/doc" element={<LoginDoc/>}/>
      <Route path="/register" element={<Register/>}/>

      <Route path="/admin" element={<HomeAdmin/>}/>
      <Route path="/admin/newDoctor" element={<Doctors/>}/> 
      <Route path="/admin/doctorsList" element={<DoctorsList/>}/>
      <Route path="/admin/usersList" element={<UsersList/>}/>
      <Route path="/admin/newUser" element={<Users/>}/>
      <Route path="/admin/updatedoctor/:id" element={<UpdateDoc/>}/>
      <Route path="/admin/updateuser/:id" element={<UpdateUser/>}/>

      <Route path="/doctor/profile" element={<ProfileDoctor/>}/>
      <Route path="/doctor/settings" element={<Settings/>}/>
      <Route path="/doctor/appoitmentList" element={<AppointmentList/>}/>   
      <Route path="/doctor/notifsList" element={<NotifsList/>}/>
      <Route path="/doctor/Requests" element={<RequestList/>}/>


     


      <Route path="/user/profile" element={<ProfileUser/>}/>
      <Route path="/booking" element={<Booking/>}/>
      <Route path="/user/appoitment" element={<Appointment/>}/>
      <Route path="/booking/doctor/:id" element={<BookDoc/>}/>
      <Route path="/user/notifications" element={<Notification/>}/>

      
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
