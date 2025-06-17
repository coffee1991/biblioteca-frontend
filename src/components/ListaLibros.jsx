// src/components/ListaLibros.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ListaLibros = () => {
    const [libros, setLibros] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:8081/libros")
            .then((response) => {
                setLibros(response.data);
            })
            .catch((error) => {
                console.error("Error al obtener los libros:", error);
                alert("Error al obtener la lista de libros");
            });
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-6xl mx-auto bg-white shadow-md rounded-xl p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-800">📚 Lista de Libros</h2>
                    <button
                        onClick={() => navigate("/crear")}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
                    >
                        + Crear nuevo libro
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-200 rounded-md overflow-hidden">
                        <thead className="bg-gray-50 text-gray-600">
                        <tr>
                            <th className="px-6 py-3 text-left">Título</th>
                            <th className="px-6 py-3 text-left">Autor</th>
                            <th className="px-6 py-3 text-left">Año</th>
                            <th className="px-6 py-3 text-center">Acciones</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {libros.map((libro) => (
                            <tr key={libro.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4">{libro.titulo}</td>
                                <td className="px-6 py-4">{libro.autor}</td>
                                <td className="px-6 py-4">{libro.fechaPublicacion}</td>
                                <td className="px-6 py-4 text-center space-x-2">
                                    <button
                                        onClick={() => navigate(`/editar/${libro.id}`)}
                                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                                    >
                                        Editar
                                    </button>
                                    <button
                                        onClick={() => handleEliminar(libro.id)}
                                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {libros.length === 0 && (
                            <tr>
                                <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                                    No hay libros registrados.
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    function handleEliminar(id) {
        if (window.confirm("¿Estás seguro de que quieres eliminar este libro?")) {
            axios
                .delete(`http://localhost:8081/libros/${id}`)
                .then(() => {
                    setLibros(libros.filter((libro) => libro.id !== id));
                })
                .catch((error) => {
                    console.error("Error al eliminar:", error);
                    alert("Error al eliminar el libro.");
                });
        }
    }
};

export default ListaLibros;
