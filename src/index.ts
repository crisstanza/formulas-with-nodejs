import { Formula } from "./types/types";

import { resolve } from "./functions/functions";

const formula: Formula = {
  operation: "+",
  operands: [
    1,
    2,
    {
      operation: "*",
      operands: [3, 4],
    },
  ],
};

const result = resolve(formula);
console.log("result is:", result);
