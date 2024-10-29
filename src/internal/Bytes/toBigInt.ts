import type { Errors } from '../../Errors.js'
import { Hex } from '../../Hex.js'
import { Bytes_assertSize } from './assertSize.js'
import type { Bytes } from './types.js'

/**
 * Decodes a {@link ox#Bytes.Bytes} into a bigint.
 *
 * @example
 * ```ts
 * import { Bytes } from 'ox'
 *
 * Bytes.toBigInt(Bytes.from([1, 164]))
 * // @log: 420n
 * ```
 *
 * @param bytes - The {@link ox#Bytes.Bytes} to decode.
 * @param options - Decoding options.
 * @returns Decoded bigint.
 */
export function Bytes_toBigInt(
  bytes: Bytes,
  options: Bytes_toBigInt.Options = {},
): bigint {
  const { size } = options
  if (typeof size !== 'undefined') Bytes_assertSize(bytes, size)
  const hex = Hex.fromBytes(bytes, options)
  return Hex.toBigInt(hex, options)
}

export declare namespace Bytes_toBigInt {
  type Options = {
    /** Whether or not the number of a signed representation. */
    signed?: boolean | undefined
    /** Size of the bytes. */
    size?: number | undefined
  }

  type ErrorType =
    | Hex.fromBytes.ErrorType
    | Hex.toBigInt.ErrorType
    | Errors.GlobalErrorType
}

Bytes_toBigInt.parseError = (error: unknown) =>
  /* v8 ignore next */
  error as Bytes_toBigInt.ErrorType
