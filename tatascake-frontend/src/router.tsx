import { Route, Routes } from "react-router-dom"
import {FormularioBolo} from "./pages/FormularioBolo/index"

export const Router = () => {
    return (
        <Routes>
            <Route path="/formulario-bolo" element={<FormularioBolo />} />
        </Routes>

    );
}