import './App.css'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom'

function App() {

  return (
    <Router>
    <Header/> 
      <Routes>
        <Route path='/'  element={<Home/>}/>
      </Routes>
    <Footer/>

    </Router>
  )
}

export default App
