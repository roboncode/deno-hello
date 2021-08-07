import { Context } from 'https://deno.land/x/oak/mod.ts'

export async function handleErrors(context: Context, next: () => Promise<unknown>) {
  try {
    await next()
  } catch (err) {
    context.response.status = err.status
    const { message = 'unknown error', status = 500, stack = null } = err
    context.response.type = 'json'
    context.response.body = { message, status, stack }
  }
}
