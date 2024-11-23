# N/2-Dimensional Forest Visualizer

## Problem Statement
Sam is making a forest visualizer. An N-dimensional forest is represented by the pattern of size NxN filled with ‘*’. An N/2-dimensional forest is represented by the lower triangle of the pattern filled with ‘*’. For every value of ‘N’, help Sam to print the corresponding N/2-dimensional forest.

### Link
[Problem Link](https://www.naukri.com/code360/problems/n-2-forest_6570178)

## Examples
### Example 1
**Input**: `N = 3`  
**Output**:
`* `
`* *`
`* * *`


## Intuition
The function `nby2Forest(n)` uses nested loops to create a string representation of the lower triangular pattern. The outer loop iterates through each row, while the inner loop determines the number of asterisks to print in that row. The result is a visually appealing representation of the forest.

## Complexity Analysis
- **Time Complexity**: O(n^2) - The function performs a quadratic number of operations based on the input size `n`.
- **Space Complexity**: O(n) - The space used for the string representation of the forest.

## Usage
To visualize the forest, call the function with a desired value of `N`: