export type Formula = {
  operation: string;
  operands: (Formula | number)[];
};
