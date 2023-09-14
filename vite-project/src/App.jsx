import MyTitle from "./components/MyTitle"
import Bulbasaur from "./assets/Bulbasaur.png"
// import PokemonCard from "./components/PokemonCard"

function App() {
  
  return (
    
      <div>
        <MyTitle />
        {/* <PokemonCard /> */}
        <img src={Bulbasaur} alt="image Bulbasaur" />
      </div>
      
  )
}

export default App
