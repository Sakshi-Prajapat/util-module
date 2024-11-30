const openCallbackButton = document.querySelector("#Callbackarrow");
const opencallbackHellButton = document.querySelector("#callbackHellarrow");
const openpromiseButton = document.querySelector("#promisearrow");
// const openFrompromiseButton = document.querySelector("#frompromisearrow");
const openasyncAwaitButton = document.querySelector("#asyncAwaitarrow");
const openGroupByButton = document.querySelector("#GroupByarrow");




const CallbackModal = document.querySelector(".modal-Callback-overlay");
const callbackHellModal = document.querySelector(".modal-callbackHell-overlay");
const promiseModal = document.querySelector(".modal-promise-overlay");
// const frompromiseModal = document.querySelector(".modal-Frompromise-overlay");
const asyncAwaitModal = document.querySelector(".modal-asyncAwait-overlay");
const groupByModal = document.querySelector(".modal-GroupBy-overlay");



const closeCallbackBtn = document.querySelector(".close-Callback-modal-btn");
const closecallbackHellBtn = document.querySelector(".close-callbackHell-modal-btn");
const closepromiseBtn = document.querySelector(".close-promise-modal-btn");
const closeFrompromiseBtn = document.querySelector(".close-Frompromise-modal-btn");
const closeasyncAwaitBtn = document.querySelector(".close-asyncAwait-modal-btn");
const closeGroupByBtn = document.querySelector(".close-GroupBy-modal-btn");




function getElemtntId(id) {
    return document.getElementById(id);
}

function closeCallbackModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-Callback-overlay"))
            CallbackModal.classList.add("hide");
    } else CallbackModal.classList.add("hide");
}

function closecallbackHellModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-callbackHell-overlay"))
            callbackHellModal.classList.add("hide");
    } else callbackHellModal.classList.add("hide");
}

function closepromiseModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-promise-overlay"))
            promiseModal.classList.add("hide");
    } else promiseModal.classList.add("hide");
}

// function closeFrompromiseModal(e, clickedOutside) {
//     if (clickedOutside) {
//         if (e.target.classList.contains("modal-Frompromise-overlay"))
//             frompromiseModal.classList.add("hide");
//     } else frompromiseModal.classList.add("hide");
// }

function closeasyncAwaitModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-asyncAwait-overlay"))
            asyncAwaitModal.classList.add("hide");
    } else asyncAwaitModal.classList.add("hide");
}

function closeGroupByModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-GroupBy-overlay"))
            groupByModal.classList.add("hide");
    } else groupByModal.classList.add("hide");
}


openCallbackButton.addEventListener("click", () => { CallbackModal.classList.remove("hide"); });
CallbackModal.addEventListener("click", (e) => closeCallbackModal(e, true));
closeCallbackBtn.addEventListener("click", closeCallbackModal);

opencallbackHellButton.addEventListener("click", () => { callbackHellModal.classList.remove("hide"); });
callbackHellModal.addEventListener("click", (e) => closecallbackHellModal(e, true));
closecallbackHellBtn.addEventListener("click", closecallbackHellModal);

openpromiseButton.addEventListener("click", () => { promiseModal.classList.remove("hide"); });
promiseModal.addEventListener("click", (e) => closepromiseModal(e, true));
closepromiseBtn.addEventListener("click", closepromiseModal);

openasyncAwaitButton.addEventListener("click", () => { asyncAwaitModal.classList.remove("hide"); });
asyncAwaitModal.addEventListener("click", (e) => closeasyncAwaitModal(e, true));
closeasyncAwaitBtn.addEventListener("click", closeasyncAwaitModal);