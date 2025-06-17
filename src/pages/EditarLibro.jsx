import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditarLibro = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [libro, setLibro] = useState({
        titulo: "",
        autor: "",
        fechaPublicacion: "",
        isbn: "",
        numeroPaginas: ""
    });

    useEffect(() => {
        axios.get(`http://localhost:8081/libros/${id}`)
            .then((res) => setLibro(res.data))
            .catch((err) => {
                console.error("Error al obtener libro:", err);
                alert("No se pudo cargar el libro.");
            });
    }, [id]);

    const handleChange = (e) => {
        setLibro({
            ...libro,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8081/libros/${id}`, libro);
            navigate("/");
        } catch (error) {
            console.error("Error al actualizar:", error);
            alert("No se pudo actualizar el libro");
        }
    };

    return (
        <div className="p-4 max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Editar Libro</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="titulo"
                    placeholder="Título"
                    value={libro.titulo}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="text"
                    name="autor"
                    placeholder="Autor"
                    value={libro.autor}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="date"
                    name="fechaPublicacion"
                    value={libro.fechaPublicacion}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="text"
                    name="isbn"
                    placeholder="ISBN"
                    value={libro.isbn}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
                <input
                    type="number"
                    name="numeroPaginas"
                    placeholder="Número de páginas"
                    value={libro.numeroPaginas}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
                <div className="flex justify-end gap-2">
                    <button
                        type="button"
                        onClick={() => navigate("/")}
                        className="px-4 py-2 bg-gray-400 text-white rounded"
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded"
                    >
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditarLibro;
