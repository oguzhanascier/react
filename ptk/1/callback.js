// const sayHi = (cb) => {
//     cb()
// }

// sayHi(() => {
//     console.log('hello');
// })

import fetch from "node-fetch"


// fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then((data) => data.json())
//     .then((users) => {
//         console.log(users, "users yüklendi");
//         fetch("https://jsonplaceholder.typicode.com/posts/1")
//             .then((data) => data.json())
//             .then((posts) => {
//                 console.log(posts, "posts yüklendi");
//             })
//         fetch("https://jsonplaceholder.typicode.com/posts/2")
//             .then((data) => data.json())
//             .then((posts) => {
//                 console.log(posts, "posts 2 yüklendi");
//             })
//     })

async function getData() {
    const users = await (await fetch("https://randomfox.ca/floof/")).json()
    console.log(users, "users yüklendi");

    const posts = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()
    console.log(posts, "posts yüklendi");
    const posts2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json()
    console.log(posts2, "posts 2 yüklendi");
}

getData()