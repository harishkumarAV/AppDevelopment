import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Component/Asserts/Login/Login';
import SignUp from './Component/Asserts/SignUp/SignUp';
import Home from './Component/Asserts/Home/Home';
import NavBar from './Component/Asserts/NavBar/NavBar';
import Contact from './Component/Asserts/Contact/Contact';
import Footer from './Component/Asserts/Footer/Footer';
import Sidebar from './Component/Asserts/Sidebar/Sidebar';
import About from './Component/Asserts/About/About';
import Works from './Component/Asserts/Works/Works';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Login/>}/>
    <Route path='/SignUp' element={<SignUp/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/NavBar' element={<NavBar/>}></Route>
    <Route path='/Contact' element={<Contact/>}></Route>
    <Route path='/Footer' element={<Footer/>}></Route>
    <Route path='/Sidebar' element={<Sidebar/>}></Route>
    <Route path='/Works' element={<Works/>}></Route>
    </Routes>
    </BrowserRouter> 

    </div>
  );
}

export default App;
