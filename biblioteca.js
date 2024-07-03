const libros = [
    { 
        "titulo": "Matrix",
        "autor":"Lana Wachowski Lilly Wachowski",
        "publicacion": 1999,
        "categoria":"ciencia ficcion"
    },
    {
        "titulo":"Harry Potter",
        "autor":"J. K. Rowling",
        "publicacion": 1997,
        "categoria":"Fantasia"
    }
];

const nuevoLibro = {"titulo":"Lemans 66","autor":"pedro","publicacion":2019,"categoria": "accion"};
libros.push(nuevoLibro);
console.log("Nuevo listado de libros:", libros);

const fs = require('fs');

fs.writeFile('biblioteca.json', JSON.stringify(libros, null, 2), (err) => {
    if (err) {
        console.error('Error al guardar el archivo:', err);
    } else {
        console.log('Archivo guardado exitosamente.');
    }
});

fs.readFile('biblioteca.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    let libros = JSON.parse(data);

    libros.push(nuevoLibro);

    fs.writeFile('libros.json', JSON.stringify(libros, null, 2), (err) => {
        if (err) {
            console.error('Error al guardar el archivo:', err);
        } else {
            console.log('Nuevo libro agregado y archivo actualizado.');
        }
    });
    const libroReciente = libros.filter((libros)=>libros.publicacion > 2000 && libros.categoria == "accion");
    const nLibro = JSON.stringify(libroReciente);
    console.log("Libro buscado: "+nLibro);
});

