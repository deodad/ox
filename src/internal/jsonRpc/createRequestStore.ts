import type { GlobalErrorType } from '../errors/error.js'
import { JsonRpc_defineRequest } from './defineRequest.js'
import type { JsonRpc_MethodGeneric, JsonRpc_RequestStore } from './types.js'

/**
 * Creates a JSON-RPC request store to build requests with an incrementing `id`.
 *
 * Returns a type-safe {@link JsonRpc#defineRequest} function to build a JSON-RPC request object as per the [JSON-RPC 2.0 specification](https://www.jsonrpc.org/specification#request_object).
 *
 * @example
 * ```ts twoslash
 * import { JsonRpc } from 'ox'
 *
 * const store = JsonRpc.createRequestStore()
 *
 * const request_1 = store.getRequest({
 *   method: 'eth_blockNumber',
 * })
 * // @log: { id: 0, jsonrpc: '2.0', method: 'eth_blockNumber' }
 *
 * const request_2 = store.getRequest({
 *   method: 'eth_call',
 *   params: [
 *     {
 *       to: '0x0000000000000000000000000000000000000000',
 *       data: '0xdeadbeef',
 *     },
 *   ],
 * })
 * // @log: { id: 1, jsonrpc: '2.0', method: 'eth_call', params: [{ to: '0x0000000000000000000000000000000000000000', data: '0xdeadbeef' }] }
 * ```
 *
 * @example
 * ### Type-safe Custom Methods
 *
 * It is possible to define your own type-safe {@link JsonRpc#Method} by using the {@link JsonRpc#DefineMethod} type.
 *
 * ```ts twoslash
 * import { JsonRpc } from 'ox'
 *
 * type Method = JsonRpc.DefineMethod<{ // [!code focus]
 *   method: 'eth_foobar' // [!code focus]
 *   params: [number] // [!code focus]
 *   returnType: string // [!code focus]
 * } | { // [!code focus]
 *   method: 'eth_foobaz' // [!code focus]
 *   params: [string] // [!code focus]
 *   returnType: string // [!code focus]
 * }> // [!code focus]
 *
 * const store = JsonRpc.createRequestStore<Method>() // [!code focus]
 *
 * const request = store.getRequest({
 *   method: 'eth_foobar', // [!code focus]
 *   // ^?
 *   params: [42],
 * })
 * ```
 *
 * @param options - Request store options.
 * @returns The request store
 */
export function JsonRpc_createRequestStore<
  method extends JsonRpc_MethodGeneric | undefined = undefined,
>(
  options: JsonRpc_createRequestStore.Options = {},
): JsonRpc_createRequestStore.ReturnType<method> {
  let id = options.id ?? 0
  return {
    getRequest(options) {
      return JsonRpc_defineRequest({ id: id++, ...options } as never) as never
    },
    get id() {
      return id
    },
  }
}

export declare namespace JsonRpc_createRequestStore {
  type Options = {
    /** The initial request ID. */
    id?: number
  }

  type ReturnType<method extends JsonRpc_MethodGeneric | undefined> =
    JsonRpc_RequestStore<method>

  type ErrorType = GlobalErrorType
}

JsonRpc_createRequestStore.parseError = (error: unknown) =>
  /* v8 ignore next */
  error as JsonRpc_createRequestStore.ErrorType
