import { capitalizeFirstLetter } from "./string";

describe("capitalizeFirstLetter", () => {
  test("it will test when passed string is valid value", () => {
    const value = "hats";

    const expectedValue = "Hats";

    const transformedValue = capitalizeFirstLetter(value);

    expect(transformedValue).toBe(expectedValue);
  });

  test("passed string is empty", () => {
    const value = "";
    const expectedValue = "";
    const transformedValue = capitalizeFirstLetter(value);
    expect(transformedValue).toBe(expectedValue);
  });

  test("passed value is undefined", () => {
    const value = undefined;
    const expectedValue = "";
    const transformedValue = capitalizeFirstLetter(value);
    expect(transformedValue).toBe(expectedValue);
  });

  test("passed value is empty object", () => {
    const value = {};
    const expectedValue = "";
    const transformedValue = capitalizeFirstLetter(value);
    expect(transformedValue).toBe(expectedValue);
  });
});
