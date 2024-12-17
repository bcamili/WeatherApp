import { accessAPI } from "./accessAPI";
import { view } from "../view/view";
import { model } from "../model/model";

export const controller = (function () {

    const init = async () => {
        const weatherData =  await accessAPI.getWeatherByLocation("Köln");
        const weather = model.createWeather(weatherData);
        view.displayData(weather);    }
    
    const handler = async (city) =>{
        const weatherData =  await accessAPI.getWeatherByLocation(city);
        const weather = model.createWeather(weatherData);
        view.displayData(weather);
    }
    
    view.init(handler);

    return {init};
})()