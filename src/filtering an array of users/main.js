module.exports = { filterActiveUsers }

const users = [
    { name: "John", age: 25, subscription: "active" },
    { name: "Jane", age: 17, subscription: "inactive" },
    { name: "Alice", age: 30, subscription: "active" },
    { name: "Bob", age: 20, subscription: "inactive" },
    { name: "Charlie", age: 19, subscription: "active" },
];

console.log(filterActiveUsers(users));

// output ["John", "Alice", "Charlie"]

// write your code here
