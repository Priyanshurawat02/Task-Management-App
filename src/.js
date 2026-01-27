const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
    { id: 4, name: "David", age: 28 }
];

// 1. Find the user with id 3
const user = users.find(user => user.id ===3);

console.log(user);  // Should show Charlie's object

// 2. Find the first user older than 30
const olderUser = users.find(user => user.age > 30);

console.log(olderUser);

// 3. Find the user named "Bob"
const bob = users.find(user => user.name =="bob")

console.log(bob);