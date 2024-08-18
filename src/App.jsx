import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";
import Menu from "./components/menu";
import Error from "./components/Error";
import Project from "./components/Project";
import { Routes,Route } from "react-router-dom";
function App(){

  return(  
    <>
        <Menu/>
        <Routes>      
          <Route path="/" element={<Home/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="/Project" element={<Project/>}></Route>
          <Route path="*" element={<Error/>}></Route>
        </Routes>
      
    </>    
  )
}

export default App;