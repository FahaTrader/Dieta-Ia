import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply
} from 'fastify';
import { CreateNutritionController } from './controllers/CreateNutritionController';

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){
  fastify.get("/teste", (request: FastifyRequest, reply: FastifyReply) => {
    
    let responseText = "```json\n{\n  \"nome\": \"Aguiar\",\n  \"sexo\": \"M\",\n  \"idade\": 26,\n  \"altura\": 1.74,\n  \"peso\": 84,\n  \"objetivo\": \"Hipertrofia\",\n  \"refeicoes\": [\n    {\n      \"horario\": \"08:00\",\n      \"nome\": \"Cafe da Manha\",\n      \"alimentos\": [\n        \"2 fatias de pao integral\",\n        \"2 ovos mexidos\",\n        \"1 banana\",\n        \"200ml de leite desnatado\",\n        \"1 colher de sopa de azeite de oliva\"\n      ]\n    },\n    {\n      \"horario\": \"10:00\",\n      \"nome\": \"Lanche da Manha\",\n        \"alimentos\": [\n          \"1 iogurte grego natural\",\n          \"30g de granola\"\n        ]\n    },\n    {\n      \"horario\": \"12:00\",\n      \"nome\": \"Almoco\",\n      \"alimentos\": [\n        \"150g de frango grelhado\",\n        \"100g de batata doce cozida\",\n        \"1 xícara de arroz integral\",\n        \"Salada de folhas verdes com tomate e cenoura\"\n      ]\n    },\n    {\n      \"horario\": \"15:00\",\n      \"nome\": \"Lanche da Tarde\",\n      \"alimentos\": [\n        \"1 scoop de whey protein\",\n        \"1 fruta (maçã, laranja ou pêra)\"\n      ]\n    },\n    {\n      \"horario\": \"18:00\",\n      \"nome\": \"Jantar\",\n      \"alimentos\": [\n        \"150g de peixe grelhado\",\n        \"1 xícara de brócolis cozido\",\n        \"1 xícara de quinoa cozida\"\n      ]\n    },\n    {\n      \"horario\": \"20:00\",\n      \"nome\": \"Lanche da Noite\",\n      \"alimentos\": [\n        \"1 scoop de caseína\",\n        \"1 fatia de queijo cottage\"\n      ]\n    }\n  ],\n  \"suplementos\": [\n    \"Whey protein\",\n    \"Creatina\",\n    \"BCAA\",\n    \"Glutamina\"\n  ]\n}\n```"

    try{
      let jsonString = responseText.replace(/```\w*\n/g, '').replace(/\n```/g, '').trim();
      let jsonObject = JSON.parse(jsonString);

    return reply.send({ data: jsonObject });
    }catch(err){
      console.log(err)
    }

    reply.send({ ok: true})
  })

  fastify.get("/create", async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateNutritionController().handle(request, reply)
  })
  
  fastify.post("/create", async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateNutritionController().handle(request, reply)
  })
}