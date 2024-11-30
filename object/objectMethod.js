const openObjectButton = document.querySelector("#Objectarrow");
const openAssignButton = document.querySelector("#Assignarrow");
const openEntriesButton = document.querySelector("#Entriesrarrow");
const openFromEntriesButton = document.querySelector("#fromEntriesarrow");
const openValuesButton = document.querySelector("#Valuesarrow");
const openGroupByButton = document.querySelector("#GroupByarrow");




const objectModal = document.querySelector(".modal-Object-overlay");
const assignModal = document.querySelector(".modal-Assign-overlay");
const entriesModal = document.querySelector(".modal-Entries-overlay");
const fromEntriesModal = document.querySelector(".modal-FromEntries-overlay");
const valuesModal = document.querySelector(".modal-Values-overlay");
const groupByModal = document.querySelector(".modal-GroupBy-overlay");



const closeObjectBtn = document.querySelector(".close-Object-modal-btn");
const closeAssignBtn = document.querySelector(".close-Assign-modal-btn");
const closeEntriesBtn = document.querySelector(".close-Entries-modal-btn");
const closeFromEntriesBtn = document.querySelector(".close-FromEntries-modal-btn");
const closeValuesBtn = document.querySelector(".close-Values-modal-btn");
const closeGroupByBtn = document.querySelector(".close-GroupBy-modal-btn");




function getElemtntId(id) {
    return document.getElementById(id);
}

function closeObjectModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-Object-overlay"))
            objectModal.classList.add("hide");
    } else objectModal.classList.add("hide");
}

function closeAssignModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-Assign-overlay"))
            assignModal.classList.add("hide");
    } else assignModal.classList.add("hide");
}

function closeEntriesModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-Entries-overlay"))
            entriesModal.classList.add("hide");
    } else entriesModal.classList.add("hide");
}

function closeFromEntriesModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-FromEntries-overlay"))
            fromEntriesModal.classList.add("hide");
    } else fromEntriesModal.classList.add("hide");
}

function closeValuesModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-Values-overlay"))
            valuesModal.classList.add("hide");
    } else valuesModal.classList.add("hide");
}

function closeGroupByModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-GroupBy-overlay"))
            groupByModal.classList.add("hide");
    } else groupByModal.classList.add("hide");
}




openObjectButton.addEventListener("click", () => { objectModal.classList.remove("hide"); });
objectModal.addEventListener("click", (e) => closeObjectModal(e, true));
closeObjectBtn.addEventListener("click", closeObjectModal);

openAssignButton.addEventListener("click", () => { assignModal.classList.remove("hide"); });
assignModal.addEventListener("click", (e) => closeAssignModal(e, true));
closeAssignBtn.addEventListener("click", closeAssignModal);

openEntriesButton.addEventListener("click", () => { entriesModal.classList.remove("hide"); });
entriesModal.addEventListener("click", (e) => closeEntriesModal(e, true));
closeEntriesBtn.addEventListener("click", closeEntriesModal);

openFromEntriesButton.addEventListener("click", () => { fromEntriesModal.classList.remove("hide"); });
fromEntriesModal.addEventListener("click", (e) => closeFromEntriesModal(e, true));
closeFromEntriesBtn.addEventListener("click", closeFromEntriesModal);

openValuesButton.addEventListener("click", () => { valuesModal.classList.remove("hide"); });
valuesModal.addEventListener("click", (e) => closeValuesModal(e, true));
closeValuesBtn.addEventListener("click", closeValuesModal);

openGroupByButton.addEventListener("click", () => { groupByModal.classList.remove("hide"); });
groupByModal.addEventListener("click", (e) => closeGroupByModal(e, true));
closeGroupByBtn.addEventListener("click", closeGroupByModal);






function objectMethod(event) {
    event.preventDefault()
    const ObjectId = getElemtntId("ObjectKey")
    const ValueId = getElemtntId("ObjectValue")
    const resultDiv = getElemtntId("ObjectResultDiv")

    let keys = ObjectId.value.split(",")
    let values = ValueId.value.split(",")
    var result = {};
    keys.forEach((key, i)=>{result[key] = values[i]});
    console.log(result);
    let str = JSON.stringify(result);
    resultDiv.textContent = "The Object of String is :- " + str
    resultDiv.style.fontSize = 20

    ObjectId.value = " "
}
function assignMethod(event) {
    event.preventDefault()
    const targetObject = getElemtntId("targetObject").value
    const sourceObject = getElemtntId("sourceObject").value
    
    let objectOne= JSON.parse(targetObject)
    let objectTwo = JSON.parse(sourceObject)

    const resultDiv = getElemtntId("assignResultDiv")
    let result = Object.assign(objectOne, objectTwo);
    let str = JSON.stringify(result);
    console.log(result)
    resultDiv.textContent = "The New String is :- " + str
    resultDiv.style.fontSize = 30

    targetObject = " "
    sourceObject = " "

}

function entriesMethod(event) {
    event.preventDefault();
    const objectElement = getElemtntId("objectElement").value
    const index = getElemtntId("indexOfObject")
    const resultDiv = getElemtntId("EntriesResultDiv")
    let object= JSON.parse(objectElement)
    let result=Object.entries(object)[index.value]
    console.log(result)
    resultDiv.textContent = "The Result is :- " +result
    resultDiv.style.fontSize = 30

        objectElement = " "
        index.value = " "
}

function fromEntriesMethod(event) {
    event.preventDefault()
    const fromEntriesArray = getElemtntId("fromEntriesId").value
    // const startIndex = getElemtntId("startIndex")
    // const endIndex = getElemtntId("endIndex")
    const resultDiv = getElemtntId("fromEntriesResultDiv")

    // const arr = fromEntriesArray.split(",").map()
    const arr = JSON.parse(fromEntriesArray)
    console.log(arr)
    const result = Object.fromEntries(arr);
    console.log(result)
    resultDiv.textContent = "The New String is :- " + JSON.stringify(result)
    resultDiv.style.fontSize = 30

   
}

function valuesMethod(event) {
    event.preventDefault()
    const valuesId = getElemtntId("valuesObject").value
    const resultDiv = getElemtntId("valuesResultDiv")
   
    let object= JSON.parse(valuesId)
    let result = Object.values(object)
    console.log(result)


    resultDiv.textContent = "The result is :- " +JSON.stringify(result)
    resultDiv.style.fontSize = 30
    console.log(valuesId)
    valuesId = " "
    console.log(valuesId)
}



// function groupByMethod(event) {
//     event.preventDefault()
//     const groupById = getElemtntId("groupByObject").value
//     const charId = getElemtntId("key")
//     const resultDiv = getElemtntId("groupByResultDiv")
    
     
//     let object = JSON.parse(groupById)
//     console.log(object)
//     const groupBy = (charId)=>{
//         return charId;
//     }

//     const products = [
//         { name: 'apples', category: 'fruits' },
//         { name: 'oranges', category: 'fruits' },
//         { name: 'potatoes', category: 'vegetables' }
//     ];
    
//     // const grouped = products.reduce((acc, product) => {
//     //     const key = product.category;
//     //     if (!acc[key]) {
//     //         acc[key] = [];
//     //     }
//     //     acc[key].push(product);
//     //     return acc;
//     // }, {});
    
//     // console.log(grouped);

//     const result = Object.groupBy(object);
//     resultDiv.textContent = "The Index of the character :- " + result
//     resultDiv.style.fontSize = 30

   
// }

function groupByMethod(event) {
    event.preventDefault()
    const obj = {
        name : "ram",
        age : 23
    }
    const nameValue = getElemtntId("groupByObject").value
    // const startIndex = getElemtntId("startIndexStr")
    // const endIndex = getElemtntId("endIndexStr")
    const resultDiv = getElemtntId("GroupByResultDiv")

    // let str = String.value
    // let result = str.GroupBy(startIndex.value, endIndex.value)

    const result = Object.keys(obj).find(key => obj[key].includes(age));
    console.log(result)
    resultDiv.textContent = "The new String :- " + result
    resultDiv.style.fontSize = 30
    String.value =" "
    startIndex.value= " "
    endIndex.value= " "
}

// function codePointAtMethod(event) {
//     event.preventDefault()
//     const codePointAtId = getElemtntId("codePointAtString")
//     const index = getElemtntId("index")
//     const resultDiv = getElemtntId("codePointAtResultDiv")
    
//     let string = codePointAtId.value
//     let result = string.codePointAt(index.value)

//     resultDiv.textContent = "The Unicode of the character at given index :- " + result
//     resultDiv.style.fontSize = 20
//     codePointAtId.value =" "
//     index.value= " "
// }



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

