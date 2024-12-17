import "../assets/resources/style/styles.css";

export const view = (function (){

    let currentData;

    const app = document.getElementById("app");
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
    const toggleFC = document.createElement("input");
    toggleFC.id = "toggleFC";
    toggleFC.type ="checkbox";
    toggleFCDiv.appendChild(toggleFC);
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

        if (inFahrenheit){
            tempData.textContent = currentData.tempCurrentF + "°F"
        }else{
            tempData.textContent = currentData.tempCurrentC + "°C"
        }
    }

    return {init, displayData};
})();
