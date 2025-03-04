# ox

## 0.4.3

### Patch Changes

- [`c09d165`](https://github.com/wevm/ox/commit/c09d1655a1fa65be33d0dfb86d14cfe0dad7bdc3) Thanks [@jxom](https://github.com/jxom)! - Added `checksumAddress` as an option to `AbiParameters.{encode|decode}`.

## 0.4.2

### Patch Changes

- [#40](https://github.com/wevm/ox/pull/40) [`47e306d`](https://github.com/wevm/ox/commit/47e306d8ab95140eb7e2589c05351d1663a507ae) Thanks [@jxom](https://github.com/jxom)! - **ox/erc6492:** Added universal signature verification exports.

## 0.4.1

### Patch Changes

- [#37](https://github.com/wevm/ox/pull/37) [`39604df`](https://github.com/wevm/ox/commit/39604df9f84b810322e12f767ef450c0c2ced308) Thanks [@jxom](https://github.com/jxom)! - Added `ox/erc6492` entrypoint.

## 0.4.0

### Minor Changes

- [#35](https://github.com/wevm/ox/pull/35) [`4680b06`](https://github.com/wevm/ox/commit/4680b06d4715b1b62d903f45490d325506a1e959) Thanks [@gregfromstl](https://github.com/gregfromstl)! - Updated `Signature.toHex` to serialize the last byte as `v` instead of `yParity` for widened compatibility.

### Patch Changes

- [`15f9863`](https://github.com/wevm/ox/commit/15f98630c46ec0c09998162a92a5e8bac709e32d) Thanks [@jxom](https://github.com/jxom)! - Added assertion for ABI-encoding integer ranges.

- [`2e0d4af`](https://github.com/wevm/ox/commit/2e0d4af5c6e26c09a9b83971be0fc06415ee4976) Thanks [@jxom](https://github.com/jxom)! - Added support for block identifiers.

## 0.3.1

### Patch Changes

- [`e4104cd`](https://github.com/wevm/ox/commit/e4104cdb217de1fa30480b40060eb0fb0f7ad8d5) Thanks [@jxom](https://github.com/jxom)! - Added `extraEntropy` option to `Secp256k1.sign` & `P256.sign`.

## 0.3.0

### Minor Changes

- [`9ad0d2c`](https://github.com/wevm/ox/commit/9ad0d2c9777b5c6a8c1cd64ad8742f9c05706606) Thanks [@jxom](https://github.com/jxom)! - Added extra entropy to signature generation.

## 0.2.2

### Patch Changes

- [`4f40358`](https://github.com/wevm/ox/commit/4f4035826313dce974b7c7fa64ba4ea20d1f7f61) Thanks [@jxom](https://github.com/jxom)! - Tweaked `RpcResponse` and `Provider` errors to have optional parameters.

## 0.2.1

### Patch Changes

- [`6e4b635`](https://github.com/wevm/ox/commit/6e4b635ee720312be6631dee4f24fdd3c066f2eb) Thanks [@jxom](https://github.com/jxom)! - Derive EIP-712 Domain type if not provided in `TypedData.serialize`.

## 0.2.0

### Minor Changes

- [`2f0fc9b`](https://github.com/wevm/ox/commit/2f0fc9b66ff70bf03a3ecf146ed1a62433f53eb8) Thanks [@jxom](https://github.com/jxom)! - **Breaking:** Removed `.parseError` property on functions. Use the `.ErrorType` property instead. [Example](https://oxlib.sh/error-handling#usage-with-neverthrow)

### Patch Changes

- [`af01579`](https://github.com/wevm/ox/commit/af01579951b898ebd659cd6b64aaa56f7733c191) Thanks [@jxom](https://github.com/jxom)! - Assert that EIP-712 domains are valid.

## 0.1.8

### Patch Changes

- [#25](https://github.com/wevm/ox/pull/25) [`5da9efb`](https://github.com/wevm/ox/commit/5da9efbfebfa738ee0f78927e90b3fab61cbb2e8) Thanks [@tmm](https://github.com/tmm)! - Shimmed `WebAuthnP256.createCredential` for 1Password Firefox Add-on.

## 0.1.7

### Patch Changes

- [`33b5123`](https://github.com/wevm/ox/commit/33b51236908f17cb8644a47e222995e1800853db) Thanks [@tmm](https://github.com/tmm)! - Updated Provider errors.

## 0.1.6

### Patch Changes

- [`4405c4b`](https://github.com/wevm/ox/commit/4405c4bd2bff3f9f222a90de7323cce77c94b5f3) Thanks [@jxom](https://github.com/jxom)! - Amended `accountsChanged` parameter to be `readonly`.

- [#22](https://github.com/wevm/ox/pull/22) [`23f2d61`](https://github.com/wevm/ox/commit/23f2d61f817c5d33f0053cb154447f0b26244cc1) Thanks [@tmm](https://github.com/tmm)! - Added EIP 1193 errors.

## 0.1.5

### Patch Changes

- [`644b96a`](https://github.com/wevm/ox/commit/644b96a169a118c6f0606eda5354785523ed099b) Thanks [@jxom](https://github.com/jxom)! - Added additional guard for `result` in `Provider.from`.

## 0.1.4

### Patch Changes

- [`777fe42`](https://github.com/wevm/ox/commit/777fe4249c5225c676ff690fda58c5fcfb35d1f0) Thanks [@jxom](https://github.com/jxom)! - Tweaked `trimLeft` to remove all leading zeros.

## 0.1.3

### Patch Changes

- [`868d431`](https://github.com/wevm/ox/commit/868d4319a8cda77345f85f9f2e88ca786f0c8cfe) Thanks [@jxom](https://github.com/jxom)! - Added handling for odd-length hex values.

## 0.1.2

### Patch Changes

- [#17](https://github.com/wevm/ox/pull/17) [`f438faf`](https://github.com/wevm/ox/commit/f438fafbd396248283876eba220f4c661c47bfd2) Thanks [@jxom](https://github.com/jxom)! - Moved modules to `core/`.

## 0.1.1

### Patch Changes

- [`b7de4f2`](https://github.com/wevm/ox/commit/b7de4f2180520fd7f2bf08955df6e676d75db93e) Thanks [@jxom](https://github.com/jxom)! - Fixed `RpcSchema` inference on `params`.

## 0.1.0

### Minor Changes

- [`4297bcf`](https://github.com/wevm/ox/commit/4297bcf0acef7f1f208ba3770d679fefa0c2cb8d) Thanks [@jxom](https://github.com/jxom)! - Initial release.
