import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Hello from './components/Home/Hello';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import ProjectDetails from './components/Projects/ProjectDetails';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';


function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/hello' element={<Hello></Hello>}></Route>
        <Route path='/resume' element={<Resume></Resume>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/projects/:projectId' element={<ProjectDetails></ProjectDetails>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
