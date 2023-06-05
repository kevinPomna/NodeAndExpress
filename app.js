const express = require('express');
const mysql = require('mysql2');

// Configura los detalles de la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'tu_contraseña',
    database: 'Uide'
  });
  

// Establece la conexión a la base de datos
connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

// Crea una aplicación Express
const app = express();

// Configura el puerto en el que la aplicación escuchará
const port = 3000;

// Define una ruta de ejemplo
app.get('/', (req, res) => {
  // Ejecuta una consulta SELECT en la base de datos
  connection.query('SELECT * FROM tabla1', (error, results) => {
    if (error) {
      console.error('Error al ejecutar la consulta:', error);
      res.status(500).send('Error en el servidor');
    } else {
      console.log('Resultados de la consulta:', results);
      res.json(results);
    }
  });
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
