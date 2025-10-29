import Header from './components/Header'  
import Home from './pages/Home'
import Footer from './components/Footer'
import WatchPage from './pages/WatchPage';
import { Routes, Route } from "react-router-dom";
import './App.css'

const App = () => {
  return (
    <>
    <div className='bg-[#191B24] text-white'>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch" element={<WatchPage />} />
      </Routes>
      <Footer />
    </div>
    </>
  )
}
export default App
