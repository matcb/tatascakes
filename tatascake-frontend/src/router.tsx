import { Route, Routes } from "react-router-dom"
import Formulario from "./pages/Formulario/index"
import { Home } from "./pages/Home/index"
import Contato from "./pages/Contato/index"
import Sobre from "./pages/Sobre/index"
import Produtos from "./pages/Produtos/index"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/formulario" element={<Formulario />} />
            <Route path="/contato" element={<Contato/>} />
            <Route path="/sobre" element={<Sobre/>} />
            <Route path="/produtos" element={<Produtos/>}/>

        </Routes>

    );
}