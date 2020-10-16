const count = (function () {
	let counter = -1;
	return function () {
		counter++;
		return counter;
	};
})();

/* SOLUTION explanation:
I'm using a IIFE to solve this problem, the first function 
where I declared counter, is going to be called inmediately
following right after counter is going to have now a function
which is going to increment the counter and then return it, it's
remembering the counter variable because it is scoped inside that function*/

console.log(count());
console.log(count());
console.log(count());
console.log(count());
