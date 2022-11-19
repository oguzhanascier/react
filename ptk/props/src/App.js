import './App.css';
import User from './component/User';
const friends = [
  { id: 1, name: 'ahmet' },
  { id: 2, name: 'mehmet' },
  { id: 3, name: 'ali' },
  { id: 4, name: 'veli' },
  { id: 5, name: 'cengiz' },
]

function App() {
  return (
    <User name="Ali Veli"
      username="Konya"
      text="Emret Komutanım"
      friends={friends}
      // isLoggedIn={ }
      address={{
        title: "Pamukkale / Denizli",
        zip: 201000
      }}
    >

    </User>


    // - burada yazdıgımız name user.js sayfasına parametre olarak düşecektik değeri de Ali Veli olacaktır
  );
}

export default App;
