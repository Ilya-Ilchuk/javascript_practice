module.exports = { filterActiveUsers }

const dataFromServer = [
    { name: "John", age: 25, subscription: "active" },
    { name: "Jane", age: 17, subscription: "inactive" },
    { name: "Alice", age: 30, subscription: "active" },
    { name: "Bob", age: 20, subscription: "inactive" },
    { name: "Charlie", age: 19, subscription: "active" },
];

console.log(filterActiveUsers(dataFromServer));

// output ["John", "Alice", "Charlie"]

function filterActiveUsers(data) {
    return data
        .filter(user => user.age > 18 && user.subscription === 'active')
        .map(user => user.name)
}