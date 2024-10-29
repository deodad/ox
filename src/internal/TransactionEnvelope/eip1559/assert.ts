import type { Errors } from '../../../Errors.js'
import { TransactionEnvelope } from '../../../TransactionEnvelope.js'
import { Address_assert } from '../../Address/assert.js'
import type { PartialBy } from '../../types.js'
import type { TransactionEnvelopeEip1559 } from './types.js'

/**
 * Asserts a {@link ox#TransactionEnvelopeEip1559.TransactionEnvelope} is valid.
 *
 * @example
 * ```ts twoslash
 * import { TransactionEnvelopeEip1559, Value } from 'ox'
 *
 * TransactionEnvelopeEip1559.assert({
 *   maxFeePerGas: 2n ** 256n - 1n + 1n,
 *   chainId: 1,
 *   to: '0x0000000000000000000000000000000000000000',
 *   value: Value.fromEther('1'),
 * })
 * // @error: FeeCapTooHighError:
 * // @error: The fee cap (`masFeePerGas` = 115792089237316195423570985008687907853269984665640564039457584007913 gwei) cannot be
 * // @error: higher than the maximum allowed value (2^256-1).
 * ```
 *
 * @param envelope - The transaction envelope to assert.
 */
export function TransactionEnvelopeEip1559_assert(
  envelope: PartialBy<TransactionEnvelopeEip1559, 'type'>,
) {
  const { chainId, maxPriorityFeePerGas, maxFeePerGas, to } = envelope
  if (chainId <= 0)
    throw new TransactionEnvelope.InvalidChainIdError({ chainId })
  if (to) Address_assert(to, { strict: false })
  if (maxFeePerGas && BigInt(maxFeePerGas) > 2n ** 256n - 1n)
    throw new TransactionEnvelope.FeeCapTooHighError({ feeCap: maxFeePerGas })
  if (
    maxPriorityFeePerGas &&
    maxFeePerGas &&
    maxPriorityFeePerGas > maxFeePerGas
  )
    throw new TransactionEnvelope.TipAboveFeeCapError({
      maxFeePerGas,
      maxPriorityFeePerGas,
    })
}

export declare namespace TransactionEnvelopeEip1559_assert {
  type ErrorType =
    | Address_assert.ErrorType
    | TransactionEnvelope.InvalidChainIdError
    | TransactionEnvelope.FeeCapTooHighError
    | TransactionEnvelope.TipAboveFeeCapError
    | Errors.GlobalErrorType
}

TransactionEnvelopeEip1559_assert.parseError = (error: unknown) =>
  /* v8 ignore next */
  error as TransactionEnvelopeEip1559_assert.ErrorType
