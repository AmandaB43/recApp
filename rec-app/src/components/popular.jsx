import { useEffect, useState } from "react";


function Popular() {

    const[popular,setPopular] = useState([]);

    useEffect(()=>{
        getPopular();
    },[]);

    const getPopular = async () => {
        const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apikey=${process.env.API_KEY}&number=5`);
        const data = await api.json();
        setPopular(data.recipes)
        console.log(data);
    }
  return (
    <div>
        {popular.map((recipe) => {
            return(
                <div>
                    <p>{recipe.title}</p>
                </div>
            );
        })}
    </div>
  )
}

export default Popular