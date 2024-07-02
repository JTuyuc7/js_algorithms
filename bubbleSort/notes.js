
//^ Elementary Sorting Algorithms
//* Objectives
//* Describe why sorting is useful
//* Implement bubble sort
//* Implement selection sort
//* Implement insertion sort
//* Implement quick sort
//* Implement merge sort
//* Implement radix sort
//* Implement a simple sorting algorithm at least once
//* Understand why it is important to learn these simpler sorting algorithms
//* Understand the limitations of these sorting algorithms

//^ Sorting
//* Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order.
//* Examples:
//* Sorting numbers from smallest to largest
//* Sorting names alphabetically
//* Sorting movies based on release year
//* Sorting movies based on revenue

//^ Why do we need to learn this?
//* Sorting is an incredibly common task, so it's good to know how it works
//* There are many different ways to sort things, and different techniques have their own advantages and disadvantages
//* Sorting sometimes has to be done in a very specific way, depending on the data you're working with

//^ JavaScript has a built-in sort method
//* The built-in sort method accepts an optional comparator function
//* You can use this comparator function to tell JavaScript how you want it to sort
//* The comparator looks at pairs of elements (a and b), determines their sort order based on the return value
//* If it returns a negative number, a should come before b
//* If it returns a positive number, a should come after b
//* If it returns 0, a and b are the same as far as the sort is concerned

function numberCompare(num1, num2) {
  return num1 - num2;
}

// console.log([6, 4, 15, 10].sort(numberCompare)); // [4, 6, 10, 15]

//^ Sort by string length
function compareByLen(str1, str2) {
  return str1.length - str2.length;
}

// console.log(['Steele', 'Colt', 'Data Structures', 'Algorithms'].sort(compareByLen)); // ["Colt", "Steele", "Algorithms", "Data Structures"]
//* if you want to sort in reverse order, you can just switch the order of str1 and str2 in the return statement

//& Visualgo.net for visualizing sorting algorithms
//& https://visualgo.net/en/sorting
//& https://www.toptal.com/developers/sorting-algorithms

//^ Bubble Sort
//* A sorting algorithm where the largest values bubble up to the top
//* It's not very efficient, but it's easy to understand
//* It's not commonly used in practice
//* The largest values "bubble" to the top
//* The time complexity is O(n^2)
//* The space complexity is O(1)

// ^ Bubble Sort Pseudocode
//* Start looping from the end of the array towards the beginning with a variable called i
//* Start an inner loop with a variable called j from the beginning until i - 1
//* If arr[j] is greater than arr[j+1], swap those two values!
//* Return the sorted array

//^ Bubble Sort Implementation