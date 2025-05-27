// server.js
import Fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const fastify = Fastify({ logger: true })

fastify.register(fastifyStatic, {
    root: path.join(__dirname, 'dist'),
})

fastify.get('/*', async (_, reply) => {
    return reply.sendFile('index.html') // For SPA routing
})

fastify.listen({ port: 3000, host: '0.0.0.0' }, err => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})
