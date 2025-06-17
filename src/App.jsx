// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListaLibros from "./components/ListaLibros";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ListaLibros />} />
            </Routes>
        </Router>
    );
}

export default App;
