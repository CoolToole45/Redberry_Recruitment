// All The Necessary Element Selectors
var leftTitle = document.getElementById('left-title');
var rightTitle = document.getElementById('right-title');
var rightText =  document.getElementById('right-text');
var groupOne = document.getElementById('group-one');
var groupTwo = document.getElementById('group-two');
var groupThree = document.getElementById('group-three');
var groupFour = document.getElementById('group-four');


// Render First Section Of Form
function renderPersonalInfo() {
    leftTitle.innerText = "Hey, Rocketeer, what are your coordinates?";
    rightTitle.innerText = "Redberry Origins";
    rightText.innerText = "You watch “What? Where? When?” Yeah. Our founders used to play it. That’s where they got a question about a famous American author and screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the exact name and he answered Ray Redberry. And at that moment, a name for a yet to be born company was inspired - Redberry 😇"
    
    groupOne.classList.remove('hidden');

    if(!groupTwo.classList.contains('hidden')) {
        groupTwo.classList.add('hidden');
    }
    
    if(!groupThree.classList.contains('hidden')) {
        groupThree.classList.add('hidden');
    }
    
    if(!groupFour.classList.contains('hidden')) {
        groupFour.classList.add('hidden');
    }

    document.getElementById('elipse2').style.opacity = 0.1
    document.getElementById('elipse3').style.opacity = 0.1
    document.getElementById('elipse4').style.opacity = 0.1

    document.querySelector('.right-side').style.height = "100vh";
}


// Render Second Section Of Form
function renderTechnicalSkillset() {
    leftTitle.innerText = "Tell us about your skills";
    rightTitle.innerText = "A bit about our battles";
    rightText.innerText = "As we said, Redberry has been on the field for quite some time now, and we have touched and embraced a variety of programming languages, technologies, philosophies, and frameworks. We are battle-tested in PHP Laravel Stack with Vue.js, refined in React, and allies with Serverside technologies like Docker and Kubernetes, and now we have set foot in the web3 industry."

    groupTwo.classList.remove('hidden');

    if(!groupOne.classList.contains('hidden')) {
        groupOne.classList.add('hidden');
    }

    if(!groupThree.classList.contains('hidden')) {
        groupThree.classList.add('hidden');
    }

    if(!groupFour.classList.contains('hidden')) {
        groupFour.classList.add('hidden');
    }

    document.getElementById('elipse2').style.opacity = 1;
    document.getElementById('elipse3').style.opacity = 0.1;
    document.getElementById('elipse4').style.opacity = 0.1

    document.querySelector('.right-side').style.height = "100vh";
}


// Render Third Section Of From
function renderCovidStuff() {
    leftTitle.innerText = "Covid Stuff";
    rightTitle.innerText = "Redberry Covid Policies";
    rightText.innerText = "As this infamous pandemic took over the world, we adjusted our working practices so that our employees can be as safe and comfortable as possible. We have a hybrid work environment, so you can either work from home or visit our lovely office on Sairme Street. If it was up to us, we would love you to see us in the office because we think face-to-face communications > Zoom meetings. Both on the fun and productivity scales.";

    groupThree.classList.remove('hidden');

    if(!groupOne.classList.contains('hidden')) {
        groupOne.classList.add('hidden');
    }

    if(!groupTwo.classList.contains('hidden')) {
        groupTwo.classList.add('hidden');
    }

    if(!groupFour.classList.contains('hidden')) {
        groupFour.classList.add('hidden');
    }

    document.getElementById('elipse2').style.opacity = 1;
    document.getElementById('elipse3').style.opacity = 1;
    document.getElementById('elipse4').style.opacity = 0.1

    document.querySelector('.right-side').style.height = "162vh";
}


function renderRedberrianInsights() {
    leftTitle.innerText = "What about you?";
    rightTitle.innerText = "Redberrian Insights";
    rightText.innerText = "We were soo much fun before the pandemic started! Parties almost every weekend and lavish employee birthday celebrations! Unfortunately, covid ruined that fun like it did almost everything else in the world. But we try our best to zhuzh it up a bit. For example, we host biweekly Devtalks where our senior and lead developers talk about topics they are passionate about. Previous topics have included Web3, NFT, Laravel 9, Kubernetes, etc. We hold these talks in the office but you can join our Zoom broadcast as well. Feel free to join either as an attendee or a speaker!";

    groupFour.classList.remove('hidden');

    if(!groupOne.classList.contains('hidden')) {
        groupOne.classList.add('hidden');
    }

    if(!groupTwo.classList.contains('hidden')) {
        groupTwo.classList.add('hidden');
    }

    if(!groupThree.classList.contains('hidden')) {
        groupThree.classList.add('hidden');
    }

    document.getElementById('elipse2').style.opacity = 1
    document.getElementById('elipse3').style.opacity = 1
    document.getElementById('elipse4').style.opacity = 1

    document.querySelector('.right-side').style.height = "125vh";
    // document.querySelector('.pagination').style.margin = "5rem";
}