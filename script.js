let navMenuIcon = document.getElementById("nav-menu");
const screenBlank = document.getElementById("blank");
// const header = document.getElementById("header-menu");
const sidebar = document.getElementById("sidebar-container");
// const xIcon = document.getElementById("x-icon");



// nav script
navMenuIcon.addEventListener("click", function displayNav(params) {
    sidebar.classList.add("sidebar-container--active")
    })

function removeNav(){
    sidebar.classList.remove("sidebar-container--active")
}

//radio and check dropdown
const  checkDd = document.getElementById("span-dropdown");
const radioWrapper = document.getElementById("radio-wrapper");

checkDd.addEventListener("click", function radioDrop(params) {
    radioWrapper.classList.toggle("radio-check-wrapper--active");
    
})


// icon and sticker select
const icon = document.getElementById("radio-icon");
const sticker = document.getElementById("stickers")
const checkBox = document.getElementById("checkbox")
const form = document.getElementById("form");


icon.addEventListener("click", function x(params) {
    radioWrapper.classList.remove("radio-check-wrapper--active")
    if (icon.click) {
        form.textContent = " Icon "}
    } );
    sticker.addEventListener("click", function x(params) {
        radioWrapper.classList.remove("radio-check-wrapper--active")
        if (sticker.click) {
            form.textContent = " stickers "}
        } );
        checkBox.addEventListener("click", function x(params) {
            radioWrapper.classList.remove("radio-check-wrapper--active")
            if (checkBox.click) {
            let check = document.getElementById("form").innerText;
            if (!check.includes("packs")) {
                check += " packs";
                form.textContent = check
                console.log(check);
            }else{
                
            }
            
            // return `${dropDisplay} + "packs"`
        }
} );

// icon search script
const inputText = document.getElementById("search");
const clearInput = document.getElementById("clear-text");
inputText.addEventListener("click", function clearText(params) {
    clearInput.classList.toggle("clear-text--active")
    if (clearInput.click) {
        const typeText = document.getElementById("search").value;
        console.log(typeText);
        
        }
    
})
    




//footer dropdown
const firstDd = document.getElementById("dropdown-1");
const secondDd = document.getElementById("dropdown-2");
const thirdDd = document.getElementById("dropdown-3");
const fourthDd = document.getElementById("dropdown-4");

const firstdl = document.getElementById("footer-list-1");
const seconddl = document.getElementById("footer-list-2");
const thirddl = document.getElementById("footer-list-3");
const fourthdl = document.getElementById("footer-list-4");

firstDd.addEventListener("click", function firstDrop(params) {
    firstdl.classList.toggle("footer-ii-ul--active");
})
secondDd.addEventListener("click", function secondDrop(params) {
    seconddl.classList.toggle("footer-ii-ul--active");
})
thirdDd.addEventListener("click", function thirdDrop(params) {
    thirddl.classList.toggle("footer-ii-ul--active");
})
fourthDd.addEventListener("click", function fourthDrop(params) {
    fourthdl.classList.toggle("footer-ii-ul--active");
})


// slide
const slideBar = document.getElementById("slide");
const slidePanel = document.getElementById("slide-panel");

slidePanel.addEventListener("click", function slide(params) {
    slideBar.classList.toggle("slide--active");
    console.log(slide);
})