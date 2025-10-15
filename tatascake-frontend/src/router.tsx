import { Route, Routes } from "react-router-dom"
import Formulario from "./pages/Formulario/index"
import { Home } from "./pages/Home/index"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/formulario" element={<Formulario />} />
        </Routes>

    );
}