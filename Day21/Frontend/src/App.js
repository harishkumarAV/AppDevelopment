import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Component/Asserts/Login/Login';
import SignUp from './Component/Asserts/SignUp/SignUp';
import Home from './Component/Asserts/Home/Home';
import Contact from './Component/Asserts/Contact/Contact';
import Footer from './Component/Asserts/Footer/Footer';
import About from './Component/Asserts/About/About';
import Works from './Component/Asserts/Works/Works';
import Testimonial from './Component/Asserts/Testimonial/Testimonial';
import Description from './Component/Asserts/Description/Description';
import Faqs from './Component/Asserts/Faqs/Faqs';
import Search from './Component/Asserts/Search/Search';
import Resume from './Component/Asserts/Resume/Resume';
import Manage from './Component/Asserts/Manage/Manage';
import Profile from './Component/Asserts/Profile/Profile';
import TermsandConditions from './Component/Asserts/TermsandConditions/TermsandConditions';
import Privacy from './Component/Asserts/Privacy/Privacy';
import AdminLogin from './Component/Asserts/AdminLogin/AdminLogin';
import AdminSignUp from './Component/Asserts/AdminSignUp/AdminSignUp';
import SearchJobPage from './Component/Asserts/SearchJobPage/SearchJobPage';
import AdminJobPostingPage from './Component/Asserts/AdminJobPostingPage/AdminJobPostingPage';
import JobForm from './Component/Asserts/JobForm/JobForm';
import Success from './Component/Asserts/Success/Success';
import ResumeMaker from './Component/Asserts/ResumeMaker/ResumeMaker';
import ButtonAppBar from './Component/Asserts/NavBar/NavBar';
import PageNotAvailable from './Component/Asserts/PageNotAvailable/PageNotAvailable';
import AdminDashboard from './Component/Asserts/AdminDashboard/AdminDashboard';
import './App.css';
import { Feedback } from '@mui/icons-material';
import Dashboard from './Component/Asserts/Dashboard/Dashboard';
import AddJobForm from './Component/Asserts/SearchJobPage/AddJobForm';
import RecruiterTools from './Component/Asserts/RecruiterTools/RecruiterTools';
import TrackApplication from './Component/Asserts/TrackApplication/TrackApplication';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <ButtonAppBar/>
    <Routes>
    <Route exact path='/' element={<Login/>}/>
    <Route path='/SignUp' element={<SignUp/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/Contact' element={<Contact/>}></Route>
    <Route path='/Footer' element={<Footer/>}></Route>
    <Route path='/Works' element={<Works/>}></Route>
    <Route path='/Testimonial' element={<Testimonial/>}></Route>
    <Route path='/Description' element={<Description/>}></Route>
    <Route path='/Faqs' element={<Faqs/>}></Route>
    <Route path='/Search' element={<Search/>}></Route>
    <Route path='/Resume' element={<Resume/>}></Route>
    <Route path='/Manage' element={<Manage/>}></Route>
    <Route path='/Profile' element={<Profile/>}></Route>
    <Route path='/TermsandConditions' element={<TermsandConditions/>}></Route>
    <Route path='/Privacy' element={<Privacy/>}></Route>
    <Route path='/AdminLogin' element={<AdminLogin/>}></Route>
    <Route path='/AdminSignUp' element={<AdminSignUp/>}></Route>
    <Route path='/SearchJobPage' element={<SearchJobPage/>}></Route>
    <Route path='/AdminJobPostingPage' element={<AdminJobPostingPage/>}></Route>
    <Route path='/JobForm' element={<JobForm/>}></Route>
    <Route path='/Success' element={<Success/>}></Route>
    <Route path='/ResumeMaker' element={<ResumeMaker/>}></Route>
    <Route path='/PageNotAvailable' element={<PageNotAvailable/>}></Route>
    <Route path='/AdminDashboard' element={<AdminDashboard/>}></Route>
    <Route path='/Feedback' element={<Feedback/>}></Route>
    <Route path='/Dashboard' element={<Dashboard/>}></Route>
    <Route path='/AddJobForm' element={<AddJobForm/>}></Route>
    <Route path='/TrackApplication' element={<TrackApplication/>}></Route>
    <Route path='/RecruiterTools' element={<RecruiterTools/>}></Route>

  
    </Routes>
    <Footer/>
    </BrowserRouter> 

    </div>
  );
}

export default App;
