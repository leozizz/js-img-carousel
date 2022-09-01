const images = document.querySelectorAll(".slide")
const backButton = document.getElementById("back-button")
const nextButton = document.getElementById("next-button")

let actualImage = 0

//listen for the 'click' event on nextButton and execute the functions responsible for passing the images
nextButton.addEventListener("click", function () {
    
    if (actualImage === images.length -1){
        return
    }

    actualImage++

    hideImage()
    showImage()
    showOrHideButtons()
})

//listen for the 'click' event on backButton and execute the functions responsible for passing the images
backButton.addEventListener("click", function () {
    
    if (actualImage === 0){
        return
    }

    actualImage--

    hideImage()
    showImage()
    showOrHideButtons()
})

//add the "show" class to the current index element of images
function showImage() {
    images[actualImage].classList.add("show")
}

//queries the elements with the "show" class and does the removal to hide the image
function hideImage() {
    const openedImage = document.querySelector(".show")
    openedImage.classList.remove("show")
}

//checks the index of the current image
//if it is greater than 0 it will remove the "opacity" class from the backButton
//if same length as images, add "opacity" class to nextButton
function showOrHideButtons() {
    const notTheFirstImage = actualImage !== 0
    if (notTheFirstImage) {
        backButton.classList.remove("opacity")
    } else {
        backButton.classList.add("opacity")
    }

    const thatIsTheLastImage = actualImage !== 0 && actualImage == images.length - 1
    if (thatIsTheLastImage) {
        nextButton.classList.add("opacity")
    } else {
        nextButton.classList.remove("opacity")
    }
}