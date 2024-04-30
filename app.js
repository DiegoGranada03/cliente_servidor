const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Agtdiego20273@',
    database: 'pagar_referencia'
});


app.use(express.json());


app.post('/pagar-referencia', (req, res) => {
    const { cedula, numero_referencia } = req.body;

    
    if (!cedula || !numero_referencia) {
        return res.status(400).json({ error: 'Se requiere la cédula y el número de referencia.' });
    }

   
    const query = 'INSERT INTO pagos (cedula, numero_referencia, estado_pago) VALUES (?, ?, ?)';
    const values = [cedula, numero_referencia, 'pendiente']; 
    connection.query(query, values, (error, results) => {
        if (error) {
            console.error('Error al insertar datos en la tabla:', error);
            return res.status(500).json({ error: 'Error al insertar datos en la tabla.' });
        }
        console.log('Datos insertados correctamente en la tabla pagos:', results);
        res.status(201).json({ message: 'Datos de pago insertados correctamente.' });
    });
});


app.listen(port, () => {
    console.log(`Servidor Express escuchando en http://localhost:${port}`);
});
