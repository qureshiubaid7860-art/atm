const correctpin = 1234;
const balance = 1000;
const atmlogin = document.querySelector("#atmlogin")
const page = document.querySelector("#page")
const inputBox = document.querySelector("#inputBox");
const pinBox = inputBox.children;
const showtoast = document.querySelector("#liveToast")
const showErrorToast = document.querySelector("#liveErrorToast")
const paget = document.querySelector("#paget")



function handledialerbutton(num) {
    for (let index = 0; index < pinBox.length; index++) {
        const element = pinBox[index];
        if (!element.value) {
            element.value = num
            break;
        }
    }
}

const checkcorrectpin = (pin) => {
    const userinput = pinBox[0].value + pinBox[1].value + pinBox[2].value + pinBox[3].value;


    if (Number(userinput) === correctpin) {
        showtoast.classList.remove("hide")

        showtoast.classList.add("show")

        atmlogin.classList.add("d-none")

        page.classList.remove("d-none")

    } else {
        showErrorToast.classList.remove("hide")
        showErrorToast.classList.add("show")
    }

}
function checkbalance() {
    page.classList.add("d-none")
    paget.classList.remove("d-none")
}

// clear all
function clearAllInputs() {
    inputBox.innerHTML = inputBox.innerHTML;
}

// dismiss toast

function dismiss() {
    showErrorToast.classList.add("hide")
}