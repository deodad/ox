import { Blobs, Hex } from 'ox'
import { expect, test } from 'vitest'
import { blobData, kzg } from '../../../test/kzg.js'

test('default', () => {
  const blobs = Blobs.from(Hex.fromString(blobData))
  const commitments = Blobs.toCommitments(blobs, { kzg })

  expect(
    Blobs.commitmentToVersionedHash(commitments[0]!),
  ).toMatchInlineSnapshot(
    `"0x012580b7683c14cc7540be305587b0eec4e7ec739094213ca080e2526c9237c4"`,
  )
  expect(
    Blobs.commitmentToVersionedHash(commitments[1]!, {
      as: 'Bytes',
    }),
  ).toMatchInlineSnapshot(
    `
    Uint8Array [
      1,
      36,
      60,
      24,
      160,
      36,
      200,
      53,
      204,
      225,
      68,
      179,
      182,
      176,
      235,
      135,
      139,
      120,
      32,
      199,
      199,
      183,
      217,
      254,
      255,
      128,
      8,
      13,
      118,
      81,
      156,
      69,
    ]
  `,
  )

  expect(
    Blobs.commitmentToVersionedHash(commitments[0]!, {
      version: 69,
    }),
  ).toMatchInlineSnapshot(
    `"0x452580b7683c14cc7540be305587b0eec4e7ec739094213ca080e2526c9237c4"`,
  )
  expect(
    Blobs.commitmentToVersionedHash(commitments[1]!, {
      as: 'Bytes',
      version: 69,
    }),
  ).toMatchInlineSnapshot(
    `
    Uint8Array [
      69,
      36,
      60,
      24,
      160,
      36,
      200,
      53,
      204,
      225,
      68,
      179,
      182,
      176,
      235,
      135,
      139,
      120,
      32,
      199,
      199,
      183,
      217,
      254,
      255,
      128,
      8,
      13,
      118,
      81,
      156,
      69,
    ]
  `,
  )
})

test('args: version', () => {
  const blobs = Blobs.from(Hex.fromString(blobData))
  const commitments = Blobs.toCommitments(blobs, { kzg })

  expect(
    Blobs.commitmentToVersionedHash(commitments[0]!, {
      version: 69,
    }),
  ).toMatchInlineSnapshot(
    `"0x452580b7683c14cc7540be305587b0eec4e7ec739094213ca080e2526c9237c4"`,
  )
})

test('args: as', () => {
  const blobs = Blobs.from(Hex.fromString(blobData))
  const commitments = Blobs.toCommitments(blobs, { kzg })

  expect(
    Blobs.commitmentToVersionedHash(commitments[0]!, {
      version: 69,
      as: 'Bytes',
    }),
  ).toMatchInlineSnapshot(
    `
    Uint8Array [
      69,
      37,
      128,
      183,
      104,
      60,
      20,
      204,
      117,
      64,
      190,
      48,
      85,
      135,
      176,
      238,
      196,
      231,
      236,
      115,
      144,
      148,
      33,
      60,
      160,
      128,
      226,
      82,
      108,
      146,
      55,
      196,
    ]
  `,
  )
})
