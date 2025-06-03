//lorem picsum API
fetch("https://picsum.photos/v2/list")
.then(response=> response.json())
.then(result => addPicture(result))
.catch(() => showError());

//API error handling
function showError(){
    const ERROR = document.createElement("p");
    ERROR.innerHTML = "Something went wrong, try again";
    document.getElementById("gallery").appendChild(ERROR);
}

//adds a picture for each result of the API
function addPicture(result){
    for(let element of result){
        const NEW_PICTURE = document.createElement("div");
        const PICTURE_CONTENT = `<img alt="picture from lorem picsum" class="img_size" src="${element["download_url"]}">`
        NEW_PICTURE.innerHTML = PICTURE_CONTENT;
        document.getElementById("gallery").appendChild(NEW_PICTURE)
    }
}

//sets grid view
document.getElementById("grid_view").addEventListener("click", triggerViewGrid);
function triggerViewGrid(){
    let selectGrid = document.getElementById("gallery")
    selectGrid.classList.remove("column_view")
    selectGrid.classList.add("grid_view")
    
}

//sets column view
document.getElementById("column_view").addEventListener("click", triggerViewColumn);
function triggerViewColumn(){
    let selectColumn = document.getElementById("gallery")
    selectColumn.classList.remove("grid_view")
    selectColumn.classList.add("column_view")
}

//navbar dropdown trigger
document.getElementById("btn").addEventListener("click", triggerDropdown);
function triggerDropdown(){
    let dropdownMenu = document.getElementById("btn_content")
    dropdownMenu.classList.toggle("hidden")
    dropdownMenu.classList.toggle("flex")
}

//form dropdown trigger
document.getElementById("add_image_btn").addEventListener("click", triggerFormDropdown);
function triggerFormDropdown(event){
    //checks if click is other than the button
    if (event.target !== document.getElementById("add_image_btn").querySelector("button")) {
        return;
    }
    let formDropdown = document.getElementById("image_form")
    formDropdown.classList.toggle("hidden")
}

document.getElementById("submit_image").addEventListener("submit", imageSubmission)
function imageSubmission(event){
    event.preventDefault();
    const NEW_IMAGE = document.createElement("div")
    NEW_IMAGE.classList.add("relative")
    const NEW_IMAGE_input = document.getElementById("img_file");
    const NEW_URL_INPUT = document.getElementById("img_url");

    //creates a delete button
    const DELETE_BTN = document.createElement("button");
    DELETE_BTN.textContent = "<- Delete Image";
    DELETE_BTN.classList.add("delete_btn");

    //checks if upload is a file
    if(NEW_IMAGE_input.files.length > 0){
        const NEW_IMAGE_file = NEW_IMAGE_input.files[0];
        const TEMP_URL = URL.createObjectURL(NEW_IMAGE_file);
        const NEW_IMAGE_content = `<img alt="picture from user upload" class="img_size" src="${TEMP_URL}">`
        NEW_IMAGE.innerHTML = NEW_IMAGE_content;
    }

    //upload is a url
    else{
        const NEW_IMAGE_url = NEW_URL_INPUT.value.trim()
        const NEW_IMAGE_content = `<img alt="picture from user upload" class="img_size" src="${NEW_IMAGE_url}">`
        NEW_IMAGE.innerHTML = NEW_IMAGE_content;
    }
    NEW_IMAGE.appendChild(DELETE_BTN)

    //deletes the article if the button is clicked
    DELETE_BTN.addEventListener("click", () => {
        DELETE_BTN.parentElement.remove()});
    
    const NEXT_IMAGE = document.getElementById("gallery").firstChild;
    document.getElementById("gallery").insertBefore(NEW_IMAGE, NEXT_IMAGE);
    document.getElementById("submit_image").reset();  
}

//autoplay carousel
const SLIDES = document.querySelectorAll(".slide")
let currentSlide = 0
function nextSlide(){
    SLIDES[currentSlide].classList.add("hidden")
    //makes it so it goes back to 0 after the last slide
    currentSlide = (currentSlide+1) % SLIDES.length;
    SLIDES[currentSlide].classList.remove("hidden")
}
setInterval(nextSlide, 3000)
