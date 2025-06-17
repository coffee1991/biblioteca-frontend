// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListaLibros from "./components/ListaLibros";
import CrearLibro from "./pages/CrearLibro";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ListaLibros />} />
                <Route path="/crear" element={<CrearLibro />} />
            </Routes>
        </Router>
    );
}

export default App;
