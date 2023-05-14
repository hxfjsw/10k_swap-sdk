import { PAIR_CONTRACT_CLASS_HASH } from '../src/constants'

describe('constants', () => {
  describe('INIT_CODE_HASH', () => {
    it('matches computed bytecode hash', () => {
      expect(PAIR_CONTRACT_CLASS_HASH).toEqual('0x525f513c79c6affa761d7adc8f4083e3fe23de697cbc923e2e8c884ce3751a2')
    })
  })
})
