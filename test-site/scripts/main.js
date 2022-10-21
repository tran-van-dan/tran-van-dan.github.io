const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/Dog_Breeds.jpg") {
        myImage.setAttribute("src", "images/yourLieInApril.jpg");
    } else {
        myImage.setAttribute("src", "images/Dog_Breeds.jpg");
    }
};

let myButton = document.querySelector("button");

let myHeading = document.querySelector("h1");

function setTitle() {
    const myTitle = prompt("Enter your title.");
    if (!myTitle) {
        setTitle();
    } else {
        localStorage.setItem("title", myTitle);
        myHeading.textContent = `Wellcome to ${myTitle}`;
    };
};

if (!localStorage.getItem("title")) {
    setTitle();
} else {
    const storedTitle = localStorage.getItem("title");
    myHeading.textContent = `Wellcome to ${storedTitle}`;
};

myButton.onclick = () => {
    setTitle();
};

