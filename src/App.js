
import {useEffect,useState} from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import { Route, Routes} from "react-router"
import NavBar from './components/layout/NavBar'
import Pokedex from './components/layout/Pokedex';
import { getPokemonData, getPokemons } from './components/api';
import styles from "./App.css"
import Card from './components/pages/Card';

function App() {

/////UseStates
  const [loading,setLoading]=useState(false); 
  const [pokemons,setPokemons]=useState([]);
  const [page,setPage]=useState(0);
  const [totalPages,setTotalPages]=useState(0);


  const itensPerPage=24
  const fetchPokemon = async () => {
    try {
      setLoading(true)
      const data = await getPokemons(itensPerPage,itensPerPage * page);
      const promises = data.results.map(async (pokemon) =>{
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises);
      setPokemons(results)

      setLoading(false)
      setTotalPages(Math.ceil(data.count/itensPerPage))
    } catch (error) {
      console.log ("fetchPokemons error: " , error)
    }

  }
  useEffect (() =>{

    fetchPokemon();
    }, [page])
  
  return (
    <div className={styles.appBody}>
    <Router>
    <NavBar/>

    <Routes>
        <Route  path="/card/:codigo/" element={<Card/>}> </Route>
    </Routes>
    <Routes>
        <Route  path="/" element={<Pokedex pokemons= {pokemons} loading={loading} page={page} totalPages={totalPages} setPage={setPage}/>}> </Route>
    </Routes>
    </Router>
    </div>
  );
}

export default App;