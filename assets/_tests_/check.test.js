const { describe } = require("yargs");
var tests = require("../js/script");



//to run test: type 'npm run test' into command line and then pressing "a".



//Test Name 
test('When entering an empty string into the function, throw error message', () => {
  expect(tests.testName("")).toBe(`(Please enter a valid name)`);
});

test('When entering an number into the function, throw error message', () => {
  expect(tests.testName("sf2gd")).toBe(`(Please enter a valid name)`);
});

test('When entering an special character into the function, throw error message', () => {
  expect(tests.testName("sss][][d")).toBe(`(Please enter a valid name)`);
});

test('When entering a normal string, return true', () => {
  expect(tests.testName("Bob")).toBe(true);
});


//Test ID
test('When entering an empty string into the function, throw error message', () => {
  expect(tests.testID("")).toBe(`(Please enter a valid id)`);
});

test('When entering an special character into the function, throw error message', () => {
  expect(tests.testID("sss][][d")).toBe(`(Please enter a valid id)`);
});

test('When entering a normal string, return true', () => {
  expect(tests.testID("45654")).toBe(true);
});


//Test Email
test('When entering an empty string into the function, throw error message', () => {
  expect(tests.testEmail("")).toBe(`(Please enter a valid email)`);
});

test(`When i don't include the "@" character, throw error message`, () => {
  expect(tests.testEmail("sssdfdf")).toBe(`(Please enter a valid email)`);
});

test(`When i don't include the "." character, throw error message`, () => {
  expect(tests.testEmail("dfdsgf@kdfskf")).toBe(`(Please enter a valid email)`);
});

test(`When i don't include the proper format, throw error message`, () => {
  expect(tests.testEmail("asds.asd@asd")).toBe(`(Please enter a valid email)`);
});

test('When entering a normal string + "@" + string + "." + string, return true', () => {
  expect(tests.testEmail("afa5458@asd.com")).toBe(true);
});

//Test Office Number office number
test('When entering an empty string into the function, throw error message', () => {
  expect(tests.testOffice("")).toBe(`(Please enter a valid office number)`);
});

test('When entering an special character into the function, throw error message', () => {
  expect(tests.testOffice("sss][][d")).toBe(`(Please enter a valid office number)`);
});

test('When entering just numbers, return true', () => {
  expect(tests.testOffice("45654")).toBe(true);
});


