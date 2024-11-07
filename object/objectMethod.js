const openObjectButton = document.querySelector("#Objectarrow");
const openAssignButton = document.querySelector("#Assignarrow");
const openEntriesButton = document.querySelector("#Entriesrarrow");
const openFromEntriesButton = document.querySelector("#FromEntriesarrow");
const openValuesButton = document.querySelector("#Valuesarrow");
const openGroupByButton = document.querySelector("#GroupByarrow");




const ObjectModal = document.querySelector(".modal-Object-overlay");
const AssignModal = document.querySelector(".modal-Assign-overlay");
const EntriesModal = document.querySelector(".modal-Entries-overlay");
const FromEntriesModal = document.querySelector(".modal-FromEntries-overlay");
const ValuesModal = document.querySelector(".modal-Values-overlay");
const GroupByModal = document.querySelector(".modal-GroupBy-overlay");



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
            ObjectModal.classList.add("hide");
    } else ObjectModal.classList.add("hide");
}

function closeAssignModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-Assign-overlay"))
            AssignModal.classList.add("hide");
    } else AssignModal.classList.add("hide");
}

function closeEntriesModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-Entries-overlay"))
            EntriesModal.classList.add("hide");
    } else EntriesModal.classList.add("hide");
}

function closeFromEntriesModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-FromEntries-overlay"))
            FromEntriesModal.classList.add("hide");
    } else FromEntriesModal.classList.add("hide");
}

function closeValuesModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-Values-overlay"))
            ValuesModal.classList.add("hide");
    } else ValuesModal.classList.add("hide");
}

function closeGroupByModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-GroupBy-overlay"))
            GroupByModal.classList.add("hide");
    } else GroupByModal.classList.add("hide");
}




openObjectButton.addEventListener("click", () => { ObjectModal.classList.remove("hide"); });
ObjectModal.addEventListener("click", (e) => closeObjectModal(e, true));
closeObjectBtn.addEventListener("click", closeObjectModal);

openAssignButton.addEventListener("click", () => { AssignModal.classList.remove("hide"); });
AssignModal.addEventListener("click", (e) => closeAssignModal(e, true));
closeAssignBtn.addEventListener("click", closeAssignModal);

openEntriesButton.addEventListener("click", () => { EntriesModal.classList.remove("hide"); });
EntriesModal.addEventListener("click", (e) => closeEntriesModal(e, true));
closeEntriesBtn.addEventListener("click", closeEntriesModal);

openFromEntriesButton.addEventListener("click", () => { FromEntriesModal.classList.remove("hide"); });
FromEntriesModal.addEventListener("click", (e) => closeFromEntriesModal(e, true));
closeFromEntriesBtn.addEventListener("click", closeFromEntriesModal);

openValuesButton.addEventListener("click", () => { ValuesModal.classList.remove("hide"); });
ValuesModal.addEventListener("click", (e) => closeValuesModal(e, true));
closeValuesBtn.addEventListener("click", closeValuesModal);

openGroupByButton.addEventListener("click", () => { GroupByModal.classList.remove("hide"); });
GroupByModal.addEventListener("click", (e) => closeGroupByModal(e, true));
closeGroupByBtn.addEventListener("click", closeGroupByModal);






function ObjectMethod(event) {
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
function AssignMethod(event) {
    event.preventDefault()
    const AssignId = getElemtntId("String")
    const value1 = getElemtntId("value1")
    const value2 = getElemtntId("value2")

    const resultDiv = getElemtntId("AssignResultDiv")
    let result = AssignId.value
    let newString = result.Assign(value1.value, value2.value)
    console.log(newString)

    resultDiv.textContent = "The New String is :- " + newString
    resultDiv.style.fontSize = 30

    AssignId.value = " "
    value1.value = " "
    value2.value = " "

}

function EntriesMethod(event) {
    event.preventDefault();
    const stringOne = getElemtntId("ObjectElement")
    const stringTwo = getElemtntId("indexOfObject")
    // const stringThree = getElemtntId("string3")
    const resultDiv = getElemtntId("EntriesResultDiv")
    console.log(stringOne)
    // let string = "'" +stringOne.value+ "'";
    let string = stringOne.value
    console.log(string)
    let object = JSON.parse(string)
    console.log(object)
    let result=Object.entries(object)[stringTwo.value]
    resultDiv.textContent = "The Result is :- " +result
    resultDiv.style.fontSize = 30

    stringOne.value = " "
    stringTwo.value = " "
}

function FromEntriesMethod(event) {
    event.preventDefault()
    const FromEntriesString = getElemtntId("FromEntriesString")
    const startIndex = getElemtntId("startIndex")
    const endIndex = getElemtntId("endIndex")
    const resultDiv = getElemtntId("FromEntriesResultDiv")

    let string = FromEntriesString.value
    let result = string.FromEntries(startIndex.value, endIndex.value)
    resultDiv.textContent = "The New String is :- " + result
    resultDiv.style.fontSize = 30

    FromEntriesString.value = " "
    startIndex.value = " "
    endIndex.value = " "
}

function ValuesMethod(event) {
    event.preventDefault()
    const ValuesId = getElemtntId("ValuesString")
    const resultDiv = getElemtntId("ValuesResultDiv")
    const upperCaseDiv = getElemtntId("upperCase")
    const LowerCaseDiv = getElemtntId("lowerCase")
    let string = ValuesId.value
    let result = string.Values()
    let result2 = string.toLowerCase()
    upperCaseDiv.textContent = "The String in UpperCase is :- " + result 
    LowerCaseDiv.textContent = "The String in LowerCase is :- " + result2
    resultDiv.textContent = ""
    resultDiv.style.fontSize = 30

    ValuesId.value = ""
}



function GroupByMethod(event) {
    event.preventDefault()
    const GroupById = getElemtntId("GroupByString")
    const charId = getElemtntId("character")
    const resultDiv = getElemtntId("GroupByResultDiv")
    let string = GroupById.value
    let str = charId.value

    let result = string.GroupBy(str)
    resultDiv.textContent = "The Index of the character :- " + result
    resultDiv.style.fontSize = 30

    GroupById.value = " "
    charId.value = " "
}

// function GroupByMethod(event) {
//     event.preventDefault()
//     const String = getElemtntId("originalString")
//     const startIndex = getElemtntId("startIndexStr")
//     const endIndex = getElemtntId("endIndexStr")
//     const resultDiv = getElemtntId("GroupByResultDiv")

//     let str = String.value
//     let result = str.GroupBy(startIndex.value, endIndex.value)

//     resultDiv.textContent = "The new String :- " + result
//     resultDiv.style.fontSize = 30
//     String.value =" "
//     startIndex.value= " "
//     endIndex.value= " "
// }

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

