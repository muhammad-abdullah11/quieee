import './App.css'
import Home from './Components/Home'
import Quiz from './Components/Quiz'
import QuizComponent from "./Components/QuizComponent"
import Blogs from './Components/Blogs'
import Blog from './Components/Blog'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom'

function App() {

  return (
    <Router>
    <Header/> 
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/quiz'  element={<Quiz/>}/>
        <Route path='/quiz/play'  element={<QuizComponent/>}/>
        <Route path='/blogs'  element={<Blogs/>}/>
        <Route path='/blog/:id'  element={<Blog/>}/>
      </Routes>
    <Footer/>

    </Router>
  )
}

export default App
