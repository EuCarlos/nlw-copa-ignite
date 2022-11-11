import Fastify from 'fastify'
import cors from '@fastify/cors'
import { poolRoutes } from './routes/pool.routes'
import { authRoutes } from './routes/auth.routes'
import { gameRoutes } from './routes/game.routes'
import { guessRoutes } from './routes/guess.routes'
import { userRoutes } from './routes/user.routes'


async function bootstrap() {
	const fastify = Fastify({
		logger: true
	})

	await fastify.register(cors, {
		origin: true,
	})

	await fastify.register(poolRoutes)
	await fastify.register(authRoutes)
	await fastify.register(gameRoutes)
	await fastify.register(guessRoutes)
	await fastify.register(userRoutes)

	await fastify.listen({ port: 3333, host: '0.0.0.0' })
}

bootstrap()