const openObjectButton = document.querySelector("#Objectarrow");
const openAssignButton = document.querySelector("#Assignarrow");
const openEntriesButton = document.querySelector("#Entriesrarrow");

const objectModal = document.querySelector(".modal-Object-overlay");
const assignModal = document.querySelector(".modal-Assign-overlay");
const entriesModal = document.querySelector(".modal-Entries-overlay");

const closeObjectBtn = document.querySelector(".close-Object-modal-btn");
const closeAssignBtn = document.querySelector(".close-Assign-modal-btn");
const closeEntriesBtn = document.querySelector(".close-Entries-modal-btn");

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

openObjectButton.addEventListener("click", () => { objectModal.classList.remove("hide"); });
objectModal.addEventListener("click", (e) => closeObjectModal(e, true));
closeObjectBtn.addEventListener("click", closeObjectModal);

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