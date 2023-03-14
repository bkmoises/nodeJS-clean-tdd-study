export class ServerError extends Error {
  readonly name = 'ServerError'
  constructor () {
    super('Internal server error')
  }
}
