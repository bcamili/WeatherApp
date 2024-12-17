export const model = (function () {

    const createWeather = (data) =>{
        console.log(data);
        const weather = {
            city: data.resolvedAddress,
            tempCurrentF : data.currentConditions.temp,
            tempCurrentC: ((data.currentConditions.temp - 32)*5/9).toFixed(1),
            conditions: data.currentConditions.conditions,
        }

        return weather;
    }

    return {createWeather};
})()