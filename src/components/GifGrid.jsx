import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem";
import PropTypes from "prop-types";

export const GifGrid = ({category}) => {
    
  const {images, loading} = useFetchGif(category);


  return (
    <>
    <div className="clear" >
        <h3  role="img">{category}</h3>
        <div className="card-grid">
        
          {/*Desplegar listado*/}
          {
            loading ? <h2>Cargando...</h2> : images &&
          images.map(imagen => <GifItem key={imagen.id} {...imagen} /> 
          )}
        </div>
        </div>
      </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}