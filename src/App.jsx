import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/footer/footer'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import RecentPost from './components/RecentPost/RecentPost'
import Membership from './components/Membership/Membership'

function App() {
 

  return (
    <>
     < Navbar/>
     < div>
     <Routes>
      <Route path="/" element={<> <HomePage />< Footer /></>} />
      <Route path= "/recentpost" element={<RecentPost/>} />
      <Route path="/membership" element={<Membership/>}/>
      </Routes>
      </div>
     {/* < Footer/>  */}
    
    </>
  )
}

export default App
