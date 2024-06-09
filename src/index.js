import _ from "lodash";

const obj1 = {
  name: "Steve",
  stack: {
    web: "react",
    mobile: "react native",
    backend: "nodejs",
  },
  numbers: new Set([1, 2, 3, 4]),
  greet: () => "hello",
};

// Copy by reference
// const obj2 = obj1;

// Shallow copy
// const obj2 = Object.assign({}, obj1);
// const obj2 = { ...obj1 };

// Deep copy
// const obj2 = JSON.parse(JSON.stringify(obj1));
// Supports other data types like Set, Map, etc.
// const obj2 = structuredClone(obj1);
// Supports Functions
const obj2 = _.cloneDeep(obj1);

obj2.name = "Louis";
obj2.stack.backend = "golang";

console.log(obj1);
console.log(obj2);

const arr1 = [10, [20, 30]];

// Copy by reference
// const arr2 = arr1;

// Shallow copy
// const arr2 = [...arr1];

// Deep copy
// const arr2 = structuredClone(arr1);

// arr2[1].push(500);

// console.log(arr1);
// console.log(arr2);
