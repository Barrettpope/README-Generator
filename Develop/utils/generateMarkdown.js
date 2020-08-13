// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents
1. [Description] (#description)
2. [Installation] (#installation)
3. [Usage] (#usage)
4. [Contributing] (#contribution)
5. [Tests] (#test)
6. [License] (#license)
7. [Questions] (#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Tests
${data.test}

## License
${data.license}

## Questions
For questions or concerns regarding the README-Generator, please contact me via GitHub or email.

GitHub: @${data.username}
Email: ${data.email}
`
}

module.exports = generateMarkdown;