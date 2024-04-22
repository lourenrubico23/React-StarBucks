import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/pages/home/home"
import Menu from "./components/pages/menu/Menu"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/services" element={<h2>Services</h2>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
