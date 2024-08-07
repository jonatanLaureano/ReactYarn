import {number, string} from "prop-types"

const Cupcakes = ({
    descripcion,
    imagen, 
    sabor, 
    color, 
    precio
}) => {
    return(
        <div className="s-radius-1 s-shadow-bottom background s-shadow-card-micro white-color s-pxy-2">
            <img src={imagen} alt={sabor} />
            <p>{descripcion}</p>
            <span>Color: {color}</span>
            <span>Precio: {precio}</span>
        </div>
    )
}
  
Cupcakes.propTypes = {
    precio: number,
    color: string.isRequired,
    descripcion: string.isRequired,
    sabor: string.isRequired,
    imagen: string,
}

Cupcakes.defaultProps = {
    imagen: "https://img.freepik.com/vector-premium/cupcake-estilo-linea-blanco-negro_611054-135.jpg",
    precio: 0

}

export default Cupcakes

