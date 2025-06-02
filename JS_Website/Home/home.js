//fetches a list of dnd skills from open5e API
fetch("https://api.open5e.com/v2/skills")
.then(response=> response.json())
.then(result => add_Article(result))
.catch(() => showError());

//adds a new article
function add_Article(result, categorySelected){
    let newArticleContent;
    
    //creates a new article for each skill
    if(categorySelected === undefined){
        for(let element of result["results"]){
            const newArticleSkills = document.createElement("article");
            const newArticleContent = `<h2 class="small_margin">${element["name"]}</h2><p>${element["desc"]}</p>`;
            newArticleSkills.innerHTML = newArticleContent;
            document.querySelector("#api_articles").appendChild(newArticleSkills);
        }
    }

    else {
        //creates a new article depending on the category
        const newArticle = document.createElement("article");
        //creates a delete button
        const delete_btn = document.createElement("button");
        delete_btn.textContent = "Delete Article";
        delete_btn.classList.add("delete_btn");
        
        //gets a random element from result
        const randElement = Math.floor(Math.random() * result["results"].length)
        const element = result.results[randElement];
        let attunement;
        //specific layout of the article for the magical items category
        if(categorySelected == "v1/magicitems"){
            const rarity = element.rarity.toLowerCase();
            if(element.requires_attunement === ""){
                attunement = "No";
            }
            else{
                attunement = "Yes";  
            }
            newArticleContent = `<h2 class="small_margin">${element["name"]}</h2><h3>${rarity}</h3><p>Requires attunement: ${attunement}</p><p>${element["desc"]}</p>`;
            newArticle.innerHTML = newArticleContent;
            newArticle.appendChild(delete_btn)
            //colors h3 depending of the rarity of the item
            const h3 = newArticle.querySelector("h3")
            switch(rarity){
                case "rare":
                h3.style.color = "#73b7eb";
                break;
                case "uncommon":
                h3.style.color =  "#7ed15a";
                break;
                case "very rare":
                h3.style.color =  "#208ef5";
                break;
                case "artifact":
                h3.style.color = "#ff00ff";
                break;
                case "legendary":
                h3.style.color = "#ffc745";
                break;
                case "common":
                h3.style.color =  "white";
                break;
            }
        }
        else{
            //basic layout for other categories
            newArticleContent = `<h2 class="small_margin">${element["name"]}</h2><p>${element["desc"]}</p>`;
            newArticle.innerHTML = newArticleContent;
            newArticle.appendChild(delete_btn)
        }
        //deletes the article if the button is clicked
        delete_btn.addEventListener("click", () => {
            delete_btn.parentElement.remove()});
            
    const nextArticle = document.getElementById("user_articles").firstChild;    
    document.getElementById("user_articles").insertBefore(newArticle, nextArticle);
        }
    }

//API error handling
    function showError(){
        const error = document.createElement("p");
        error.innerHTML = "Something went wrong, try again";
        document.getElementById("dnd_articles").appendChild(error);
    }
    
    //toggles menu dropdown depending on media querie
    document.getElementById("btn").addEventListener("click", trigger_dropdown);
    function trigger_dropdown(){
        let dropdownMenu = document.getElementById("btn_content")
        dropdownMenu.classList.toggle("hidden")
        dropdownMenu.classList.toggle("flex")
    }
    
    //adds an article depending on a selected category
    document.getElementById("submit_article").addEventListener("submit", fetch_category);
    function fetch_category(event){
        //prevents showing the json in the page
        event.preventDefault();
        const categorySelected = document.getElementById("category").value;
        let categoryURL;
        if(categorySelected === "random"){
            //choose a category at random for the URL
            const randCategory = ["v1/magicitems/", "v1/planes/", "v2/conditions/"];
            const chosenRand = Math.floor(Math.random() * 3)
            categoryURL = `https://api.open5e.com/${randCategory[chosenRand]}`
        }
        else{
            categoryURL = `https://api.open5e.com/${categorySelected}`; 
        }
        fetch(categoryURL)
        .then(response=> response.json())
        .then(result => add_Article(result, categorySelected))
        .catch(() => showError());
    }
