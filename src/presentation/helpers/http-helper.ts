import type { HttpResponse } from '../protocols/http'
import { ServerError } from '../errors'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError()
})
