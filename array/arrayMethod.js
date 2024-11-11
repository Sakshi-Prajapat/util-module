const openFindButton = document.querySelector("#findarrow");
const openMapButton = document.querySelector("#maparrow");
const openFilterButton = document.querySelector("#filterarrow");
const openSortButton = document.querySelector("#sortarrow");
const openReduceButton = document.querySelector("#reducearrow");
const openSliceButton = document.querySelector("#slicearrow");
const openSpliceButton = document.querySelector("#splicearrow");
const openEnteriesButton = document.querySelector("#enteriesarrow");
const openFlatButton = document.querySelector("#flatarrow");
const openIndexOFButton = document.querySelector("#indexOfarrow");


const findModal = document.querySelector(".modal-find-overlay");
const mapModal = document.querySelector(".modal-map-overlay");
const filterModal = document.querySelector(".modal-filter-overlay");
const sortModal = document.querySelector(".modal-sort-overlay");
const reduceModal = document.querySelector(".modal-reduce-overlay");
const sliceModal = document.querySelector(".modal-slice-overlay");
const spliceModal = document.querySelector(".modal-splice-overlay");
const enteriesModal = document.querySelector(".modal-enteries-overlay");
const flatModal = document.querySelector(".modal-flat-overlay");
const indexOfModal = document.querySelector(".modal-indexOf-overlay");


const closeBtn = document.querySelector(".close-modal-btn");
const closeMapBtn = document.querySelector(".close-map-modal-btn");
const closeFilterBtn = document.querySelector(".close-filter-modal-btn");
const closeSortBtn = document.querySelector(".close-sort-modal-btn");
const closeReduceBtn = document.querySelector(".close-reduce-modal-btn");
const closeSliceBtn = document.querySelector(".close-slice-modal-btn");
const closeSpliceBtn = document.querySelector(".close-splice-modal-btn");
const closeEnteriesBtn = document.querySelector(".close-enteries-modal-btn");
const closeFlatBtn = document.querySelector(".close-flat-modal-btn");
const closeIndexOfBtn = document.querySelector(".close-indexOF-modal-btn");


function getElemtntId(id) {
    return document.getElementById(id);
}

function closeFindModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-find-overlay"))
            findModal.classList.add("hide");
    } else findModal.classList.add("hide");
}

function closeMapModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-map-overlay"))
            mapModal.classList.add("hide");
    } else mapModal.classList.add("hide");
}

function closeFilterModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-filter-overlay"))
            filterModal.classList.add("hide");
    } else filterModal.classList.add("hide");
}

function closeSortModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-sort-overlay"))
            sortModal.classList.add("hide");
    } else sortModal.classList.add("hide");
}

function closeReduceModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-reduce-overlay"))
            reduceModal.classList.add("hide");
    } else reduceModal.classList.add("hide");
}

function closeSliceModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-slice-overlay"))
            sliceModal.classList.add("hide");
    } else sliceModal.classList.add("hide");
}

function closeSpliceModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-splice-overlay"))
            spliceModal.classList.add("hide");
    } else spliceModal.classList.add("hide");
}

function closeEnteriesModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-enteries-overlay"))
            enteriesModal.classList.add("hide");
    } else enteriesModal.classList.add("hide");
}

function closeFlatModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-flat-overlay"))
            flatModal.classList.add("hide");
    } else flatModal.classList.add("hide");
}

function closeIndexOfModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-indexOf-overlay"))
            indexOfModal.classList.add("hide");
    } else indexOfModal.classList.add("hide");
}

openFindButton.addEventListener("click", () => { findModal.classList.remove("hide"); });
findModal.addEventListener("click", (e) => closeFindModal(e, true));
closeBtn.addEventListener("click", closeFindModal);

openMapButton.addEventListener("click", () => { mapModal.classList.remove("hide"); });
mapModal.addEventListener("click", (e) => closeMapModal(e, true));
closeMapBtn.addEventListener("click", closeMapModal);

openFilterButton.addEventListener("click", () => { filterModal.classList.remove("hide"); });
filterModal.addEventListener("click", (e) => closeFilterModal(e, true));
closeFilterBtn.addEventListener("click", closeFilterModal);

openSortButton.addEventListener("click", () => { sortModal.classList.remove("hide"); });
sortModal.addEventListener("click", (e) => closeSortModal(e, true));
closeSortBtn.addEventListener("click", closeSortModal);

openReduceButton.addEventListener("click", () => { reduceModal.classList.remove("hide"); });
reduceModal.addEventListener("click", (e) => closeReduceModal(e, true));
closeReduceBtn.addEventListener("click", closeReduceModal);

openSliceButton.addEventListener("click", () => { sliceModal.classList.remove("hide"); });
sliceModal.addEventListener("click", (e) => closeSliceModal(e, true));
closeSliceBtn.addEventListener("click", closeSliceModal);

openSpliceButton.addEventListener("click", () => { spliceModal.classList.remove("hide"); });
spliceModal.addEventListener("click", (e) => closeSpliceModal(e, true));
closeSpliceBtn.addEventListener("click", closeSpliceModal);

openEnteriesButton.addEventListener("click", () => { enteriesModal.classList.remove("hide"); });
enteriesModal.addEventListener("click", (e) => closeEnteriesModal(e, true));
closeEnteriesBtn.addEventListener("click", closeEnteriesModal);

openFlatButton.addEventListener("click", () => { flatModal.classList.remove("hide"); });
flatModal.addEventListener("click", (e) => closeFlatModal(e, true));
closeFlatBtn.addEventListener("click", closeFlatModal);

openIndexOFButton.addEventListener("click", () => { indexOfModal.classList.remove("hide"); });
indexOfModal.addEventListener("click", (e) => closeIndexOfModal(e, true));
closeIndexOfBtn.addEventListener("click", closeIndexOfModal);


function findMethod(event) {
    event.preventDefault()
    const findId = getElemtntId("findElement")
    const number = getElemtntId("number")
    const resultDiv = getElemtntId("resultDiv")
    let element = findId.value.split(",")
    console.log(number.value)
    const result = element.find((item) => {
        return item > number.value
    })
    resultDiv.textContent = "The Result is :- " + result
    resultDiv.style.fontSize = 30
   
    findId.value = " "
}

function filterMethod(event) {
    event.preventDefault()
    const filterId = getElemtntId("filterElement")
    const resultDiv = getElemtntId("filterResultDiv")
    let element = filterId.value.split(",")
    console.log(element)
    const result = element.filter((item) => {
        return item % 2 == 0;
    })
    resultDiv.textContent = "The Result is :- " + result
    resultDiv.style.fontSize = 30

    filterId.value = " "
    
   
}

function sortMethod(event) {
    event.preventDefault();
    const sortTypeOne = getElemtntId("ascending")
    const sortTypeTwo = getElemtntId("descending")
    
    const sortId = getElemtntId("sortElement")
    const resultDiv = getElemtntId("sortResultDiv")
    let element = sortId.value.split(",")
    // console.log(sortTypeOne.checked.value , sortTypeTwo.checked.value )
    if (sortTypeOne.checked) {
        element.sort((a, b) => a - b);
        resultDiv.textContent = "The Result is :- " + element
        resultDiv.style.fontSize = 30
    } else if (sortTypeTwo.checked) {
        element.sort((a, b) => b - a);
        resultDiv.textContent = "The Result is :- " + element
        resultDiv.style.fontSize = 30
    }
    sortId.value=" "
  }

  function reduceMethod(event){
    event.preventDefault()
    const reduceId = getElemtntId("reduceElement")
    const weightsId = getElemtntId("weightsNumber")
    const resultDiv = getElemtntId("resduceResultDiv")
    let score = reduceId.value.split(",");
    let weights = weightsId.value.split(",")
    console.log(weights)
    const result = score.reduce((sum,score,i)=>{
       return sum+score*weights[i]
    },0)
    console.log(result)

    resultDiv.textContent = "The result is :-" + result
    resultDiv.style.fontSize = 30
  }

  function sliceMethod(event){
    event.preventDefault()
    const sliceId = getElemtntId("sliceElement")
    const indexId = getElemtntId("indexValue")
    const resultDiv = getElemtntId("sliceResultDiv")
    let element = sliceId.value.split(",")
    let index = indexId.value.split(",")

    let result = element.slice(index[0], index[1]);
    resultDiv.textContent = "The result is :-" +result
    resultDiv.style.fontSize = 30
  }

  function spliceMethod(event){
    event.preventDefault()
    const spliceId = getElemtntId("spliceElement")
    const indexID = getElemtntId("indexId")
    const newValue = getElemtntId("addElement")
    const resultDiv = getElemtntId("spliceResultDiv")
    let element = spliceId.value.split(",")
    let index = indexID.value.split(",")
    let value = newValue.value.split(",")

     element.splice(index[0],index[1] , value[0],value[1])
     console.log(element)

    resultDiv.textContent = "The result is :-" +element
    resultDiv.style.fontSize = 30
  }

  function enteriesMethod(event){
    event.preventDefault()
    const enteriesId = getElemtntId("enteriesElement")
    const resultDiv = getElemtntId("enteriesResultDiv")
    let element = enteriesId.value.split(",")
    let entries = element.entries();
    let result = Array.from(entries)
    
    
        resultDiv.textContent = "The result is :-" +result
    resultDiv.style.fontSize = 30

    console.log(result)
  }

  function flatMethod(event){
    event.preventDefault()
    const flatIndex = getElemtntId("depthIndex").value
    const flatId = getElemtntId("flatElement").value
    const resultDiv = getElemtntId("flatResultDiv")
    let element = JSON.parse(flatId)
    let result = element.flat(flatIndex)
    console.log(result)
    resultDiv.textContent = "The result is :-" +result
    resultDiv.style.fontSize = 30

  }

  function indexOfMethod(event){
    event.preventDefault()
    const indexOfId = getElemtntId("indexOfElement").value
    const value = getElemtntId("indexItem").value
    const resultDiv = getElemtntId("indexOfResultDiv")
    let array = indexOfId.split(",")
    let result = array.indexOf(value)
    console.log(result)
    resultDiv.textContent = "The index of the item is :-" +result
    resultDiv.style.fontSize = 30
  }

function findInputCheck(event) {
    event.preventDefault()
    const arrayRegex = /^[-,0-9]+$/
    const element = getElemtntId("findElement")
    const findError = getElemtntId("findError")
    if (!element.value) {
        findError.textContent = "Element is required";
        element.style.border = "2px solid red";
        // isNameValid = false;
    } else if (!arrayRegex.test(element.value)) {
        findError.textContent = "Enter valid name ";
        element.style.border = "2px solid red";
        // isNameValid = false;
    } else {
        findError.textContent = "";
        element.style.border = "2px solid green";
        isNameValid = true;
    }
}