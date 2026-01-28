import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import OrganizationalExperiences from './components/OrganizationalExperiences.jsx'
import Skills from './components/Skills.jsx'
import Project from './components/Project.jsx'
import Academic from './components/Academic.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='cursor-default'>
      <Header />
      <About />
      <Academic/>
      <OrganizationalExperiences/>
      <Skills/>
      <Project/>
      <Footer/>
    </div>

  </StrictMode>,
)
