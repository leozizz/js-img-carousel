const images = document.querySelectorAll(".slide")
const backButton = document.getElementById("back-button")
const nextButton = document.getElementById("next-button")

let actualImage = 0

nextButton.addEventListener("click", function () {
    
    if (actualImage === images.length -1){
        return
    }


    actualImage++

    hideImage()
    showImage()
    showOrHideButtons()
})

backButton.addEventListener("click", function () {
    
    if (actualImage === 0){
        return
    }

    actualImage--

    hideImage()
    showImage()
    showOrHideButtons()
})

function showImage() {
    images[actualImage].classList.add("show")
}

function hideImage() {
    const openedImage = document.querySelector(".show")
    openedImage.classList.remove("show")
}

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