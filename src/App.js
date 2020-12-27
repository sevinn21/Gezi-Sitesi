import Citys from "./components/City/Citys";
import { Route, Switch,BrowserRouter } from 'react-router-dom';
import CityPlaces from "./components/CityPlaces/CityPlaces";
import CityPlacesDetail from "./components/CityPlaces/CityPlacesDetail";
import HomePage from "./components/HomePage/HomePage";
import Contact from "./components/Contact/Contact";

function App() {
  return ( 
    <>
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage}/>
      <Route path="/citys" exact component={Citys}/>
      <Route path="/city/:cityName"  component={CityPlaces} />
      <Route path="/place/:placeName" component={CityPlacesDetail} />
      <Route path="/contact" component={Contact} />
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
