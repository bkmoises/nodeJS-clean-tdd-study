export class InvalidParamError extends Error {
  readonly name = 'InvalidParamError'
  constructor (public readonly paramName: string) {
    super(`Invalid param: ${paramName}`)
  }
}
