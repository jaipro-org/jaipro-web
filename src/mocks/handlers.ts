import { rest } from 'msw'

export const handlers = [
  rest.get('/prueba', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ message: 'OK' })
    )
  }),
]