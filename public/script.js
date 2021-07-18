const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
const button3 = document.getElementById("button-3");
const illustratorImage = document.getElementById("illustrator-image");
const illustratorHeading = document.getElementById("illustrator-heading");
const illustratorText =  document.getElementById("illustrator-text");
const arrowButton = document.getElementsByClassName("arrow-button");
const answerElement = document.getElementsByClassName("answer");
const faqElements = document.querySelectorAll(".faq");
const navButton = document.querySelector(".nav-button");
const hamburgerButton = document.getElementById("hamburger-button");
const closeButton = document.getElementById("close-button");
const mobileNav = document.querySelector(".mobile-nav");


// button 1
button1.onclick = function(){
    illustratorHeading.innerText = "Bookmark in one click";
    illustratorText.innerText = "Organize your bookmark however you like. Our simple drak-and-drop interface gives you complete control over how you manage you favorite sites."
    illustratorImage.src = "./images/illustration-features-tab-1.svg";
}  

//button 2
button2.onclick = function(){
    illustratorHeading.innerText = "Intelligent Search";
    illustratorText.innerText = "Our powerful seach feature will help you find saved sites in no time at all. No need to travel through all your bookmars."
    illustratorImage.src = "./images/illustration-features-tab-2.svg";
}
//button 3

button3.onclick = function(){
    illustratorHeading.innerText = "Share you bookmarks";
    illustratorText.innerText = "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button";
    illustratorImage.src = "./images/illustration-features-tab-3.svg";
}
Object.values(navButton.children).forEach(button=>{
    button.onmouseover = function(){
        this.style.border = "1px solid #f95a5b";
        this.style.borderWidth = "0px 0px 3px 0px";
    }
    button.onmouseout = function(){
        this.style.borderWidth = "0px";
    }
})



Object.values(faqElements).forEach(faqElement=>{
    let arr = Object.values(faqElement.children);
    arr[0].children["1"].onclick = function(){
        faqElement.children["1"].classList.toggle("hidden");
        this.children["0"].classList.toggle("rotate-180");
        this.children["0"].classList.toggle("text-dark-red");
    }
});

hamburgerButton.onclick = function(){
    mobileNav.classList.remove("hidden");
    mobileNav.classList.add("block");
}
closeButton.onclick = function(){
    mobileNav.classList.add("hidden");
    mobileNav.classList.remove("block");
}
