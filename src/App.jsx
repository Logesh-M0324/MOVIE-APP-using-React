import "./css/App.css"
import FavouritePage from "./pages/favourtie"
import Home from "./pages/home"
import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import { MovieProvider } from "./contexts/MovieContext"

function App() {

  return (
    <div>
      <MovieProvider>
        <Navbar />
        <main className="main-content"> 
          <Routes>
            <Route path="/" element={<Home/ >}></Route>
            <Route path="/favourite" element={<FavouritePage/ >}></Route>
          </Routes>
        </main>
      </MovieProvider>
    </div>
  )
}

export default App
