import Fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const fastify = Fastify({ logger: true })

// Serve static files
fastify.register(fastifyStatic, {
    root: path.join(__dirname, 'dist'),
    wildcard: false, // avoid conflicts with /* fallback
})

// Catch-all route fallback for SPA
fastify.setNotFoundHandler((req, reply) => {
    return reply.sendFile('index.html')
})

// Start server
fastify.listen({ port: 3000, host: '0.0.0.0' }, err => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})
