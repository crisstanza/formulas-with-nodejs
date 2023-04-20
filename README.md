# Formulas with NodeJS

(this is only a _POC_ / test / example)

<br>

Example:
--------

	{
		"operation": "+",
		"operands": [
			1, 2, {"operation": "*", "operands": [3, 4]}
		]
	}

Result: **15**

Explanation: this Json represents the expression: `1 + 2 + (3 * 4)`

<br>

How to Run:
-----------

	npm start

<br><br>

See also:

- https://www.markdownguide.org/basic-syntax/
