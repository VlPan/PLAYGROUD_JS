function findUniq(arr) {
  const sorted = arr.sort();
  const last = sorted.length - 1;

  return sorted[0] !== sorted[1] ? sorted[0] : sorted[last];
}

console.log("findUniq([ 3, 10, 3, 3, 3 ]), 10", findUniq([3, 10, 3, 3, 3]));

/*
	function findUniq(arr) {
	return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
	}
*/