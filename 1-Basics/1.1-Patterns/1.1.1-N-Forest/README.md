[text](https://www.naukri.com/code360/problems/n-forest_6570177)

## N-Forest Pattern Generator

This document describes a JavaScript function that generates an n x n square pattern of asterisks.


**N-Forest Pattern Generator**: 
Write a JavaScript function that generates an n x n square pattern of asterisks (`*`). The function should take a single integer input `n`, which represents both the number of rows and columns in the square pattern.

**Example:**
Input: ‘N’ = 3

Output: 
* * *
* * *
* * *

### Intuition

The function uses nested loops to create the pattern. Here's how it works:

1. **Outer Loop**: This loop iterates `n` times, where each iteration corresponds to a row in the square pattern.
2. **Inner Loop**: For each iteration of the outer loop, this loop also iterates `n` times, adding an asterisk followed by a space (`* `) to the output string for each column in the current row.
3. **Newline Character**: After completing the inner loop for a row, a newline character (`\n`) is added to the output string to move to the next line.

### Example Walkthrough

Let's consider an example where `n = 3`:

- **Iteration 1 (i = 0)**:
  - Inner loop runs (j = 0 to 2):
    - `forest += '* '` → `forest = '* * * '`
  - After inner loop, add newline → `forest = '* * * \n'`

- **Iteration 2 (i = 1)**:
  - Inner loop runs (j = 0 to 2):
    - `forest += '* '` → `forest = '* * * \n* * * '`
  - After inner loop, add newline → `forest = '* * * \n* * * \n'`

- **Iteration 3 (i = 2)**:
  - Inner loop runs (j = 0 to 2):
    - `forest += '* '` → `forest = '* * * \n* * * \n* * * '`
  - After inner loop, add newline → `forest = '* * * \n* * * \n* * * \n'`

The final output for `n = 3` will be:

### Examples

| Input | Output               |
|-------|----------------------|
| 1     | `*`                  |
| 2     | `* * `               |
|       | `* * `               |
| 3     | `* * * `             |
|       | `* * * `             |
|       | `* * * `             |
| 4     | `* * * * `           |
|       | `* * * * `           |
|       | `* * * * `           |
|       | `* * * * `           |

### Time and Space Complexity

* **Time Complexity:** O(n²) - Due to the nested loops, the time taken increases quadratically with the input `n`.
* **Space Complexity:** O(n²) - The space used to store the output string is proportional to the number of characters in the n x n pattern.

