import "./App.css";
import AccommodationReservation from "./pages/AccommodationReservation"
import CompleteMissions from "./pages/CompleteMissions"
import Home from "./pages/Home/home"
import Choices from './pages/Choices'
import Remember from "./pages/Remember";


function App() {
  return (
    <div className="App">
     {/* <Home/> */}
     {/* <AccommodationReservation/> */}
     {/* <Choices/> */}
     <Remember/>
     <CompleteMissions/>
    </div>
  );
}

export default App;
