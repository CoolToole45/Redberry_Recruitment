// Active Page tracker.
var activePage = 0;
console.log(activePage);

// All the necessary selectors.
var leftTitle = document.getElementById('left-title');
var rightTitle = document.getElementById('right-title');
var rightText =  document.getElementById('right-text');
var groupOne = document.getElementById('group-one');
var groupTwo = document.getElementById('group-two');
var groupThree = document.getElementById('group-three');


function renderPersonalInfo() {
    leftTitle.innerText = "Hey, Rocketeer, what are your coordinates?";
    rightTitle.innerText = "Redberry Origins";
    rightText.innerText = "You watch “What? Where? When?” Yeah. Our founders used to play it. That’s where they got a question about a famous American author and screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the exact name and he answered Ray Redberry. And at that moment, a name for a yet to be born company was inspired - Redberry 😇"
    if(groupOne.classList.contains('hidden')) {
        groupOne.classList.remove('hidden');
    }
    groupTwo.classList.add('hidden');
    document.getElementById('elipse2').style.opacity = 0.1
}


function renderTechnicalSkillset() {
    leftTitle.innerText = "Tell us about your skills";
    rightTitle.innerText = "A bit about our battles";
    rightText.innerText = "As we said, Redberry has been on the field for quite some time now, and we have touched and embraced a variety of programming languages, technologies, philosophies, and frameworks. We are battle-tested in PHP Laravel Stack with Vue.js, refined in React, and allies with Serverside technologies like Docker and Kubernetes, and now we have set foot in the web3 industry."
    groupOne.classList.add('hidden');
    groupTwo.classList.remove('hidden');
    document.getElementById('elipse2').style.opacity = 1;
}


// function renderCovidStuff() {
//     leftTitle.innerText = "Covid Stuff";
//     rightTitle.innerText = "Redberry Covid Policies";
//     rightText.innerText = "As this infamous pandemic took over the world, we adjusted our working practices so that our employees can be as safe and comfortable as possible. We have a hybrid work environment, so you can either work from home or visit our lovely office on Sairme Street. If it was up to us, we would love you to see us in the office because we think face-to-face communications > Zoom meetings. Both on the fun and productivity scales.";
//     if(!groupOne.classList.contains('hidden')) {
//         groupOne.classList.add('hidden');
//     }
//     if(!groupTwo.classList.contains('hidden')) {
//         groupTwo.classList.add('hidden');
//     }
//     groupThree.classList.remove('hidden');
// }


let skills = [];
const selectDropdown = document.getElementById('select-dropdown');
const url = 'https://bootcamp-2022.devtest.ge/api/skills'

fetch(url)
    .then(response => response.json())
    .then(data => {
        skills = data.map(skill => `<option value=${skill.title}>${skill.title}</option>`).join('\n');

        selectDropdown.innerHTML = skills;
    })