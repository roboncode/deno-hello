import { Application, RouterContext, Router } from 'https://deno.land/x/oak/mod.ts'
import { handleErrors } from './middlewares.ts'

const app = new Application()

const router = new Router()
router.get('/', (ctx: RouterContext) => {
  const { response } = ctx
  response.status = 200
  response.body = {
    message: 'hello-world',
    version: '0.0.1',
  }
})

router.get('/test', (ctx: RouterContext) => {
  const { response } = ctx
  response.status = 200
  response.body = {
    message: 'hello-test',
    version: '0.0.1',
  }
})

app.use(handleErrors)
app.use(router.routes())
app.use(router.allowedMethods())

console.log('Server started on port 3000')

await app.listen({ port: 3000 })
