import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import Financas from "./pages/FinancasInteligentes";
import Sobre from "./pages/Sobre";
import Cases from "./pages/Cases";
import Contato from "./pages/Contato";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-preto text-branco-suave">
      <a href="#conteudo" className="sr-only focus:not-sr-only">
        Ir para conteúdo
      </a>
      <Header />
      <main id="conteudo" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solucoes" element={<Solutions />} />
          <Route path="/financas" element={<Financas />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
export default App;
