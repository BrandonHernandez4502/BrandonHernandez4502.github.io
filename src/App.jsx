import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Interests from './components/Interests'
import FuturePlans from './components/FuturePlans'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Interests />
        <FuturePlans />
      </main>
      <Footer />
    </>
  )
}
