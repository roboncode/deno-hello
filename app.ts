import { Drash } from 'https://deno.land/x/drash@v1.5.1/mod.ts'

class HomeResource extends Drash.Http.Resource {
  static paths = ['/']
  public GET() {
    // this.response.body = `Hello World! (on ${new Date()})`
    // this.response.headers.set('Content-Type', 'text/html')
    this.response.body = `<h1>Hello, world!</h1>`
    return this.response
  }
}

const server = new Drash.Http.Server({
  logger: new Drash.CoreLoggers.ConsoleLogger({
    enabled: true,
    level: 'debug',
  }),
  response_output: 'text/html',
  // response_output: 'application/json',
  resources: [HomeResource],
})

server.run({
  // hostname: '127.0.0.1',
  port: 8080,
})

console.log(`Server running at ${server.hostname}:${server.port}`)
