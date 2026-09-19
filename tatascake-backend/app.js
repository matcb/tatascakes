import express from 'express';
import cors from 'cors';
import pedidoRoutes from './src/routes/pedidoRoutes.js';
import clienteRoutes from './src/routes/clienteRoutes.js';
import errorHandler from './src/middlewares/errorHandle.js';

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log('📡 Registrando rotas...');

app.get('/', (req, res) => {
  res.json({ 
    message: 'API de Pedidos de Doces - Ativa!',
    endpoints: {
      clientes: '/api/clientes',
      pedidos: '/api/pedidos'
    }
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/api/pedidos', pedidoRoutes);
app.use('/api/clientes', clienteRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Rota nao encontrada', path: req.originalUrl, method: req.method });
});

app.use(errorHandler);

console.log('✅ Rotas registradas com sucesso');

export default app;