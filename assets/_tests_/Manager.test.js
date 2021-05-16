const testName = require("../js/script");

//Name
test('When entering an empty string into the function, throw error message', () => {
  expect(testName("")).toBe(`(Please enter a valid name)`);
});

test('When entering an number into the function, throw error message', () => {
  expect(testName("sf2gd")).toBe(`(Please enter a valid name)`);
});

test('When entering an special characrter into the function, throw error message', () => {
  expect(testName("sss][][d")).toBe(`(Please enter a valid name)`);
});

test('When entering a normal string, return true', () => {
  expect(testName("Bob")).toBe(true);
});
