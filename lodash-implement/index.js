function differentiate(array, array2) {
	const result = [];
	array.forEach(element => {
		if(!array2.includes(element)) {
			result.push(element);
		}
	});

	return result;
}

// console.log(differentiate([2, 1, 3, 4], [2, 3]))

function differenceBy(arr1, arr2, iteratee) {
	const result = [];
	arr1.forEach((el) => {
		const elToCompare = iteratee(el);

		if(!(arr2.some(el2 => iteratee(el2) === elToCompare))) {
			result.push(el);
		};
	})

	return result;
}

// console.log(differenceBy([2s.1, 1.2, 3], [2.1, 3.4], (el) => el + 5));
// => [1.2]


function differenceWith(arr1, arr2, compareFn) {
	const result = [];
	arr1.forEach((el1) => {
		arr2.forEach((el2) => {
			if(!compareFn(el1, el2)) {
				result.push(el1);
			}
		})
	})

	return result;
}


// function drop(arr, n = 1) {
// 	const copy = [...arr];
// 	copy.splice(0, n);

// 	return copy;
// }

// console.log(drop([1, 2, 3]));
// // => [2, 3]
 
// console.log(drop([1, 2, 3], 2));
// // => [3]
 
// console.log(drop([1, 2, 3], 5));
// // => []
 
// console.log(drop([1, 2, 3], 0));
// // => [1, 2, 3]



function dropRight(arr, n = 1) {
	const copy = [...arr];
	for(let i = 0; i < n; i++) {
		const last = arr.length - 1;
		const mirrorIndex = (last - i);
		copy.splice(mirrorIndex, 1);
	}

	return copy;
}

// console.log(dropRight([1, 2, 3]));
 
// console.log(dropRight([1, 2, 3], 2));
 
// console.log(dropRight([1, 2, 3], 5));
 
// console.log(dropRight([1, 2, 3], 0));

function dropRightWhile(array, predicateFn) {
	const copy = [...array];
	const last = array.length - 1;
	for (var i = last, length = array.length; i < length; i--) {
		const shouldBreak = !predicateFn(array[i], i, array);
		if(shouldBreak) {
			break;
		}

		copy.splice(i, 1);
	}

	return copy;
}

var users = [
	{ 'user': 'barney',  'active': true },
	{ 'user': 'fred',    'active': false },
	{ 'user': 'pebbles', 'active': false }
  ];
   
  console.log(dropRightWhile(users, function(o) { return !o.active; }));
  // => objects for ['barney']
   
//   // The `console.log(matches` iteratee shorthand.
//   console.log(dropRightWhile(users, { 'user': 'pebbles', 'active': false }));
//   // => objects for ['barney', 'fred']
   
//   // The `console.log(matchesProperty` iteratee shorthand.
//   console.log(dropRightWhile(users, ['active', false]));
//   // => objects for ['barney']
   
//   // The `console.log(property` iteratee shorthand.
//   console.log(dropRightWhile(users, 'active'));
//   // => objects for ['barney', 'fred', 'pebbles']