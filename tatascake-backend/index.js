import 'dotenv/config';
import { execSync } from 'child_process';
import app from './app.js';

const PORT = process.env.PORT || 3000;

try {
  console.log('🔄 Running Prisma migrations...');
  execSync('npx prisma migrate deploy', { stdio: 'inherit' });
  console.log('✅ Migrations applied');
} catch (e) {
  console.error('⚠️ Migration failed:', e.message);
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
