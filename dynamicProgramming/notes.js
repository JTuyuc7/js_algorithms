// ^ Dynamic Programming (A ligth introduction)

// & Objectives
// * Define what dynamic programming is
// * Explain what overlapping subproblems are
// * Understand what optimal substructure is
// * Solve more complex problems using dynamic programming

// & What is dynamic programming?
// * A method for solving complex problems by breaking them down into simpler subproblems.
// * It is applicable when the problem can be broken down into overlapping subproblems.

// * A method for solving complex problems by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions.

//  & Where does the name come from?
// * Richard Bellman, 1950s
// * "Programming" refers to a tabular method (not writing code)

// ^ It only works on problems with optimal substructure and overlapping subproblems

// & Overlapping Subproblems
// * A problem is said to have overlapping subproblems if it can be broken down into subproblems which are reused several times.

// & Optimal Substructure
// * A problem is said to have optimal substructure if an optimal solution can be constructed from optimal solutions of its subproblems.

// ^ Memoization
// * Storing the results of expensive function calls and returning the cached result when the same inputs occur again.

// ^ Tabulation
// * Storing the result of a previous result in a "table" (usually an array)
// * Usually done using iteration
// * Better space complexity can be achieved using tabulation