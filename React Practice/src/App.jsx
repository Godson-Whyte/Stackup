import './App.css'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Welcome from './components/Welcome'

function App() {
  // const [count, setCount] = useState()
  let name = 'Wale'

  return (
    <>
      <Navbar />
      <Body />

      {/* <h3>Hello {name}</h3> */}
      <Footer />
      {/* <Welcome /> */}
    </>
  )
}

export default App
