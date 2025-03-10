import Header from './Components/Header/Header'
import { Route, Routes } from 'react-router'
import Home from './Pages/Home/Home'
import Resume from './Pages/Resume/Resume'

import './App.css'

function App() {

  return (
    <div>
      <Header />
      <div className='app-container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>

      </div>

    </div>

  )
}

export default App
