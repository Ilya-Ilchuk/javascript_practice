const { filterActiveUsers } = require('./main');

describe('filterActiveUsers', () => {
    test('повертає масив імен активних користувачів старших за 18 років', () => {
        const users = [
            { name: "John", age: 25, subscription: "active" },
            { name: "Jane", age: 17, subscription: "inactive" },
            { name: "Alice", age: 30, subscription: "active" },
            { name: "Bob", age: 20, subscription: "inactive" },
            { name: "Charlie", age: 19, subscription: "active" },
        ];

        const result = filterActiveUsers(users);
        expect(result).toEqual(["John", "Alice", "Charlie"]);
    });
});
