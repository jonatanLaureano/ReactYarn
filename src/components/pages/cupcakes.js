import useFetch from "../../hooks/useFetch"
import Cupcake from "../cards/Cupcake"

const Cupcakes = ({peticion, title}) => {

    const [cupcakes, error] = useFetch(peticion)
    if(error){
        return <span>Hubo un error</span>
    }
    return(
        <div className="ed-grid">
        {title && <h1>Pagina de cupcakes</h1>}
        {
            cupcakes ? (
            <section className="ed-grid s-grid-2 m-grid-3 lg-grid-4 row-gap">
                {
                    cupcakes.map(({
                        id,
                        descripcion,
                        imagen, 
                        sabor, 
                        color, 
                        precio
                    }) => (
                        <Cupcake
                        key={id}
                        imagen={imagen} 
                        descripcion={descripcion}
                        sabor={sabor}
                        color={color}
                        precio={precio}
                        />
                    ))
                }
            </section>
            ): (
                <span>Cargando...</span>
            )
        }
    </div>
    )
}
    
export default Cupcakes