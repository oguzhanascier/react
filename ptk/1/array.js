const users = [

    { name: "Süleyman" },
    { name: "Zambak" },
    { name: "Fehmi" },
    { name: "Fehmi" },
]

/*
/push
/map
/find
/filter
/some
/every
/includes
*/

// users.push('Gökçe', 'Aleyna')
// console.log(users);

const filtered = users.filter(
    (item) => item.name === "Fehmi"
)

console.log(filtered);

// filtered.map(item => {
//     console.log(item.name);
// })
