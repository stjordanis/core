const handler = require('../../../lib/handlers/transactions/transfer')

let wallet
let transaction

beforeEach(() => {
  wallet = require('./__fixtures__/wallet')
  transaction = require('./__fixtures__/transaction')
})

describe('TransferHandler', () => {
  it('should be instantiated', () => {
    expect(handler.constructor.name).toBe('TransferHandler')
  })

  describe('canApply', () => {
    it('should be a function', () => {
      expect(handler.canApply).toBeFunction()
    })

    it('should be true', () => {
      expect(handler.canApply(wallet, transaction, [])).toBeTrue()
    })

    it('should be false', () => {
      transaction.senderPublicKey = 'a'.repeat(66)

      expect(handler.canApply(wallet, transaction, [])).toBeFalse()
    })
  })

  describe('apply', () => {
    it('should be a function', () => {
      expect(handler.apply).toBeFunction()
    })
  })

  describe('revert', () => {
    it('should be a function', () => {
      expect(handler.revert).toBeFunction()
    })
  })
})
