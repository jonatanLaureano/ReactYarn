import "../styles/styles.scss"
import Header from "./sections/Header"
import Home from "./pages/home"
import Cupcakes from "./pages/cupcakes"
import AboutUs from "./pages/aboutUs"
import{
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

const App = () => (
    <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cupcakes" element={<Cupcakes title peticion="cupcakes"/>}/>
            <Route path="/nosotros" element={<AboutUs/>}/>
        </Routes>
    </Router>

)

export default App
