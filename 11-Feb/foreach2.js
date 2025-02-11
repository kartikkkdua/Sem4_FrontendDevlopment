const Employees = [
    {
        name: 'Kartik', age: 19,
        team: "CEO"
    },
    {
        name: 'Harshu', age: 19,
        team: "Kartik"
    },
    {
        name: 'abc', age: 21,
        team: "XYZ"
    }
];

// Using forEach loop.
Employees.forEach((Employees) => {
    console.log(
        `
${Employees.name}is ${Employees.age} years old
and is the part of ${Employees.team} team.\n
        `
    );
});
