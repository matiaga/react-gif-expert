import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState(['One punch']);

  const onAddCategory = ( newCategory ) => {
    // Valida que no se repita la categoría
    if ( categories.includes(newCategory) ) return;

    setCategories( [ newCategory, ...categories] );
    // setCategories(cat => [...cat, 'nueva cat fn'] );
  }

  return (
    <>
        <h1>Gif Expert App</h1>

        <AddCategory 
          onNewCategory={onAddCategory}
        />

        { 
          categories.map( (category ) => (
            <GifGrid key={category} category={category} />
          ))
        }
    </>
  )
}

