import type { GlobalErrorType } from '../../Errors/error.js'
import { Hex_fromNumber } from '../../Hex/from.js'
import { Signature_extract } from '../../Signature/extract.js'
import { Signature_toRpc } from '../../Signature/toRpc.js'
import type { TransactionEip1559, TransactionEip1559_Rpc } from './types.js'

/**
 * Converts an {@link ox#Transaction.Eip1559} to an {@link ox#Transaction.Eip1559Rpc}.
 *
 * @example
 * ```ts twoslash
 * import { TransactionEip1559 } from 'ox'
 *
 * const transaction = TransactionEip1559.toRpc({
 *   accessList: [],
 *   blockHash:
 *     '0xc350d807505fb835650f0013632c5515592987ba169bbc6626d9fc54d91f0f0b',
 *   blockNumber: 19868015n,
 *   chainId: 1,
 *   from: '0x814e5e0e31016b9a7f138c76b7e7b2bb5c1ab6a6',
 *   gas: 278365n,
 *   hash: '0x353fdfc38a2f26115daadee9f5b8392ce62b84f410957967e2ed56b35338cdd0',
 *   input:
 *     '0x3593564c000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000006643504700000000000000000000000000000000000000000000000000000000000000040b080604000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002800000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000009b6e64a8ec600000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000009b6e64a8ec60000000000000000000000000000000000000000000000000000019124bb5ae978c000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000c56c7a0eaa804f854b536a5f3d5f49d2ec4b12b80000000000000000000000000000000000000000000000000000000000000060000000000000000000000000c56c7a0eaa804f854b536a5f3d5f49d2ec4b12b8000000000000000000000000000000fee13a103a10d593b9ae06b3e05f2e7e1c00000000000000000000000000000000000000000000000000000000000000190000000000000000000000000000000000000000000000000000000000000060000000000000000000000000c56c7a0eaa804f854b536a5f3d5f49d2ec4b12b800000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000190240001b9872b',
 *   maxFeePerGas: 11985937556n,
 *   maxPriorityFeePerGas: 68993984n,
 *   nonce: 855n,
 *   r: 44944627813007772897391531230081695102703289123332187696115181104739239197517n,
 *   s: 36528503505192438307355164441104001310566505351980369085208178712678799181120n,
 *   to: '0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad',
 *   transactionIndex: 2,
 *   type: 'eip1559',
 *   v: 27,
 *   value: 700000000000000000n,
 *   yParity: 0,
 * })
 * ```
 *
 * @param transaction - The EIP-1559 transaction to convert.
 * @returns An RPC-formatted EIP-1559 transaction.
 */
export function TransactionEip1559_toRpc(
  transaction: TransactionEip1559,
): TransactionEip1559_Rpc {
  const signature = Signature_extract(transaction)!

  return {
    accessList: transaction.accessList ?? [],
    blockHash: transaction.blockHash ?? null,
    blockNumber:
      typeof transaction.blockNumber === 'bigint'
        ? Hex_fromNumber(transaction.blockNumber)
        : null,
    chainId: Hex_fromNumber(transaction.chainId),
    data: transaction.input,
    from: transaction.from,
    gas: Hex_fromNumber(transaction.gas ?? 0n),
    hash: transaction.hash,
    input: transaction.input,
    maxFeePerGas: Hex_fromNumber(transaction.maxFeePerGas ?? 0n),
    maxPriorityFeePerGas: Hex_fromNumber(
      transaction.maxPriorityFeePerGas ?? 0n,
    ),
    nonce: Hex_fromNumber(transaction.nonce ?? 0n),
    to: transaction.to,
    transactionIndex: transaction.transactionIndex
      ? Hex_fromNumber(transaction.transactionIndex)
      : null,
    type: '0x2',
    value: Hex_fromNumber(transaction.value ?? 0n),
    ...Signature_toRpc(signature),
  }
}

export declare namespace TransactionEip1559_toRpc {
  export type ErrorType = Signature_extract.ErrorType | GlobalErrorType
}

TransactionEip1559_toRpc.parseError = (error: unknown) =>
  /* v8 ignore next */
  error as TransactionEip1559_toRpc.ErrorType
