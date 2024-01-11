import {Navbar} from "./components/Navbar";
import {Hero} from "./sections/Hero";
import { Projects } from './sections/Projects';
import { AboutMe } from './sections/AboutMe';
import { ContactMe } from './sections/ContactMe';
import { Footer } from './components/Footer';


function App() {
  return (
    <>
    <section >
      <Navbar/>
    </section>
    <section id="home" className='sm:px-10 px-8  py-5 bg-pink-100'>
      <Hero/>
    </section>
    <section id='projects' className='sm:px-10 px-8  py-5 bg-pink-100'>
    <Projects/>
    </section>
    <section id='about-me' className='sm:px-10 px-8  py-5 bg-pink-100'>
      <AboutMe/>
    </section>
    <section id='contact-me' className='sm:px-10 px-8  py-5 bg-pink-100'>
      <ContactMe/>
    </section>
    <section>
      <Footer/>
    </section>
      
      
    </>
  )
}

export default App
