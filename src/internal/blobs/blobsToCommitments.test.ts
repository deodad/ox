import { Blobs, Bytes, Hex } from 'ox'
import { expect, test } from 'vitest'
import { blobData, kzg } from '../../../test/kzg.js'

test('from hex', () => {
  const blobs = Blobs.from(Hex.from(blobData))
  const commitments = Blobs.toCommitments(blobs, { kzg })
  expect(commitments).toMatchInlineSnapshot(`
    [
      "0x93fd6807e033db6b24db5485814f79a98c7e241432e95c2e327042f821f24f4a59315cf4e881205f472e99835729977a",
      "0xaa9da85a334c2935e670bd44e9b734481fc5ab72859c76f741008a92c2836932af9e60697b6319f3454a141154fcd583",
    ]
  `)
})

test('to hex', () => {
  const blobs = Blobs.from(Bytes.from(blobData))
  const commitments = Blobs.toCommitments(blobs, { kzg, as: 'Hex' })
  expect(commitments).toMatchInlineSnapshot(`
    [
      "0x93fd6807e033db6b24db5485814f79a98c7e241432e95c2e327042f821f24f4a59315cf4e881205f472e99835729977a",
      "0xaa9da85a334c2935e670bd44e9b734481fc5ab72859c76f741008a92c2836932af9e60697b6319f3454a141154fcd583",
    ]
  `)
})

test('from bytes', () => {
  const blobs = Blobs.from(Bytes.from(blobData))
  const commitments = Blobs.toCommitments(blobs, { kzg })
  expect(commitments).toMatchInlineSnapshot(`
    [
      Uint8Array [
        147,
        253,
        104,
        7,
        224,
        51,
        219,
        107,
        36,
        219,
        84,
        133,
        129,
        79,
        121,
        169,
        140,
        126,
        36,
        20,
        50,
        233,
        92,
        46,
        50,
        112,
        66,
        248,
        33,
        242,
        79,
        74,
        89,
        49,
        92,
        244,
        232,
        129,
        32,
        95,
        71,
        46,
        153,
        131,
        87,
        41,
        151,
        122,
      ],
      Uint8Array [
        170,
        157,
        168,
        90,
        51,
        76,
        41,
        53,
        230,
        112,
        189,
        68,
        233,
        183,
        52,
        72,
        31,
        197,
        171,
        114,
        133,
        156,
        118,
        247,
        65,
        0,
        138,
        146,
        194,
        131,
        105,
        50,
        175,
        158,
        96,
        105,
        123,
        99,
        25,
        243,
        69,
        74,
        20,
        17,
        84,
        252,
        213,
        131,
      ],
    ]
  `)
})

test('to bytes', () => {
  const blobs = Blobs.from(Hex.from(blobData))
  const commitments = Blobs.toCommitments(blobs, { kzg, as: 'Bytes' })
  expect(commitments).toMatchInlineSnapshot(`
    [
      Uint8Array [
        147,
        253,
        104,
        7,
        224,
        51,
        219,
        107,
        36,
        219,
        84,
        133,
        129,
        79,
        121,
        169,
        140,
        126,
        36,
        20,
        50,
        233,
        92,
        46,
        50,
        112,
        66,
        248,
        33,
        242,
        79,
        74,
        89,
        49,
        92,
        244,
        232,
        129,
        32,
        95,
        71,
        46,
        153,
        131,
        87,
        41,
        151,
        122,
      ],
      Uint8Array [
        170,
        157,
        168,
        90,
        51,
        76,
        41,
        53,
        230,
        112,
        189,
        68,
        233,
        183,
        52,
        72,
        31,
        197,
        171,
        114,
        133,
        156,
        118,
        247,
        65,
        0,
        138,
        146,
        194,
        131,
        105,
        50,
        175,
        158,
        96,
        105,
        123,
        99,
        25,
        243,
        69,
        74,
        20,
        17,
        84,
        252,
        213,
        131,
      ],
    ]
  `)
})
