import express from 'express';
import cors from 'cors';
import pedidoRoutes from './src/routes/pedidoRoutes.js';
import clienteRoutes from './src/routes/clienteRoutes.js';
import errorHandler from './src/middlewares/errorHandle.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ 
    message: 'API de Pedidos de Doces - Ativa! 🍰',
    endpoints: {
      clientes: '/api/clientes',
      pedidos: '/api/pedidos'
    }
  });
});

app.use('/api/pedidos', pedidoRoutes);
app.use('/api/clientes', clienteRoutes);

app.use(errorHandler);

export default app;