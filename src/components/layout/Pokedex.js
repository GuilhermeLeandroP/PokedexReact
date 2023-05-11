import Pagination from "../pages/Pagination";
import Pokemon from "../pages/Pokemon";


function Pokedex(props){
    const { pokemons,loading,page,setPage,totalPages} = props;
    const onLeftClickHandler= () =>{
        if(page>0){
            setPage(page-1)
        }
    }
    const onRightClickHandler= () =>{
        if(page !==totalPages){
            setPage(page+1)
        }
    }
    
    return(
        <div>
            <div className= "pokedex-header">
                <Pagination
                    page={page+1}
                    totalPages={totalPages}
                    onLeftClick={onLeftClickHandler}
                    onRightClick={onRightClickHandler}
                />
            </div>
            {loading ? (
                <div>Carregando...</div>
            ) : (
            <div className="pokedex-grid">
                {pokemons && pokemons.map((pokemon,index) => {
                    return (
                    <Pokemon key= {index} pokemon={pokemon}/>
                        )
                })}
            </div>
            )}
        </div>
    )
}
export default Pokedex;