import Fastify from "fastify";
import cors from '@fastify/cors';
import dotenv from 'dotenv';
import { routes} from './routes'

const app = Fastify ({ logger: true })
dotenv.config();

app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message})
})

const start = async () => {
  app.register(cors);
  app.register(routes);

  try {
    const PORT = Number(process.env.PORT) || 3333;
    await app.listen({ port: PORT, host: '0.0.0.0' });
    console.log(`Servidor rodando no http://localhost:${PORT}`);
  } catch (err) {
    console.error("Erro ao iniciar o servidor:", err);
  }
};



start();