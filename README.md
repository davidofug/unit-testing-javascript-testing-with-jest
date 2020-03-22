# Test using Jest in JavaScript

# 1. Using this repo

- Clone `$git clone https://github.com/davidofug/unit-testing-javascript-testing-with-jest.git`
- Change directory  `$cd unit-testing-javascript-testing-with-jest`
- `$npm install`
- `$npm test` to run tests manually
- `$npm testWatch` to automate the test whenever a file changes and/or depending on your custom conditions.

# 2. Setting up your test enviroment

### What is Jest

Jest is a JavaScript framework which enables a developer to perform different kinds of tests on their code to ensure that the code runs as expected.

### Installing Jest

Jest is node package manager (npm), so we can add it to our project using the normal npm install feature or using yarn.

- You need node and npm installed, if you don't have them, visit https://nodejs.org website to download and install node LTS for your particular operating system (os).

- Next, initialize a nodejs project. e.g: `$npm init` or `$npm init -y`
- Add jest package to your node project dev dependencies using the famous `$npm i --save-dev <package-name>` or `$npm install <package-name> --save-dev` if you prefer using yarn then it should be `$yarn add --dev <package-name>`
- So you will do `$npm i --save-dev jest` of `$yarn add --dev jest`

### Usage:
1.  Create a javasript file you may want to test.
2.  Create a test suite which is the file where tests are written. The name of file should follow this pattern `file-you-want-to-test.test.js`

### Example filenames:

`project-dir/login.js`

`project-dir/login.test.js`

That is to say; you will write the code to best tested in login.js and write test cases in login.test.js.

### Enabling jest

- Open `package.json` file
- In the scripts key, set the test key to jest. So it will be like this `"test":"jest"`

### Testing

- Run `$npm test`

Learn more about jest at https://jestjs.io/docs/en/getting-started

Special thanks to @bradtraversy