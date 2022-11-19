// const eee = function topla(a, b) {
//     return a + b
// }


// const topla = (a, b) => {
//     return a + b
// }

const hello = (naMe) => {
    console.log(`hello ${naMe}`);
}

const topla = (a, b) => a + b
const cikar = (a, b) => a - b
const user = {
    name: "Oğuzhan",
    surname: "Aşcıer"
}
const users = [{
    name: "Ali",
    surname: "Veli",
    city: "Konya",
    text: "Emret Komutanım,",
    textTwo: "Diyeceksin!",
}]


export {
    topla,
    cikar,
    user,
    users
}

export default hello;


//-defaultu import ederken istediğimiz bir param ile çekebiliriz