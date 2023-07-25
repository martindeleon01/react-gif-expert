import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) =>
{
    const {images, isLoading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }            

            <div className="card-grid">

                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            //opcion 1 pasar props individualmente
                            /*title={image.title}
                            url={image.url}*/
                            //opcion 2 usando el metodo spread pasar las properties como el objeto entero y desestructurarlo al recibirlo
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}