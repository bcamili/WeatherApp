import "../assets/resources/style/styles.css";

export const view = (function (){
    const appDiv = document.getElementById("app");

    const init = (handler) =>{
        const searchbar  = document.createElement("input");
        searchbar.type = "text";
        appDiv.appendChild(searchbar);
    
        const searchButton = document.createElement("button");
        searchButton.textContent = "Search";
        searchButton.addEventListener("click", () =>{
            handler(searchbar.value);
        });
        appDiv.appendChild(searchButton);
    }


    const displayData = (data) =>{
        const cityDiv = document.createElement("div");
        const tempDiv = document.createElement("div");

        cityDiv.textContent = data.address;
        tempDiv.textContent = data.currentConditions.temp;

        appDiv.appendChild(cityDiv);
        appDiv.appendChild(tempDiv);
    }

    return {init, displayData};
})();
