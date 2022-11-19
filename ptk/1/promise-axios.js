import axios from "axios";

// async function getData() {
//     const { data: users } = await axios("https://jsonplaceholder.typicode.com/users/1")

//     const { data: posts } = await axios("https://jsonplaceholder.typicode.com/posts/1")

//     const { data: posts2 } = await axios("https://jsonplaceholder.typicode.com/posts/2")



//     console.log(users, "users yüklendi");
//     console.log(posts, "posts yüklendi");
//     console.log(posts2, "posts 2 yüklendi");
// }

// getData()

const getUsers = () => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios("https://randomfox.ca/floof/")
        resolve(data)

        // reject('problem var')

    })
}

const getPost = (postId) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/posts/" + postId)
        resolve(data)

    })
}

// (async () => {
//     try {
//         const users = await getUsers()
// .then((data) => console.log(data))
// .catch((err) => console.log(err))


//         await getPost(2)
//             .then((data) => console.log(data))
//             .catch((err) => console.log(err))

//         console.log(users); //-uzun uzun yazacagımıza böyle kısacık edebilirz

//     } catch (err) {

//         console.log(err);
//     }


// })()

Promise.all([getUsers(), getPost(1)]).then(console.log).catch(console.log) //?farklı bir yöntemdir