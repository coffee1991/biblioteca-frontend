import React from 'react';
import LibroForm from '../components/LibroForm';

const CrearLibro = () => {
    const handleGuardar = async (libro) => {
        try {
            const response = await fetch('http://localhost:8080/libros/guardar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(libro),
            });

            if (!response.ok) throw new Error('Error al guardar el libro');

            alert('Libro guardado correctamente');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            <h2>Crear Nuevo Libro</h2>
            <LibroForm onSubmit={handleGuardar} />
        </div>
    );
};

export default CrearLibro;
