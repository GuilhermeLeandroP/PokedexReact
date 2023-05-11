import { useParams } from "react-router-dom";
import { useState } from "react";
import { getPokemonData, getPokemons } from "../api";
import { useEffect } from "react";
import styles from "./Card.module.css";
import BackButton from "../layout/BackButton";


function Card(){
    const {codigo}=useParams();
    const [pokemons,setPokemons]=useState([]);
    const [img, setImg] = useState(true);
    

    const trocarImage = () => {
        setImg(!img);
    }

    const fetchPokemon = () => {
        try {
            getPokemonData(`https://pokeapi.co/api/v2/pokemon/${codigo}`).then((result) => setPokemons(result))
            console.log(pokemons)
        } catch (error) {
            console.log ("fetchPokemons error: " , error)
        }
    }

    useEffect (() =>{
        fetchPokemon();
    }, [])

    return(
        <>
            <BackButton/>

            <div className={styles.body}>
                <div className={styles.bodyImg}>
                    <div className={styles.test}>
                        <p className={styles.name}>{pokemons.name}</p>
                        <img 
                            className={styles.image} 
                            width={270} 
                            src ={img?pokemons.sprites && pokemons.sprites.front_default: pokemons.sprites && pokemons.sprites.back_default}
                            onClick={trocarImage}
                        />

                        <div className={styles.types}>
                            {pokemons.types && pokemons.types.map((type, index) => {
                                return (
                                    <div key={index}>{type.type.name}</div>
                                )
                            })}
                        </div>

                    </div>
                </div>


                <div className={styles.bodyDesc}>
                    <div className={styles.intDesc}>
                        <div>
                            <h3>Característica</h3>
                            <p>{pokemons.height}cm</p>
                            <p>{pokemons.weight/100}kg</p>
                        </div>

                        <div className={styles.bodyAbilities}>
                            <h3>Habilidades</h3>
                        </div>

                        <div className={styles.abilities}>
                            {pokemons.abilities && pokemons.abilities.map((ability, index) => {
                                return (
                                    <div className={styles.abilities} key={index}>{ability.ability.name}</div>
                                )
                            })}
                        </div>

                        <div className={styles.bodyStats}>
                            <div className={styles.stats}> 
                                <h3>Status</h3>
                                {pokemons.stats && pokemons.stats.map((stats, index) => {
                                    return (
                                        <div key={index}>{stats.stat.name}: {stats.base_stat}</div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card