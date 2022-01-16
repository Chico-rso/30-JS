const dogs = [
	{
		name: 'Snickers',
		age: 2
	},
	{
		name: 'Hugo',
		age: 8
	}
	];

	function makeGreen()
	{
		const p = document.querySelector('p');
		p.style.color = '#BADA55';
		p.style.fontSize = '50px';
	}

// Regular

// Interpolated

// Styled

// warning!
console.warn('ooo no');
// Error :|
console.error('shiit');
// Info
console.info('car is fast')
// Testing
const p = document.querySelector('p');
console.assert(1 === 2)
// clearing

// Viewing DOM Elements
console.log(p);
console.dir(p);
// Grouping together
dogs.forEach(dog =>
	{
		console.groupCollapsed(`${dog.name}`)
		console.log(`this is ${dog.name}`)
		console.log(`this is ${dog.age}`)
		console.groupEnd(`${dog.name}`)
	})
// counting

// timing
console.table(dogs)