import { Formula } from "../types/types";

export function resolve(parentOperand: Formula | number): number {
  if (typeof parentOperand === "number") {
    return parentOperand as number;
  }

  const formula: Formula = parentOperand as Formula;

  if (formula.operation == "+") {
    let total: number = 0;
    formula.operands.forEach((operand) => {
      total += resolve(operand);
    });
    return total;
  }

  if (formula.operation == "*") {
    let total: number = 1;
    formula.operands.forEach((operand) => {
      total *= resolve(operand);
    });
    return total;
  }

  throw new Error("Unknown operation");
}
