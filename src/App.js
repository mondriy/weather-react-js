import './App.css';
import {useEffect, useState} from 'react'
import City from './components/City';
import Description from './components/Description';
import Humidity from './components/Humidity';
import WeatherObj from './components/WeatherObj';
import Windy from './components/Windy';
  
function App() {

  const API_KEY = "6b87379c23db094c99643d579279e645";
  const CITY_ID = 4171563;

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState({});

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${CITY_ID}&appid=${API_KEY}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    
  } else if (!isLoaded) {
    
  } else {

  }

  return (
    <div className="App">

      <div className="bg-info">

        <div className="info">
          <City name={items.name}></City>
          <Description text={items && items.weather && items.weather[0].main}></Description>
          <div className="status">
            <Humidity value={items && items.main && items.main.humidity}></Humidity>
            <Windy value={items && items.wind && items.wind.speed}></Windy>
          </div>
        </div>

      </div>
      
      <WeatherObj value={items && items.main && Math.trunc(items.main.temp - 273)}></WeatherObj>
      
    </div>
  );
}

export default App;
