import { Calculator } from "../src/calculator";

describe("Calculator", () => {
  test("Addition", () => {
    expect(Calculator.add(2, 3)).toBe(5);
  });

  test("Subtraction", () => {
    expect(Calculator.subtract(5, 3)).toBe(2);
  });

  test("Multiplication", () => {
    expect(Calculator.multiply(2, 3)).toBe(6);
  });

  test("Division", () => {
    expect(Calculator.divide(6, 3)).toBe(2);
  });

  test("Division by zero", () => {
    expect(() => Calculator.divide(6, 0)).toThrow("Division by zero is not allowed.");
  });
});
