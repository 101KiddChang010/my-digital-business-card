import React from 'react'
import './App.css'
import Photo from './Photo'
import Description from './Description'
import Contact from './Contact'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
        <div className="card">
          <div className="card-inner">
            <Photo />
            <Description />
            <Contact />
          </div>
        </div>
        <footer>
          <Footer />
        </footer>
    </div>
  )
}

export default App
