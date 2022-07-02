import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem";


export const GifGrid = ({category}) => {
    
  const {images, loading} = useFetchGif(category);


  return (
    <>
    <div className="clear">
        <h3>{category}</h3>
        <div className="card-grid" >
          {/*Desplegar listado*/}
          {
            loading ? <h2>Cargando...</h2> :
          images.map(imagen => <GifItem key={imagen.id} {...imagen}/> //llamamos el usestate con ...imagen poasamos todas las claves del objeto
          )}
        </div>
        </div>
      </>
  )
}
