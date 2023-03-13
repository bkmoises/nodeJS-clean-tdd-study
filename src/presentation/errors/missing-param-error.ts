export class MissingParamError extends Error {
  readonly name = 'MissingParamError'
  constructor (public readonly paramName: string) {
    super(`Missing param: ${paramName}`)
  }
}
