import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import PaginaPadrao from "./components/PaginaPadrao";
import Post from "./pages/Post";
import Inicio from "./pages/Inicio";
import SobreMim from "./pages/SobreMim";
import NaoEncontrada from "./pages/NaoEncontrada";
import ScrollToTop from "./components/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>

        <Route path="posts/:id/*" element={<Post />} />
        {/* 
        
        Na rota '/', a estrutura a ser renderizada é:

        <PaginaPadrao>
          <Inicio />
        </PaginaPadrao>

        Na rota '/sobremim', a estrutura a ser renderizada é:

        <PaginaPadrao>
          <SobreMim />
        </PaginaPadrao>

        */}

        <Route path="*" element={<NaoEncontrada />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
