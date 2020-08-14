// license choices
function licenseBadge(license) {
  switch (license) {
    case "Apache 2.0 License":
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      break;
    case "Boost Software License 1.0":
      return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
      break;
    case "Mozilla Public License 2.0":
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
      break;
    case "Eclipse Public License 1.0":
      return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
      break;
    default:
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${licenseBadge(data.license)}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

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
${data.title} is released under the ${data.license}

## Questions
For questions or concerns regarding ${data.title}, please contact me via GitHub or email:

* GitHub: https://github.com/${data.username}
* Email: ${data.email}
`
}

module.exports = generateMarkdown;