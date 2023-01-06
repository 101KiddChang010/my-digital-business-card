import React from 'react'
import './App.css'
import Photo from './Photo'
import Description from './Description'
import Contact from './Contact'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
        <div className="Card">
          <Photo />
          <Description />
          <Contact />
        </div>
        <footer>
          <Footer />
        </footer>
    </div>
  )
}

export default App
