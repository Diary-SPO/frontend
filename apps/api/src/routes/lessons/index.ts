import { Elysia, t } from 'elysia'
import { AuthService } from '../../services/AuthService'
import getLessons from './handler'

export const LessonsController = new Elysia()
  .use(AuthService)
  .guard({
    isSignIn: true
  })
  .get(
    '/lessons/:startDate/:endDate',
    ({ params: { startDate, endDate }, Auth: { user } }) =>
      getLessons({ startDate, endDate, user }),
    {
      params: t.Object({
        endDate: t.RegExp(/^\d{4}-\d{2}-\d{2}$/),
        startDate: t.RegExp(/^\d{4}-\d{2}-\d{2}$/)
      }),
      detail: {
        tags: ['Lessons']
      }
    }
  )
