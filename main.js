const loadDatabase = (localStorageKey) => {
    //Get the string version
    const databaseString = localStorage.getItem(localStorageKey);
    //Use JSON.parse to convert it back into object
    return JSON.parse(databaseString);
    }
    
    let inventoryDatabase = loadDatabase("HomeInventory");
    let articleSelector = document.querySelector("#mystuff");
    let inventoryFragment = document.createDocumentFragment();
        // for(let i in inventoryDatabase){
        //     const mainSections = inventoryDatabase[i];
            const populateDom = (data) => {
                const mainSections = inventoryDatabase[data];
            
            mainSections.forEach(item => {
                let sectionCreator = document.createElement("section");
                for(let j in item){
                    let paragraphCreator = document.createElement("p");
                    paragraphCreator.textContent = `${j}: ${item[j]}`;
                    sectionCreator.appendChild(paragraphCreator);
                }
                inventoryFragment.appendChild(sectionCreator);
            });
        }
        //}
    populateDom("furniture");
        articleSelector.appendChild(inventoryFragment);
    