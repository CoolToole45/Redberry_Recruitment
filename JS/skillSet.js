// Prevent "add-skill" Button From Refreshing The Page
document.getElementById('add-skill').addEventListener('click', e => {
    e.preventDefault();
})

// Populate Skillset Dropdown Selector
let skills = [];
const selectDropdown = document.getElementById('select-dropdown');
const url = 'https://bootcamp-2022.devtest.ge/api/skills'

fetch(url)
    .then(response => response.json())
    .then(data => {
        skills = data.map(skill => 
            `<option value=${skill.title}>${skill.title}</option>`).join('\n');

        selectDropdown.innerHTML = skills;
})

// Get Skill Text Value
function addSkillFN() {
    let skillValue = document.getElementById('select-dropdown').value;
    let yearValue = document.getElementById('years').value;

    // Create Delete Button To Remove Selected Skill+Exp
    const delBtn = document.createElement('img');
    delBtn.setAttribute('src', 'Img/Remove.svg');
    delBtn.classList.add('del-btn');
    delBtn.addEventListener('click', () => {
        chosenSkill.remove();
    })

    // Grab Values And Put Them In a "p", Then "skills-output" div
    const chosenSkill = document.createElement('p');
    chosenSkill.append(skillValue + " Years of Experience: " + yearValue, delBtn);
    chosenSkill.classList.add('chosen-skill');
    document.querySelector('.skills-output').append(chosenSkill);

    // Limit To The Number Of Available Skill Listings
    if(document.querySelector('.skills-output').childElementCount > 7) {
        document.getElementById('add-skill').removeAttribute('onclick');
    }

    // Increase Height When Screen Gets Sctreched
    if(document.querySelector('.skills-output').childElementCount > 4) {
        document.querySelector('.right-side').style.height = "130vh";
    }
}