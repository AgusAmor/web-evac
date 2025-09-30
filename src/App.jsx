import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { Services } from "./pages/Services";
import { AboutUs } from "./pages/AboutUs";
import { Contact } from "./pages/Contact";
import { AskTurn } from "./pages/AskTurn";
import { Route, Routes } from "react-router-dom";

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/solicitar-turno" element={<AskTurn />} />
      </Routes>
    </>
  );
}
