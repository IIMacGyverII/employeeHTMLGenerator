const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
    {
    type: 'input',
    name: 'managerName',
    message: 'What is the managers name?',
    },
    {
    type: 'input',
    message: 'What is the managers email?',
    name: 'managerEmail',
    },
    {
    type: 'input',
    name: 'firstEngineerName',
    message: 'What is the first engineers name?',
    },
    {
    type: 'input',
    message: 'What is the first engineers email?',
    name: 'firstEngineerEmail',
    },
    {
    type: 'input',
    message: 'What is the first engineers github name?',
    name: 'firstEngineerGithub',
    },
    {
    type: 'input',
    name: 'secondEngineerName',
    message: 'What is the second engineers name?',
    },
    {
    type: 'input',
    message: 'What is the second engineers email?',
    name: 'secondEngineerEmail',
    },
    {
    type: 'input',
    message: 'What is the second engineers github name?',
    name: 'secondEngineerGithub',
    },
    {
    type: 'input',
    name: 'thirdEngineerName',
    message: 'What is the third engineers name?',
    },
    {
    type: 'input',
    message: 'What is the third engineers email?',
    name: 'thirdEngineerEmail',
    },
    {
    type: 'input',
    message: 'What is the third engineers github name?',
    name: 'thirdEngineerGithub',
    },
    {
    type: 'input',
    name: 'iternName',
    message: 'What is the iterns name?',
    },
    {
    type: 'input',
    message: 'What is the iterns email?',
    name: 'iternEmail',
    },
    {
    type: 'input',
    message: 'What is the iterns school?',
    name: 'iternSchool',
    },
])

.then((response) =>
    {
        let content = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Profile Generator</title>
    <link rel="stylesheet" href="./asests/css/style.css">
</head>
<body>
    <section class="header">
        <h1>My Team</h1>
    </section>
    <section class="pageFlexBox">
        <section class="topRow">
            <section class="card" id="card1">
                <div class="cardHeader">
                    <p class="card1Name">${response.managerName}</p>
                    <div>
                        <img class="card1Icon" src="./asests/images/coffeecupbig.png" width="32px" height="32px"></img><span class="span">Manager</span>
                    </div>                
                </div>
                <div class="cardContent">
                    <div class="cardTextBox">
                        <p class="card1ID">ID: 1</p>
                    </div>
                    <div class="cardTextBox">
                        <p class="card1Email">Email:<a href="mailto:${response.managerEmail}">${response.managerEmail}</a></p>
                    </div>
                    <div class="cardTextBox">
                        <p class="card1ContactType">Office Number: 1</p>
                    </div>
                </div>                
            </section>
            <section class="card" id="card2">
                <div class="cardHeader">
                    <p class="card2Name">${response.firstEngineerName}</p>
                    <div>
                        <img class="card2Icon" src="./asests/images/glasses.png" width="32px" height="16px"></img><span class="span">Engineer</span>
                    </div>                
                </div>
                <div class="cardContent">
                    <div class="cardTextBox">
                        <p class="card2ID">ID: 2</p>
                    </div>
                    <div class="cardTextBox">
                        <p class="card1Email">Email:<a href="mailto:${response.firstEngineerEmail}">${response.firstEngineerEmail}</a></p>
                    </div>
                    <div class="cardTextBox">
                        <p class="card1Email">GitHub:<a href="https://github.com/${response.firstEngineerGithub}">${response.firstEngineerGithub}</a></p>
                    </div>
                </div>                
            </section>
            <section class="card" id="card3">
                <div class="cardHeader">
                    <p class="card3Name">${response.secondEngineerName}</p>
                    <div>
                        <img class="card3Icon" src="./asests/images/glasses.png" width="32px" height="16px"></img><span class="span">Engineer</span>
                    </div>                
                </div>
                <div class="cardContent">
                    <div class="cardTextBox">
                        <p class="card3ID">ID: 3</p>
                    </div>
                    <div class="cardTextBox">
                        <p class="card1Email">Email:<a href="mailto:${response.secondEngineerEmail}">${response.secondEngineerEmail}</a></p>
                    </div>
                    <div class="cardTextBox">
                        <p class="card1Email">GitHub:<a href="https://github.com/${response.secondEngineerGithub}">${response.secondEngineerGithub}</a></p>
                    </div>
                </div>                
            </section>
        </section>
        <section class="bottomRow">
            <section class="card" id="card4">
                <div class="cardHeader">
                    <p class="card4Name">${response.thirdEngineerName}</p>
                    <div>
                        <img class="card4Icon" src="./asests/images/glasses.png" width="32px" height="16px"></img><span class="span">Engineer</span>
                    </div>                
                </div>
                <div class="cardContent">
                    <div class="cardTextBox">
                        <p class="card4ID">ID: 4</p>
                    </div>
                    <div class="cardTextBox">
                        <p class="card1Email">Email:<a href="mailto:${response.thirdEngineerEmail}">${response.thirdEngineerEmail}</a></p>
                    </div>
                    <div class="cardTextBox">
                    <p class="card1Email">GitHub:<a href="https://github.com/${response.thirdEngineerGithub}">${response.thirdEngineerGithub}</a></p>
                    </div>
                </div>                
            </section>
            <section class="card" id="card5">
                <div class="cardHeader">
                    <p class="card5Name">${response.iternName}</p>
                    <div>
                        <img class="card5Icon" src="./asests/images/intern.png" width="32px" height="32px"></img><span class="span">Intern</span>
                    </div>                
                </div>
                <div class="cardContent">
                    <div class="cardTextBox">
                        <p class="card5ID">ID: 5</p>
                    </div>
                    <div class="cardTextBox">
                        <p class="card1Email">Email:<a href="mailto:${response.iternEmail}">${response.iternEmail}</a></p>
                    </div>
                    <div class="cardTextBox">
                        <p class="card5ContactType">School: ${response.iternSchool}</p>
                    </div>
                </div>                
            </section>
        </section>
    </section>
</body>
</html>`;
fs.writeFile('index.html', content, (error) => console.error(error))
})

