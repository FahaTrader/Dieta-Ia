import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { CreateNutritionController } from './controllers/CreateNutritionController';

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get('/teste', async (request, reply) => {
    const sampleResponse = {
      nome: 'Matheus',
      sexo: 'Masculino',
      idade: 28,
      altura: 1.80,
      peso: 74,
      objetivo: 'Hipertrofia',
      refeicoes: [
        {
          horario: '08:00',
          nome: 'Café da Manhã',
          alimentos: ['2 fatias de pão integral', '2 ovos mexidos', '1 banana', '200ml de leite desnatado'],
        },
        {
          horario: '10:00',
          nome: 'Lanche da Manhã',
          alimentos: ['1 iogurte grego natural', '1 scoop de whey protein', '1 colher de sopa de granola'],
        },
        // Outras refeições...
      ],
      suplementos: ['Whey Protein', 'Creatina', 'BCAA', 'Glutamina'],
    };

    return reply.send({ data: sampleResponse });
  });

  fastify.post('/create', async (request, reply) => {
    return new CreateNutritionController().handle(request, reply);
  });
}
