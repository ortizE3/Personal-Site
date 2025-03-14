import Header from './Components/Header/Header'
import { Route, Routes } from 'react-router'
import Home from './Pages/Home/Home'
import Resume from './Pages/Resume/Resume'

import './App.css'
import Footer from './Components/Footer/Footer'
import { useEffect, useState } from 'react'
function App() {
  const base = '/ethan-ortiz/'
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      let windowWidth = window.innerWidth;
      if (windowWidth < 1350) {
        windowWidth -= 100;
      }
      setWidth(Math.min(windowWidth, 1350));

    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div className='container'>
      <Header />
      <div className='app-container' style={{
        maxWidth: width
      }}>
        <Routes>
          <Route path={base} element={<Home />} />
          <Route path={base + 'resume'} element={<Resume />} />
        </Routes>

      </div>
      <Footer />
    </div>

  )
}

export default App
