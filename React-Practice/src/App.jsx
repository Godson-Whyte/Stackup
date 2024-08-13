import './App.css'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Welcome from './components/Welcome'
import Gomy from './components/Gomy/Gomy'
import Api from './components/Body/Api'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Shop from './components/Shop/Shop'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Private from './components/Private/Private'

function App() {
  // const [count, setCount] = useState()
  // let name = 'Wale'

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/private' element={<Private />}>
            <Route path='/private/shop' element={<Shop />}/>
            <Route path='/private/about' element={<About />}/>
        </Route>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Footer />

      {/* <Body /> */}
      {/* <Gomy/> */}
      {/* <h3>Hello {name}</h3> */}
      {/* <Api/> */}
      {/* <Welcome /> */}
    </>
  )
}

export default App
