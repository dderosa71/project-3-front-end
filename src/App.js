import './App.css';
import Places from "./Places.js"
import Attractions from "./Attractions.js"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useEffect, useState } from 'react';
import { ClimbingBoxLoader } from 'react-spinners';

function App() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      fetch('http://localhost:9292/locations')
      .then(resp => resp.json())
      .then(json => {
        setPlaces(json)
        setLoading(false)
      })
  },[]
  )

  const switchJSX = (  <Switch>

    <Route exact path="/location/:id/attractions/">
      <Attractions places={places}/>
    </Route>
  
    <Route path="/">
      <Places places={places} setPlaces={setPlaces}/>
    </Route>
  
  
  </Switch>
  )

  return(
 <>
 <BrowserRouter>
  
    {loading ? <ClimbingBoxLoader/> : switchJSX}

 </BrowserRouter>
 </>
  );
}

export default App;
