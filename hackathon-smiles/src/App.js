import "./App.css";
import AccommodationReservation from "./pages/AccommodationReservation"
import CompleteMissions from "./pages/CompleteMissions"
import Home from "./pages/Home/home"
import Choices from './pages/Choices'
import Remember from "./pages/Remember";
import YouWillTravel from "./pages/YouWillTravel";
import WhichAccomodation from './pages/WhichAccomodation'
import WhatKindOfPension from './pages/WhatKindOfPension'
import MaxValue from './pages/MaxValue'
import YouUseMiles from './pages/YouUseMiles'
import Loading from "./pages/LoadingPage";


function App() {
  return (
    <div className="App">
     {/* <Home/> */}
     {/* <AccommodationReservation/> */}
     {/* <Choices/> */}
     {/* <Remember/> */}
     {/* <CompleteMissions/> */}
     {/* <WhatKindOfPension/> */}
     {/* <Remember/>
    //  <CompleteMissions/> */}
    {/* <WhichAccomodation/> */}
     {/* <YouWillTravel/> */}
     {/* <Remember/>
    //  <CompleteMissions/> */}
    {/* <WhichAccomodation/> */}
    <YouUseMiles/>
    {/* <MaxValue/> */}
    <Loading/>
    </div>
  );
}

export default App;
