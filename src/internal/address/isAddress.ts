import { Address_assert } from './assert.js'
import type { Address } from './types.js'

/**
 * Checks if the given address is a valid address.
 *
 * @example
 * ```ts twoslash
 * import { Address } from 'ox'
 *
 * const result = Address.isAddress('0xA0Cf798816D4b9b9866b5330EEa46a18382f251e')
 * // true
 * ```
 *
 * @example
 * ```ts twoslash
 * import { Address } from 'ox'
 *
 * const result = Address.isAddress('0xdeadbeef')
 * // false
 * ```
 *
 * @param address - Value to check if it is a valid address.
 * @param options - Check options.
 * @returns Whether the address is a valid address.
 */
export function Address_isAddress(
  address: string,
  options?: Address_isAddress.Options | undefined,
): address is Address {
  const { strict = true } = options ?? {}
  try {
    Address_assert(address, { strict })
    return true
  } catch {
    return false
  }
}

export declare namespace Address_isAddress {
  export type Options = Address_assert.Options
}
