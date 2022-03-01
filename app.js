// Active Page tracker.
var activePage = 1;

// Start questionnaire by hiding the welcome page.
function startQuest() {
    let mainSection = document.getElementById('main-section');
    mainSection.style.display = 'none';
}

// Titles and text selectors.
var leftTitle = document.getElementById('left-title');
var rightTitle = document.getElementById('right-title');
var rightText =  document.getElementById('right-text');


// Test Case!
document.getElementById('next').addEventListener('click', () => {
    leftTitle.innerText = "Tell us about your skills";
    rightTitle.innerText = "A bit about our battles";
    rightText.innerText = "As we said, Redberry has been on the field for quite some time now, and we have touched and embraced a variety of programming languages, technologies, philosophies, and frameworks. We are battle-tested in PHP Laravel Stack with Vue.js, refined in React, and allies with Serverside technologies like Docker and Kubernetes, and now we have set foot in the web3 industry."
})