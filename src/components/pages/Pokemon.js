import styles from "./Pokemon.module.css"
import {Link} from 'react-router-dom'
import { useState } from "react";
function Pokemon(props){
    const {pokemon}=props;
    const pokemonType = pokemon.types[0].type.name;    
    const className =`${styles.pokemonType} ${styles[`type-${pokemonType}`]}`

    return (
        <Link to={`/card/`+ pokemon.name} >
        <div className={className} id="teste">
                <div className={styles.pokemonImg}>
                    <img width={125} src={pokemon.sprites.front_default}/>
                </div>
            <div className={styles.cardbody}>
                <div className={styles.cardTop}>
                
                <h3 className={styles.name}>{pokemon.name}</h3>       

                    <div className={styles.id}>{pokemon.id}</div>
                </div>
                <div className={styles.cardBottom}>
                    <div className={styles.pokemonType}>
                        {pokemon.types.map((type,index) =>{
                            return (
                                <div key= {index} className={styles.pokemonTypeText}>{type.type.name}</div>
                                
                            )
                        }
                        )}
                    </div>
                </div>
            </div>
            

        </div> </Link>
    )
}

export default Pokemon;

//{`${styles.pokemonType} ${styles[`type-${pokemonType}`]}`}