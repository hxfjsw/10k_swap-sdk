import JSBI from 'jsbi'
import { encodeShortString } from 'starknet/utils/shortString'
import { StarknetChainId } from 'starknet/constants'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export { StarknetChainId as ChainId } from 'starknet/constants'

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = JSBI.BigInt(9970)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}

export const PAIR_CONTRACT_CLASS_HASH = '0x231adde42526bad434ca2eb983efdd64472638702f87f97e6e3c084f264e06f'

export const FACTORY_ADDRESSES: {
  [chainId in StarknetChainId]: string
} = {
  // [StarknetChainId.MAINNET]: '0x00d018832f3b2b082f7ebaa3eae2a5323708a7bb7598db620c0dba0e985e9a53',
  // [StarknetChainId.TESTNET]: '0x021b9f5ea693def6bcf563f088008bd0db0b8ed80763dd7a0fbea112742578ab'
  [StarknetChainId.MAINNET]: '0x00d018832f3b2b082f7ebaa3eae2a5323708a7bb7598db620c0dba0e985e9a53',
  [StarknetChainId.TESTNET]: '0x021b9f5ea693def6bcf563f088008bd0db0b8ed80763dd7a0fbea112742578ab'
}

export const CONTRACT_ADDRESS_PREFIX = encodeShortString('STARKNET_CONTRACT_ADDRESS')
