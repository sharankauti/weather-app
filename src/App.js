
import styles from  '../src/App.module.css';
import React,{useRef,useState,useEffect, useCallback} from 'react'
import WeatherData from './Componets/WeatherData';
function App() {

  const enterValue = useRef();
  const [loadingWeather,setWeatherLoading] = useState(false)
  const [loadError,setLoadError] = useState(null)
  const [weatherData, setWeatherData] = useState([])

  const handleData = useCallback(async () => {
    const userEnterValue = enterValue.current.value;
    console.log(userEnterValue);
    setWeatherLoading(true)
    setLoadError(null)
    try {
      setLoadError(null)
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userEnterValue}&appid=8616eb848b2948dff89e2efd7c0818ed`)
      if (!response.ok) {
        throw new Error('SOMETHING WRONG IN API PLEASE ENTER VALID CITY')
      }
      const getData = await response.json();
      console.log(getData)
      setWeatherLoading(false)
      const dataObj = {
        Cityname:getData.name,
        tempreture: getData.main.feels_like,
        max_tempreture:getData.main.temp_max,
        min_tempreture:getData.main.temp_min,
        windSpeed: getData.wind.speed,
        discription:getData.weather[0]['description'],
        iconId:getData.weather[0]['id'],
        latitude:getData.coord.lat,
        longitude:getData.coord.lon
      }
      console.log( dataObj.latitude,dataObj.longitude);
      setWeatherData(dataObj)
      console.log(weatherData);
    } 
    
    catch (error) {
      setLoadError(error.message)
      setWeatherLoading(false)
    }
    
  },[weatherData])

  useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        handleData();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [handleData]);

  return (
    
    <>
      <div className={styles.Root}>
        <h4>Simple Weather-Application</h4>
        <div className={styles.searchBox}>
            <input type="text" ref={enterValue} className="search" placeholder="Enter here to search"></input>
            <button type="submit" onClick={handleData} className="BTN">submit</button>
        </div>

        {!loadingWeather && !loadError && !Object.keys(weatherData).length < 0 && <WeatherData wdata={weatherData}></WeatherData>}
        {!loadingWeather && !loadError && Object.keys(weatherData).length > 0 && <WeatherData wdata={weatherData}></WeatherData>}
        {!loadingWeather && !loadError && Object.keys(weatherData).length ===0 && <p style={{textAlign:'center',fontSize:'20px',color:'black',fontWeight:900,fontFamily:'cursive'}}>please enter city to view weather-info</p>} 
        {!loadingWeather && loadError && <p style={{textAlign:'center',fontSize:'20px',color:'black',fontWeight:900,fontFamily:'cursive'}}>{loadError}</p>}
        {loadingWeather && <p style={{color:'green',fontSize:'20px',fontStyle:'italic',fontWeight:900,fontFamily:'cursive',textAlign:'center'}}>Loading.....</p>}
      </div>
    </>
  
  )
}

export default App;
