

function getInputId(id) {
    return document.getElementById(id);
}

function handleLeftArrow() {
    let firstDivId = getInputId("first-card-div")
    let secondDivId = getInputId("second-card-div")
    secondDivId.style.display = "none"
    firstDivId.style.display = "flex"


}

function handleRightArrow() {
    let firstDivId = getInputId("first-card-div")
    let secondDivId = getInputId("second-card-div")
    secondDivId.style.display = "flex"
    firstDivId.style.display = "none"

}