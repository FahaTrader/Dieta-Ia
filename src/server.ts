import Fastify from "fastify";
import cors from '@fastify/cors';
import dotenv from 'dotenv';
import { routes } from './routes';

const app = Fastify({ logger: true });
dotenv.config();

app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message });
});

app.register(cors);
app.register(routes);

// Exporta o app para ser utilizado como uma função serverless na Vercel
module.exports = app;