import React,{useState} from 'react'
import './App.css';
import CityInput from './components/CityInput';
import CityWeather from './components/CityWeather';
function App() {

  const [city, setCity] = useState("");
  const [cityWeather, setCityWeather] = useState(0);
  const fetchCityWeather = ()=>{
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1dc861629d885f6ae8deb02ee6214529`
    )
    .then((response)=>response.json())  
    .then((result)=>{
      setCityWeather(result.main.temp);
      console.log(result.main.temp);
    })
    .catch((error)=>{
      console.log("error is", error);
    })
    ;
  }
  // console.log(cityWeather);
  return (
    <>
      <CityInput city={city} setCity={setCity} fetchCityWeather={fetchCityWeather} />
      <CityWeather temp={cityWeather} /> 
    </>
  );
}

export default App;
