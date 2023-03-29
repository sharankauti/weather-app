import React from 'react'
import styles from '../Componets/WeatherData.module.css'
import WeatherItems from './WeatherItems'
function WeatherData(props) {
  const rdata = props.wdata
  return (
    <div className={styles.WeatherDataBox}>
       
          <WeatherItems
            Cityname={rdata.Cityname}
            tempreture={rdata.tempreture}
            max_temp={rdata.max_tempreture}
            min_temp={rdata.min_tempreture}
            windSpeed={rdata.windSpeed}
            description={rdata.discription}
            iconId={rdata.iconId}
            latitude={rdata.latitude}
            longitude={rdata.longitude}
          />
     
        {/* <WeatherItems tempreture={props.tempreture} windSpeed={props.windSpeed} description={props.description}></WeatherItems> */}
    </div>
  )
}

export default WeatherData