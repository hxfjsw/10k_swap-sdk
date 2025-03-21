import JSBI from 'jsbi';
export declare enum StarknetChainId {
    MAINNET = "SN_MAIN",
    TESTNET = "SN_GOERLI"
}
export declare type BigintIsh = JSBI | bigint | string;
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const FEES_NUMERATOR: JSBI;
export declare const FEES_DENOMINATOR: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
export declare const PAIR_CONTRACT_CLASS_HASH = "0x525f513c79c6affa761d7adc8f4083e3fe23de697cbc923e2e8c884ce3751a2";
export declare const FACTORY_ADDRESSES: {
    [chainId in StarknetChainId]: string;
};
export declare const CONTRACT_ADDRESS_PREFIX: string;
