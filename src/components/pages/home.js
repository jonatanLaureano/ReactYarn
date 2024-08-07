import Banner from "../sections/Banner"
import Cupcakes from "./cupcakes"
import Servicios from "../sections/Servicios"

const Home = () =>(
  <>
    <Banner/>
    <Cupcakes peticion="cupcakes?sabor=fresa"/>
    <Servicios peticion="servicios"/>
  </>
)
export default Home