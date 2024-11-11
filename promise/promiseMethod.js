const openPromiseAllButton = document.querySelector("#promiseAllarrow");
const openPromiseAnyButton = document.querySelector("#promiseAnyarrow");
const openPromiseRaceButton = document.querySelector("#promiseRacearrow");
const openAllSettleButton = document.querySelector("#promiseAllSettlearrow");

const promiseAllModal = document.querySelector(".modal-promiseAll-overlay");
const promiseAnyModal = document.querySelector(".modal-promiseAny-overlay");
const promiseRaceModal = document.querySelector(".modal-promiseRace-overlay");
const promiseAllSettleModal = document.querySelector(".modal-promiseAllSettle-overlay");
const groupByModal = document.querySelector(".modal-GroupBy-overlay");

const closePromiseAllBtn = document.querySelector(".close-promiseAll-modal-btn");
const closePromiseAnyBtn = document.querySelector(".close-promiseAny-modal-btn");
const closePromiseRaceBtn = document.querySelector(".close-promiseRace-modal-btn");
const closePromiseAllSettleBtn = document.querySelector(".close-promiseAllSettle-modal-btn");
const closeGroupByBtn = document.querySelector(".close-GroupBy-modal-btn");

function getElemtntId(id) {
    return document.getElementById(id);
}

function closepromiseAllModal(e, clickedOutside) {
    if (clickedOutside) {
    
        if (e.target.classList.contains("modal-ApiCall-overlay"))
            promiseAllModal.classList.add("hide");
    } else promiseAllModal.classList.add("hide");
}

function closepromiseAnyModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-Assign-overlay"))
            promiseAnyModal.classList.add("hide");
    } else promiseAnyModal.classList.add("hide");
}

function closepromiseRaceModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-promiseRace-overlay"))
            promiseRaceModal.classList.add("hide");
    } else promiseRaceModal.classList.add("hide");
}

function closepromiseAllSettleModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-promiseAllSettle-overlay"))
            promiseAllSettleModal.classList.add("hide");
    } else promiseAllSettleModal.classList.add("hide");
}

function closeGroupByModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-GroupBy-overlay"))
            groupByModal.classList.add("hide");
    } else groupByModal.classList.add("hide");
}

openPromiseAllButton.addEventListener("click", () => { promiseAllModal.classList.remove("hide"); });
promiseAllModal.addEventListener("click", (e) => closepromiseAllModal(e, true));
closePromiseAllBtn.addEventListener("click", closepromiseAllModal);

openPromiseAnyButton.addEventListener("click", () => { promiseAnyModal.classList.remove("hide"); });
promiseAnyModal.addEventListener("click", (e) => closepromiseAnyModal(e, true));
closePromiseAnyBtn.addEventListener("click", closepromiseAnyModal);

openPromiseRaceButton.addEventListener("click", () => { promiseRaceModal.classList.remove("hide"); });
promiseRaceModal.addEventListener("click", (e) => closepromiseRaceModal(e, true));
closePromiseRaceBtn.addEventListener("click", closepromiseRaceModal);

openAllSettleButton.addEventListener("click", () => { promiseAllSettleModal.classList.remove("hide"); });
promiseAllSettleModal.addEventListener("click", (e) => closepromiseAllSettleModal(e, true));
closePromiseAllSettleBtn.addEventListener("click", closepromiseAllSettleModal);

openGroupByButton.addEventListener("click", () => { groupByModal.classList.remove("hide"); });
groupByModal.addEventListener("click", (e) => closeGroupByModal(e, true));
closeGroupByBtn.addEventListener("click", closeGroupByModal);