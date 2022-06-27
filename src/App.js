import { Routes, Route } from "react-router-dom";
import Listado from "./components/Listado";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detalle from "./components/Detalle";
import Section from "./components/Section";
import Resultados from "./components/Resultados";
function App() {
  return (
    <div className="">
      <Header />
      <Section />
      <Routes>
        {/* <Route exact path="/" element={<Login />} /> */}
        <Route path="/" element={<Listado />} />

        <Route path="/detalle" element={<Detalle />} />

        <Route path="/resultados" element={<Resultados />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
