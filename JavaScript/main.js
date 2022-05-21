const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", () => {
    const mainMenu = document.querySelector(".main-menu");
    mainMenu.classList.toggle("show");
})