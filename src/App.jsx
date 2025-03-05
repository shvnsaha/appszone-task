import About from "./component/About"
import Banner from "./component/Banner"
import Experience from "./component/Experience"
import Footer from "./component/Footer"
import Navbar from "./component/Navbar"
import Project from "./component/Project"
import Skill from "./component/Skill"



function App() {


  return (
    <>
      <div className="min-h-screen bg-[#11071F] text-white font-family">
        <div className="w-full">
          <Navbar />
          <main className="max-w-5xl mx-auto">
            <Banner />
            <About />
            <Experience />
            <Skill />
            <Project />
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
