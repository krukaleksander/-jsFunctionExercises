// 1. Please write a function that shows the usage of closures
export const say =
  (greetMsg: string): ((name: string) => string) =>
  (name: string) =>
    `${greetMsg}, ${name}!`;
// 2. Please write a function that returns a sum of array items
// example input [9, 1, 22, 0, 2]
// example output 34
export const sumOfArray = (arr: number[]) =>
  arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

// 3. Please write a recursive function that flattens a list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]
export const flat = (exampleArray) =>
  exampleArray.reduce(
    (previousValue, currentValue) =>
      !Array.isArray(currentValue)
        ? previousValue.concat(currentValue)
        : previousValue.concat(flat(currentValue)),
    []
  );

// 4. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]

export const findCommonElements = (firstArray: unknown[], secondArray: unknown[]) => {
  const commonElements = [];
  firstArray.forEach(element => {
    secondArray.findIndex(item => item === element) > -1 ? commonElements.push(element) : undefined
  })
  return commonElements
};

// 5. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']

export const findDifferentElements = (firstArray: unknown[], secondArray: unknown[]): unknown[] => {
  const differenceFirstPerspective = secondArray.filter(elementFromSecondArray => !firstArray.includes(elementFromSecondArray))
  const differenceSecondPerspective = firstArray.filter(elementFromFirstArray => !secondArray.includes(elementFromFirstArray))
  return [...differenceFirstPerspective, ...differenceSecondPerspective]
};

// 6. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]

export const tuplesFrom = (firstArray: unknown[], secondArray: unknown[]) => {
  if(firstArray.length > secondArray.length) firstArray = firstArray.slice(0, secondArray.length)
  return firstArray.map((firstArrayElement, index) => [firstArrayElement, secondArray[index]])
};

// 7. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'
export const findValueAtPath = (path, object) => {
  let result = object;
  for (let i = 0; i < path.length; i++) {
    if( result[path[i]] === undefined) return undefined
    result = result[path[i]]
  }
  return result;
};
// 8. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false
export const compareObjects = (firstObject, secondObject): boolean => {
  let result = null;
  for (const property in firstObject) {
    if (result === false) return false
    result = property in secondObject && secondObject[property] === firstObject[property]
  }
  return result;
  };
// 9. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }
export const removeKeysFromObject = (keys, object) => {
  keys.forEach(key => delete object[key])
  return object;
};