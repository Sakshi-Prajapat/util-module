const openApiCallButton = document.querySelector("#ApiCallArrow");
const openAssignButton = document.querySelector("#Assignarrow");
const openEntriesButton = document.querySelector("#Entriesrarrow");

const apiCallModal = document.querySelector(".modal-ApiCall-overlay");
const assignModal = document.querySelector(".modal-Assign-overlay");
const entriesModal = document.querySelector(".modal-Entries-overlay");

const closeApiCallBtn = document.querySelector(".close-ApiCall-modal-btn");
const closeAssignBtn = document.querySelector(".close-Assign-modal-btn");
const closeEntriesBtn = document.querySelector(".close-Entries-modal-btn");

function getElemtntId(id) {
    return document.getElementById(id);
}

function closeApiCallModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-ApiCall-overlay"))
            apiCallModal.classList.add("hide");
    } else apiCallModal.classList.add("hide");
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

openApiCallButton.addEventListener("click", () => { apiCallModal.classList.remove("hide"); });
apiCallModal.addEventListener("click", (e) => closeApiCallModal(e, true));
closeApiCallBtn.addEventListener("click", closeApiCallModal);

openAssignButton.addEventListener("click", () => { assignModal.classList.remove("hide"); });
assignModal.addEventListener("click", (e) => closeAssignModal(e, true));
closeAssignBtn.addEventListener("click", closeAssignModal);

openEntriesButton.addEventListener("click", () => { entriesModal.classList.remove("hide"); });
entriesModal.addEventListener("click", (e) => closeEntriesModal(e, true));
closeEntriesBtn.addEventListener("click", closeEntriesModal);

// async function fetchData(){
//     try {
//         const response = await fetch("https://fakestoreapi.com/products");
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const products = await response.json();
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
// }

async function apiCallMethod(event){
    event.preventDefault()
    let data;
    const url = getElemtntId("ApiCallUrl").value
    const div = getElemtntId("ApiCallResultDiv")
    try{
        const response = await fetch(url)
        data = await response.json();
        console.log(data);
    }catch(error){
        console.error('Error fetching data:', error);
    }
    div.textContent = JSON.stringify(data)
    div.style.padding = "8px"
    div.style.width= "70%"
    div.style.overflow = "scroll"
}