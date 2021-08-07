import { serve } from 'https://deno.land/std@0.103.0/http/server.ts'
const server = serve({ port: 3000 })
console.log(`Server running on: http://localhost:3000/`)

for await (const req of server) {
  req.respond({ status: 200, body: 'Hello, world from Deno!\n' })
}
