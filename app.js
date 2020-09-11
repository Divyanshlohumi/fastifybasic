const fastify = require('fastify')({logger: true})

fastify.get('/', (request, reply) => {
    reply.redirect('/g')
})

fastify.get('/g', (request, reply) => {
    reply.redirect('https://www.google.com')
})
  
fastify.listen(3000, (err, address) => {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
})