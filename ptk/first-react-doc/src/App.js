import './App.css';
// import Header from './components/header'


const name = "Oğuzhan"
const surname = "Aşcıer"
const isLoggedIn = false;

function App() {
  return (
    <div>

      <h1>`{name} {surname}`</h1>

      {/* //- koşullular */}
      <h1>{isLoggedIn && ` Adam gibi adam ${name} ${surname}`}</h1>
      {!isLoggedIn && "Giriş Yapmalısınız"}

      {/* <h1>{isLoggedIn ? ` Adam gibi adam ${name} ${surname}` : "Giriş Yapmalısınız"}</h1> */}
      {/* //------------------------------------------------------------------------------ */}

      {/* <Header></Header>
      <p className='lahmacun'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis ea vitae minus sit voluptatem vel, id in repellat fugit hic non libero labore tempore, minima voluptatibus, unde nihil amet ab!
      </p>
      <label htmlFor="myinput">
        name
        <input id='myinput' />
      </label> */}
    </div >
  )
}

export default App;
