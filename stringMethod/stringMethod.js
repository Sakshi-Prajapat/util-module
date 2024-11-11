const openLengthButton = document.querySelector("#lengtharrow");
const openReplaceButton = document.querySelector("#replacearrow");
const openConcatButton = document.querySelector("#concatrarrow");
const openSliceButton = document.querySelector("#slicearrow");
const openToUpperCaseButton = document.querySelector("#touppercasearrow");
const openSearchButton = document.querySelector("#searcharrow");
const opensubStringButton = document.querySelector("#subStringarrow");
const openCodePointAtButton = document.querySelector("#codePointAtarrow");



const lengthModal = document.querySelector(".modal-length-overlay");
const replaceModal = document.querySelector(".modal-replace-overlay");
const concatModal = document.querySelector(".modal-concat-overlay");
const sliceModal = document.querySelector(".modal-slice-overlay");
const toUpperCaseModal = document.querySelector(".modal-toUpperCase-overlay");
const searchModal = document.querySelector(".modal-search-overlay");
const subStringModal = document.querySelector(".modal-subString-overlay");
const codePointAtModal = document.querySelector(".modal-codePointAt-overlay");


const closeLengthBtn = document.querySelector(".close-length-modal-btn");
const closeReplaceBtn = document.querySelector(".close-replace-modal-btn");
const closeConcatBtn = document.querySelector(".close-concat-modal-btn");
const closeSliceBtn = document.querySelector(".close-slice-modal-btn");
const closetoUpperCaseBtn = document.querySelector(".close-toUpperCase-modal-btn");
const closesubStringBtn = document.querySelector(".close-subString-modal-btn");
const closeSearchBtn = document.querySelector(".close-search-modal-btn");
const closecodePointAtBtn = document.querySelector(".close-codePointAt-modal-btn");



function getElemtntId(id) {
    return document.getElementById(id);
}

function closeLengthModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-length-overlay"))
            lengthModal.classList.add("hide");
    } else lengthModal.classList.add("hide");
}

function closeReplaceModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-replace-overlay"))
            replaceModal.classList.add("hide");
    } else replaceModal.classList.add("hide");
}

function closeConcatModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-concat-overlay"))
            concatModal.classList.add("hide");
    } else concatModal.classList.add("hide");
}

function closeSliceModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-slice-overlay"))
            sliceModal.classList.add("hide");
    } else sliceModal.classList.add("hide");
}

function closetoUpperCaseModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-toUpperCase-overlay"))
            toUpperCaseModal.classList.add("hide");
    } else toUpperCaseModal.classList.add("hide");
}

function closeSearchModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-search-overlay"))
            searchModal.classList.add("hide");
    } else searchModal.classList.add("hide");
}

function closesubStringModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-subString-overlay"))
            subStringModal.classList.add("hide");
    } else subStringModal.classList.add("hide");
}

function closeCodePointAtModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-codePointAt-overlay"))
            codePointAtModal.classList.add("hide");
    } else codePointAtModal.classList.add("hide");
}


openLengthButton.addEventListener("click", () => { lengthModal.classList.remove("hide"); });
lengthModal.addEventListener("click", (e) => closeLengthModal(e, true));
closeLengthBtn.addEventListener("click", closeLengthModal);

openReplaceButton.addEventListener("click", () => { replaceModal.classList.remove("hide"); });
replaceModal.addEventListener("click", (e) => closeReplaceModal(e, true));
closeReplaceBtn.addEventListener("click", closeReplaceModal);

openConcatButton.addEventListener("click", () => { concatModal.classList.remove("hide"); });
concatModal.addEventListener("click", (e) => closeConcatModal(e, true));
closeConcatBtn.addEventListener("click", closeConcatModal);

openSliceButton.addEventListener("click", () => { sliceModal.classList.remove("hide"); });
sliceModal.addEventListener("click", (e) => closeSliceModal(e, true));
closeSliceBtn.addEventListener("click", closeSliceModal);

openToUpperCaseButton.addEventListener("click", () => { toUpperCaseModal.classList.remove("hide"); });
toUpperCaseModal.addEventListener("click", (e) => closetoUpperCaseModal(e, true));
closetoUpperCaseBtn.addEventListener("click", closetoUpperCaseModal);

openSearchButton.addEventListener("click", () => { searchModal.classList.remove("hide"); });
searchModal.addEventListener("click", (e) => closeSearchModal(e, true));
closeSearchBtn.addEventListener("click", closeSearchModal);

opensubStringButton.addEventListener("click", () => { subStringModal.classList.remove("hide"); });
subStringModal.addEventListener("click", (e) => closesubStringModal(e, true));
closesubStringBtn.addEventListener("click", closesubStringModal);

openCodePointAtButton.addEventListener("click", () => { codePointAtModal.classList.remove("hide"); });
codePointAtModal.addEventListener("click", (e) => closeCodePointAtModal(e, true));
closecodePointAtBtn.addEventListener("click", closeCodePointAtModal);




function lengthMethod(event) {
    event.preventDefault()
    const lengthId = getElemtntId("lengthString")
    const resultDiv = getElemtntId("lengthResultDiv")

    console.log(lengthId.value)
    let result = lengthId.value.length
    resultDiv.textContent = "The Length of String is :- " + result
    resultDiv.style.fontSize = 30

    lengthId.value = " "
}
function replaceMethod(event) {
    event.preventDefault()
    const replaceId = getElemtntId("String")
    const value1 = getElemtntId("value1")
    const value2 = getElemtntId("value2")

    const resultDiv = getElemtntId("replaceResultDiv")
    let result = replaceId.value
    let newString = result.replace(value1.value, value2.value)
    console.log(newString)

    resultDiv.textContent = "The New String is :- " + newString
    resultDiv.style.fontSize = 30

    replaceId.value = " "
    value1.value = " "
    value2.value = " "

}

function concatMethod(event) {
    event.preventDefault();
    const stringOne = getElemtntId("string1")
    const stringTwo = getElemtntId("string2")
    const stringThree = getElemtntId("string3")
    const resultDiv = getElemtntId("concatResultDiv")
    let string = stringOne.value;
    let concatString = string.concat(stringTwo.value, stringThree.value)
    resultDiv.textContent = "The New String is :- " + concatString
    resultDiv.style.fontSize = 30

    stringOne.value = " "
    stringTwo.value = " "
    stringThree.value = " "
}

function sliceMethod(event) {
    event.preventDefault()
    const sliceString = getElemtntId("sliceString")
    const startIndex = getElemtntId("startIndex")
    const endIndex = getElemtntId("endIndex")
    const resultDiv = getElemtntId("sliceResultDiv")

    let string = sliceString.value
    let result = string.slice(startIndex.value, endIndex.value)
    resultDiv.textContent = "The New String is :- " + result
    resultDiv.style.fontSize = 30

    sliceString.value = " "
    startIndex.value = " "
    endIndex.value = " "
}

function toUpperCaseMethod(event) {
    event.preventDefault()
    const toUpperCaseId = getElemtntId("toUpperCaseString")
    const resultDiv = getElemtntId("toUpperCaseResultDiv")
    const upperCaseDiv = getElemtntId("upperCase")
    const LowerCaseDiv = getElemtntId("lowerCase")
    let string = toUpperCaseId.value
    let result = string.toUpperCase()
    let result2 = string.toLowerCase()
    upperCaseDiv.textContent = "The String in UpperCase is :- " + result 
    LowerCaseDiv.textContent = "The String in LowerCase is :- " + result2
    resultDiv.textContent = ""
    resultDiv.style.fontSize = 30

    toUpperCaseId.value = ""
}



function SearchMethod(event) {
    event.preventDefault()
    const SearchId = getElemtntId("searchString")
    const charId = getElemtntId("character")
    const resultDiv = getElemtntId("searchResultDiv")
    let string = SearchId.value
    let str = charId.value

    let result = string.search(str)
    resultDiv.textContent = "The Index of the character :- " + result
    resultDiv.style.fontSize = 30

    SearchId.value = " "
    charId.value = " "
}

function trimMethod(event) {
    event.preventDefault()
    const String = getElemtntId("originalString").value
    const trimStart = getElemtntId("trimStart").value
    const trimEnd = getElemtntId("trimEnd").value
    const trimDiv = getElemtntId("trimDiv")
    const trimStartDiv = getElemtntId("trimStartDiv")
    const trimEndDiv = getElemtntId("trimEndDiv")
    const trimSection = getElemtntId("subStringResultDiv")

    let trimResult = String.trim()
    let trimStartResult = trimStart.trimStart()
    let trimEndResult = trimEnd.trimEnd()

    trimDiv.textContent = "The result is :-" +trimResult
    trimStartDiv.textContent = "The result is :-" +trimStartResult
    trimEndDiv.textContent = "The result is :-" +trimEndResult
    trimSection.textContent = " "
    String.value =" "
    startIndex.value= " "
    endIndex.value= " "
}

function codePointAtMethod(event) {
    event.preventDefault()
    const codePointAtId = getElemtntId("codePointAtString")
    const index = getElemtntId("index")
    const resultDiv = getElemtntId("codePointAtResultDiv")
    
    let string = codePointAtId.value
    let result = string.codePointAt(index.value)

    resultDiv.textContent = "The Unicode of the character at given index :- " + result
    resultDiv.style.fontSize = 20
    codePointAtId.value =" "
    index.value= " "
}



// function findInputCheck(event) {
//     event.preventDefault()
//     const arrayRegex = /^[-,0-9]+$/
//     const element = getElemtntId("findElement")
//     const findError = getElemtntId("findError")
//     if (!element.value) {
//         findError.textContent = "Element is required";
//         element.style.border = "2px solid red";
//         // isNameValid = false;
//     } else if (!arrayRegex.test(element.value)) {
//         findError.textContent = "Enter valid name ";
//         element.style.border = "2px solid red";
//         // isNameValid = false;
//     } else {
//         findError.textContent = "";
//         element.style.border = "2px solid green";
//         isNameValid = true;
//     }
// }

