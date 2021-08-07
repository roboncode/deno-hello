import { Application, Context } from 'https://deno.land/x/oak/mod.ts'

const app = new Application()

app.use((ctx: Context) => {
  ctx.response.body = 'Hello world from Oak!'
})

await app.listen('127.0.0.1:3000')
