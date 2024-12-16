export const fetchData = (function(){

    const apiKey = "UTEL5KUEDYG6TZNC58TN9F7AL";
    const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

    const getWeatherByLocation = async (location) =>{
        const url = apiURL + location + "?key=" + apiKey;

        const response =  await fetch(url, {mode: 'cors'});
        const weatherData = await response.json();
        
        return weatherData;
    }

    return {getWeatherByLocation};
})();