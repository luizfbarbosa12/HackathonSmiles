import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom"
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
import MissionComplete from './pages/MissionComplete'
import YourTravels from './pages/YourTravels'
import HotelSuggestions from './pages/HotelSuggestions'
import CompleteMissionsTwo from './pages/CompleteMissionsTwo'
import AchievementUnlocked from './pages/AchievementUnlocked'
import RewardsList from './pages/RewardsList'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/accommodation-reservation">
          <AccommodationReservation />
        </Route>
        <Route exact path="/choices">
          <Choices />
        </Route>
        <Route exact path="/remember">
          <Remember />
        </Route>
        <Route exact path="/complete-missions">
          <CompleteMissions />
        </Route>
        <Route exact path="/what-kind-of-pension">
          <WhatKindOfPension />
        </Route>
        <Route exact path="/which-accomodation">
          <WhichAccomodation />
        </Route>
        <Route exact path="/you-will-travel">
          <YouWillTravel />
        </Route>
        <Route exact path="/you-use-miles">
          <YouUseMiles />
        </Route>
        <Route exact path="/max-value">
          <MaxValue />
        </Route>
        <Route exact path="/loading">
          <Loading />
        </Route>
        <Route exact path="/achievement-unlocked">
          <AchievementUnlocked />
        </Route>
        <Route exact path="/hotel-suggestions">
          <HotelSuggestions />
        </Route>
        <Route exact path="/complete-missions-two">
          <CompleteMissionsTwo />
        </Route>
        <Route exact path="/mission-complete">
          <MissionComplete />
        </Route>
        <Route exact path="/rewards-list">
          <RewardsList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
