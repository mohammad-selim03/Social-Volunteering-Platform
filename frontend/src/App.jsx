
import { Link } from 'react-router-dom'
import './App.css'
import EventCreation from './components/events/EventCreation'
import EventListing from './components/events/EventListing'

function App() {

  return (
    <>
      <div>
        <Link to={"/auth/login"}> <button>login</button></Link>
        <Link to={"/auth/register"}>
          <button>register</button>
        </Link>
      </div>
      <EventCreation />
      <EventListing />
    </>
  )
}

export default App
