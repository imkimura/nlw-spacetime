import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

app.get('/kimura', () => {
  const users = prisma.user.findMany()

  return users
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 Server running on http://myhome:3333 ...')
  })
