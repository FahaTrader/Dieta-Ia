import Fastify, { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';
import dotenv from 'dotenv';
import { routes } from './routes';
import { VercelRequest, VercelResponse } from '@vercel/node';  // Importação para Vercel

const app: FastifyInstance = Fastify({ logger: true });
dotenv.config();

// Registrar os plugins e as rotas
app.register(cors);
app.register(routes);

// Função para integrar Fastify com Vercel
export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    // Certifique-se de que o Fastify está pronto para receber requisições
    await app.ready();
    
    // Passa a requisição e resposta do Vercel para o servidor Fastify
    app.server.emit('request', req, res);
  } catch (error) {
    console.error('Erro no handler Vercel:', error);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}
