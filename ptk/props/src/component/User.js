import PropTypes from 'prop-types'


// function User(puropertiiii) {
//     console.log(puropertiiii);
//     return (

//         <div> {puropertiiii.isLoggedIn ? `${puropertiiii.name} ${puropertiiii.username} ${puropertiiii.text}` : " Giriş yap it"} </div>
//     )
// }

function User({ name, username, text, isLoggedIn, friends, address }) {


    if (!isLoggedIn) {

        return <h2>Giriş Yap Lan İt</h2>

    }



    return (


        <div>

            <h1>{
                `${name} ${username} ${text}`

            }</h1>

            {address.title} {address.zip}

            {
                friends && friends.map((friend, index) => ( //- eğer index vermezsek hata alacağız karışmaması için index verip aşağıda key olarak vermeliyiz eğer vermek istemiyorsak idleri vermeliyiz
                    <div key={friend.id}>{friend.name}</div>

                    //. istersek burada return edebiliriz keyfimiz bilir
                ))}
        </div>
    )
}
User.protoType = {
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number

    ]).isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    friends: PropTypes.array,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number
    })
}

User.defaultProps = {
    isLoggedIn: false
    //todo eğer isLoggedIn değeri yoksa default olarak false gönderir
}
//-yukarıdaki gibi ilk import ederek sonra bu şekilde değişkenlerimiizin tiplerini belirtebiliyoruz yanlış yazarsak hata verir
//. isrequeried ile zorunlu alan haline getirebiliriz  
export default User