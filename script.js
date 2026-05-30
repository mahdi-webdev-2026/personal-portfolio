console.log("Portfolio Loaded"); 
const typingElement =
    document.getElementById("typing-text");

const roles = [
    "Future Fachinformatiker",
    "Web Developer",
    "IT Enthusiast",
    "Problem Solver"
];

let roleIndex = 0;

setInterval(() => {

    roleIndex++;

    if(roleIndex >= roles.length){
        roleIndex = 0;
    }

    typingElement.textContent =
        roles[roleIndex];

}, 2500);