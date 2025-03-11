import Header from './Components/Header/Header'
import { Route, Routes } from 'react-router'
import Home from './Pages/Home/Home'
import Resume from './Pages/Resume/Resume'

import './App.css'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <div className='container'>
      <Header />
      <div className='app-container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>

      </div>
      <Footer />
    </div>

  )
}

export default App
