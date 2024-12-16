import { fetchData } from "./accessAPI";
import { view } from "../view/view";

export const controller = (function () {

    
    const weather = async () =>{
        const returnWeather = await fetchData.getWeatherByLocation("Köln");
        return returnWeather;
    }
    
    const handler = (city) =>{
        const cityWeather =  fetchData.getWeatherByLocation(city);
        cityWeather.then(view.displayData)
    }
    
    view.init(handler);
    return {weather};

})()