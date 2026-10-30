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
      <Header />
      
      {/* Contenedor de Bootstrap para centrar y dar márgenes al contenido principal */}
      <main className="container my-4">
        <Introduction />
        <SkillsSection />
        <ProjectsSection />
        <RecommendationsSection />
      </main>

      <Footer />
    </>
  )
}

export default App
