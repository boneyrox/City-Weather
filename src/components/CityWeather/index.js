import React from 'react'

const CityWeather = ({temp})=> {
    
    // let cityName = cityWeather['name'];
    // console.log(cityName);
    // let tempValue = cityWeather['main']['temp'];
    // console.log(tempValue);
    // let description = cityWeather['weather'][0]['description']
    return (
        <div>
            <h1>{temp}</h1>
            {/* <p>{tempValue}</p> */}
            {/* <p>{description}</p> */}
        </div>
    )
}

export default CityWeather;