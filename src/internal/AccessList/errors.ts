import { Errors } from '../../Errors.js'
import { Hex } from '../../Hex.js'

/** Thrown when the size of a storage key is invalid. */
export class AccessList_InvalidStorageKeySizeError extends Errors.BaseError {
  override readonly name = 'AccessList.InvalidStorageKeySizeError'
  constructor({ storageKey }: { storageKey: Hex }) {
    super(
      `Size for storage key "${storageKey}" is invalid. Expected 32 bytes. Got ${Hex.size(storageKey)} bytes.`,
    )
  }
}
