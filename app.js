

const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();


app.use(express.json());


app.get('/', (req, res) => {
  res.send('Bienvenido a GameBox API');
});


app.get('/orders', async (req, res) => {
  try {
    const orders = await prisma.order.findMany();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener órdenes' });
  }
});


app.get('/orders/control', async (req, res) => {
  try {
    const orders = await prisma.order.findMany();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener órdenes' });
  }
});


app.get('/references', async (req, res) => {
  try {
    const references = await prisma.reference.findMany();
    res.json(references);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener referencias' });
  }
});


app.post('/references', async (req, res) => {
  const { userId, status } = req.body
  try {
    const newReference = await prisma.reference.create({
      data: {
        userId,
        status,
      },
    });
    res.status(201).json(newReference);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear referencia' });
  }
});


app.delete('/references/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.reference.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: 'Referencia cancelada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al cancelar referencia' });
  }
});

app.listen(3000, () => 
  console.log(`Servidor corriendo en http://localhost:3000`)
)
