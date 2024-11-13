const sidebarTab = document.getElementById("tab")
const sidebarBody = document.getElementById("sidebar-body")
const content = document.querySelector(".content")
const sidebarStar = document.getElementById("star")
const modalWindow = document.getElementById("overlay")
const createTaskBtn = document.getElementById("openModal")
const closeModalBtn = document.getElementById("close-modal")
const closeModalBtnMobile = document.getElementById("close-modal-mobile")
const closeModalBtnMobileDown = document.getElementById("close-modal-down")

sidebarTab.addEventListener("click", function() {
    this.classList.toggle("active");
    sidebarBody.classList.toggle("visually-hidden")
});

sidebarStar.addEventListener("click", function() {
    this.classList.toggle("active");});

document.querySelector('.form__item-plus').addEventListener('click', function() {
    document.getElementById('responsible').click();
});

createTaskBtn.addEventListener("click", function() {
    modalWindow.show()
})

modalWindow.addEventListener("click", function(e) {
    if (e.target === modalWindow) {
        modalWindow.close()
    }
})

closeModalBtn.addEventListener("click", function() {
        modalWindow.close()
})
closeModalBtnMobile.addEventListener("click", function() {
    modalWindow.close()
})
closeModalBtnMobileDown.addEventListener("click", function() {
    modalWindow.close()
})

document.addEventListener('keydown', event => {
    if (event.code === "Escape") {
        modalWindow.close();
    }
});
