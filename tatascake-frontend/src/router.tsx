import { Route, Routes } from "react-router-dom"
import Formulario from "./pages/Formulario"
import { Home } from "./pages/Home/index"

export const Router = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/formulario-bolo" element={<Formulario />} />
        </Routes>

    );
}