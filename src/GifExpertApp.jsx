import { useState } from "react";
import { GifGrid, AddCategory } from './components'

export const GifExpertApp = () =>
{
    const [categories, setCategories] = useState(['Jack Reacher']);
    const onAddCategory = (newCategory) =>
    {
        //Estas dos formas funcionan
        //setCategories(['Test', ...categories]); ...=> metodo spread
        //setCategories(cat => [...cat, 'Jack Reacher'])

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
                onNewCategory={value => onAddCategory(value)}
            />

            {/* Listado de Gifs */}

            {
                categories.map(category =>
                {
                    return <GifGrid key={category} category={category} />
                })
            }

        </>
    )
}