import React, { useState } from 'react';
import axios from 'axios';

function LibroForm() {
    const [libro, setLibro] = useState({
        titulo: '',
        autor: '',
        anioPublicacion: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLibro({ ...libro, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8081/api/libros', libro);
            alert("Libro creado exitosamente");
            setLibro({ titulo: '', autor: '', anioPublicacion: '' });
        } catch (error) {
            console.error("Error al crear el libro:", error);
            alert("Error al guardar el libro");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Título:</label>
            <input type="text" name="titulo" value={libro.titulo} onChange={handleChange} required />

            <label>Autor:</label>
            <input type="text" name="autor" value={libro.autor} onChange={handleChange} required />

            <label>Año de Publicación:</label>
            <input type="number" name="anioPublicacion" value={libro.anioPublicacion} onChange={handleChange} required />

            <button type="submit">Guardar Libro</button>
        </form>
    );
}

export default LibroForm;
