import "./App.css";
import Home from "./pages/home"
import AccommodationReservation from "./pages/AccommodationReservation"
import Escolhas from './pages/Escolhas/escolhas'


function App() {
  return (
    <div className="App">
     <Home/>
     <AccommodationReservation/>
     <Escolhas/>
    </div>
  );
}

export default App;
