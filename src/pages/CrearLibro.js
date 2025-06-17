import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CrearLibro = () => {
    const [libro, setLibro] = useState({
        titulo: "",
        autor: "",
        fechaPublicacion: "",
        isbn: "",
        numeroPaginas: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setLibro({
            ...libro,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8081/libros", libro);
            alert("Libro creado exitosamente");
            navigate("/");
        } catch (error) {
            console.error("Error al crear el libro:", error);
            alert("Ocurrió un error al guardar el libro");
        }
    };

    return (
        <div className="max-w-xl mx-auto mt-10 bg-white shadow-md rounded px-8 pt-6 pb-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Crear Nuevo Libro</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Título */}
                <div>
                    <label className="block text-gray-700">Título:</label>
                    <input
                        type="text"
                        name="titulo"
                        value={libro.titulo}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>

                {/* Autor */}
                <div>
                    <label className="block text-gray-700">Autor:</label>
                    <input
                        type="text"
                        name="autor"
                        value={libro.autor}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>

                {/* Fecha de Publicación */}
                <div>
                    <label className="block text-gray-700">Fecha de publicación:</label>
                    <input
                        type="date"
                        name="fechaPublicacion"
                        value={libro.fechaPublicacion}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>

                {/* ISBN */}
                <div>
                    <label className="block text-gray-700">ISBN:</label>
                    <input
                        type="text"
                        name="isbn"
                        value={libro.isbn}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                    />
                </div>

                {/* Número de Páginas */}
                <div>
                    <label className="block text-gray-700">Número de páginas:</label>
                    <input
                        type="number"
                        name="numeroPaginas"
                        value={libro.numeroPaginas}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                    />
                </div>

                {/* Botones */}
                <div className="flex justify-between mt-6">
                    <button
                        type="button"
                        onClick={() => navigate("/")}
                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CrearLibro;
