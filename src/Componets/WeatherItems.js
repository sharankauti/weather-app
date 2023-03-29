import React from 'react'
import styles from '../Componets/WeatherItems.module.css'
function WeatherItems(props) {
 const readableTempreture = Math.round(props.tempreture - 273) + ' ' + 'celsius' ;
 const readableMaxTemp = Math.round(props.max_temp - 273) + ' ' + 'celsius' ;
 const readableMinTemp = Math.round(props.min_temp - 273) + ' ' + 'celsius' ;

  
let imgId = props.iconId;
console.log(imgId); 
let imageUrl = ''
if (imgId < 250) {
  imageUrl ='http://openweathermap.org/img/wn/11d@2x.png'
  
}
else if(imgId > 250 && imgId < 350){
  imageUrl ='http://openweathermap.org/img/wn/09d@2x.png'
  
}
else if(imgId > 350 && imgId < 550){
  imageUrl ='http://openweathermap.org/img/wn/10d@2x.png'
  
}
else if(imgId > 550 && imgId < 650){
  imageUrl ='http://openweathermap.org/img/wn/13d@2x.png'
  
}
else if(imgId > 650 && imgId < 750){
  imageUrl ='http://openweathermap.org/img/wn/50d@2x.png'
  
}
else if(imgId === 800){
  imageUrl ='http://openweathermap.org/img/wn/01d@2x.png'
  
}
else if(imgId > 800){
  imageUrl ='http://openweathermap.org/img/wn/02d@2x.png'
}




  return (
    <div className={styles.WeatherItemWrap}>
        <p><b>Cityname:</b> {props.Cityname}</p>
        <p><b>Tempreture:</b>{readableTempreture}</p>
        <p><b>Max-tempreture:</b>{readableMaxTemp}</p>
        <p><b>Min-tempreture:</b>{readableMinTemp}</p>
        <p><b>speed of wind:</b> {props.windSpeed}</p>
        <p><b>description:</b>{props.description}</p>
        <p><b>latitude: {props.latitude}</b><br/><b>longitude: {props.longitude}</b></p>
        {/* <p>iconId : {props.iconId}</p> */}
        <img alt='weatherIcon' src={imageUrl} width="100" height="100"></img>
    </div>
  )
}

export default WeatherItems