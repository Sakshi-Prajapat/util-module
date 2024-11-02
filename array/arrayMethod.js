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


// function openModal() {
//     modal.classList.remove("hide");
// }

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

openFindButton.addEventListener("click", ()=>{ findModal.classList.remove("hide");});
findModal.addEventListener("click", (e) => closeFindModal(e, true));
closeBtn.addEventListener("click", closeFindModal);

openMapButton.addEventListener("click", ()=>{ mapModal.classList.remove("hide");});
mapModal.addEventListener("click", (e) => closeMapModal(e, true));
closeMapBtn.addEventListener("click", closeMapModal);

openFilterButton.addEventListener("click", ()=>{ filterModal.classList.remove("hide");});
filterModal.addEventListener("click", (e) => closeFilterModal(e, true));
closeFilterBtn.addEventListener("click", closeFilterModal);

openSortButton.addEventListener("click", ()=>{ sortModal.classList.remove("hide");});
sortModal.addEventListener("click", (e) => closeSortModal(e, true));
closeSortBtn.addEventListener("click", closeSortModal);

openReduceButton.addEventListener("click", ()=>{ reduceModal.classList.remove("hide");});
reduceModal.addEventListener("click", (e) => closeReduceModal(e, true));
closeReduceBtn.addEventListener("click", closeReduceModal);

openSliceButton.addEventListener("click", ()=>{ sliceModal.classList.remove("hide");});
sliceModal.addEventListener("click", (e) => closeSliceModal(e, true));
closeSliceBtn.addEventListener("click", closeSliceModal);

openSpliceButton.addEventListener("click", ()=>{ spliceModal.classList.remove("hide");});
spliceModal.addEventListener("click", (e) => closeSpliceModal(e, true));
closeSpliceBtn.addEventListener("click", closeSpliceModal);

openEnteriesButton.addEventListener("click", ()=>{ enteriesModal.classList.remove("hide");});
enteriesModal.addEventListener("click", (e) => closeEnteriesModal(e, true));
closeEnteriesBtn.addEventListener("click", closeEnteriesModal);

openFlatButton.addEventListener("click", ()=>{ flatModal.classList.remove("hide");});
flatModal.addEventListener("click", (e) => closeFlatModal(e, true));
closeFlatBtn.addEventListener("click", closeFlatModal);

openIndexOFButton.addEventListener("click", ()=>{ indexOfModal.classList.remove("hide");});
indexOfModal.addEventListener("click", (e) => closeIndexOfModal(e, true));
closeIndexOfBtn.addEventListener("click", closeIndexOfModal);