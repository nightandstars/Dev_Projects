//fetches a list of dnd skills from open5e API
fetch("https://api.open5e.com/v2/skills")
.then(response=> response.json())
.then(result => addArticle(result))
.catch(() => showError());

//adds a new article
function addArticle(result, CATEGORY_SELECTED){
    let NEW_ARTICLE_CONTENT;
    
    //creates a new article for each skill
    if(CATEGORY_SELECTED === undefined){
        for(let element of result["results"]){
            const NEW_ARTICLE_SKILLS = document.createElement("article");
            const NEW_ARTICLE_CONTENT = `<h2 class="small_margin">${element["name"]}</h2><p>${element["desc"]}</p>`;
            NEW_ARTICLE_SKILLS.innerHTML = NEW_ARTICLE_CONTENT;
            document.querySelector("#api_articles").appendChild(NEW_ARTICLE_SKILLS);
        }
    }

    else {
        //creates a new article depending on the category
        const NEW_ARTICLE = document.createElement("article");
        //creates a delete button
        const DELETE_BTN = document.createElement("button");
        DELETE_BTN.textContent = "Delete Article";
        DELETE_BTN.classList.add("delete_btn");
        
        //gets a random element from result
        const RAND_ELEMENT = Math.floor(Math.random() * result["results"].length)
        const ELEMENT = result.results[RAND_ELEMENT];
        let attunement;
        //specific layout of the article for the magical items category
        if(CATEGORY_SELECTED == "v1/magicitems"){
            const rarity = ELEMENT.rarity.toLowerCase();
            if(ELEMENT.requires_attunement === ""){
                attunement = "No";
            }
            else{
                attunement = "Yes";  
            }
            NEW_ARTICLE_CONTENT = `<h2 class="small_margin">${ELEMENT["name"]}</h2><h3>${rarity}</h3><p>Requires attunement: ${attunement}</p><p>${ELEMENT["desc"]}</p>`;
            NEW_ARTICLE.innerHTML = NEW_ARTICLE_CONTENT;
            NEW_ARTICLE.appendChild(DELETE_BTN)
            //colors h3 depending of the rarity of the item
            const H3 = NEW_ARTICLE.querySelector("h3")
            switch(rarity){
                case "rare":
                H3.style.color = "#73b7eb";
                break;
                case "uncommon":
                H3.style.color =  "#7ed15a";
                break;
                case "very rare":
                H3.style.color =  "#208ef5";
                break;
                case "artifact":
                H3.style.color = "#ff00ff";
                break;
                case "legendary":
                H3.style.color = "#ffc745";
                break;
                case "common":
                H3.style.color =  "white";
                break;
            }
        }
        else{
            //basic layout for other categories
            NEW_ARTICLE_CONTENT = `<h2 class="small_margin">${ELEMENT["name"]}</h2><p>${ELEMENT["desc"]}</p>`;
            NEW_ARTICLE.innerHTML = NEW_ARTICLE_CONTENT;
            NEW_ARTICLE.appendChild(DELETE_BTN)
        }
        //deletes the article if the button is clicked
        DELETE_BTN.addEventListener("click", () => {
            DELETE_BTN.parentElement.remove()});
            
    const NEXT_ARTICLE = document.getElementById("user_articles").firstChild;    
    document.getElementById("user_articles").insertBefore(NEW_ARTICLE, NEXT_ARTICLE);
        }
    }

//API error handling
    function showError(){
        const ERROR = document.createElement("p");
        ERROR.innerHTML = "Something went wrong, try again";
        document.getElementById("dnd_articles").appendChild(ERROR);
    }
    
    //toggles menu dropdown depending on media querie
    document.getElementById("btn").addEventListener("click", TRIGGER_DROPDOWN);
    function TRIGGER_DROPDOWN(){
        let dropdownMenu = document.getElementById("btn_content")
        dropdownMenu.classList.toggle("hidden")
        dropdownMenu.classList.toggle("flex")
    }
    
    //adds an article depending on a selected category
    document.getElementById("submit_article").addEventListener("submit", fetchCategory);
    function fetchCategory(event){
        //prevents showing the json in the page
        event.preventDefault();
        const CATEGORY_SELECTED = document.getElementById("category").value;
        let categoryURL;
        if(CATEGORY_SELECTED === "random"){
            //choose a category at random for the URL
            const RAND_CATEGORY = ["v1/magicitems/", "v1/planes/", "v2/conditions/"];
            const CHOSEN_RAND = Math.floor(Math.random() * 3)
            categoryURL = `https://api.open5e.com/${RAND_CATEGORY[CHOSEN_RAND]}`
        }
        else{
            categoryURL = `https://api.open5e.com/${CATEGORY_SELECTED}`; 
        }
        fetch(categoryURL)
        .then(response=> response.json())
        .then(result => addArticle(result, CATEGORY_SELECTED))
        .catch(() => showError());
    }
