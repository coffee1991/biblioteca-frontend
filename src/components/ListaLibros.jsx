// src/components/ListaLibros.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ListaLibros = () => {
    const [libros, setLibros] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8081/libros")
            .then(response => {
                setLibros(response.data);
            })
            .catch(error => {
                console.error("Error al obtener los libros:", error);
                alert("Error al obtener la lista de libros");
            });
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Lista de Libros</h2>
            <table className="table-auto w-full border border-gray-300">
                <thead className="bg-gray-100">
                <tr>
                    <th className="border px-4 py-2">Título</th>
                    <th className="border px-4 py-2">Autor</th>
                    <th className="border px-4 py-2">Año</th>
                </tr>
                </thead>
                <tbody>
                {libros.map((libro) => (
                    <tr key={libro.id}>
                        <td className="border px-4 py-2">{libro.titulo}</td>
                        <td className="border px-4 py-2">{libro.autor}</td>
                        <td className="border px-4 py-2">{libro.fechaPublicacion}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListaLibros;
