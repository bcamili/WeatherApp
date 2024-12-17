import "../assets/resources/style/styles.css";

export const view = (function (){

    let currentData;

    const app = document.getElementById("app");

    const appTitle = document.createElement("div");
    appTitle.id = "appTitle";
    const spanA = document.createElement("span");
    spanA.id = "spanA";
    spanA.textContent = "The";
    const spanB = document.createElement("span");
    spanB.id = "spanB";
    spanB.textContent = "Weather";
    const spanC = document.createElement("span");
    spanC.id = "spanC";
    spanC.textContent = "by Benjamin Camili";
    appTitle.appendChild(spanA);
    appTitle.appendChild(spanB);
    appTitle.appendChild(spanC);
    app.appendChild(appTitle);

    const appContent = document.createElement("div");
    appContent.id = "appContent";
    app.appendChild(appContent);

    const searchbar = document.createElement("div");
    searchbar.id = "searchbar";

    const searchForm = document.createElement("form");
    searchForm.id = "searchForm";
    searchbar.appendChild(searchForm);

    const searchbarInput  = document.createElement("input");
    searchbarInput.id = "searchbarInput";
    searchbarInput.type = "text";
    searchbarInput.required = true;
    searchForm.appendChild(searchbarInput);
    
    const searchButton = document.createElement("button");
    searchButton.id = "searchButton";
    searchButton.type = "submit";
    searchButton.textContent = "Search";
    searchForm.appendChild(searchButton);
    appContent.appendChild(searchbar);

    const cityDiv = document.createElement("div");
    cityDiv.id = "cityDiv";
    appContent.appendChild(cityDiv);

    const tempDiv = document.createElement("div");
    tempDiv.id = "tempDiv";
    appContent.appendChild(tempDiv);

    const toggleFCDiv = document.createElement("div");
    toggleFCDiv.id = "toggleFCDiv";

    const degLabelC = document.createElement("span");
    degLabelC.className = "degLabel";
    degLabelC.textContent = "°C";
    toggleFCDiv.appendChild(degLabelC);

    const toggleSwitch = document.createElement("label");
    toggleSwitch.id = "toggleSwitch";
    toggleFCDiv.appendChild(toggleSwitch);

    const toggleFC = document.createElement("input");
    toggleFC.id = "toggleFC";
    toggleFC.type ="checkbox";
    toggleSwitch.appendChild(toggleFC);

    const toggleSpan = document.createElement("span");
    toggleSpan.id = "toggleSpan";
    toggleSwitch.appendChild(toggleSpan);

    const degLabelF = document.createElement("span");
    degLabelF.className = "degLabel";
    degLabelF.textContent = "°F";
    toggleFCDiv.appendChild(degLabelF);

    tempDiv.appendChild(toggleFCDiv);

    const tempData = document.createElement("div");
    tempData.id = "tempData";
    tempDiv.appendChild(tempData);

    const conditionsData = document.createElement("div");
    conditionsData.id = "conditionsData";
    tempDiv.appendChild(conditionsData);

    let inFahrenheit = false;

    const init = (handler) =>{

        searchForm.addEventListener("submit", (e) =>{
            e.preventDefault();
            handler(searchbarInput.value);
        });

        toggleFC.addEventListener("click", () =>{
            inFahrenheit = inFahrenheit == false ? true : false;
            updateView();
        });
    }


    const displayData = (data) =>{
        currentData = data;
        updateView();

    }

    const updateView = () =>{
        cityDiv.textContent = currentData.city;
        conditionsData.textContent = currentData.conditions;
        colorSwitch(currentData.conditions);
        if (inFahrenheit){
            tempData.textContent = currentData.tempCurrentF + "°F"
        }else{
            tempData.textContent = currentData.tempCurrentC + "°C"
        }
        
    }

    const colorSwitch = (condition) => {
        const colorSchemes = {
            default: {
                darkColor: "#5356FF",
                darkMidColor: "#378CE7",
                lightMidColor: "#67C6E3",
                lightColor: "#DFF5FF",
            },
            overcast: {
                darkColor: "#374048",
                darkMidColor: "#BCCCDC",
                lightMidColor: "#DAE7F6",
                lightColor: "#F8FAFC",
            },
            rain: {
                darkColor: "#27374D",
                darkMidColor: "#526D82",
                lightMidColor: "#9DB2BF",
                lightColor: "#DDE6ED",
            },
            clear: {
                darkColor: "#1d4e63",
                darkMidColor: "#B1F0F7",
                lightMidColor: "#FADA7A",
                lightColor: "#F5F0CD",
            }
        }

        const overcast = [
            "Partially cloudy", 
            "Overcast", 
            "Freezing Fog", 
            "Mist", 
            "Smoke Or Haze", 
            "Fog"
        ];

        const rain = [
            "Freezing Drizzle/Freezing Rain", 
            "Light Drizzle/Rain",
            "Heavy Drizzle/Rain", 
            "Light Drizzle",
            "Thunderstorm Without Precipitation",
            "Thunderstorm",
            "Heavy Drizzle",
            "Light Rain", 
            "Heavy Rain", 
            "Rain Showers", 
            "Heavy Freezing Drizzle/Freezing Rain",
            "Light Freezing Drizzle/Freezing Rain",
            "Heavy Freezing Rain",
            "Light Freezing Rain",
            "Drizzle",
            "Rain",
            "Rain, Partially cloudy",
            "Precipitation In Vicinity",
            "Heavy Rain And Snow",
            "Light Rain And Snow"
        ];

        const clear = [
            "Clear",
            "Sky Coverage Decreasing",
            "Sky Coverage Increasing"
        ];

        if(overcast.indexOf(condition)!== -1){
            condition = "overcast";
        } else if(rain.indexOf(condition)!== -1){
            condition = "rain";
        } else if(clear.indexOf(condition)!== -1){
            condition = "clear";
        } else {
            condition = "default";
        }



        const doc = document.getElementsByTagName("html")[0];

        doc.style.setProperty('--darkColor', colorSchemes[condition].darkColor)
        doc.style.setProperty('--darkMidColor', colorSchemes[condition].darkMidColor)
        doc.style.setProperty('--lightMidColor', colorSchemes[condition].lightMidColor)
        doc.style.setProperty('--lightColor', colorSchemes[condition].lightColor)
        

    }

    return {init, displayData};
})();
