import { Outlet } from "react-router-dom";
import Banner from "../Banner"

const PaginaPadrao = ({ children }) => {
    return (
        <main>
            <Banner />

            <Outlet /> {/* Renderizar conteudo da rota aqui... */}
            {children}
        </main>
    )
}

export default PaginaPadrao;