// importing library packages and generateMarkdown file
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");


// questions for user
function promptUser() {
    return inquirer.prompt([{
            type: "input",
            message: "Please enter the title of your application:",
            name: "title"
        },
        {
            type: "input",
            message: "Please enter a brief description of your application:",
            name: "description"
        },
        {
            type: "input",
            message: "Please enter installation instructions for your application:",
            name: "installation"
        },
        {
            type: "input",
            message: "Please enter usage information for your application:",
            name: "usage"
        },
        {
            type: "input",
            message: "Please enter contribution guidelines for your application:",
            name: "contribution"
        },
        {
            type: "input",
            message: "Please enter test instructions for your application:",
            name: "test"
        },
        {
            type: "list",
            message: "Please select a license for your application:",
            choices: ["Apache 2.0 License", "Boost Software License 1.0", "Mozilla Public License 2.0", "Eclipse Public License 1.0"],
            name: "license"
        },
        {
            type: "input",
            message: "Please enter your GitHub username:",
            name: "username"
        },
        {
            type: "input",
            message: "Please enter your email address:",
            name: "email"
        }
    ])
};
promptUser()

    .then(data => {
        fs.writeFile("README.md", generateMarkdown(data), "utf8", function (err) {
            if (err) {
                console.log(err)
            }
        })
    });