/*
 A BigInt value cannot be used with methods in the built-in Math object and cannot be mixed with a Number 
 value in operations; they must be coerced to the same type. Be careful coercing values back and forth
 as the precision of a BigInt value may be lost when it is coerced to a Number value.

 2^53 - 1
  The reasoning behind that number is that JavaScript uses double-precision floating-point format
 numbers as specified in IEEE 754 and can only safely represent integers between -(2^53 - 1) and 2^53 - 1
*/

const maxNumber = Number.MAX_SAFE_INTEGER;

console.log('1', maxNumber);

const next = maxNumber + 1;
const next2 = maxNumber + 2;
const next3 = maxNumber + 3;

console.log('next', next);
console.log('next2', next2);
console.log('next3', next3);

console.log('S', Number.isSafeInteger(next));
console.log('S', Number.isSafeInteger(next2));
console.log('S', Number.isSafeInteger(next3));

const bi = BigInt(next);
const bi2 = BigInt(next2);
console.log('bi',bi );
console.log('bi',bi2 );
console.log('===',bi2  === bi);


const nbi1 = BigInt(Number.MAX_SAFE_INTEGER + 1);
const nbi2 = BigInt(Number.MAX_SAFE_INTEGER + 2);

console.log('', nbi1 === nbi1); // true

const rbi1 = BigInt(Number.MAX_SAFE_INTEGER) + 1n;
const rbi2 = BigInt(Number.MAX_SAFE_INTEGER) + 2n;

console.log('', rbi1 === rbi2);


0n === 0; // false
0n == 0; // true

5n / 2n // 2n

// console.log(1 + 1n);
// Cannot mix BigInt and other types, use explicit conversions

console.log(BigInt(1) + 1n);

// A Number value and a BigInt value may be compared as usual:
1n < 2
// ↪ true
2n > 1
// ↪ true
2 > 2
// ↪ false
2n > 2
// ↪ false
2n >= 2
// ↪ true

const mixed = [4n, 6, -12n, 10, 4, 0, 0n]
// mixed.sort((a, b) => a - b)
// won't work since subtraction will not work with mixed types
// TypeError: can't convert BigInt value to Number value

// the correct way:
// sort with an appropriate numeric comparator
mixed.sort((a, b) => (a < b) ? -1 : ((a > b) ? 1 : 0))
// ↪  [ -12n, 0, 0n, 4n, 4, 6, 10 ]



console.log('res":', Object(1) === Object(1));