import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Introduction from './components/Introduction'
import SkillsSection from './components/SkillSection'
import ProjectsSection from './components/ProjectsSection'
import RecommendationsSection from './components/RecommendationSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header/>
      <Introduction/>
      <SkillsSection/>
      <ProjectsSection/>
      <RecommendationsSection/>
      <Footer/>
    </>
  )
}

export default App
