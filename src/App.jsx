import { useEffect } from 'react'
import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar'
import About from './components/About/About';
import SkillContainer from './components/Skiils/SkillContainer';
import ProjectContainer from './components/Projects/ProjectContainer';
import Footer from './components/Footer/Footer';
import BlogsContainer from './components/Blogs/BlogsContainer';
function App() {
  useEffect(()=>{
    window.onload=function load(){
      window.scrollTo(0,0);
      if(window.location.hash){
        history.replaceState(null,null,window.location.origin)
      }
    }
},[])
  return (
    <div className='transition-colors bg-background w-full h-full overflow-hidden'>
    <Navbar/>  
    <Home/>
    <About/>
    <SkillContainer/>
    <ProjectContainer/>
    <BlogsContainer/>
    <Footer/>
    </div>
  )
}

export default App
