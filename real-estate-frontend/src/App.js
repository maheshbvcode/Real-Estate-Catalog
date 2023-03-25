import './App.css';
import SignIn from './pages/SignIn';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignUp from './pages/SignUp';
import SideBar from './components/SideBar';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BasicInfo from './components/BasicInfo';
import Banner from './components/Banner';
import PropDetails from './components/PropDetails';
import GeneralInfo from './components/GeneralInfo';
import LocationInfo from './components/LocationInfo';
function App() {
  return (
 <div className='app'>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<SignIn/>}></Route>
       
       
        <Route path='/signup' element={<SignUp/>}></Route>
       
       
        <Route path='/home' element={<><SideBar/><Navbar/><Home/></>}></Route>
       
        <Route path='/properties' element={<><SideBar/><Navbar/><Banner/><PropDetails/></>}></Route>
        <Route path='/basicinfo' element={<><SideBar/><Navbar/><Banner/><BasicInfo/></>}></Route>
        {/* <Route path='/propertydetail' element={<><SideBar/><Navbar/><Banner/><PropertyDetail/></>}></Route> */}
        <Route path='/general' element={<><SideBar/><Navbar/><Banner/><GeneralInfo/></>}></Route>
        <Route path='/location' element={<><SideBar/><Navbar/><Banner/><LocationInfo/></>}></Route>
       </Routes>
       </BrowserRouter>   
 </div>
  );
}

export default App;
