import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Component/Asserts/Login/Login';
import SignUp from './Component/Asserts/SignUp/SignUp';
import Home from './Component/Asserts/Home/Home';
import Contact from './Component/Asserts/Contact/Contact';
import Footer from './Component/Asserts/Footer/Footer';
import Sidebar from './Component/Asserts/Sidebar/Sidebar';
import About from './Component/Asserts/About/About';
import Works from './Component/Asserts/Works/Works';
import Testimonial from './Component/Asserts/Testimonial/Testimonial';
import Description from './Component/Asserts/Description/Description';
import Faqs from './Component/Asserts/Faqs/Faqs';
import Search from './Component/Asserts/Search/Search';
import Resume from './Component/Asserts/Resume/Resume';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Login/>}/>
    <Route path='/SignUp' element={<SignUp/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/Contact' element={<Contact/>}></Route>
    <Route path='/Footer' element={<Footer/>}></Route>
    <Route path='/Sidebar' element={<Sidebar/>}></Route>
    <Route path='/Works' element={<Works/>}></Route>
    <Route path='/Testimonial' element={<Testimonial/>}></Route>
    <Route path='Description' element={<Description/>}></Route>
    <Route path='Faqs' element={<Faqs/>}></Route>
    <Route path='Search' element={<Search/>}></Route>
    <Route path='Resume' element={<Resume/>}></Route>
    
    </Routes>
    </BrowserRouter> 

    </div>
  );
}

export default App;
