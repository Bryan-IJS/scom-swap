/// <reference path="@ijstech/eth-contract/index.d.ts" />
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/OpenSwap.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/OpenSwap.json.ts" {
    const _default: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/OpenSwap.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/OpenSwap.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        minter: string;
        initSupplyTo: string;
        initSupply: number | BigNumber;
        totalSupply: number | BigNumber;
    }
    export interface IAllowanceParams {
        owner: string;
        spender: string;
    }
    export interface IApproveParams {
        spender: string;
        amount: number | BigNumber;
    }
    export interface IDecreaseAllowanceParams {
        spender: string;
        subtractedValue: number | BigNumber;
    }
    export interface IIncreaseAllowanceParams {
        spender: string;
        addedValue: number | BigNumber;
    }
    export interface IMintParams {
        account: string;
        amount: number | BigNumber;
    }
    export interface ITransferParams {
        recipient: string;
        amount: number | BigNumber;
    }
    export interface ITransferFromParams {
        sender: string;
        recipient: string;
        amount: number | BigNumber;
    }
    export class OpenSwap extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): OpenSwap.ApprovalEvent[];
        decodeApprovalEvent(event: Event): OpenSwap.ApprovalEvent;
        parseTransferEvent(receipt: TransactionReceipt): OpenSwap.TransferEvent[];
        decodeTransferEvent(event: Event): OpenSwap.TransferEvent;
        allowance: {
            (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        approve: {
            (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
            txData: (params: IApproveParams, options?: TransactionOptions) => Promise<string>;
        };
        balanceOf: {
            (account: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        cap: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        decimals: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        decreaseAllowance: {
            (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IDecreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
            txData: (params: IDecreaseAllowanceParams, options?: TransactionOptions) => Promise<string>;
        };
        increaseAllowance: {
            (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IIncreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
            txData: (params: IIncreaseAllowanceParams, options?: TransactionOptions) => Promise<string>;
        };
        mint: {
            (params: IMintParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IMintParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IMintParams, options?: TransactionOptions) => Promise<string>;
        };
        minter: {
            (options?: TransactionOptions): Promise<string>;
        };
        name: {
            (options?: TransactionOptions): Promise<string>;
        };
        symbol: {
            (options?: TransactionOptions): Promise<string>;
        };
        totalSupply: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        transfer: {
            (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferParams, options?: TransactionOptions) => Promise<boolean>;
            txData: (params: ITransferParams, options?: TransactionOptions) => Promise<string>;
        };
        transferFrom: {
            (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
            txData: (params: ITransferFromParams, options?: TransactionOptions) => Promise<string>;
        };
        private assign;
    }
    export module OpenSwap {
        interface ApprovalEvent {
            owner: string;
            spender: string;
            value: BigNumber;
            _event: Event;
        }
        interface TransferEvent {
            from: string;
            to: string;
            value: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/amm/OSWAP_ERC20.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/amm/OSWAP_ERC20.json.ts" {
    const _default_1: {
        abi: ({
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            outputs?: undefined;
            stateMutability?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_1;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/amm/OSWAP_ERC20.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/amm/OSWAP_ERC20.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IAllowanceParams {
        param1: string;
        param2: string;
    }
    export interface IApproveParams {
        spender: string;
        value: number | BigNumber;
    }
    export interface IPermitParams {
        owner: string;
        spender: string;
        value: number | BigNumber;
        deadline: number | BigNumber;
        v: number | BigNumber;
        r: string;
        s: string;
    }
    export interface ITransferParams {
        to: string;
        value: number | BigNumber;
    }
    export interface ITransferFromParams {
        from: string;
        to: string;
        value: number | BigNumber;
    }
    export class OSWAP_ERC20 extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(options?: number | BigNumber | TransactionOptions): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): OSWAP_ERC20.ApprovalEvent[];
        decodeApprovalEvent(event: Event): OSWAP_ERC20.ApprovalEvent;
        parseTransferEvent(receipt: TransactionReceipt): OSWAP_ERC20.TransferEvent[];
        decodeTransferEvent(event: Event): OSWAP_ERC20.TransferEvent;
        EIP712_TYPEHASH: {
            (options?: TransactionOptions): Promise<string>;
        };
        NAME_HASH: {
            (options?: TransactionOptions): Promise<string>;
        };
        PERMIT_TYPEHASH: {
            (options?: TransactionOptions): Promise<string>;
        };
        VERSION_HASH: {
            (options?: TransactionOptions): Promise<string>;
        };
        allowance: {
            (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        approve: {
            (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
            txData: (params: IApproveParams, options?: TransactionOptions) => Promise<string>;
        };
        balanceOf: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        decimals: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        name: {
            (options?: TransactionOptions): Promise<string>;
        };
        nonces: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        permit: {
            (params: IPermitParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IPermitParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IPermitParams, options?: TransactionOptions) => Promise<string>;
        };
        symbol: {
            (options?: TransactionOptions): Promise<string>;
        };
        totalSupply: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        transfer: {
            (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferParams, options?: TransactionOptions) => Promise<boolean>;
            txData: (params: ITransferParams, options?: TransactionOptions) => Promise<string>;
        };
        transferFrom: {
            (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
            txData: (params: ITransferFromParams, options?: TransactionOptions) => Promise<string>;
        };
        private assign;
    }
    export module OSWAP_ERC20 {
        interface ApprovalEvent {
            owner: string;
            spender: string;
            value: BigNumber;
            _event: Event;
        }
        interface TransferEvent {
            from: string;
            to: string;
            value: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/amm/OSWAP_Factory.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/amm/OSWAP_Factory.json.ts" {
    const _default_2: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_2;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/amm/OSWAP_Factory.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/amm/OSWAP_Factory.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        governance: string;
        pairCreator: string;
        tradeFee: number | BigNumber;
        protocolFee: number | BigNumber;
        protocolFeeTo: string;
    }
    export interface ICreatePairParams {
        tokenA: string;
        tokenB: string;
    }
    export interface IGetPairParams {
        param1: string;
        param2: string;
    }
    export interface ISetLiveForPairParams {
        pair: string;
        live: boolean;
    }
    export class OSWAP_Factory extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parsePairCreatedEvent(receipt: TransactionReceipt): OSWAP_Factory.PairCreatedEvent[];
        decodePairCreatedEvent(event: Event): OSWAP_Factory.PairCreatedEvent;
        parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_Factory.PairRestartedEvent[];
        decodePairRestartedEvent(event: Event): OSWAP_Factory.PairRestartedEvent;
        parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_Factory.PairShutdownedEvent[];
        decodePairShutdownedEvent(event: Event): OSWAP_Factory.PairShutdownedEvent;
        parseParamSetEvent(receipt: TransactionReceipt): OSWAP_Factory.ParamSetEvent[];
        decodeParamSetEvent(event: Event): OSWAP_Factory.ParamSetEvent;
        parseParamSet2Event(receipt: TransactionReceipt): OSWAP_Factory.ParamSet2Event[];
        decodeParamSet2Event(event: Event): OSWAP_Factory.ParamSet2Event;
        parseRestartedEvent(receipt: TransactionReceipt): OSWAP_Factory.RestartedEvent[];
        decodeRestartedEvent(event: Event): OSWAP_Factory.RestartedEvent;
        parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_Factory.ShutdownedEvent[];
        decodeShutdownedEvent(event: Event): OSWAP_Factory.ShutdownedEvent;
        allPairs: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
        };
        allPairsLength: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        createPair: {
            (params: ICreatePairParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ICreatePairParams, options?: TransactionOptions) => Promise<string>;
            txData: (params: ICreatePairParams, options?: TransactionOptions) => Promise<string>;
        };
        getPair: {
            (params: IGetPairParams, options?: TransactionOptions): Promise<string>;
        };
        governance: {
            (options?: TransactionOptions): Promise<string>;
        };
        isLive: {
            (options?: TransactionOptions): Promise<boolean>;
        };
        pairCreator: {
            (options?: TransactionOptions): Promise<string>;
        };
        protocolFee: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        protocolFeeParams: {
            (options?: TransactionOptions): Promise<{
                _protocolFee: BigNumber;
                _protocolFeeTo: string;
            }>;
        };
        protocolFeeTo: {
            (options?: TransactionOptions): Promise<string>;
        };
        setLive: {
            (isLive: boolean, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (isLive: boolean, options?: TransactionOptions) => Promise<void>;
            txData: (isLive: boolean, options?: TransactionOptions) => Promise<string>;
        };
        setLiveForPair: {
            (params: ISetLiveForPairParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISetLiveForPairParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISetLiveForPairParams, options?: TransactionOptions) => Promise<string>;
        };
        setProtocolFee: {
            (protocolFee: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (protocolFee: number | BigNumber, options?: TransactionOptions) => Promise<void>;
            txData: (protocolFee: number | BigNumber, options?: TransactionOptions) => Promise<string>;
        };
        setProtocolFeeTo: {
            (protocolFeeTo: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (protocolFeeTo: string, options?: TransactionOptions) => Promise<void>;
            txData: (protocolFeeTo: string, options?: TransactionOptions) => Promise<string>;
        };
        setTradeFee: {
            (tradeFee: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (tradeFee: number | BigNumber, options?: TransactionOptions) => Promise<void>;
            txData: (tradeFee: number | BigNumber, options?: TransactionOptions) => Promise<string>;
        };
        tradeFee: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        private assign;
    }
    export module OSWAP_Factory {
        interface PairCreatedEvent {
            token0: string;
            token1: string;
            pair: string;
            newSize: BigNumber;
            _event: Event;
        }
        interface PairRestartedEvent {
            pair: string;
            _event: Event;
        }
        interface PairShutdownedEvent {
            pair: string;
            _event: Event;
        }
        interface ParamSetEvent {
            name: string;
            value: string;
            _event: Event;
        }
        interface ParamSet2Event {
            name: string;
            value1: string;
            value2: string;
            _event: Event;
        }
        interface RestartedEvent {
            _event: Event;
        }
        interface ShutdownedEvent {
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/amm/OSWAP_Pair.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/amm/OSWAP_Pair.json.ts" {
    const _default_3: {
        abi: ({
            inputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_3;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/amm/OSWAP_Pair.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/amm/OSWAP_Pair.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IAllowanceParams {
        param1: string;
        param2: string;
    }
    export interface IApproveParams {
        spender: string;
        value: number | BigNumber;
    }
    export interface IGetAmountInParams {
        tokenOut: string;
        amountOut: number | BigNumber;
    }
    export interface IGetAmountOutParams {
        tokenIn: string;
        amountIn: number | BigNumber;
    }
    export interface IInitializeParams {
        token0: string;
        token1: string;
    }
    export interface IPermitParams {
        owner: string;
        spender: string;
        value: number | BigNumber;
        deadline: number | BigNumber;
        v: number | BigNumber;
        r: string;
        s: string;
    }
    export interface ISwapParams {
        amount0Out: number | BigNumber;
        amount1Out: number | BigNumber;
        to: string;
        data: string;
    }
    export interface ITransferParams {
        to: string;
        value: number | BigNumber;
    }
    export interface ITransferFromParams {
        from: string;
        to: string;
        value: number | BigNumber;
    }
    export class OSWAP_Pair extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(options?: TransactionOptions): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): OSWAP_Pair.ApprovalEvent[];
        decodeApprovalEvent(event: Event): OSWAP_Pair.ApprovalEvent;
        parseBurnEvent(receipt: TransactionReceipt): OSWAP_Pair.BurnEvent[];
        decodeBurnEvent(event: Event): OSWAP_Pair.BurnEvent;
        parseMintEvent(receipt: TransactionReceipt): OSWAP_Pair.MintEvent[];
        decodeMintEvent(event: Event): OSWAP_Pair.MintEvent;
        parseProtocolFeeSetEvent(receipt: TransactionReceipt): OSWAP_Pair.ProtocolFeeSetEvent[];
        decodeProtocolFeeSetEvent(event: Event): OSWAP_Pair.ProtocolFeeSetEvent;
        parseSwapEvent(receipt: TransactionReceipt): OSWAP_Pair.SwapEvent[];
        decodeSwapEvent(event: Event): OSWAP_Pair.SwapEvent;
        parseSyncEvent(receipt: TransactionReceipt): OSWAP_Pair.SyncEvent[];
        decodeSyncEvent(event: Event): OSWAP_Pair.SyncEvent;
        parseTradeFeeSetEvent(receipt: TransactionReceipt): OSWAP_Pair.TradeFeeSetEvent[];
        decodeTradeFeeSetEvent(event: Event): OSWAP_Pair.TradeFeeSetEvent;
        parseTransferEvent(receipt: TransactionReceipt): OSWAP_Pair.TransferEvent[];
        decodeTransferEvent(event: Event): OSWAP_Pair.TransferEvent;
        EIP712_TYPEHASH: {
            (options?: TransactionOptions): Promise<string>;
        };
        MINIMUM_LIQUIDITY: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        NAME_HASH: {
            (options?: TransactionOptions): Promise<string>;
        };
        PERMIT_TYPEHASH: {
            (options?: TransactionOptions): Promise<string>;
        };
        VERSION_HASH: {
            (options?: TransactionOptions): Promise<string>;
        };
        allowance: {
            (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        approve: {
            (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
            txData: (params: IApproveParams, options?: TransactionOptions) => Promise<string>;
        };
        balanceOf: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        burn: {
            (to: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (to: string, options?: TransactionOptions) => Promise<{
                amount0: BigNumber;
                amount1: BigNumber;
            }>;
            txData: (to: string, options?: TransactionOptions) => Promise<string>;
        };
        decimals: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        factory: {
            (options?: TransactionOptions): Promise<string>;
        };
        getAmountIn: {
            (params: IGetAmountInParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getAmountOut: {
            (params: IGetAmountOutParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getReserves: {
            (options?: TransactionOptions): Promise<{
                _reserve0: BigNumber;
                _reserve1: BigNumber;
                _blockTimestampLast: BigNumber;
            }>;
        };
        initialize: {
            (params: IInitializeParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IInitializeParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IInitializeParams, options?: TransactionOptions) => Promise<string>;
        };
        isLive: {
            (options?: TransactionOptions): Promise<boolean>;
        };
        kLast: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        mint: {
            (to: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (to: string, options?: TransactionOptions) => Promise<BigNumber>;
            txData: (to: string, options?: TransactionOptions) => Promise<string>;
        };
        name: {
            (options?: TransactionOptions): Promise<string>;
        };
        nonces: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        permit: {
            (params: IPermitParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IPermitParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IPermitParams, options?: TransactionOptions) => Promise<string>;
        };
        price0CumulativeLast: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        price1CumulativeLast: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        protocolFee: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        setLive: {
            (isLive: boolean, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (isLive: boolean, options?: TransactionOptions) => Promise<void>;
            txData: (isLive: boolean, options?: TransactionOptions) => Promise<string>;
        };
        skim: {
            (to: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (to: string, options?: TransactionOptions) => Promise<void>;
            txData: (to: string, options?: TransactionOptions) => Promise<string>;
        };
        swap: {
            (params: ISwapParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISwapParams, options?: TransactionOptions) => Promise<string>;
        };
        symbol: {
            (options?: TransactionOptions): Promise<string>;
        };
        sync: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
            txData: (options?: TransactionOptions) => Promise<string>;
        };
        token0: {
            (options?: TransactionOptions): Promise<string>;
        };
        token1: {
            (options?: TransactionOptions): Promise<string>;
        };
        totalSupply: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        tradeFee: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        transfer: {
            (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferParams, options?: TransactionOptions) => Promise<boolean>;
            txData: (params: ITransferParams, options?: TransactionOptions) => Promise<string>;
        };
        transferFrom: {
            (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
            txData: (params: ITransferFromParams, options?: TransactionOptions) => Promise<string>;
        };
        updateFee: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
            txData: (options?: TransactionOptions) => Promise<string>;
        };
        updateProtocolFee: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
            txData: (options?: TransactionOptions) => Promise<string>;
        };
        private assign;
    }
    export module OSWAP_Pair {
        interface ApprovalEvent {
            owner: string;
            spender: string;
            value: BigNumber;
            _event: Event;
        }
        interface BurnEvent {
            sender: string;
            amount0: BigNumber;
            amount1: BigNumber;
            to: string;
            _event: Event;
        }
        interface MintEvent {
            sender: string;
            amount0: BigNumber;
            amount1: BigNumber;
            _event: Event;
        }
        interface ProtocolFeeSetEvent {
            protocolFee: BigNumber;
            _event: Event;
        }
        interface SwapEvent {
            sender: string;
            amount0In: BigNumber;
            amount1In: BigNumber;
            amount0Out: BigNumber;
            amount1Out: BigNumber;
            to: string;
            _event: Event;
        }
        interface SyncEvent {
            reserve0: BigNumber;
            reserve1: BigNumber;
            _event: Event;
        }
        interface TradeFeeSetEvent {
            tradeFee: BigNumber;
            _event: Event;
        }
        interface TransferEvent {
            from: string;
            to: string;
            value: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/amm/OSWAP_PairCreator.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/amm/OSWAP_PairCreator.json.ts" {
    const _default_4: {
        abi: {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        }[];
        bytecode: string;
    };
    export default _default_4;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/amm/OSWAP_PairCreator.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/amm/OSWAP_PairCreator.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
    export class OSWAP_PairCreator extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(options?: number | BigNumber | TransactionOptions): Promise<string>;
        createPair: {
            (salt: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (salt: string, options?: TransactionOptions) => Promise<string>;
            txData: (salt: string, options?: TransactionOptions) => Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/amm/OSWAP_Router.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/amm/OSWAP_Router.json.ts" {
    const _default_5: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_5;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/amm/OSWAP_Router.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/amm/OSWAP_Router.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        factory: string;
        WETH: string;
    }
    export interface IAddLiquidityParams {
        tokenA: string;
        tokenB: string;
        amountADesired: number | BigNumber;
        amountBDesired: number | BigNumber;
        amountAMin: number | BigNumber;
        amountBMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
    }
    export interface IAddLiquidityETHParams {
        token: string;
        amountTokenDesired: number | BigNumber;
        amountTokenMin: number | BigNumber;
        amountETHMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
    }
    export interface IGetAmountInParams {
        amountOut: number | BigNumber;
        tokenIn: string;
        tokenOut: string;
    }
    export interface IGetAmountOutParams {
        amountIn: number | BigNumber;
        tokenIn: string;
        tokenOut: string;
    }
    export interface IGetAmountsInParams {
        amountOut: number | BigNumber;
        path: string[];
    }
    export interface IGetAmountsOutParams {
        amountIn: number | BigNumber;
        path: string[];
    }
    export interface IGetReservesParams {
        tokenA: string;
        tokenB: string;
    }
    export interface IQuoteParams {
        amountA: number | BigNumber;
        reserveA: number | BigNumber;
        reserveB: number | BigNumber;
    }
    export interface IRemoveLiquidityParams {
        tokenA: string;
        tokenB: string;
        liquidity: number | BigNumber;
        amountAMin: number | BigNumber;
        amountBMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
    }
    export interface IRemoveLiquidityETHParams {
        token: string;
        liquidity: number | BigNumber;
        amountTokenMin: number | BigNumber;
        amountETHMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
    }
    export interface IRemoveLiquidityETHSupportingFeeOnTransferTokensParams {
        token: string;
        liquidity: number | BigNumber;
        amountTokenMin: number | BigNumber;
        amountETHMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
    }
    export interface IRemoveLiquidityETHWithPermitParams {
        token: string;
        liquidity: number | BigNumber;
        amountTokenMin: number | BigNumber;
        amountETHMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
        approveMax: boolean;
        v: number | BigNumber;
        r: string;
        s: string;
    }
    export interface IRemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensParams {
        token: string;
        liquidity: number | BigNumber;
        amountTokenMin: number | BigNumber;
        amountETHMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
        approveMax: boolean;
        v: number | BigNumber;
        r: string;
        s: string;
    }
    export interface IRemoveLiquidityWithPermitParams {
        tokenA: string;
        tokenB: string;
        liquidity: number | BigNumber;
        amountAMin: number | BigNumber;
        amountBMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
        approveMax: boolean;
        v: number | BigNumber;
        r: string;
        s: string;
    }
    export interface ISwapETHForExactTokensParams {
        amountOut: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export interface ISwapExactETHForTokensParams {
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export interface ISwapExactETHForTokensSupportingFeeOnTransferTokensParams {
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export interface ISwapExactTokensForETHParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export interface ISwapExactTokensForETHSupportingFeeOnTransferTokensParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export interface ISwapExactTokensForTokensParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export interface ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export interface ISwapTokensForExactETHParams {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export interface ISwapTokensForExactTokensParams {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export class OSWAP_Router extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        WETH: {
            (options?: TransactionOptions): Promise<string>;
        };
        addLiquidity: {
            (params: IAddLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityParams, options?: TransactionOptions) => Promise<{
                amountA: BigNumber;
                amountB: BigNumber;
                liquidity: BigNumber;
            }>;
            txData: (params: IAddLiquidityParams, options?: TransactionOptions) => Promise<string>;
        };
        addLiquidityETH: {
            (params: IAddLiquidityETHParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityETHParams, options?: number | BigNumber | TransactionOptions) => Promise<{
                amountToken: BigNumber;
                amountETH: BigNumber;
                liquidity: BigNumber;
            }>;
            txData: (params: IAddLiquidityETHParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        factory: {
            (options?: TransactionOptions): Promise<string>;
        };
        getAmountIn: {
            (params: IGetAmountInParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getAmountOut: {
            (params: IGetAmountOutParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getAmountsIn: {
            (params: IGetAmountsInParams, options?: TransactionOptions): Promise<BigNumber[]>;
        };
        getAmountsOut: {
            (params: IGetAmountsOutParams, options?: TransactionOptions): Promise<BigNumber[]>;
        };
        getReserves: {
            (params: IGetReservesParams, options?: TransactionOptions): Promise<{
                reserveA: BigNumber;
                reserveB: BigNumber;
            }>;
        };
        quote: {
            (params: IQuoteParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        removeLiquidity: {
            (params: IRemoveLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<{
                amountA: BigNumber;
                amountB: BigNumber;
            }>;
            txData: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<string>;
        };
        removeLiquidityETH: {
            (params: IRemoveLiquidityETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityETHParams, options?: TransactionOptions) => Promise<{
                amountToken: BigNumber;
                amountETH: BigNumber;
            }>;
            txData: (params: IRemoveLiquidityETHParams, options?: TransactionOptions) => Promise<string>;
        };
        removeLiquidityETHSupportingFeeOnTransferTokens: {
            (params: IRemoveLiquidityETHSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityETHSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<BigNumber>;
            txData: (params: IRemoveLiquidityETHSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<string>;
        };
        removeLiquidityETHWithPermit: {
            (params: IRemoveLiquidityETHWithPermitParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityETHWithPermitParams, options?: TransactionOptions) => Promise<{
                amountToken: BigNumber;
                amountETH: BigNumber;
            }>;
            txData: (params: IRemoveLiquidityETHWithPermitParams, options?: TransactionOptions) => Promise<string>;
        };
        removeLiquidityETHWithPermitSupportingFeeOnTransferTokens: {
            (params: IRemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<BigNumber>;
            txData: (params: IRemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<string>;
        };
        removeLiquidityWithPermit: {
            (params: IRemoveLiquidityWithPermitParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityWithPermitParams, options?: TransactionOptions) => Promise<{
                amountA: BigNumber;
                amountB: BigNumber;
            }>;
            txData: (params: IRemoveLiquidityWithPermitParams, options?: TransactionOptions) => Promise<string>;
        };
        swapETHForExactTokens: {
            (params: ISwapETHForExactTokensParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapETHForExactTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber[]>;
            txData: (params: ISwapETHForExactTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        swapExactETHForTokens: {
            (params: ISwapExactETHForTokensParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactETHForTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber[]>;
            txData: (params: ISwapExactETHForTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        swapExactETHForTokensSupportingFeeOnTransferTokens: {
            (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        swapExactTokensForETH: {
            (params: ISwapExactTokensForETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForETHParams, options?: TransactionOptions) => Promise<BigNumber[]>;
            txData: (params: ISwapExactTokensForETHParams, options?: TransactionOptions) => Promise<string>;
        };
        swapExactTokensForETHSupportingFeeOnTransferTokens: {
            (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<string>;
        };
        swapExactTokensForTokens: {
            (params: ISwapExactTokensForTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForTokensParams, options?: TransactionOptions) => Promise<BigNumber[]>;
            txData: (params: ISwapExactTokensForTokensParams, options?: TransactionOptions) => Promise<string>;
        };
        swapExactTokensForTokensSupportingFeeOnTransferTokens: {
            (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<string>;
        };
        swapTokensForExactETH: {
            (params: ISwapTokensForExactETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapTokensForExactETHParams, options?: TransactionOptions) => Promise<BigNumber[]>;
            txData: (params: ISwapTokensForExactETHParams, options?: TransactionOptions) => Promise<string>;
        };
        swapTokensForExactTokens: {
            (params: ISwapTokensForExactTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapTokensForExactTokensParams, options?: TransactionOptions) => Promise<BigNumber[]>;
            txData: (params: ISwapTokensForExactTokensParams, options?: TransactionOptions) => Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/amm/OSWAP_VotingExecutor1.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/amm/OSWAP_VotingExecutor1.json.ts" {
    const _default_6: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: any[];
            stateMutability: string;
            type: string;
        } | {
            inputs: any[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        })[];
        bytecode: string;
    };
    export default _default_6;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/amm/OSWAP_VotingExecutor1.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/amm/OSWAP_VotingExecutor1.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, TransactionOptions } from "@ijstech/eth-contract";
    export class OSWAP_VotingExecutor1 extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(factory: string, options?: TransactionOptions): Promise<string>;
        execute: {
            (params: string[], options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: string[], options?: TransactionOptions) => Promise<void>;
            txData: (params: string[], options?: TransactionOptions) => Promise<string>;
        };
        factory: {
            (options?: TransactionOptions): Promise<string>;
        };
        governance: {
            (options?: TransactionOptions): Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/commons/OSWAP_FactoryBase.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/commons/OSWAP_FactoryBase.json.ts" {
    const _default_7: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_7;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/commons/OSWAP_FactoryBase.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/commons/OSWAP_FactoryBase.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        governance: string;
        pairCreator: string;
    }
    export interface ICreatePairParams {
        tokenA: string;
        tokenB: string;
    }
    export interface IGetPairParams {
        param1: string;
        param2: string;
    }
    export interface ISetLiveForPairParams {
        pair: string;
        live: boolean;
    }
    export class OSWAP_FactoryBase extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parsePairCreatedEvent(receipt: TransactionReceipt): OSWAP_FactoryBase.PairCreatedEvent[];
        decodePairCreatedEvent(event: Event): OSWAP_FactoryBase.PairCreatedEvent;
        parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_FactoryBase.PairRestartedEvent[];
        decodePairRestartedEvent(event: Event): OSWAP_FactoryBase.PairRestartedEvent;
        parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_FactoryBase.PairShutdownedEvent[];
        decodePairShutdownedEvent(event: Event): OSWAP_FactoryBase.PairShutdownedEvent;
        parseRestartedEvent(receipt: TransactionReceipt): OSWAP_FactoryBase.RestartedEvent[];
        decodeRestartedEvent(event: Event): OSWAP_FactoryBase.RestartedEvent;
        parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_FactoryBase.ShutdownedEvent[];
        decodeShutdownedEvent(event: Event): OSWAP_FactoryBase.ShutdownedEvent;
        allPairs: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
        };
        allPairsLength: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        createPair: {
            (params: ICreatePairParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ICreatePairParams, options?: TransactionOptions) => Promise<string>;
            txData: (params: ICreatePairParams, options?: TransactionOptions) => Promise<string>;
        };
        getPair: {
            (params: IGetPairParams, options?: TransactionOptions): Promise<string>;
        };
        governance: {
            (options?: TransactionOptions): Promise<string>;
        };
        isLive: {
            (options?: TransactionOptions): Promise<boolean>;
        };
        pairCreator: {
            (options?: TransactionOptions): Promise<string>;
        };
        setLive: {
            (isLive: boolean, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (isLive: boolean, options?: TransactionOptions) => Promise<void>;
            txData: (isLive: boolean, options?: TransactionOptions) => Promise<string>;
        };
        setLiveForPair: {
            (params: ISetLiveForPairParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISetLiveForPairParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISetLiveForPairParams, options?: TransactionOptions) => Promise<string>;
        };
        private assign;
    }
    export module OSWAP_FactoryBase {
        interface PairCreatedEvent {
            token0: string;
            token1: string;
            pair: string;
            newSize: BigNumber;
            _event: Event;
        }
        interface PairRestartedEvent {
            pair: string;
            _event: Event;
        }
        interface PairShutdownedEvent {
            pair: string;
            _event: Event;
        }
        interface RestartedEvent {
            _event: Event;
        }
        interface ShutdownedEvent {
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/commons/OSWAP_PausableFactory.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/commons/OSWAP_PausableFactory.json.ts" {
    const _default_8: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: any[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_8;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/commons/OSWAP_PausableFactory.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/commons/OSWAP_PausableFactory.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface ISetLiveForPairParams {
        pair: string;
        live: boolean;
    }
    export class OSWAP_PausableFactory extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(governance: string, options?: TransactionOptions): Promise<string>;
        parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_PausableFactory.PairRestartedEvent[];
        decodePairRestartedEvent(event: Event): OSWAP_PausableFactory.PairRestartedEvent;
        parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_PausableFactory.PairShutdownedEvent[];
        decodePairShutdownedEvent(event: Event): OSWAP_PausableFactory.PairShutdownedEvent;
        parseRestartedEvent(receipt: TransactionReceipt): OSWAP_PausableFactory.RestartedEvent[];
        decodeRestartedEvent(event: Event): OSWAP_PausableFactory.RestartedEvent;
        parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_PausableFactory.ShutdownedEvent[];
        decodeShutdownedEvent(event: Event): OSWAP_PausableFactory.ShutdownedEvent;
        governance: {
            (options?: TransactionOptions): Promise<string>;
        };
        isLive: {
            (options?: TransactionOptions): Promise<boolean>;
        };
        setLive: {
            (isLive: boolean, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (isLive: boolean, options?: TransactionOptions) => Promise<void>;
            txData: (isLive: boolean, options?: TransactionOptions) => Promise<string>;
        };
        setLiveForPair: {
            (params: ISetLiveForPairParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISetLiveForPairParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISetLiveForPairParams, options?: TransactionOptions) => Promise<string>;
        };
        private assign;
    }
    export module OSWAP_PausableFactory {
        interface PairRestartedEvent {
            pair: string;
            _event: Event;
        }
        interface PairShutdownedEvent {
            pair: string;
            _event: Event;
        }
        interface RestartedEvent {
            _event: Event;
        }
        interface ShutdownedEvent {
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/commons/OSWAP_PausablePair.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/commons/OSWAP_PausablePair.json.ts" {
    const _default_9: {
        abi: ({
            inputs: any[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: any[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: any[];
            stateMutability: string;
            type: string;
        })[];
        bytecode: string;
    };
    export default _default_9;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/commons/OSWAP_PausablePair.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/commons/OSWAP_PausablePair.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, TransactionOptions } from "@ijstech/eth-contract";
    export class OSWAP_PausablePair extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(options?: TransactionOptions): Promise<string>;
        factory: {
            (options?: TransactionOptions): Promise<string>;
        };
        isLive: {
            (options?: TransactionOptions): Promise<boolean>;
        };
        setLive: {
            (isLive: boolean, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (isLive: boolean, options?: TransactionOptions) => Promise<void>;
            txData: (isLive: boolean, options?: TransactionOptions) => Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/gov/OAXDEX_Administrator.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/gov/OAXDEX_Administrator.json.ts" {
    const _default_10: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_10;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/gov/OAXDEX_Administrator.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/gov/OAXDEX_Administrator.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IExecutePairRestartParams {
        factory: string;
        pair: string;
    }
    export interface IExecutePairShutdownParams {
        factory: string;
        pair: string;
    }
    export interface IFactoryRestartParams {
        factory: string;
        YorN: boolean;
    }
    export interface IFactoryRestartVoteParams {
        param1: string;
        param2: string;
    }
    export interface IFactoryShutdownParams {
        factory: string;
        YorN: boolean;
    }
    export interface IFactoryShutdownVoteParams {
        param1: string;
        param2: string;
    }
    export interface IPairRestartParams {
        pair: string;
        YorN: boolean;
    }
    export interface IPairRestartVoteParams {
        param1: string;
        param2: string;
    }
    export interface IPairShutdownParams {
        pair: string;
        YorN: boolean;
    }
    export interface IPairShutdownVoteParams {
        param1: string;
        param2: string;
    }
    export interface IVetoVotingParams {
        votingContract: string;
        YorN: boolean;
    }
    export interface IVetoVotingVoteParams {
        param1: string;
        param2: string;
    }
    export class OAXDEX_Administrator extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(governance: string, options?: TransactionOptions): Promise<string>;
        parseAddAdminEvent(receipt: TransactionReceipt): OAXDEX_Administrator.AddAdminEvent[];
        decodeAddAdminEvent(event: Event): OAXDEX_Administrator.AddAdminEvent;
        parseRemoveAdminEvent(receipt: TransactionReceipt): OAXDEX_Administrator.RemoveAdminEvent[];
        decodeRemoveAdminEvent(event: Event): OAXDEX_Administrator.RemoveAdminEvent;
        parseSetMaxAdminEvent(receipt: TransactionReceipt): OAXDEX_Administrator.SetMaxAdminEvent[];
        decodeSetMaxAdminEvent(event: Event): OAXDEX_Administrator.SetMaxAdminEvent;
        parseVotedFactoryRestartEvent(receipt: TransactionReceipt): OAXDEX_Administrator.VotedFactoryRestartEvent[];
        decodeVotedFactoryRestartEvent(event: Event): OAXDEX_Administrator.VotedFactoryRestartEvent;
        parseVotedFactoryShutdownEvent(receipt: TransactionReceipt): OAXDEX_Administrator.VotedFactoryShutdownEvent[];
        decodeVotedFactoryShutdownEvent(event: Event): OAXDEX_Administrator.VotedFactoryShutdownEvent;
        parseVotedPairRestartEvent(receipt: TransactionReceipt): OAXDEX_Administrator.VotedPairRestartEvent[];
        decodeVotedPairRestartEvent(event: Event): OAXDEX_Administrator.VotedPairRestartEvent;
        parseVotedPairShutdownEvent(receipt: TransactionReceipt): OAXDEX_Administrator.VotedPairShutdownEvent[];
        decodeVotedPairShutdownEvent(event: Event): OAXDEX_Administrator.VotedPairShutdownEvent;
        parseVotedVetoEvent(receipt: TransactionReceipt): OAXDEX_Administrator.VotedVetoEvent[];
        decodeVotedVetoEvent(event: Event): OAXDEX_Administrator.VotedVetoEvent;
        addAdmin: {
            (admin: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (admin: string, options?: TransactionOptions) => Promise<void>;
            txData: (admin: string, options?: TransactionOptions) => Promise<string>;
        };
        admins: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
        };
        adminsIdx: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        allAdmins: {
            (options?: TransactionOptions): Promise<string[]>;
        };
        executeFactoryRestart: {
            (factory: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (factory: string, options?: TransactionOptions) => Promise<void>;
            txData: (factory: string, options?: TransactionOptions) => Promise<string>;
        };
        executeFactoryShutdown: {
            (factory: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (factory: string, options?: TransactionOptions) => Promise<void>;
            txData: (factory: string, options?: TransactionOptions) => Promise<string>;
        };
        executePairRestart: {
            (params: IExecutePairRestartParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IExecutePairRestartParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IExecutePairRestartParams, options?: TransactionOptions) => Promise<string>;
        };
        executePairShutdown: {
            (params: IExecutePairShutdownParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IExecutePairShutdownParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IExecutePairShutdownParams, options?: TransactionOptions) => Promise<string>;
        };
        executeVetoVoting: {
            (votingContract: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (votingContract: string, options?: TransactionOptions) => Promise<void>;
            txData: (votingContract: string, options?: TransactionOptions) => Promise<string>;
        };
        factoryRestart: {
            (params: IFactoryRestartParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IFactoryRestartParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IFactoryRestartParams, options?: TransactionOptions) => Promise<string>;
        };
        factoryRestartVote: {
            (params: IFactoryRestartVoteParams, options?: TransactionOptions): Promise<boolean>;
        };
        factoryShutdown: {
            (params: IFactoryShutdownParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IFactoryShutdownParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IFactoryShutdownParams, options?: TransactionOptions) => Promise<string>;
        };
        factoryShutdownVote: {
            (params: IFactoryShutdownVoteParams, options?: TransactionOptions): Promise<boolean>;
        };
        getFactoryRestartVote: {
            (factory: string, options?: TransactionOptions): Promise<boolean[]>;
        };
        getFactoryShutdownVote: {
            (factory: string, options?: TransactionOptions): Promise<boolean[]>;
        };
        getPairRestartVote: {
            (pair: string, options?: TransactionOptions): Promise<boolean[]>;
        };
        getPairShutdownVote: {
            (pair: string, options?: TransactionOptions): Promise<boolean[]>;
        };
        getVetoVotingVote: {
            (votingContract: string, options?: TransactionOptions): Promise<boolean[]>;
        };
        governance: {
            (options?: TransactionOptions): Promise<string>;
        };
        maxAdmin: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        pairRestart: {
            (params: IPairRestartParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IPairRestartParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IPairRestartParams, options?: TransactionOptions) => Promise<string>;
        };
        pairRestartVote: {
            (params: IPairRestartVoteParams, options?: TransactionOptions): Promise<boolean>;
        };
        pairShutdown: {
            (params: IPairShutdownParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IPairShutdownParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IPairShutdownParams, options?: TransactionOptions) => Promise<string>;
        };
        pairShutdownVote: {
            (params: IPairShutdownVoteParams, options?: TransactionOptions): Promise<boolean>;
        };
        removeAdmin: {
            (admin: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (admin: string, options?: TransactionOptions) => Promise<void>;
            txData: (admin: string, options?: TransactionOptions) => Promise<string>;
        };
        setMaxAdmin: {
            (maxAdmin: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (maxAdmin: number | BigNumber, options?: TransactionOptions) => Promise<void>;
            txData: (maxAdmin: number | BigNumber, options?: TransactionOptions) => Promise<string>;
        };
        vetoVoting: {
            (params: IVetoVotingParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IVetoVotingParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IVetoVotingParams, options?: TransactionOptions) => Promise<string>;
        };
        vetoVotingVote: {
            (params: IVetoVotingVoteParams, options?: TransactionOptions): Promise<boolean>;
        };
        private assign;
    }
    export module OAXDEX_Administrator {
        interface AddAdminEvent {
            admin: string;
            _event: Event;
        }
        interface RemoveAdminEvent {
            admin: string;
            _event: Event;
        }
        interface SetMaxAdminEvent {
            maxAdmin: BigNumber;
            _event: Event;
        }
        interface VotedFactoryRestartEvent {
            admin: string;
            factory: string;
            YorN: boolean;
            _event: Event;
        }
        interface VotedFactoryShutdownEvent {
            admin: string;
            factory: string;
            YorN: boolean;
            _event: Event;
        }
        interface VotedPairRestartEvent {
            admin: string;
            pair: string;
            YorN: boolean;
            _event: Event;
        }
        interface VotedPairShutdownEvent {
            admin: string;
            pair: string;
            YorN: boolean;
            _event: Event;
        }
        interface VotedVetoEvent {
            admin: string;
            votingContract: string;
            YorN: boolean;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/gov/OAXDEX_Governance.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/gov/OAXDEX_Governance.json.ts" {
    const _default_11: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_11;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/gov/OAXDEX_Governance.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/gov/OAXDEX_Governance.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        oaxToken: string;
        votingToken: string;
        names: string[];
        minExeDelay: (number | BigNumber)[];
        minVoteDuration: (number | BigNumber)[];
        maxVoteDuration: (number | BigNumber)[];
        minOaxTokenToCreateVote: (number | BigNumber)[];
        minQuorum: (number | BigNumber)[];
        minStakePeriod: number | BigNumber;
    }
    export interface IAddVotingConfigParams {
        name: string;
        minExeDelay: number | BigNumber;
        minVoteDuration: number | BigNumber;
        maxVoteDuration: number | BigNumber;
        minOaxTokenToCreateVote: number | BigNumber;
        minQuorum: number | BigNumber;
    }
    export interface IGetVotingConfigProfilesParams {
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IGetVotingsParams {
        start: number | BigNumber;
        count: number | BigNumber;
    }
    export interface INewVoteParams {
        vote: string;
        isExecutiveVote: boolean;
    }
    export interface ISetVotingConfigParams {
        configName: string;
        paramName: string;
        paramValue: number | BigNumber;
    }
    export interface ISetVotingExecutorParams {
        votingExecutor: string;
        bool: boolean;
    }
    export interface IVotedParams {
        poll: boolean;
        account: string;
        option: number | BigNumber;
    }
    export class OAXDEX_Governance extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseAddVotingConfigEvent(receipt: TransactionReceipt): OAXDEX_Governance.AddVotingConfigEvent[];
        decodeAddVotingConfigEvent(event: Event): OAXDEX_Governance.AddVotingConfigEvent;
        parseExecutedEvent(receipt: TransactionReceipt): OAXDEX_Governance.ExecutedEvent[];
        decodeExecutedEvent(event: Event): OAXDEX_Governance.ExecutedEvent;
        parseNewPollEvent(receipt: TransactionReceipt): OAXDEX_Governance.NewPollEvent[];
        decodeNewPollEvent(event: Event): OAXDEX_Governance.NewPollEvent;
        parseNewVoteEvent(receipt: TransactionReceipt): OAXDEX_Governance.NewVoteEvent[];
        decodeNewVoteEvent(event: Event): OAXDEX_Governance.NewVoteEvent;
        parseOwnershipTransferredEvent(receipt: TransactionReceipt): OAXDEX_Governance.OwnershipTransferredEvent[];
        decodeOwnershipTransferredEvent(event: Event): OAXDEX_Governance.OwnershipTransferredEvent;
        parseParamSetEvent(receipt: TransactionReceipt): OAXDEX_Governance.ParamSetEvent[];
        decodeParamSetEvent(event: Event): OAXDEX_Governance.ParamSetEvent;
        parseParamSet2Event(receipt: TransactionReceipt): OAXDEX_Governance.ParamSet2Event[];
        decodeParamSet2Event(event: Event): OAXDEX_Governance.ParamSet2Event;
        parsePollEvent(receipt: TransactionReceipt): OAXDEX_Governance.PollEvent[];
        decodePollEvent(event: Event): OAXDEX_Governance.PollEvent;
        parseSetVotingConfigEvent(receipt: TransactionReceipt): OAXDEX_Governance.SetVotingConfigEvent[];
        decodeSetVotingConfigEvent(event: Event): OAXDEX_Governance.SetVotingConfigEvent;
        parseStakeEvent(receipt: TransactionReceipt): OAXDEX_Governance.StakeEvent[];
        decodeStakeEvent(event: Event): OAXDEX_Governance.StakeEvent;
        parseUnstakeEvent(receipt: TransactionReceipt): OAXDEX_Governance.UnstakeEvent[];
        decodeUnstakeEvent(event: Event): OAXDEX_Governance.UnstakeEvent;
        parseVetoEvent(receipt: TransactionReceipt): OAXDEX_Governance.VetoEvent[];
        decodeVetoEvent(event: Event): OAXDEX_Governance.VetoEvent;
        parseVoteEvent(receipt: TransactionReceipt): OAXDEX_Governance.VoteEvent[];
        decodeVoteEvent(event: Event): OAXDEX_Governance.VoteEvent;
        addVotingConfig: {
            (params: IAddVotingConfigParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddVotingConfigParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IAddVotingConfigParams, options?: TransactionOptions) => Promise<string>;
        };
        admin: {
            (options?: TransactionOptions): Promise<string>;
        };
        allVotings: {
            (options?: TransactionOptions): Promise<string[]>;
        };
        closeVote: {
            (vote: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (vote: string, options?: TransactionOptions) => Promise<void>;
            txData: (vote: string, options?: TransactionOptions) => Promise<string>;
        };
        executed: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
            txData: (options?: TransactionOptions) => Promise<string>;
        };
        freezedStake: {
            (param1: string, options?: TransactionOptions): Promise<{
                amount: BigNumber;
                timestamp: BigNumber;
            }>;
        };
        getNewVoteId: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<BigNumber>;
            txData: (options?: TransactionOptions) => Promise<string>;
        };
        getVotingConfigProfiles: {
            (params: IGetVotingConfigProfilesParams, options?: TransactionOptions): Promise<string[]>;
        };
        getVotingCount: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        getVotingParams: {
            (name: string, options?: TransactionOptions): Promise<{
                _minExeDelay: BigNumber;
                _minVoteDuration: BigNumber;
                _maxVoteDuration: BigNumber;
                _minOaxTokenToCreateVote: BigNumber;
                _minQuorum: BigNumber;
            }>;
        };
        getVotings: {
            (params: IGetVotingsParams, options?: TransactionOptions): Promise<string[]>;
        };
        initAdmin: {
            (admin: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (admin: string, options?: TransactionOptions) => Promise<void>;
            txData: (admin: string, options?: TransactionOptions) => Promise<string>;
        };
        initVotingExecutor: {
            (votingExecutor: string[], options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (votingExecutor: string[], options?: TransactionOptions) => Promise<void>;
            txData: (votingExecutor: string[], options?: TransactionOptions) => Promise<string>;
        };
        isVotingContract: {
            (votingContract: string, options?: TransactionOptions): Promise<boolean>;
        };
        isVotingExecutor: {
            (param1: string, options?: TransactionOptions): Promise<boolean>;
        };
        minStakePeriod: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        newVote: {
            (params: INewVoteParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: INewVoteParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: INewVoteParams, options?: TransactionOptions) => Promise<string>;
        };
        oaxToken: {
            (options?: TransactionOptions): Promise<string>;
        };
        owner: {
            (options?: TransactionOptions): Promise<string>;
        };
        renounceOwnership: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
            txData: (options?: TransactionOptions) => Promise<string>;
        };
        setAdmin: {
            (admin: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (admin: string, options?: TransactionOptions) => Promise<void>;
            txData: (admin: string, options?: TransactionOptions) => Promise<string>;
        };
        setMinStakePeriod: {
            (minStakePeriod: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (minStakePeriod: number | BigNumber, options?: TransactionOptions) => Promise<void>;
            txData: (minStakePeriod: number | BigNumber, options?: TransactionOptions) => Promise<string>;
        };
        setVotingConfig: {
            (params: ISetVotingConfigParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISetVotingConfigParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISetVotingConfigParams, options?: TransactionOptions) => Promise<string>;
        };
        setVotingExecutor: {
            (params: ISetVotingExecutorParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISetVotingExecutorParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISetVotingExecutorParams, options?: TransactionOptions) => Promise<string>;
        };
        setVotingRegister: {
            (votingRegister: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (votingRegister: string, options?: TransactionOptions) => Promise<void>;
            txData: (votingRegister: string, options?: TransactionOptions) => Promise<string>;
        };
        stake: {
            (value: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (value: number | BigNumber, options?: TransactionOptions) => Promise<void>;
            txData: (value: number | BigNumber, options?: TransactionOptions) => Promise<string>;
        };
        stakeOf: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        totalStake: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        transferOwnership: {
            (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
            txData: (newOwner: string, options?: TransactionOptions) => Promise<string>;
        };
        unlockStake: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
            txData: (options?: TransactionOptions) => Promise<string>;
        };
        unstake: {
            (value: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (value: number | BigNumber, options?: TransactionOptions) => Promise<void>;
            txData: (value: number | BigNumber, options?: TransactionOptions) => Promise<string>;
        };
        veto: {
            (voting: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (voting: string, options?: TransactionOptions) => Promise<void>;
            txData: (voting: string, options?: TransactionOptions) => Promise<string>;
        };
        voteCount: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        voted: {
            (params: IVotedParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IVotedParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IVotedParams, options?: TransactionOptions) => Promise<string>;
        };
        votingConfigProfiles: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
        };
        votingConfigProfilesLength: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        votingConfigs: {
            (param1: string, options?: TransactionOptions): Promise<{
                minExeDelay: BigNumber;
                minVoteDuration: BigNumber;
                maxVoteDuration: BigNumber;
                minOaxTokenToCreateVote: BigNumber;
                minQuorum: BigNumber;
            }>;
        };
        votingExecutor: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
        };
        votingExecutorInv: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        votingExecutorLength: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        votingIdx: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        votingRegister: {
            (options?: TransactionOptions): Promise<string>;
        };
        votingToken: {
            (options?: TransactionOptions): Promise<string>;
        };
        votings: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
        };
        private assign;
    }
    export module OAXDEX_Governance {
        interface AddVotingConfigEvent {
            name: string;
            minExeDelay: BigNumber;
            minVoteDuration: BigNumber;
            maxVoteDuration: BigNumber;
            minOaxTokenToCreateVote: BigNumber;
            minQuorum: BigNumber;
            _event: Event;
        }
        interface ExecutedEvent {
            vote: string;
            _event: Event;
        }
        interface NewPollEvent {
            poll: string;
            _event: Event;
        }
        interface NewVoteEvent {
            vote: string;
            _event: Event;
        }
        interface OwnershipTransferredEvent {
            previousOwner: string;
            newOwner: string;
            _event: Event;
        }
        interface ParamSetEvent {
            name: string;
            value: string;
            _event: Event;
        }
        interface ParamSet2Event {
            name: string;
            value1: string;
            value2: string;
            _event: Event;
        }
        interface PollEvent {
            account: string;
            poll: string;
            option: BigNumber;
            _event: Event;
        }
        interface SetVotingConfigEvent {
            configName: string;
            paramName: string;
            minExeDelay: BigNumber;
            _event: Event;
        }
        interface StakeEvent {
            who: string;
            value: BigNumber;
            _event: Event;
        }
        interface UnstakeEvent {
            who: string;
            value: BigNumber;
            _event: Event;
        }
        interface VetoEvent {
            vote: string;
            _event: Event;
        }
        interface VoteEvent {
            account: string;
            vote: string;
            option: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/gov/OAXDEX_VotingContract.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/gov/OAXDEX_VotingContract.json.ts" {
    const _default_12: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        })[];
        bytecode: string;
    };
    export default _default_12;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/gov/OAXDEX_VotingContract.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/gov/OAXDEX_VotingContract.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        governance: string;
        executor: string;
        id: number | BigNumber;
        name: string;
        options: string[];
        quorum: number | BigNumber;
        threshold: number | BigNumber;
        voteEndTime: number | BigNumber;
        executeDelay: number | BigNumber;
        executeParam: string[];
    }
    export class OAXDEX_VotingContract extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        _executeParam: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
        };
        _options: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
        };
        _optionsWeight: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
        };
        accountVoteOption: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        accountVoteWeight: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        execute: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
            txData: (options?: TransactionOptions) => Promise<string>;
        };
        executeDelay: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        executeParam: {
            (options?: TransactionOptions): Promise<string[]>;
        };
        executed: {
            (options?: TransactionOptions): Promise<boolean>;
        };
        executor: {
            (options?: TransactionOptions): Promise<string>;
        };
        getParams: {
            (options?: TransactionOptions): Promise<{
                executor_: string;
                id_: BigNumber;
                name_: string;
                options_: string[];
                voteStartTime_: BigNumber;
                voteEndTime_: BigNumber;
                executeDelay_: BigNumber;
                status_: boolean[];
                optionsWeight_: BigNumber[];
                quorum_: BigNumber[];
                executeParam_: string[];
            }>;
        };
        governance: {
            (options?: TransactionOptions): Promise<string>;
        };
        id: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        name: {
            (options?: TransactionOptions): Promise<string>;
        };
        options: {
            (options?: TransactionOptions): Promise<string[]>;
        };
        optionsCount: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        optionsWeight: {
            (options?: TransactionOptions): Promise<BigNumber[]>;
        };
        quorum: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        threshold: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        totalVoteWeight: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        totalWeight: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        updateWeight: {
            (account: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (account: string, options?: TransactionOptions) => Promise<void>;
            txData: (account: string, options?: TransactionOptions) => Promise<string>;
        };
        veto: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
            txData: (options?: TransactionOptions) => Promise<string>;
        };
        vetoed: {
            (options?: TransactionOptions): Promise<boolean>;
        };
        vote: {
            (option: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (option: number | BigNumber, options?: TransactionOptions) => Promise<void>;
            txData: (option: number | BigNumber, options?: TransactionOptions) => Promise<string>;
        };
        voteEndTime: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        voteStartTime: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        private assign;
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/gov/OAXDEX_VotingExecutor.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/gov/OAXDEX_VotingExecutor.json.ts" {
    const _default_13: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: any[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: any[];
            stateMutability: string;
            type: string;
        })[];
        bytecode: string;
    };
    export default _default_13;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/gov/OAXDEX_VotingExecutor.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/gov/OAXDEX_VotingExecutor.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        governance: string;
        admin: string;
    }
    export class OAXDEX_VotingExecutor extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        admin: {
            (options?: TransactionOptions): Promise<string>;
        };
        execute: {
            (params: string[], options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: string[], options?: TransactionOptions) => Promise<void>;
            txData: (params: string[], options?: TransactionOptions) => Promise<string>;
        };
        governance: {
            (options?: TransactionOptions): Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/gov/OAXDEX_VotingRegistry.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/gov/OAXDEX_VotingRegistry.json.ts" {
    const _default_14: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: any[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: any[];
            stateMutability: string;
            type: string;
        })[];
        bytecode: string;
    };
    export default _default_14;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/gov/OAXDEX_VotingRegistry.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/gov/OAXDEX_VotingRegistry.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
    export interface INewVoteParams {
        executor: string;
        name: string;
        options: string[];
        quorum: number | BigNumber;
        threshold: number | BigNumber;
        voteEndTime: number | BigNumber;
        executeDelay: number | BigNumber;
        executeParam: string[];
    }
    export class OAXDEX_VotingRegistry extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(governance: string, options?: TransactionOptions): Promise<string>;
        governance: {
            (options?: TransactionOptions): Promise<string>;
        };
        newVote: {
            (params: INewVoteParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: INewVoteParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: INewVoteParams, options?: TransactionOptions) => Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/libraries/ERC20.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/libraries/ERC20.json.ts" {
    const _default_15: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_15;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/libraries/ERC20.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/libraries/ERC20.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        name: string;
        symbol: string;
    }
    export interface IAllowanceParams {
        owner: string;
        spender: string;
    }
    export interface IApproveParams {
        spender: string;
        amount: number | BigNumber;
    }
    export interface IDecreaseAllowanceParams {
        spender: string;
        subtractedValue: number | BigNumber;
    }
    export interface IIncreaseAllowanceParams {
        spender: string;
        addedValue: number | BigNumber;
    }
    export interface ITransferParams {
        recipient: string;
        amount: number | BigNumber;
    }
    export interface ITransferFromParams {
        sender: string;
        recipient: string;
        amount: number | BigNumber;
    }
    export class ERC20 extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): ERC20.ApprovalEvent[];
        decodeApprovalEvent(event: Event): ERC20.ApprovalEvent;
        parseTransferEvent(receipt: TransactionReceipt): ERC20.TransferEvent[];
        decodeTransferEvent(event: Event): ERC20.TransferEvent;
        allowance: {
            (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        approve: {
            (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
            txData: (params: IApproveParams, options?: TransactionOptions) => Promise<string>;
        };
        balanceOf: {
            (account: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        decimals: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        decreaseAllowance: {
            (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IDecreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
            txData: (params: IDecreaseAllowanceParams, options?: TransactionOptions) => Promise<string>;
        };
        increaseAllowance: {
            (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IIncreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
            txData: (params: IIncreaseAllowanceParams, options?: TransactionOptions) => Promise<string>;
        };
        name: {
            (options?: TransactionOptions): Promise<string>;
        };
        symbol: {
            (options?: TransactionOptions): Promise<string>;
        };
        totalSupply: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        transfer: {
            (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferParams, options?: TransactionOptions) => Promise<boolean>;
            txData: (params: ITransferParams, options?: TransactionOptions) => Promise<string>;
        };
        transferFrom: {
            (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
            txData: (params: ITransferFromParams, options?: TransactionOptions) => Promise<string>;
        };
        private assign;
    }
    export module ERC20 {
        interface ApprovalEvent {
            owner: string;
            spender: string;
            value: BigNumber;
            _event: Event;
        }
        interface TransferEvent {
            from: string;
            to: string;
            value: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/oracle/OSWAP_CertiKSecurityOracle.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/oracle/OSWAP_CertiKSecurityOracle.json.ts" {
    const _default_16: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        })[];
        bytecode: string;
    };
    export default _default_16;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/oracle/OSWAP_CertiKSecurityOracle.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/oracle/OSWAP_CertiKSecurityOracle.ts" {
    import { IWallet, Contract as _Contract, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
    export class OSWAP_CertiKSecurityOracle extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(oracleAddress: string, options?: TransactionOptions): Promise<string>;
        getSecurityScore: {
            (oracle: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        oracleAddress: {
            (options?: TransactionOptions): Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/oracle/OSWAP_OracleFactory.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/oracle/OSWAP_OracleFactory.json.ts" {
    const _default_17: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_17;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/oracle/OSWAP_OracleFactory.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/oracle/OSWAP_OracleFactory.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        governance: string;
        pairCreator: string;
        tradeFee: number | BigNumber;
        protocolFee: number | BigNumber;
        feePerDelegator: number | BigNumber;
        protocolFeeTo: string;
    }
    export interface IAddOldOracleToNewPairParams {
        tokenA: string;
        tokenB: string;
        oracle: string;
    }
    export interface ICheckAndGetOracleParams {
        tokenA: string;
        tokenB: string;
    }
    export interface ICheckAndGetOracleSwapParamsParams {
        tokenA: string;
        tokenB: string;
    }
    export interface ICreatePairParams {
        tokenA: string;
        tokenB: string;
    }
    export interface IGetPairParams {
        param1: string;
        param2: string;
    }
    export interface IOraclesParams {
        param1: string;
        param2: string;
    }
    export interface ISetLiveForPairParams {
        pair: string;
        live: boolean;
    }
    export interface ISetMinLotSizeParams {
        token: string;
        minLotSize: number | BigNumber;
    }
    export interface ISetOracleParams {
        tokenA: string;
        tokenB: string;
        oracle: string;
    }
    export interface ISetOracleLiquidityProviderParams {
        oracleRouter: string;
        oracleLiquidityProvider: string;
    }
    export interface ISetSecurityScoreOracleParams {
        securityScoreOracle: string;
        minOracleScore: number | BigNumber;
    }
    export interface ISetWhiteListParams {
        who: string;
        allow: boolean;
    }
    export class OSWAP_OracleFactory extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseOracleAddedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.OracleAddedEvent[];
        decodeOracleAddedEvent(event: Event): OSWAP_OracleFactory.OracleAddedEvent;
        parseOracleScoresEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.OracleScoresEvent[];
        decodeOracleScoresEvent(event: Event): OSWAP_OracleFactory.OracleScoresEvent;
        parseOwnershipTransferredEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.OwnershipTransferredEvent[];
        decodeOwnershipTransferredEvent(event: Event): OSWAP_OracleFactory.OwnershipTransferredEvent;
        parsePairCreatedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.PairCreatedEvent[];
        decodePairCreatedEvent(event: Event): OSWAP_OracleFactory.PairCreatedEvent;
        parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.PairRestartedEvent[];
        decodePairRestartedEvent(event: Event): OSWAP_OracleFactory.PairRestartedEvent;
        parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.PairShutdownedEvent[];
        decodePairShutdownedEvent(event: Event): OSWAP_OracleFactory.PairShutdownedEvent;
        parseParamSetEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.ParamSetEvent[];
        decodeParamSetEvent(event: Event): OSWAP_OracleFactory.ParamSetEvent;
        parseParamSet2Event(receipt: TransactionReceipt): OSWAP_OracleFactory.ParamSet2Event[];
        decodeParamSet2Event(event: Event): OSWAP_OracleFactory.ParamSet2Event;
        parseRestartedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.RestartedEvent[];
        decodeRestartedEvent(event: Event): OSWAP_OracleFactory.RestartedEvent;
        parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.ShutdownedEvent[];
        decodeShutdownedEvent(event: Event): OSWAP_OracleFactory.ShutdownedEvent;
        parseWhitelistedEvent(receipt: TransactionReceipt): OSWAP_OracleFactory.WhitelistedEvent[];
        decodeWhitelistedEvent(event: Event): OSWAP_OracleFactory.WhitelistedEvent;
        addOldOracleToNewPair: {
            (params: IAddOldOracleToNewPairParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddOldOracleToNewPairParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IAddOldOracleToNewPairParams, options?: TransactionOptions) => Promise<string>;
        };
        allPairs: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
        };
        allPairsLength: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        allWhiteListed: {
            (options?: TransactionOptions): Promise<{
                list: string[];
                allowed: boolean[];
            }>;
        };
        checkAndGetOracle: {
            (params: ICheckAndGetOracleParams, options?: TransactionOptions): Promise<string>;
        };
        checkAndGetOracleSwapParams: {
            (params: ICheckAndGetOracleSwapParamsParams, options?: TransactionOptions): Promise<{
                oracle_: string;
                tradeFee_: BigNumber;
                protocolFee_: BigNumber;
            }>;
        };
        createPair: {
            (params: ICreatePairParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ICreatePairParams, options?: TransactionOptions) => Promise<string>;
            txData: (params: ICreatePairParams, options?: TransactionOptions) => Promise<string>;
        };
        feePerDelegator: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        getPair: {
            (params: IGetPairParams, options?: TransactionOptions): Promise<string>;
        };
        governance: {
            (options?: TransactionOptions): Promise<string>;
        };
        isLive: {
            (options?: TransactionOptions): Promise<boolean>;
        };
        isOracle: {
            (param1: string, options?: TransactionOptions): Promise<boolean>;
        };
        isWhitelisted: {
            (param1: string, options?: TransactionOptions): Promise<boolean>;
        };
        minLotSize: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        minOracleScore: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        oracleLiquidityProvider: {
            (options?: TransactionOptions): Promise<string>;
        };
        oracleScores: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        oracles: {
            (params: IOraclesParams, options?: TransactionOptions): Promise<string>;
        };
        owner: {
            (options?: TransactionOptions): Promise<string>;
        };
        pairCreator: {
            (options?: TransactionOptions): Promise<string>;
        };
        protocolFee: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        protocolFeeTo: {
            (options?: TransactionOptions): Promise<string>;
        };
        renounceOwnership: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
            txData: (options?: TransactionOptions) => Promise<string>;
        };
        securityScoreOracle: {
            (options?: TransactionOptions): Promise<string>;
        };
        setFeePerDelegator: {
            (feePerDelegator: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (feePerDelegator: number | BigNumber, options?: TransactionOptions) => Promise<void>;
            txData: (feePerDelegator: number | BigNumber, options?: TransactionOptions) => Promise<string>;
        };
        setLive: {
            (isLive: boolean, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (isLive: boolean, options?: TransactionOptions) => Promise<void>;
            txData: (isLive: boolean, options?: TransactionOptions) => Promise<string>;
        };
        setLiveForPair: {
            (params: ISetLiveForPairParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISetLiveForPairParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISetLiveForPairParams, options?: TransactionOptions) => Promise<string>;
        };
        setMinLotSize: {
            (params: ISetMinLotSizeParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISetMinLotSizeParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISetMinLotSizeParams, options?: TransactionOptions) => Promise<string>;
        };
        setOracle: {
            (params: ISetOracleParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISetOracleParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISetOracleParams, options?: TransactionOptions) => Promise<string>;
        };
        setOracleLiquidityProvider: {
            (params: ISetOracleLiquidityProviderParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISetOracleLiquidityProviderParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISetOracleLiquidityProviderParams, options?: TransactionOptions) => Promise<string>;
        };
        setProtocolFee: {
            (protocolFee: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (protocolFee: number | BigNumber, options?: TransactionOptions) => Promise<void>;
            txData: (protocolFee: number | BigNumber, options?: TransactionOptions) => Promise<string>;
        };
        setProtocolFeeTo: {
            (protocolFeeTo: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (protocolFeeTo: string, options?: TransactionOptions) => Promise<void>;
            txData: (protocolFeeTo: string, options?: TransactionOptions) => Promise<string>;
        };
        setSecurityScoreOracle: {
            (params: ISetSecurityScoreOracleParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISetSecurityScoreOracleParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISetSecurityScoreOracleParams, options?: TransactionOptions) => Promise<string>;
        };
        setTradeFee: {
            (tradeFee: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (tradeFee: number | BigNumber, options?: TransactionOptions) => Promise<void>;
            txData: (tradeFee: number | BigNumber, options?: TransactionOptions) => Promise<string>;
        };
        setWhiteList: {
            (params: ISetWhiteListParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISetWhiteListParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISetWhiteListParams, options?: TransactionOptions) => Promise<string>;
        };
        tradeFee: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        transferOwnership: {
            (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
            txData: (newOwner: string, options?: TransactionOptions) => Promise<string>;
        };
        updateOracleScore: {
            (oracle: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (oracle: string, options?: TransactionOptions) => Promise<void>;
            txData: (oracle: string, options?: TransactionOptions) => Promise<string>;
        };
        whitelisted: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
        };
        whitelistedInv: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        whitelistedLength: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        private assign;
    }
    export module OSWAP_OracleFactory {
        interface OracleAddedEvent {
            token0: string;
            token1: string;
            oracle: string;
            _event: Event;
        }
        interface OracleScoresEvent {
            oracle: string;
            score: BigNumber;
            _event: Event;
        }
        interface OwnershipTransferredEvent {
            previousOwner: string;
            newOwner: string;
            _event: Event;
        }
        interface PairCreatedEvent {
            token0: string;
            token1: string;
            pair: string;
            newSize: BigNumber;
            _event: Event;
        }
        interface PairRestartedEvent {
            pair: string;
            _event: Event;
        }
        interface PairShutdownedEvent {
            pair: string;
            _event: Event;
        }
        interface ParamSetEvent {
            name: string;
            value: string;
            _event: Event;
        }
        interface ParamSet2Event {
            name: string;
            value1: string;
            value2: string;
            _event: Event;
        }
        interface RestartedEvent {
            _event: Event;
        }
        interface ShutdownedEvent {
            _event: Event;
        }
        interface WhitelistedEvent {
            who: string;
            allow: boolean;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/oracle/OSWAP_OracleLiquidityProvider.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/oracle/OSWAP_OracleLiquidityProvider.json.ts" {
    const _default_18: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_18;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/oracle/OSWAP_OracleLiquidityProvider.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/oracle/OSWAP_OracleLiquidityProvider.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        factory: string;
        WETH: string;
    }
    export interface IAddLiquidityParams {
        tokenA: string;
        tokenB: string;
        addingTokenA: boolean;
        staked: number | BigNumber;
        afterIndex: number | BigNumber;
        amountIn: number | BigNumber;
        expire: number | BigNumber;
        enable: boolean;
        deadline: number | BigNumber;
    }
    export interface IAddLiquidityETHParams {
        tokenA: string;
        addingTokenA: boolean;
        staked: number | BigNumber;
        afterIndex: number | BigNumber;
        amountAIn: number | BigNumber;
        expire: number | BigNumber;
        enable: boolean;
        deadline: number | BigNumber;
    }
    export interface IRemoveAllLiquidityParams {
        tokenA: string;
        tokenB: string;
        to: string;
        deadline: number | BigNumber;
    }
    export interface IRemoveAllLiquidityETHParams {
        tokenA: string;
        to: string;
        deadline: number | BigNumber;
    }
    export interface IRemoveLiquidityParams {
        tokenA: string;
        tokenB: string;
        removingTokenA: boolean;
        to: string;
        unstake: number | BigNumber;
        afterIndex: number | BigNumber;
        amountOut: number | BigNumber;
        reserveOut: number | BigNumber;
        expire: number | BigNumber;
        enable: boolean;
        deadline: number | BigNumber;
    }
    export interface IRemoveLiquidityETHParams {
        tokenA: string;
        removingTokenA: boolean;
        to: string;
        unstake: number | BigNumber;
        afterIndex: number | BigNumber;
        amountOut: number | BigNumber;
        reserveOut: number | BigNumber;
        expire: number | BigNumber;
        enable: boolean;
        deadline: number | BigNumber;
    }
    export class OSWAP_OracleLiquidityProvider extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        WETH: {
            (options?: TransactionOptions): Promise<string>;
        };
        addLiquidity: {
            (params: IAddLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityParams, options?: TransactionOptions) => Promise<BigNumber>;
            txData: (params: IAddLiquidityParams, options?: TransactionOptions) => Promise<string>;
        };
        addLiquidityETH: {
            (params: IAddLiquidityETHParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityETHParams, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber>;
            txData: (params: IAddLiquidityETHParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        factory: {
            (options?: TransactionOptions): Promise<string>;
        };
        govToken: {
            (options?: TransactionOptions): Promise<string>;
        };
        removeAllLiquidity: {
            (params: IRemoveAllLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveAllLiquidityParams, options?: TransactionOptions) => Promise<{
                amountA: BigNumber;
                amountB: BigNumber;
            }>;
            txData: (params: IRemoveAllLiquidityParams, options?: TransactionOptions) => Promise<string>;
        };
        removeAllLiquidityETH: {
            (params: IRemoveAllLiquidityETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveAllLiquidityETHParams, options?: TransactionOptions) => Promise<{
                amountToken: BigNumber;
                amountETH: BigNumber;
            }>;
            txData: (params: IRemoveAllLiquidityETHParams, options?: TransactionOptions) => Promise<string>;
        };
        removeLiquidity: {
            (params: IRemoveLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<string>;
        };
        removeLiquidityETH: {
            (params: IRemoveLiquidityETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityETHParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IRemoveLiquidityETHParams, options?: TransactionOptions) => Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/oracle/OSWAP_OraclePair.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/oracle/OSWAP_OraclePair.json.ts" {
    const _default_19: {
        abi: ({
            inputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_19;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/oracle/OSWAP_OraclePair.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/oracle/OSWAP_OraclePair.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IAddLiquidityParams {
        provider: string;
        direction: boolean;
        staked: number | BigNumber;
        afterIndex: number | BigNumber;
        expire: number | BigNumber;
        enable: boolean;
    }
    export interface IFindPositionParams {
        direction: boolean;
        staked: number | BigNumber;
        afterIndex: number | BigNumber;
    }
    export interface IGetAmountInParams {
        tokenOut: string;
        amountOut: number | BigNumber;
        data: string;
    }
    export interface IGetAmountOutParams {
        tokenIn: string;
        amountIn: number | BigNumber;
        data: string;
    }
    export interface IGetLatestPriceParams {
        direction: boolean;
        payload: string;
    }
    export interface IGetProviderOfferParams {
        provider: string;
        direction: boolean;
    }
    export interface IGetQueueParams {
        direction: boolean;
        start: number | BigNumber;
        end: number | BigNumber;
    }
    export interface IGetQueueFromIndexParams {
        direction: boolean;
        from: number | BigNumber;
        count: number | BigNumber;
    }
    export interface IInitializeParams {
        token0: string;
        token1: string;
    }
    export interface IOffersParams {
        param1: boolean;
        param2: number | BigNumber;
    }
    export interface IPauseOfferParams {
        provider: string;
        direction: boolean;
    }
    export interface IPurgeExpireParams {
        direction: boolean;
        startingIndex: number | BigNumber;
        limit: number | BigNumber;
    }
    export interface IRemoveLiquidityParams {
        provider: string;
        direction: boolean;
        unstake: number | BigNumber;
        afterIndex: number | BigNumber;
        amountOut: number | BigNumber;
        reserveOut: number | BigNumber;
        expire: number | BigNumber;
        enable: boolean;
    }
    export interface IReplenishParams {
        provider: string;
        direction: boolean;
        afterIndex: number | BigNumber;
        amountIn: number | BigNumber;
        expire: number | BigNumber;
    }
    export interface IResumeOfferParams {
        provider: string;
        direction: boolean;
        afterIndex: number | BigNumber;
    }
    export interface ISetDelegatorParams {
        delegator: string;
        fee: number | BigNumber;
    }
    export interface ISwapParams {
        amount0Out: number | BigNumber;
        amount1Out: number | BigNumber;
        to: string;
        data: string;
    }
    export class OSWAP_OraclePair extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(options?: TransactionOptions): Promise<string>;
        parseAddLiquidityEvent(receipt: TransactionReceipt): OSWAP_OraclePair.AddLiquidityEvent[];
        decodeAddLiquidityEvent(event: Event): OSWAP_OraclePair.AddLiquidityEvent;
        parseDelegatorPauseOfferEvent(receipt: TransactionReceipt): OSWAP_OraclePair.DelegatorPauseOfferEvent[];
        decodeDelegatorPauseOfferEvent(event: Event): OSWAP_OraclePair.DelegatorPauseOfferEvent;
        parseDelegatorResumeOfferEvent(receipt: TransactionReceipt): OSWAP_OraclePair.DelegatorResumeOfferEvent[];
        decodeDelegatorResumeOfferEvent(event: Event): OSWAP_OraclePair.DelegatorResumeOfferEvent;
        parseNewProviderEvent(receipt: TransactionReceipt): OSWAP_OraclePair.NewProviderEvent[];
        decodeNewProviderEvent(event: Event): OSWAP_OraclePair.NewProviderEvent;
        parseRemoveLiquidityEvent(receipt: TransactionReceipt): OSWAP_OraclePair.RemoveLiquidityEvent[];
        decodeRemoveLiquidityEvent(event: Event): OSWAP_OraclePair.RemoveLiquidityEvent;
        parseReplenishEvent(receipt: TransactionReceipt): OSWAP_OraclePair.ReplenishEvent[];
        decodeReplenishEvent(event: Event): OSWAP_OraclePair.ReplenishEvent;
        parseSetDelegatorEvent(receipt: TransactionReceipt): OSWAP_OraclePair.SetDelegatorEvent[];
        decodeSetDelegatorEvent(event: Event): OSWAP_OraclePair.SetDelegatorEvent;
        parseSwapEvent(receipt: TransactionReceipt): OSWAP_OraclePair.SwapEvent[];
        decodeSwapEvent(event: Event): OSWAP_OraclePair.SwapEvent;
        parseSwappedOneProviderEvent(receipt: TransactionReceipt): OSWAP_OraclePair.SwappedOneProviderEvent[];
        decodeSwappedOneProviderEvent(event: Event): OSWAP_OraclePair.SwappedOneProviderEvent;
        addLiquidity: {
            (params: IAddLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityParams, options?: TransactionOptions) => Promise<BigNumber>;
            txData: (params: IAddLiquidityParams, options?: TransactionOptions) => Promise<string>;
        };
        counter: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        delegator: {
            (param1: string, options?: TransactionOptions): Promise<string>;
        };
        factory: {
            (options?: TransactionOptions): Promise<string>;
        };
        feeBalance: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        findPosition: {
            (params: IFindPositionParams, options?: TransactionOptions): Promise<{
                afterIndex: BigNumber;
                nextIndex: BigNumber;
            }>;
        };
        first: {
            (param1: boolean, options?: TransactionOptions): Promise<BigNumber>;
        };
        getAmountIn: {
            (params: IGetAmountInParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getAmountOut: {
            (params: IGetAmountOutParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getBalances: {
            (options?: TransactionOptions): Promise<{
                param1: BigNumber;
                param2: BigNumber;
                param3: BigNumber;
            }>;
        };
        getLastBalances: {
            (options?: TransactionOptions): Promise<{
                param1: BigNumber;
                param2: BigNumber;
            }>;
        };
        getLatestPrice: {
            (params: IGetLatestPriceParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getProviderOffer: {
            (params: IGetProviderOfferParams, options?: TransactionOptions): Promise<{
                index: BigNumber;
                staked: BigNumber;
                amount: BigNumber;
                reserve: BigNumber;
                expire: BigNumber;
                privateReplenish: boolean;
            }>;
        };
        getQueue: {
            (params: IGetQueueParams, options?: TransactionOptions): Promise<{
                index: BigNumber[];
                provider: string[];
                amount: BigNumber[];
                staked: BigNumber[];
                expire: BigNumber[];
            }>;
        };
        getQueueFromIndex: {
            (params: IGetQueueFromIndexParams, options?: TransactionOptions): Promise<{
                index: BigNumber[];
                provider: string[];
                amount: BigNumber[];
                staked: BigNumber[];
                expire: BigNumber[];
            }>;
        };
        govToken: {
            (options?: TransactionOptions): Promise<string>;
        };
        governance: {
            (options?: TransactionOptions): Promise<string>;
        };
        initialize: {
            (params: IInitializeParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IInitializeParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IInitializeParams, options?: TransactionOptions) => Promise<string>;
        };
        isLive: {
            (options?: TransactionOptions): Promise<boolean>;
        };
        lastGovBalance: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        lastToken0Balance: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        lastToken1Balance: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        offers: {
            (params: IOffersParams, options?: TransactionOptions): Promise<{
                provider: string;
                staked: BigNumber;
                amount: BigNumber;
                reserve: BigNumber;
                expire: BigNumber;
                privateReplenish: boolean;
                isActive: boolean;
                enabled: boolean;
                prev: BigNumber;
                next: BigNumber;
            }>;
        };
        oracleLiquidityProvider: {
            (options?: TransactionOptions): Promise<string>;
        };
        pauseOffer: {
            (params: IPauseOfferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IPauseOfferParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IPauseOfferParams, options?: TransactionOptions) => Promise<string>;
        };
        protocolFeeBalance0: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        protocolFeeBalance1: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        providerOfferIndex: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        purgeExpire: {
            (params: IPurgeExpireParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IPurgeExpireParams, options?: TransactionOptions) => Promise<BigNumber>;
            txData: (params: IPurgeExpireParams, options?: TransactionOptions) => Promise<string>;
        };
        queueSize: {
            (param1: boolean, options?: TransactionOptions): Promise<BigNumber>;
        };
        redeemProtocolFee: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
            txData: (options?: TransactionOptions) => Promise<string>;
        };
        removeAllLiquidity: {
            (provider: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (provider: string, options?: TransactionOptions) => Promise<{
                amount0: BigNumber;
                amount1: BigNumber;
                staked: BigNumber;
            }>;
            txData: (provider: string, options?: TransactionOptions) => Promise<string>;
        };
        removeLiquidity: {
            (params: IRemoveLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<string>;
        };
        replenish: {
            (params: IReplenishParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IReplenishParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IReplenishParams, options?: TransactionOptions) => Promise<string>;
        };
        resumeOffer: {
            (params: IResumeOfferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IResumeOfferParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IResumeOfferParams, options?: TransactionOptions) => Promise<string>;
        };
        scaleDirection: {
            (options?: TransactionOptions): Promise<boolean>;
        };
        scaler: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        setDelegator: {
            (params: ISetDelegatorParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISetDelegatorParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISetDelegatorParams, options?: TransactionOptions) => Promise<string>;
        };
        setLive: {
            (isLive: boolean, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (isLive: boolean, options?: TransactionOptions) => Promise<void>;
            txData: (isLive: boolean, options?: TransactionOptions) => Promise<string>;
        };
        setPrivateReplenish: {
            (replenish: boolean, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (replenish: boolean, options?: TransactionOptions) => Promise<void>;
            txData: (replenish: boolean, options?: TransactionOptions) => Promise<string>;
        };
        stakeBalance: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        swap: {
            (params: ISwapParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISwapParams, options?: TransactionOptions) => Promise<string>;
        };
        sync: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
            txData: (options?: TransactionOptions) => Promise<string>;
        };
        token0: {
            (options?: TransactionOptions): Promise<string>;
        };
        token1: {
            (options?: TransactionOptions): Promise<string>;
        };
        private assign;
    }
    export module OSWAP_OraclePair {
        interface AddLiquidityEvent {
            provider: string;
            direction: boolean;
            staked: BigNumber;
            amount: BigNumber;
            newStakeBalance: BigNumber;
            newAmountBalance: BigNumber;
            expire: BigNumber;
            enable: boolean;
            _event: Event;
        }
        interface DelegatorPauseOfferEvent {
            delegator: string;
            provider: string;
            direction: boolean;
            _event: Event;
        }
        interface DelegatorResumeOfferEvent {
            delegator: string;
            provider: string;
            direction: boolean;
            _event: Event;
        }
        interface NewProviderEvent {
            provider: string;
            index: BigNumber;
            _event: Event;
        }
        interface RemoveLiquidityEvent {
            provider: string;
            direction: boolean;
            unstake: BigNumber;
            amountOut: BigNumber;
            reserveOut: BigNumber;
            newStakeBalance: BigNumber;
            newAmountBalance: BigNumber;
            newReserveBalance: BigNumber;
            expire: BigNumber;
            enable: boolean;
            _event: Event;
        }
        interface ReplenishEvent {
            provider: string;
            direction: boolean;
            amountIn: BigNumber;
            newAmountBalance: BigNumber;
            newReserveBalance: BigNumber;
            expire: BigNumber;
            _event: Event;
        }
        interface SetDelegatorEvent {
            provider: string;
            delegator: string;
            _event: Event;
        }
        interface SwapEvent {
            to: string;
            direction: boolean;
            price: BigNumber;
            amountIn: BigNumber;
            amountOut: BigNumber;
            tradeFee: BigNumber;
            protocolFee: BigNumber;
            _event: Event;
        }
        interface SwappedOneProviderEvent {
            provider: string;
            direction: boolean;
            amountOut: BigNumber;
            amountIn: BigNumber;
            newAmountBalance: BigNumber;
            newCounterReserveBalance: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/oracle/OSWAP_OraclePairCreator.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/oracle/OSWAP_OraclePairCreator.json.ts" {
    const _default_20: {
        abi: {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        }[];
        bytecode: string;
    };
    export default _default_20;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/oracle/OSWAP_OraclePairCreator.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/oracle/OSWAP_OraclePairCreator.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
    export class OSWAP_OraclePairCreator extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(options?: number | BigNumber | TransactionOptions): Promise<string>;
        createPair: {
            (salt: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (salt: string, options?: TransactionOptions) => Promise<string>;
            txData: (salt: string, options?: TransactionOptions) => Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/oracle/OSWAP_VotingExecutor2.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/oracle/OSWAP_VotingExecutor2.json.ts" {
    const _default_21: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: any[];
            stateMutability: string;
            type: string;
        } | {
            inputs: any[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        })[];
        bytecode: string;
    };
    export default _default_21;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/oracle/OSWAP_VotingExecutor2.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/oracle/OSWAP_VotingExecutor2.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, TransactionOptions } from "@ijstech/eth-contract";
    export class OSWAP_VotingExecutor2 extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(factory: string, options?: TransactionOptions): Promise<string>;
        execute: {
            (params: string[], options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: string[], options?: TransactionOptions) => Promise<void>;
            txData: (params: string[], options?: TransactionOptions) => Promise<string>;
        };
        factory: {
            (options?: TransactionOptions): Promise<string>;
        };
        governance: {
            (options?: TransactionOptions): Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/range/OSWAP_RangeFactory.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/range/OSWAP_RangeFactory.json.ts" {
    const _default_22: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_22;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/range/OSWAP_RangeFactory.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/range/OSWAP_RangeFactory.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        governance: string;
        oracleFactory: string;
        pairCreator: string;
        tradeFee: number | BigNumber;
        stakeAmount: (number | BigNumber)[];
        liquidityProviderShare: (number | BigNumber)[];
        protocolFeeTo: string;
    }
    export interface ICreatePairParams {
        tokenA: string;
        tokenB: string;
    }
    export interface IGetPairParams {
        param1: string;
        param2: string;
    }
    export interface ISetLiquidityProviderShareParams {
        stakeAmount: (number | BigNumber)[];
        liquidityProviderShare: (number | BigNumber)[];
    }
    export interface ISetLiveForPairParams {
        pair: string;
        live: boolean;
    }
    export class OSWAP_RangeFactory extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseOwnershipTransferredEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.OwnershipTransferredEvent[];
        decodeOwnershipTransferredEvent(event: Event): OSWAP_RangeFactory.OwnershipTransferredEvent;
        parsePairCreatedEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.PairCreatedEvent[];
        decodePairCreatedEvent(event: Event): OSWAP_RangeFactory.PairCreatedEvent;
        parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.PairRestartedEvent[];
        decodePairRestartedEvent(event: Event): OSWAP_RangeFactory.PairRestartedEvent;
        parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.PairShutdownedEvent[];
        decodePairShutdownedEvent(event: Event): OSWAP_RangeFactory.PairShutdownedEvent;
        parseParamSetEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.ParamSetEvent[];
        decodeParamSetEvent(event: Event): OSWAP_RangeFactory.ParamSetEvent;
        parseParamSet2Event(receipt: TransactionReceipt): OSWAP_RangeFactory.ParamSet2Event[];
        decodeParamSet2Event(event: Event): OSWAP_RangeFactory.ParamSet2Event;
        parseRestartedEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.RestartedEvent[];
        decodeRestartedEvent(event: Event): OSWAP_RangeFactory.RestartedEvent;
        parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_RangeFactory.ShutdownedEvent[];
        decodeShutdownedEvent(event: Event): OSWAP_RangeFactory.ShutdownedEvent;
        allPairs: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
        };
        allPairsLength: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        checkAndGetSwapParams: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        createPair: {
            (params: ICreatePairParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ICreatePairParams, options?: TransactionOptions) => Promise<string>;
            txData: (params: ICreatePairParams, options?: TransactionOptions) => Promise<string>;
        };
        getAllLiquidityProviderShare: {
            (options?: TransactionOptions): Promise<{
                _stakeAmount: BigNumber[];
                _liquidityProviderShare: BigNumber[];
            }>;
        };
        getCreateAddresses: {
            (options?: TransactionOptions): Promise<{
                _governance: string;
                _rangeLiquidityProvider: string;
                _oracleFactory: string;
            }>;
        };
        getLiquidityProviderShare: {
            (stake: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
        };
        getPair: {
            (params: IGetPairParams, options?: TransactionOptions): Promise<string>;
        };
        governance: {
            (options?: TransactionOptions): Promise<string>;
        };
        isLive: {
            (options?: TransactionOptions): Promise<boolean>;
        };
        liquidityProviderShare: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
        };
        oracleFactory: {
            (options?: TransactionOptions): Promise<string>;
        };
        owner: {
            (options?: TransactionOptions): Promise<string>;
        };
        pairCreator: {
            (options?: TransactionOptions): Promise<string>;
        };
        protocolFeeTo: {
            (options?: TransactionOptions): Promise<string>;
        };
        rangeLiquidityProvider: {
            (options?: TransactionOptions): Promise<string>;
        };
        renounceOwnership: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
            txData: (options?: TransactionOptions) => Promise<string>;
        };
        setLiquidityProviderShare: {
            (params: ISetLiquidityProviderShareParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISetLiquidityProviderShareParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISetLiquidityProviderShareParams, options?: TransactionOptions) => Promise<string>;
        };
        setLive: {
            (isLive: boolean, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (isLive: boolean, options?: TransactionOptions) => Promise<void>;
            txData: (isLive: boolean, options?: TransactionOptions) => Promise<string>;
        };
        setLiveForPair: {
            (params: ISetLiveForPairParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISetLiveForPairParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISetLiveForPairParams, options?: TransactionOptions) => Promise<string>;
        };
        setProtocolFeeTo: {
            (protocolFeeTo: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (protocolFeeTo: string, options?: TransactionOptions) => Promise<void>;
            txData: (protocolFeeTo: string, options?: TransactionOptions) => Promise<string>;
        };
        setRangeLiquidityProvider: {
            (rangeLiquidityProvider: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (rangeLiquidityProvider: string, options?: TransactionOptions) => Promise<void>;
            txData: (rangeLiquidityProvider: string, options?: TransactionOptions) => Promise<string>;
        };
        setTradeFee: {
            (tradeFee: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (tradeFee: number | BigNumber, options?: TransactionOptions) => Promise<void>;
            txData: (tradeFee: number | BigNumber, options?: TransactionOptions) => Promise<string>;
        };
        stakeAmount: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
        };
        tradeFee: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        transferOwnership: {
            (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
            txData: (newOwner: string, options?: TransactionOptions) => Promise<string>;
        };
        private assign;
    }
    export module OSWAP_RangeFactory {
        interface OwnershipTransferredEvent {
            previousOwner: string;
            newOwner: string;
            _event: Event;
        }
        interface PairCreatedEvent {
            token0: string;
            token1: string;
            pair: string;
            newSize: BigNumber;
            _event: Event;
        }
        interface PairRestartedEvent {
            pair: string;
            _event: Event;
        }
        interface PairShutdownedEvent {
            pair: string;
            _event: Event;
        }
        interface ParamSetEvent {
            name: string;
            value: string;
            _event: Event;
        }
        interface ParamSet2Event {
            name: string;
            value1: string;
            value2: string;
            _event: Event;
        }
        interface RestartedEvent {
            _event: Event;
        }
        interface ShutdownedEvent {
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/range/OSWAP_RangeLiquidityProvider.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/range/OSWAP_RangeLiquidityProvider.json.ts" {
    const _default_23: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_23;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/range/OSWAP_RangeLiquidityProvider.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/range/OSWAP_RangeLiquidityProvider.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        factory: string;
        WETH: string;
    }
    export interface IAddLiquidityParams {
        tokenA: string;
        tokenB: string;
        addingTokenA: boolean;
        staked: number | BigNumber;
        amountIn: number | BigNumber;
        lowerLimit: number | BigNumber;
        upperLimit: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
        deadline: number | BigNumber;
    }
    export interface IAddLiquidityETHParams {
        tokenA: string;
        addingTokenA: boolean;
        staked: number | BigNumber;
        amountAIn: number | BigNumber;
        lowerLimit: number | BigNumber;
        upperLimit: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
        deadline: number | BigNumber;
    }
    export interface IRemoveAllLiquidityParams {
        tokenA: string;
        tokenB: string;
        to: string;
        deadline: number | BigNumber;
    }
    export interface IRemoveAllLiquidityETHParams {
        tokenA: string;
        to: string;
        deadline: number | BigNumber;
    }
    export interface IRemoveLiquidityParams {
        tokenA: string;
        tokenB: string;
        removingTokenA: boolean;
        to: string;
        unstake: number | BigNumber;
        amountOut: number | BigNumber;
        reserveOut: number | BigNumber;
        lowerLimit: number | BigNumber;
        upperLimit: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
        deadline: number | BigNumber;
    }
    export interface IRemoveLiquidityETHParams {
        tokenA: string;
        removingTokenA: boolean;
        to: string;
        unstake: number | BigNumber;
        amountOut: number | BigNumber;
        reserveOut: number | BigNumber;
        lowerLimit: number | BigNumber;
        upperLimit: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
        deadline: number | BigNumber;
    }
    export interface IUpdateProviderOfferParams {
        tokenA: string;
        tokenB: string;
        replenishAmount: number | BigNumber;
        lowerLimit: number | BigNumber;
        upperLimit: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
        privateReplenish: boolean;
        deadline: number | BigNumber;
    }
    export class OSWAP_RangeLiquidityProvider extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        WETH: {
            (options?: TransactionOptions): Promise<string>;
        };
        addLiquidity: {
            (params: IAddLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityParams, options?: TransactionOptions) => Promise<BigNumber>;
            txData: (params: IAddLiquidityParams, options?: TransactionOptions) => Promise<string>;
        };
        addLiquidityETH: {
            (params: IAddLiquidityETHParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityETHParams, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber>;
            txData: (params: IAddLiquidityETHParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        factory: {
            (options?: TransactionOptions): Promise<string>;
        };
        govToken: {
            (options?: TransactionOptions): Promise<string>;
        };
        removeAllLiquidity: {
            (params: IRemoveAllLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveAllLiquidityParams, options?: TransactionOptions) => Promise<{
                amountA: BigNumber;
                amountB: BigNumber;
            }>;
            txData: (params: IRemoveAllLiquidityParams, options?: TransactionOptions) => Promise<string>;
        };
        removeAllLiquidityETH: {
            (params: IRemoveAllLiquidityETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveAllLiquidityETHParams, options?: TransactionOptions) => Promise<{
                amountToken: BigNumber;
                amountETH: BigNumber;
            }>;
            txData: (params: IRemoveAllLiquidityETHParams, options?: TransactionOptions) => Promise<string>;
        };
        removeLiquidity: {
            (params: IRemoveLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<string>;
        };
        removeLiquidityETH: {
            (params: IRemoveLiquidityETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityETHParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IRemoveLiquidityETHParams, options?: TransactionOptions) => Promise<string>;
        };
        updateProviderOffer: {
            (params: IUpdateProviderOfferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IUpdateProviderOfferParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IUpdateProviderOfferParams, options?: TransactionOptions) => Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/range/OSWAP_RangePair.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/range/OSWAP_RangePair.json.ts" {
    const _default_24: {
        abi: ({
            inputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_24;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/range/OSWAP_RangePair.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/range/OSWAP_RangePair.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IAddLiquidityParams {
        provider: string;
        direction: boolean;
        staked: number | BigNumber;
        lowerLimit: number | BigNumber;
        upperLimit: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
    }
    export interface IGetAmountInParams {
        tokenOut: string;
        amountOut: number | BigNumber;
        data: string;
    }
    export interface IGetAmountOutParams {
        tokenIn: string;
        amountIn: number | BigNumber;
        data: string;
    }
    export interface IGetLatestPriceParams {
        direction: boolean;
        payload: string;
    }
    export interface IGetOffersParams {
        direction: boolean;
        start: number | BigNumber;
        end: number | BigNumber;
    }
    export interface IGetProviderOfferParams {
        provider: string;
        direction: boolean;
    }
    export interface IInitializeParams {
        token0: string;
        token1: string;
    }
    export interface IOffersParams {
        param1: boolean;
        param2: number | BigNumber;
    }
    export interface IRemoveLiquidityParams {
        provider: string;
        direction: boolean;
        unstake: number | BigNumber;
        amountOut: number | BigNumber;
        reserveOut: number | BigNumber;
        lowerLimit: number | BigNumber;
        upperLimit: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
    }
    export interface IReplenishParams {
        provider: string;
        direction: boolean;
        amountIn: number | BigNumber;
    }
    export interface ISwapParams {
        amount0Out: number | BigNumber;
        amount1Out: number | BigNumber;
        to: string;
        data: string;
    }
    export interface IUpdateProviderOfferParams {
        provider: string;
        direction: boolean;
        replenishAmount: number | BigNumber;
        lowerLimit: number | BigNumber;
        upperLimit: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
        privateReplenish: boolean;
    }
    export class OSWAP_RangePair extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(options?: TransactionOptions): Promise<string>;
        parseAddLiquidityEvent(receipt: TransactionReceipt): OSWAP_RangePair.AddLiquidityEvent[];
        decodeAddLiquidityEvent(event: Event): OSWAP_RangePair.AddLiquidityEvent;
        parseNewProviderEvent(receipt: TransactionReceipt): OSWAP_RangePair.NewProviderEvent[];
        decodeNewProviderEvent(event: Event): OSWAP_RangePair.NewProviderEvent;
        parseRemoveAllLiquidityEvent(receipt: TransactionReceipt): OSWAP_RangePair.RemoveAllLiquidityEvent[];
        decodeRemoveAllLiquidityEvent(event: Event): OSWAP_RangePair.RemoveAllLiquidityEvent;
        parseRemoveLiquidityEvent(receipt: TransactionReceipt): OSWAP_RangePair.RemoveLiquidityEvent[];
        decodeRemoveLiquidityEvent(event: Event): OSWAP_RangePair.RemoveLiquidityEvent;
        parseReplenishEvent(receipt: TransactionReceipt): OSWAP_RangePair.ReplenishEvent[];
        decodeReplenishEvent(event: Event): OSWAP_RangePair.ReplenishEvent;
        parseSwapEvent(receipt: TransactionReceipt): OSWAP_RangePair.SwapEvent[];
        decodeSwapEvent(event: Event): OSWAP_RangePair.SwapEvent;
        parseSwappedOneProviderEvent(receipt: TransactionReceipt): OSWAP_RangePair.SwappedOneProviderEvent[];
        decodeSwappedOneProviderEvent(event: Event): OSWAP_RangePair.SwappedOneProviderEvent;
        parseUpdateProviderOfferEvent(receipt: TransactionReceipt): OSWAP_RangePair.UpdateProviderOfferEvent[];
        decodeUpdateProviderOfferEvent(event: Event): OSWAP_RangePair.UpdateProviderOfferEvent;
        addLiquidity: {
            (params: IAddLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityParams, options?: TransactionOptions) => Promise<BigNumber>;
            txData: (params: IAddLiquidityParams, options?: TransactionOptions) => Promise<string>;
        };
        counter: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        factory: {
            (options?: TransactionOptions): Promise<string>;
        };
        getAmountIn: {
            (params: IGetAmountInParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getAmountOut: {
            (params: IGetAmountOutParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getBalances: {
            (options?: TransactionOptions): Promise<{
                param1: BigNumber;
                param2: BigNumber;
                param3: BigNumber;
            }>;
        };
        getLastBalances: {
            (options?: TransactionOptions): Promise<{
                param1: BigNumber;
                param2: BigNumber;
            }>;
        };
        getLatestPrice: {
            (params: IGetLatestPriceParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getOffers: {
            (params: IGetOffersParams, options?: TransactionOptions): Promise<{
                provider: string[];
                amountAndReserve: BigNumber[];
                lowerLimitAndUpperLimit: BigNumber[];
                startDateAndExpire: BigNumber[];
                privateReplenish: boolean[];
            }>;
        };
        getProviderOffer: {
            (params: IGetProviderOfferParams, options?: TransactionOptions): Promise<{
                index: BigNumber;
                staked: BigNumber;
                amount: BigNumber;
                reserve: BigNumber;
                lowerLimit: BigNumber;
                upperLimit: BigNumber;
                startDate: BigNumber;
                expire: BigNumber;
                privateReplenish: boolean;
            }>;
        };
        govToken: {
            (options?: TransactionOptions): Promise<string>;
        };
        governance: {
            (options?: TransactionOptions): Promise<string>;
        };
        initialize: {
            (params: IInitializeParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IInitializeParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IInitializeParams, options?: TransactionOptions) => Promise<string>;
        };
        isLive: {
            (options?: TransactionOptions): Promise<boolean>;
        };
        lastGovBalance: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        lastToken0Balance: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        lastToken1Balance: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        offers: {
            (params: IOffersParams, options?: TransactionOptions): Promise<{
                provider: string;
                amount: BigNumber;
                reserve: BigNumber;
                lowerLimit: BigNumber;
                upperLimit: BigNumber;
                startDate: BigNumber;
                expire: BigNumber;
                privateReplenish: boolean;
            }>;
        };
        oracleFactory: {
            (options?: TransactionOptions): Promise<string>;
        };
        protocolFeeBalance0: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        protocolFeeBalance1: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        providerOfferIndex: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        providerStaking: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        rangeLiquidityProvider: {
            (options?: TransactionOptions): Promise<string>;
        };
        redeemProtocolFee: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
            txData: (options?: TransactionOptions) => Promise<string>;
        };
        removeAllLiquidity: {
            (provider: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (provider: string, options?: TransactionOptions) => Promise<{
                amount0: BigNumber;
                amount1: BigNumber;
                staked: BigNumber;
            }>;
            txData: (provider: string, options?: TransactionOptions) => Promise<string>;
        };
        removeLiquidity: {
            (params: IRemoveLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<string>;
        };
        replenish: {
            (params: IReplenishParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IReplenishParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IReplenishParams, options?: TransactionOptions) => Promise<string>;
        };
        scaleDirection: {
            (options?: TransactionOptions): Promise<boolean>;
        };
        scaler: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        setLive: {
            (isLive: boolean, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (isLive: boolean, options?: TransactionOptions) => Promise<void>;
            txData: (isLive: boolean, options?: TransactionOptions) => Promise<string>;
        };
        stakeBalance: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        swap: {
            (params: ISwapParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISwapParams, options?: TransactionOptions) => Promise<string>;
        };
        sync: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
            txData: (options?: TransactionOptions) => Promise<string>;
        };
        token0: {
            (options?: TransactionOptions): Promise<string>;
        };
        token1: {
            (options?: TransactionOptions): Promise<string>;
        };
        updateProviderOffer: {
            (params: IUpdateProviderOfferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IUpdateProviderOfferParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IUpdateProviderOfferParams, options?: TransactionOptions) => Promise<string>;
        };
        private assign;
    }
    export module OSWAP_RangePair {
        interface AddLiquidityEvent {
            provider: string;
            direction: boolean;
            staked: BigNumber;
            amount: BigNumber;
            newStakeBalance: BigNumber;
            newAmountBalance: BigNumber;
            lowerLimit: BigNumber;
            upperLimit: BigNumber;
            startDate: BigNumber;
            expire: BigNumber;
            _event: Event;
        }
        interface NewProviderEvent {
            provider: string;
            index: BigNumber;
            _event: Event;
        }
        interface RemoveAllLiquidityEvent {
            provider: string;
            unstake: BigNumber;
            amount0Out: BigNumber;
            amount1Out: BigNumber;
            _event: Event;
        }
        interface RemoveLiquidityEvent {
            provider: string;
            direction: boolean;
            unstake: BigNumber;
            amountOut: BigNumber;
            reserveOut: BigNumber;
            newStakeBalance: BigNumber;
            newAmountBalance: BigNumber;
            newReserveBalance: BigNumber;
            lowerLimit: BigNumber;
            upperLimit: BigNumber;
            startDate: BigNumber;
            expire: BigNumber;
            _event: Event;
        }
        interface ReplenishEvent {
            provider: string;
            direction: boolean;
            amountIn: BigNumber;
            newAmountBalance: BigNumber;
            newReserveBalance: BigNumber;
            _event: Event;
        }
        interface SwapEvent {
            to: string;
            direction: boolean;
            price: BigNumber;
            amountIn: BigNumber;
            amountOut: BigNumber;
            tradeFee: BigNumber;
            protocolFee: BigNumber;
            _event: Event;
        }
        interface SwappedOneProviderEvent {
            provider: string;
            direction: boolean;
            amountOut: BigNumber;
            amountIn: BigNumber;
            newAmountBalance: BigNumber;
            newCounterReserveBalance: BigNumber;
            _event: Event;
        }
        interface UpdateProviderOfferEvent {
            provider: string;
            direction: boolean;
            replenish: BigNumber;
            newAmountBalance: BigNumber;
            newReserveBalance: BigNumber;
            lowerLimit: BigNumber;
            upperLimit: BigNumber;
            startDate: BigNumber;
            expire: BigNumber;
            privateReplenish: boolean;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/range/OSWAP_RangePairCreator.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/range/OSWAP_RangePairCreator.json.ts" {
    const _default_25: {
        abi: {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        }[];
        bytecode: string;
    };
    export default _default_25;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/range/OSWAP_RangePairCreator.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/range/OSWAP_RangePairCreator.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
    export class OSWAP_RangePairCreator extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(options?: number | BigNumber | TransactionOptions): Promise<string>;
        createPair: {
            (salt: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (salt: string, options?: TransactionOptions) => Promise<string>;
            txData: (salt: string, options?: TransactionOptions) => Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/range/OSWAP_VotingExecutor3.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/range/OSWAP_VotingExecutor3.json.ts" {
    const _default_26: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: any[];
            stateMutability: string;
            type: string;
        } | {
            inputs: any[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        })[];
        bytecode: string;
    };
    export default _default_26;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/range/OSWAP_VotingExecutor3.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/range/OSWAP_VotingExecutor3.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        governance: string;
        factory: string;
        hybridRegistry: string;
    }
    export class OSWAP_VotingExecutor3 extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        execute: {
            (params: string[], options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: string[], options?: TransactionOptions) => Promise<void>;
            txData: (params: string[], options?: TransactionOptions) => Promise<string>;
        };
        factory: {
            (options?: TransactionOptions): Promise<string>;
        };
        governance: {
            (options?: TransactionOptions): Promise<string>;
        };
        hybridRegistry: {
            (options?: TransactionOptions): Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_ConfigStore.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_ConfigStore.json.ts" {
    const _default_27: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_27;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_ConfigStore.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_ConfigStore.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface ISetCustomParamParams {
        paramName: string;
        paramValue: string;
    }
    export interface ISetMultiCustomParamParams {
        paramName: string[];
        paramValue: string[];
    }
    export class OSWAP_ConfigStore extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(governance: string, options?: TransactionOptions): Promise<string>;
        parseParamSetEvent(receipt: TransactionReceipt): OSWAP_ConfigStore.ParamSetEvent[];
        decodeParamSetEvent(event: Event): OSWAP_ConfigStore.ParamSetEvent;
        customParam: {
            (param1: string, options?: TransactionOptions): Promise<string>;
        };
        customParamNames: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
        };
        customParamNamesIdx: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        customParamNamesLength: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        governance: {
            (options?: TransactionOptions): Promise<string>;
        };
        setCustomParam: {
            (params: ISetCustomParamParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISetCustomParamParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISetCustomParamParams, options?: TransactionOptions) => Promise<string>;
        };
        setMultiCustomParam: {
            (params: ISetMultiCustomParamParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISetMultiCustomParamParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISetMultiCustomParamParams, options?: TransactionOptions) => Promise<string>;
        };
        private assign;
    }
    export module OSWAP_ConfigStore {
        interface ParamSetEvent {
            name: string;
            value: string;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_OtcLiquidityProvider.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_OtcLiquidityProvider.json.ts" {
    const _default_28: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_28;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_OtcLiquidityProvider.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_OtcLiquidityProvider.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        factory: string;
        WETH: string;
    }
    export interface IAddLiquidityParams {
        tokenA: string;
        tokenB: string;
        addingTokenA: boolean;
        pairIndex: number | BigNumber;
        offerIndex: number | BigNumber;
        amountIn: number | BigNumber;
        allowAll: boolean;
        restrictedPrice: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
        deadline: number | BigNumber;
    }
    export interface IAddLiquidityAndTraderParams {
        param: (number | BigNumber)[];
        trader: string[];
        allocation: (number | BigNumber)[];
    }
    export interface IAddLiquidityETHParams {
        tokenA: string;
        addingTokenA: boolean;
        pairIndex: number | BigNumber;
        offerIndex: number | BigNumber;
        amountAIn: number | BigNumber;
        allowAll: boolean;
        restrictedPrice: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
        deadline: number | BigNumber;
    }
    export interface IAddLiquidityETHAndTraderParams {
        param: (number | BigNumber)[];
        trader: string[];
        allocation: (number | BigNumber)[];
    }
    export interface IRemoveAllLiquidityParams {
        tokenA: string;
        tokenB: string;
        to: string;
        pairIndex: number | BigNumber;
        deadline: number | BigNumber;
    }
    export interface IRemoveAllLiquidityETHParams {
        tokenA: string;
        to: string;
        pairIndex: number | BigNumber;
        deadline: number | BigNumber;
    }
    export interface IRemoveLiquidityParams {
        tokenA: string;
        tokenB: string;
        removingTokenA: boolean;
        to: string;
        pairIndex: number | BigNumber;
        offerIndex: number | BigNumber;
        amountOut: number | BigNumber;
        receivingOut: number | BigNumber;
        deadline: number | BigNumber;
    }
    export interface IRemoveLiquidityETHParams {
        tokenA: string;
        removingTokenA: boolean;
        to: string;
        pairIndex: number | BigNumber;
        offerIndex: number | BigNumber;
        amountOut: number | BigNumber;
        receivingOut: number | BigNumber;
        deadline: number | BigNumber;
    }
    export class OSWAP_OtcLiquidityProvider extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        WETH: {
            (options?: TransactionOptions): Promise<string>;
        };
        addLiquidity: {
            (params: IAddLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityParams, options?: TransactionOptions) => Promise<{
                pair: string;
                _offerIndex: BigNumber;
            }>;
            txData: (params: IAddLiquidityParams, options?: TransactionOptions) => Promise<string>;
        };
        addLiquidityAndTrader: {
            (params: IAddLiquidityAndTraderParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityAndTraderParams, options?: TransactionOptions) => Promise<{
                pair: string;
                offerIndex: BigNumber;
            }>;
            txData: (params: IAddLiquidityAndTraderParams, options?: TransactionOptions) => Promise<string>;
        };
        addLiquidityETH: {
            (params: IAddLiquidityETHParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityETHParams, options?: number | BigNumber | TransactionOptions) => Promise<{
                pair: string;
                _offerIndex: BigNumber;
            }>;
            txData: (params: IAddLiquidityETHParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        addLiquidityETHAndTrader: {
            (params: IAddLiquidityETHAndTraderParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityETHAndTraderParams, options?: number | BigNumber | TransactionOptions) => Promise<{
                pair: string;
                offerIndex: BigNumber;
            }>;
            txData: (params: IAddLiquidityETHAndTraderParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        configStore: {
            (options?: TransactionOptions): Promise<string>;
        };
        factory: {
            (options?: TransactionOptions): Promise<string>;
        };
        govToken: {
            (options?: TransactionOptions): Promise<string>;
        };
        removeAllLiquidity: {
            (params: IRemoveAllLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveAllLiquidityParams, options?: TransactionOptions) => Promise<{
                amountA: BigNumber;
                amountB: BigNumber;
            }>;
            txData: (params: IRemoveAllLiquidityParams, options?: TransactionOptions) => Promise<string>;
        };
        removeAllLiquidityETH: {
            (params: IRemoveAllLiquidityETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveAllLiquidityETHParams, options?: TransactionOptions) => Promise<{
                amountToken: BigNumber;
                amountETH: BigNumber;
            }>;
            txData: (params: IRemoveAllLiquidityETHParams, options?: TransactionOptions) => Promise<string>;
        };
        removeLiquidity: {
            (params: IRemoveLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<string>;
        };
        removeLiquidityETH: {
            (params: IRemoveLiquidityETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityETHParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IRemoveLiquidityETHParams, options?: TransactionOptions) => Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_OtcPairOracle.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_OtcPairOracle.json.ts" {
    const _default_29: {
        abi: ({
            inputs: any[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        })[];
        bytecode: string;
    };
    export default _default_29;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_OtcPairOracle.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_OtcPairOracle.ts" {
    import { IWallet, Contract as _Contract, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
    export interface IGetLatestPriceParams {
        from: string;
        to: string;
        payload: string;
    }
    export interface IGetRatioParams {
        from: string;
        to: string;
        param3: number | BigNumber;
        param4: number | BigNumber;
        param5: string;
        payload: string;
    }
    export interface IIsSupportedParams {
        param1: string;
        param2: string;
    }
    export class OSWAP_OtcPairOracle extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(options?: TransactionOptions): Promise<string>;
        WEI: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        decimals: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        getLatestPrice: {
            (params: IGetLatestPriceParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getRatio: {
            (params: IGetRatioParams, options?: TransactionOptions): Promise<{
                numerator: BigNumber;
                denominator: BigNumber;
            }>;
        };
        isSupported: {
            (params: IIsSupportedParams, options?: TransactionOptions): Promise<boolean>;
        };
        private assign;
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedFactory.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedFactory.json.ts" {
    const _default_30: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_30;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedFactory.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedFactory.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        governance: string;
        whitelistFactory: string;
        pairCreator: string;
        configStore: string;
        tradeFee: number | BigNumber;
        protocolFee: number | BigNumber;
        protocolFeeTo: string;
    }
    export interface IAddOldOracleToNewPairParams {
        tokenA: string;
        tokenB: string;
        oracle: string;
    }
    export interface ICheckAndGetOracleParams {
        tokenA: string;
        tokenB: string;
    }
    export interface ICheckAndGetOracleSwapParamsParams {
        tokenA: string;
        tokenB: string;
    }
    export interface ICreatePairParams {
        tokenA: string;
        tokenB: string;
    }
    export interface IGetPairParams {
        param1: string;
        param2: string;
        param3: number | BigNumber;
    }
    export interface IOraclesParams {
        param1: string;
        param2: string;
    }
    export interface IPairLengthParams {
        tokenA: string;
        tokenB: string;
    }
    export interface ISetLiveForPairParams {
        pair: string;
        live: boolean;
    }
    export interface ISetOracleParams {
        tokenA: string;
        tokenB: string;
        oracle: string;
    }
    export class OSWAP_RestrictedFactory extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseOracleAddedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.OracleAddedEvent[];
        decodeOracleAddedEvent(event: Event): OSWAP_RestrictedFactory.OracleAddedEvent;
        parseOwnershipTransferredEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.OwnershipTransferredEvent[];
        decodeOwnershipTransferredEvent(event: Event): OSWAP_RestrictedFactory.OwnershipTransferredEvent;
        parsePairCreatedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.PairCreatedEvent[];
        decodePairCreatedEvent(event: Event): OSWAP_RestrictedFactory.PairCreatedEvent;
        parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.PairRestartedEvent[];
        decodePairRestartedEvent(event: Event): OSWAP_RestrictedFactory.PairRestartedEvent;
        parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.PairShutdownedEvent[];
        decodePairShutdownedEvent(event: Event): OSWAP_RestrictedFactory.PairShutdownedEvent;
        parseParamSetEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.ParamSetEvent[];
        decodeParamSetEvent(event: Event): OSWAP_RestrictedFactory.ParamSetEvent;
        parseParamSet2Event(receipt: TransactionReceipt): OSWAP_RestrictedFactory.ParamSet2Event[];
        decodeParamSet2Event(event: Event): OSWAP_RestrictedFactory.ParamSet2Event;
        parseRestartedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.RestartedEvent[];
        decodeRestartedEvent(event: Event): OSWAP_RestrictedFactory.RestartedEvent;
        parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.ShutdownedEvent[];
        decodeShutdownedEvent(event: Event): OSWAP_RestrictedFactory.ShutdownedEvent;
        addOldOracleToNewPair: {
            (params: IAddOldOracleToNewPairParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddOldOracleToNewPairParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IAddOldOracleToNewPairParams, options?: TransactionOptions) => Promise<string>;
        };
        allPairs: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
        };
        allPairsLength: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        checkAndGetOracle: {
            (params: ICheckAndGetOracleParams, options?: TransactionOptions): Promise<string>;
        };
        checkAndGetOracleSwapParams: {
            (params: ICheckAndGetOracleSwapParamsParams, options?: TransactionOptions): Promise<{
                oracle_: string;
                tradeFee_: BigNumber;
                protocolFee_: BigNumber;
            }>;
        };
        configStore: {
            (options?: TransactionOptions): Promise<string>;
        };
        createPair: {
            (params: ICreatePairParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ICreatePairParams, options?: TransactionOptions) => Promise<string>;
            txData: (params: ICreatePairParams, options?: TransactionOptions) => Promise<string>;
        };
        getCreateAddresses: {
            (options?: TransactionOptions): Promise<{
                _governance: string;
                _whitelistFactory: string;
                _restrictedLiquidityProvider: string;
                _configStore: string;
            }>;
        };
        getPair: {
            (params: IGetPairParams, options?: TransactionOptions): Promise<string>;
        };
        governance: {
            (options?: TransactionOptions): Promise<string>;
        };
        init: {
            (restrictedLiquidityProvider: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (restrictedLiquidityProvider: string, options?: TransactionOptions) => Promise<void>;
            txData: (restrictedLiquidityProvider: string, options?: TransactionOptions) => Promise<string>;
        };
        isLive: {
            (options?: TransactionOptions): Promise<boolean>;
        };
        isOracle: {
            (param1: string, options?: TransactionOptions): Promise<boolean>;
        };
        isPair: {
            (pair: string, options?: TransactionOptions): Promise<boolean>;
        };
        oracles: {
            (params: IOraclesParams, options?: TransactionOptions): Promise<string>;
        };
        owner: {
            (options?: TransactionOptions): Promise<string>;
        };
        pairCreator: {
            (options?: TransactionOptions): Promise<string>;
        };
        pairIdx: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        pairLength: {
            (params: IPairLengthParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        protocolFee: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        protocolFeeTo: {
            (options?: TransactionOptions): Promise<string>;
        };
        renounceOwnership: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
            txData: (options?: TransactionOptions) => Promise<string>;
        };
        restrictedLiquidityProvider: {
            (options?: TransactionOptions): Promise<string>;
        };
        setLive: {
            (isLive: boolean, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (isLive: boolean, options?: TransactionOptions) => Promise<void>;
            txData: (isLive: boolean, options?: TransactionOptions) => Promise<string>;
        };
        setLiveForPair: {
            (params: ISetLiveForPairParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISetLiveForPairParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISetLiveForPairParams, options?: TransactionOptions) => Promise<string>;
        };
        setOracle: {
            (params: ISetOracleParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISetOracleParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISetOracleParams, options?: TransactionOptions) => Promise<string>;
        };
        setProtocolFee: {
            (protocolFee: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (protocolFee: number | BigNumber, options?: TransactionOptions) => Promise<void>;
            txData: (protocolFee: number | BigNumber, options?: TransactionOptions) => Promise<string>;
        };
        setProtocolFeeTo: {
            (protocolFeeTo: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (protocolFeeTo: string, options?: TransactionOptions) => Promise<void>;
            txData: (protocolFeeTo: string, options?: TransactionOptions) => Promise<string>;
        };
        setTradeFee: {
            (tradeFee: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (tradeFee: number | BigNumber, options?: TransactionOptions) => Promise<void>;
            txData: (tradeFee: number | BigNumber, options?: TransactionOptions) => Promise<string>;
        };
        tradeFee: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        transferOwnership: {
            (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
            txData: (newOwner: string, options?: TransactionOptions) => Promise<string>;
        };
        whitelistFactory: {
            (options?: TransactionOptions): Promise<string>;
        };
        private assign;
    }
    export module OSWAP_RestrictedFactory {
        interface OracleAddedEvent {
            token0: string;
            token1: string;
            oracle: string;
            _event: Event;
        }
        interface OwnershipTransferredEvent {
            previousOwner: string;
            newOwner: string;
            _event: Event;
        }
        interface PairCreatedEvent {
            token0: string;
            token1: string;
            pair: string;
            newPairSize: BigNumber;
            newSize: BigNumber;
            _event: Event;
        }
        interface PairRestartedEvent {
            pair: string;
            _event: Event;
        }
        interface PairShutdownedEvent {
            pair: string;
            _event: Event;
        }
        interface ParamSetEvent {
            name: string;
            value: string;
            _event: Event;
        }
        interface ParamSet2Event {
            name: string;
            value1: string;
            value2: string;
            _event: Event;
        }
        interface RestartedEvent {
            _event: Event;
        }
        interface ShutdownedEvent {
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedLiquidityProvider1.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedLiquidityProvider1.json.ts" {
    const _default_31: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_31;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedLiquidityProvider1.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedLiquidityProvider1.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        factory: string;
        WETH: string;
    }
    export interface IAddLiquidityParams {
        tokenA: string;
        tokenB: string;
        addingTokenA: boolean;
        pairIndex: number | BigNumber;
        offerIndex: number | BigNumber;
        amountIn: number | BigNumber;
        allowAll: boolean;
        restrictedPrice: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
        deadline: number | BigNumber;
    }
    export interface IAddLiquidityAndTraderParams {
        param: (number | BigNumber)[];
        trader: string[];
        allocation: (number | BigNumber)[];
    }
    export interface IAddLiquidityETHParams {
        tokenA: string;
        addingTokenA: boolean;
        pairIndex: number | BigNumber;
        offerIndex: number | BigNumber;
        amountAIn: number | BigNumber;
        allowAll: boolean;
        restrictedPrice: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
        deadline: number | BigNumber;
    }
    export interface IAddLiquidityETHAndTraderParams {
        param: (number | BigNumber)[];
        trader: string[];
        allocation: (number | BigNumber)[];
    }
    export interface IRemoveAllLiquidityParams {
        tokenA: string;
        tokenB: string;
        to: string;
        pairIndex: number | BigNumber;
        deadline: number | BigNumber;
    }
    export interface IRemoveAllLiquidityETHParams {
        tokenA: string;
        to: string;
        pairIndex: number | BigNumber;
        deadline: number | BigNumber;
    }
    export interface IRemoveLiquidityParams {
        tokenA: string;
        tokenB: string;
        removingTokenA: boolean;
        to: string;
        pairIndex: number | BigNumber;
        offerIndex: number | BigNumber;
        amountOut: number | BigNumber;
        receivingOut: number | BigNumber;
        deadline: number | BigNumber;
    }
    export interface IRemoveLiquidityETHParams {
        tokenA: string;
        removingTokenA: boolean;
        to: string;
        pairIndex: number | BigNumber;
        offerIndex: number | BigNumber;
        amountOut: number | BigNumber;
        receivingOut: number | BigNumber;
        deadline: number | BigNumber;
    }
    export class OSWAP_RestrictedLiquidityProvider1 extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        WETH: {
            (options?: TransactionOptions): Promise<string>;
        };
        addLiquidity: {
            (params: IAddLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityParams, options?: TransactionOptions) => Promise<{
                pair: string;
                _offerIndex: BigNumber;
            }>;
            txData: (params: IAddLiquidityParams, options?: TransactionOptions) => Promise<string>;
        };
        addLiquidityAndTrader: {
            (params: IAddLiquidityAndTraderParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityAndTraderParams, options?: TransactionOptions) => Promise<{
                pair: string;
                offerIndex: BigNumber;
            }>;
            txData: (params: IAddLiquidityAndTraderParams, options?: TransactionOptions) => Promise<string>;
        };
        addLiquidityETH: {
            (params: IAddLiquidityETHParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityETHParams, options?: number | BigNumber | TransactionOptions) => Promise<{
                pair: string;
                _offerIndex: BigNumber;
            }>;
            txData: (params: IAddLiquidityETHParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        addLiquidityETHAndTrader: {
            (params: IAddLiquidityETHAndTraderParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityETHAndTraderParams, options?: number | BigNumber | TransactionOptions) => Promise<{
                pair: string;
                offerIndex: BigNumber;
            }>;
            txData: (params: IAddLiquidityETHAndTraderParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        configStore: {
            (options?: TransactionOptions): Promise<string>;
        };
        factory: {
            (options?: TransactionOptions): Promise<string>;
        };
        govToken: {
            (options?: TransactionOptions): Promise<string>;
        };
        removeAllLiquidity: {
            (params: IRemoveAllLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveAllLiquidityParams, options?: TransactionOptions) => Promise<{
                amountA: BigNumber;
                amountB: BigNumber;
            }>;
            txData: (params: IRemoveAllLiquidityParams, options?: TransactionOptions) => Promise<string>;
        };
        removeAllLiquidityETH: {
            (params: IRemoveAllLiquidityETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveAllLiquidityETHParams, options?: TransactionOptions) => Promise<{
                amountToken: BigNumber;
                amountETH: BigNumber;
            }>;
            txData: (params: IRemoveAllLiquidityETHParams, options?: TransactionOptions) => Promise<string>;
        };
        removeLiquidity: {
            (params: IRemoveLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<string>;
        };
        removeLiquidityETH: {
            (params: IRemoveLiquidityETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityETHParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IRemoveLiquidityETHParams, options?: TransactionOptions) => Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedLiquidityProvider3.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedLiquidityProvider3.json.ts" {
    const _default_32: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_32;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedLiquidityProvider3.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedLiquidityProvider3.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        factory: string;
        WETH: string;
    }
    export interface IAddLiquidityParams {
        tokenA: string;
        tokenB: string;
        addingTokenA: boolean;
        pairIndex: number | BigNumber;
        offerIndex: number | BigNumber;
        amountIn: number | BigNumber;
        allowAll: boolean;
        restrictedPrice: number | BigNumber;
        startDateAndExpire: number | BigNumber;
        feeIn: number | BigNumber;
        deadline: number | BigNumber;
    }
    export interface IAddLiquidityETHParams {
        tokenA: string;
        addingTokenA: boolean;
        pairIndex: number | BigNumber;
        offerIndex: number | BigNumber;
        amountAIn: number | BigNumber;
        allowAll: boolean;
        restrictedPrice: number | BigNumber;
        startDateAndExpire: number | BigNumber;
        feeIn: number | BigNumber;
        deadline: number | BigNumber;
    }
    export interface IRemoveAllLiquidityParams {
        tokenA: string;
        tokenB: string;
        to: string;
        pairIndex: number | BigNumber;
        deadline: number | BigNumber;
    }
    export interface IRemoveAllLiquidityETHParams {
        tokenA: string;
        to: string;
        pairIndex: number | BigNumber;
        deadline: number | BigNumber;
    }
    export interface IRemoveLiquidityParams {
        tokenA: string;
        tokenB: string;
        removingTokenA: boolean;
        to: string;
        pairIndex: number | BigNumber;
        offerIndex: number | BigNumber;
        amountOut: number | BigNumber;
        receivingOut: number | BigNumber;
        feeOut: number | BigNumber;
        deadline: number | BigNumber;
    }
    export interface IRemoveLiquidityETHParams {
        tokenA: string;
        removingTokenA: boolean;
        to: string;
        pairIndex: number | BigNumber;
        offerIndex: number | BigNumber;
        amountOut: number | BigNumber;
        receivingOut: number | BigNumber;
        feeOut: number | BigNumber;
        deadline: number | BigNumber;
    }
    export class OSWAP_RestrictedLiquidityProvider3 extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        WETH: {
            (options?: TransactionOptions): Promise<string>;
        };
        addLiquidity: {
            (params: IAddLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityParams, options?: TransactionOptions) => Promise<{
                pair: string;
                _offerIndex: BigNumber;
            }>;
            txData: (params: IAddLiquidityParams, options?: TransactionOptions) => Promise<string>;
        };
        addLiquidityETH: {
            (params: IAddLiquidityETHParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityETHParams, options?: number | BigNumber | TransactionOptions) => Promise<{
                pair: string;
                _offerIndex: BigNumber;
            }>;
            txData: (params: IAddLiquidityETHParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        configStore: {
            (options?: TransactionOptions): Promise<string>;
        };
        factory: {
            (options?: TransactionOptions): Promise<string>;
        };
        govToken: {
            (options?: TransactionOptions): Promise<string>;
        };
        removeAllLiquidity: {
            (params: IRemoveAllLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveAllLiquidityParams, options?: TransactionOptions) => Promise<{
                amountA: BigNumber;
                amountB: BigNumber;
                feeOut: BigNumber;
            }>;
            txData: (params: IRemoveAllLiquidityParams, options?: TransactionOptions) => Promise<string>;
        };
        removeAllLiquidityETH: {
            (params: IRemoveAllLiquidityETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveAllLiquidityETHParams, options?: TransactionOptions) => Promise<{
                amountToken: BigNumber;
                amountETH: BigNumber;
                feeOut: BigNumber;
            }>;
            txData: (params: IRemoveAllLiquidityETHParams, options?: TransactionOptions) => Promise<string>;
        };
        removeLiquidity: {
            (params: IRemoveLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<string>;
        };
        removeLiquidityETH: {
            (params: IRemoveLiquidityETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityETHParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IRemoveLiquidityETHParams, options?: TransactionOptions) => Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedLiquidityProvider4.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedLiquidityProvider4.json.ts" {
    const _default_33: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_33;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedLiquidityProvider4.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedLiquidityProvider4.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        factory: string;
        WETH: string;
    }
    export interface IAddLiquidityParams {
        tokenA: string;
        tokenB: string;
        addingTokenA: boolean;
        params: (number | BigNumber)[];
        merkleRoot: string;
        allowlistIpfsCid: string;
    }
    export interface IAddLiquidityETHParams {
        tokenA: string;
        addingTokenA: boolean;
        params: (number | BigNumber)[];
        merkleRoot: string;
        allowlistIpfsCid: string;
    }
    export interface IRemoveAllLiquidityParams {
        tokenA: string;
        tokenB: string;
        to: string;
        pairIndex: number | BigNumber;
        deadline: number | BigNumber;
    }
    export interface IRemoveAllLiquidityETHParams {
        tokenA: string;
        to: string;
        pairIndex: number | BigNumber;
        deadline: number | BigNumber;
    }
    export interface IRemoveLiquidityParams {
        tokenA: string;
        tokenB: string;
        removingTokenA: boolean;
        to: string;
        pairIndex: number | BigNumber;
        offerIndex: number | BigNumber;
        amountOut: number | BigNumber;
        receivingOut: number | BigNumber;
        feeOut: number | BigNumber;
        deadline: number | BigNumber;
    }
    export interface IRemoveLiquidityETHParams {
        tokenA: string;
        removingTokenA: boolean;
        to: string;
        pairIndex: number | BigNumber;
        offerIndex: number | BigNumber;
        amountOut: number | BigNumber;
        receivingOut: number | BigNumber;
        feeOut: number | BigNumber;
        deadline: number | BigNumber;
    }
    export class OSWAP_RestrictedLiquidityProvider4 extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        WETH: {
            (options?: TransactionOptions): Promise<string>;
        };
        addLiquidity: {
            (params: IAddLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityParams, options?: TransactionOptions) => Promise<{
                pair: string;
                _offerIndex: BigNumber;
            }>;
            txData: (params: IAddLiquidityParams, options?: TransactionOptions) => Promise<string>;
        };
        addLiquidityETH: {
            (params: IAddLiquidityETHParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityETHParams, options?: number | BigNumber | TransactionOptions) => Promise<{
                pair: string;
                _offerIndex: BigNumber;
            }>;
            txData: (params: IAddLiquidityETHParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        configStore: {
            (options?: TransactionOptions): Promise<string>;
        };
        factory: {
            (options?: TransactionOptions): Promise<string>;
        };
        govToken: {
            (options?: TransactionOptions): Promise<string>;
        };
        removeAllLiquidity: {
            (params: IRemoveAllLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveAllLiquidityParams, options?: TransactionOptions) => Promise<{
                amountA: BigNumber;
                amountB: BigNumber;
                feeOut: BigNumber;
            }>;
            txData: (params: IRemoveAllLiquidityParams, options?: TransactionOptions) => Promise<string>;
        };
        removeAllLiquidityETH: {
            (params: IRemoveAllLiquidityETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveAllLiquidityETHParams, options?: TransactionOptions) => Promise<{
                amountToken: BigNumber;
                amountETH: BigNumber;
                feeOut: BigNumber;
            }>;
            txData: (params: IRemoveAllLiquidityETHParams, options?: TransactionOptions) => Promise<string>;
        };
        removeLiquidity: {
            (params: IRemoveLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<string>;
        };
        removeLiquidityETH: {
            (params: IRemoveLiquidityETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityETHParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IRemoveLiquidityETHParams, options?: TransactionOptions) => Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedPair.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedPair.json.ts" {
    const _default_34: {
        abi: ({
            inputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_34;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedPair.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedPair.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IApprovedTraderParams {
        param1: boolean;
        param2: number | BigNumber;
        param3: number | BigNumber;
    }
    export interface ICreateOrderParams {
        provider: string;
        direction: boolean;
        allowAll: boolean;
        restrictedPrice: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
    }
    export interface IGetAmountInParams {
        param1: string;
        param2: number | BigNumber;
        param3: string;
        param4: string;
    }
    export interface IGetAmountOutParams {
        tokenIn: string;
        amountIn: number | BigNumber;
        trader: string;
        param4: string;
    }
    export interface IGetApprovedTraderParams {
        direction: boolean;
        offerIndex: number | BigNumber;
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IGetApprovedTraderLengthParams {
        direction: boolean;
        offerIndex: number | BigNumber;
    }
    export interface IGetOffersParams {
        direction: boolean;
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IGetProviderOfferParams {
        provider: string;
        direction: boolean;
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IGetProviderOfferIndexLengthParams {
        provider: string;
        direction: boolean;
    }
    export interface IGetTraderOfferParams {
        trader: string;
        direction: boolean;
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IInitializeParams {
        token0: string;
        token1: string;
    }
    export interface IIsApprovedTraderParams {
        param1: boolean;
        param2: number | BigNumber;
        param3: string;
    }
    export interface ILockOfferParams {
        direction: boolean;
        index: number | BigNumber;
    }
    export interface IOffersParams {
        param1: boolean;
        param2: number | BigNumber;
    }
    export interface IProviderOfferIndexParams {
        param1: boolean;
        param2: string;
        param3: number | BigNumber;
    }
    export interface ISwapParams {
        amount0Out: number | BigNumber;
        amount1Out: number | BigNumber;
        to: string;
        trader: string;
        param5: string;
    }
    export interface ITraderAllocationParams {
        param1: boolean;
        param2: number | BigNumber;
        param3: string;
    }
    export interface ITraderOfferParams {
        param1: boolean;
        param2: string;
        param3: number | BigNumber;
    }
    export class OSWAP_RestrictedPair extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(options?: TransactionOptions): Promise<string>;
        parseApprovedTraderEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair.ApprovedTraderEvent[];
        decodeApprovedTraderEvent(event: Event): OSWAP_RestrictedPair.ApprovedTraderEvent;
        parseLockEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair.LockEvent[];
        decodeLockEvent(event: Event): OSWAP_RestrictedPair.LockEvent;
        parseNewProviderOfferEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair.NewProviderOfferEvent[];
        decodeNewProviderOfferEvent(event: Event): OSWAP_RestrictedPair.NewProviderOfferEvent;
        parseSwapEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair.SwapEvent[];
        decodeSwapEvent(event: Event): OSWAP_RestrictedPair.SwapEvent;
        parseSwappedOneOfferEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair.SwappedOneOfferEvent[];
        decodeSwappedOneOfferEvent(event: Event): OSWAP_RestrictedPair.SwappedOneOfferEvent;
        approvedTrader: {
            (params: IApprovedTraderParams, options?: TransactionOptions): Promise<string>;
        };
        configStore: {
            (options?: TransactionOptions): Promise<string>;
        };
        counter: {
            (param1: boolean, options?: TransactionOptions): Promise<BigNumber>;
        };
        createOrder: {
            (params: ICreateOrderParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ICreateOrderParams, options?: TransactionOptions) => Promise<BigNumber>;
            txData: (params: ICreateOrderParams, options?: TransactionOptions) => Promise<string>;
        };
        factory: {
            (options?: TransactionOptions): Promise<string>;
        };
        feeBalance: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        getAmountIn: {
            (params: IGetAmountInParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getAmountOut: {
            (params: IGetAmountOutParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getApprovedTrader: {
            (params: IGetApprovedTraderParams, options?: TransactionOptions): Promise<{
                trader: string[];
                allocation: BigNumber[];
            }>;
        };
        getApprovedTraderLength: {
            (params: IGetApprovedTraderLengthParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getBalances: {
            (options?: TransactionOptions): Promise<{
                param1: BigNumber;
                param2: BigNumber;
                param3: BigNumber;
            }>;
        };
        getLastBalances: {
            (options?: TransactionOptions): Promise<{
                param1: BigNumber;
                param2: BigNumber;
            }>;
        };
        getOffers: {
            (params: IGetOffersParams, options?: TransactionOptions): Promise<{
                index: BigNumber[];
                provider: string[];
                lockedAndAllowAll: boolean[];
                receiving: BigNumber[];
                amountAndPrice: BigNumber[];
                startDateAndExpire: BigNumber[];
            }>;
        };
        getProviderOffer: {
            (params: IGetProviderOfferParams, options?: TransactionOptions): Promise<{
                index: BigNumber[];
                provider: string[];
                lockedAndAllowAll: boolean[];
                receiving: BigNumber[];
                amountAndPrice: BigNumber[];
                startDateAndExpire: BigNumber[];
            }>;
        };
        getProviderOfferIndexLength: {
            (params: IGetProviderOfferIndexLengthParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getTraderOffer: {
            (params: IGetTraderOfferParams, options?: TransactionOptions): Promise<{
                index: BigNumber[];
                provider: string[];
                lockedAndAllowAll: boolean[];
                receiving: BigNumber[];
                amountAndPrice: BigNumber[];
                startDateAndExpire: BigNumber[];
            }>;
        };
        govToken: {
            (options?: TransactionOptions): Promise<string>;
        };
        governance: {
            (options?: TransactionOptions): Promise<string>;
        };
        initialize: {
            (params: IInitializeParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IInitializeParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IInitializeParams, options?: TransactionOptions) => Promise<string>;
        };
        isApprovedTrader: {
            (params: IIsApprovedTraderParams, options?: TransactionOptions): Promise<boolean>;
        };
        isLive: {
            (options?: TransactionOptions): Promise<boolean>;
        };
        lastGovBalance: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        lastToken0Balance: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        lastToken1Balance: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        lockOffer: {
            (params: ILockOfferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ILockOfferParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ILockOfferParams, options?: TransactionOptions) => Promise<string>;
        };
        offers: {
            (params: IOffersParams, options?: TransactionOptions): Promise<{
                provider: string;
                locked: boolean;
                allowAll: boolean;
                amount: BigNumber;
                receiving: BigNumber;
                restrictedPrice: BigNumber;
                startDate: BigNumber;
                expire: BigNumber;
            }>;
        };
        protocolFeeBalance0: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        protocolFeeBalance1: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        providerOfferIndex: {
            (params: IProviderOfferIndexParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        redeemProtocolFee: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
            txData: (options?: TransactionOptions) => Promise<string>;
        };
        restrictedLiquidityProvider: {
            (options?: TransactionOptions): Promise<string>;
        };
        scaleDirection: {
            (options?: TransactionOptions): Promise<boolean>;
        };
        scaler: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        setLive: {
            (isLive: boolean, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (isLive: boolean, options?: TransactionOptions) => Promise<void>;
            txData: (isLive: boolean, options?: TransactionOptions) => Promise<string>;
        };
        swap: {
            (params: ISwapParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISwapParams, options?: TransactionOptions) => Promise<string>;
        };
        sync: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
            txData: (options?: TransactionOptions) => Promise<string>;
        };
        token0: {
            (options?: TransactionOptions): Promise<string>;
        };
        token1: {
            (options?: TransactionOptions): Promise<string>;
        };
        traderAllocation: {
            (params: ITraderAllocationParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        traderOffer: {
            (params: ITraderOfferParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        whitelistFactory: {
            (options?: TransactionOptions): Promise<string>;
        };
        private assign;
    }
    export module OSWAP_RestrictedPair {
        interface ApprovedTraderEvent {
            direction: boolean;
            offerIndex: BigNumber;
            trader: string;
            allocation: BigNumber;
            _event: Event;
        }
        interface LockEvent {
            direction: boolean;
            index: BigNumber;
            _event: Event;
        }
        interface NewProviderOfferEvent {
            provider: string;
            direction: boolean;
            index: BigNumber;
            allowAll: boolean;
            restrictedPrice: BigNumber;
            startDate: BigNumber;
            expire: BigNumber;
            _event: Event;
        }
        interface SwapEvent {
            to: string;
            direction: boolean;
            amountIn: BigNumber;
            amountOut: BigNumber;
            tradeFee: BigNumber;
            protocolFee: BigNumber;
            _event: Event;
        }
        interface SwappedOneOfferEvent {
            provider: string;
            direction: boolean;
            index: BigNumber;
            price: BigNumber;
            amountOut: BigNumber;
            amountIn: BigNumber;
            newAmountBalance: BigNumber;
            newReceivingBalance: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedPairOracle.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedPairOracle.json.ts" {
    const _default_35: {
        abi: ({
            inputs: any[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        })[];
        bytecode: string;
    };
    export default _default_35;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedPairOracle.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedPairOracle.ts" {
    import { IWallet, Contract as _Contract, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
    export interface IGetLatestPriceParams {
        from: string;
        to: string;
        payload: string;
    }
    export interface IGetRatioParams {
        from: string;
        to: string;
        param3: number | BigNumber;
        param4: number | BigNumber;
        param5: string;
        payload: string;
    }
    export interface IIsSupportedParams {
        param1: string;
        param2: string;
    }
    export class OSWAP_RestrictedPairOracle extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(options?: TransactionOptions): Promise<string>;
        WEI: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        decimals: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        getLatestPrice: {
            (params: IGetLatestPriceParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getRatio: {
            (params: IGetRatioParams, options?: TransactionOptions): Promise<{
                numerator: BigNumber;
                denominator: BigNumber;
            }>;
        };
        isSupported: {
            (params: IIsSupportedParams, options?: TransactionOptions): Promise<boolean>;
        };
        private assign;
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_VotingExecutor4.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_VotingExecutor4.json.ts" {
    const _default_36: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: any[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: any[];
            stateMutability: string;
            type: string;
        })[];
        bytecode: string;
    };
    export default _default_36;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_VotingExecutor4.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_VotingExecutor4.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        governance: string;
        factory: string;
        configStore: string;
    }
    export class OSWAP_VotingExecutor4 extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        configStore: {
            (options?: TransactionOptions): Promise<string>;
        };
        execute: {
            (params: string[], options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: string[], options?: TransactionOptions) => Promise<void>;
            txData: (params: string[], options?: TransactionOptions) => Promise<string>;
        };
        factory: {
            (options?: TransactionOptions): Promise<string>;
        };
        governance: {
            (options?: TransactionOptions): Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/router/OSWAP_HybridRouter.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/router/OSWAP_HybridRouter.json.ts" {
    const _default_37: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_37;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/router/OSWAP_HybridRouter.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/router/OSWAP_HybridRouter.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        oracleFactory: string;
        WETH: string;
    }
    export interface IGetAmountsInParams {
        amountOut: number | BigNumber;
        path: string[];
        pair: string[];
        fee: (number | BigNumber)[];
        data: string;
    }
    export interface IGetAmountsOutParams {
        amountIn: number | BigNumber;
        path: string[];
        pair: string[];
        fee: (number | BigNumber)[];
        data: string;
    }
    export interface IPairForParams {
        tokenA: string;
        tokenB: string;
    }
    export interface ISwapETHForExactTokensParams {
        amountOut: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: (number | BigNumber)[];
        data: string;
    }
    export interface ISwapExactETHForTokensParams {
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: (number | BigNumber)[];
        data: string;
    }
    export interface ISwapExactETHForTokensSupportingFeeOnTransferTokensParams {
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: (number | BigNumber)[];
    }
    export interface ISwapExactTokensForETHParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: (number | BigNumber)[];
        data: string;
    }
    export interface ISwapExactTokensForETHSupportingFeeOnTransferTokensParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: (number | BigNumber)[];
    }
    export interface ISwapExactTokensForTokensParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: (number | BigNumber)[];
        data: string;
    }
    export interface ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: (number | BigNumber)[];
    }
    export interface ISwapTokensForExactETHParams {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: (number | BigNumber)[];
        data: string;
    }
    export interface ISwapTokensForExactTokensParams {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        pair: string[];
        fee: (number | BigNumber)[];
        data: string;
    }
    export class OSWAP_HybridRouter extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        WETH: {
            (options?: TransactionOptions): Promise<string>;
        };
        getAmountsIn: {
            (params: IGetAmountsInParams, options?: TransactionOptions): Promise<BigNumber[]>;
        };
        getAmountsOut: {
            (params: IGetAmountsOutParams, options?: TransactionOptions): Promise<BigNumber[]>;
        };
        oracleFactory: {
            (options?: TransactionOptions): Promise<string>;
        };
        pairFor: {
            (params: IPairForParams, options?: TransactionOptions): Promise<string>;
        };
        swapETHForExactTokens: {
            (params: ISwapETHForExactTokensParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapETHForExactTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber[]>;
            txData: (params: ISwapETHForExactTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        swapExactETHForTokens: {
            (params: ISwapExactETHForTokensParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactETHForTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber[]>;
            txData: (params: ISwapExactETHForTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        swapExactETHForTokensSupportingFeeOnTransferTokens: {
            (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        swapExactTokensForETH: {
            (params: ISwapExactTokensForETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForETHParams, options?: TransactionOptions) => Promise<BigNumber[]>;
            txData: (params: ISwapExactTokensForETHParams, options?: TransactionOptions) => Promise<string>;
        };
        swapExactTokensForETHSupportingFeeOnTransferTokens: {
            (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<string>;
        };
        swapExactTokensForTokens: {
            (params: ISwapExactTokensForTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForTokensParams, options?: TransactionOptions) => Promise<BigNumber[]>;
            txData: (params: ISwapExactTokensForTokensParams, options?: TransactionOptions) => Promise<string>;
        };
        swapExactTokensForTokensSupportingFeeOnTransferTokens: {
            (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<string>;
        };
        swapTokensForExactETH: {
            (params: ISwapTokensForExactETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapTokensForExactETHParams, options?: TransactionOptions) => Promise<BigNumber[]>;
            txData: (params: ISwapTokensForExactETHParams, options?: TransactionOptions) => Promise<string>;
        };
        swapTokensForExactTokens: {
            (params: ISwapTokensForExactTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapTokensForExactTokensParams, options?: TransactionOptions) => Promise<BigNumber[]>;
            txData: (params: ISwapTokensForExactTokensParams, options?: TransactionOptions) => Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/router/OSWAP_HybridRouterRegistry.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/router/OSWAP_HybridRouterRegistry.json.ts" {
    const _default_38: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_38;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/router/OSWAP_HybridRouterRegistry.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/router/OSWAP_HybridRouterRegistry.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IInitParams {
        name: string[];
        factory: string[];
        fee: (number | BigNumber)[];
        feeBase: (number | BigNumber)[];
        typeCode: (number | BigNumber)[];
    }
    export interface IRegisterPairParams {
        token0: string;
        token1: string;
        pairAddress: string;
        fee: number | BigNumber;
        feeBase: number | BigNumber;
        typeCode: number | BigNumber;
    }
    export interface IRegisterPairByAddressParams {
        factory: string;
        pairAddress: string;
    }
    export interface IRegisterPairByIndexParams {
        factory: string;
        index: number | BigNumber;
    }
    export interface IRegisterPairByTokensParams {
        factory: string;
        token0: string;
        token1: string;
    }
    export interface IRegisterPairByTokensV3Params {
        factory: string;
        token0: string;
        token1: string;
        pairIndex: number | BigNumber;
    }
    export interface IRegisterPairsByAddressParams {
        factory: string;
        pairAddress: string[];
    }
    export interface IRegisterPairsByAddress2Params {
        factory: string[];
        pairAddress: string[];
    }
    export interface IRegisterPairsByIndexParams {
        factory: string;
        index: (number | BigNumber)[];
    }
    export interface IRegisterPairsByTokensParams {
        factory: string;
        token0: string[];
        token1: string[];
    }
    export interface IRegisterPairsByTokensV3Params {
        factory: string;
        token0: string[];
        token1: string[];
        pairIndex: (number | BigNumber)[];
    }
    export interface IRegisterProtocolParams {
        name: string;
        factory: string;
        fee: number | BigNumber;
        feeBase: number | BigNumber;
        typeCode: number | BigNumber;
    }
    export class OSWAP_HybridRouterRegistry extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(governance: string, options?: TransactionOptions): Promise<string>;
        parseCustomPairRegisterEvent(receipt: TransactionReceipt): OSWAP_HybridRouterRegistry.CustomPairRegisterEvent[];
        decodeCustomPairRegisterEvent(event: Event): OSWAP_HybridRouterRegistry.CustomPairRegisterEvent;
        parseOwnershipTransferredEvent(receipt: TransactionReceipt): OSWAP_HybridRouterRegistry.OwnershipTransferredEvent[];
        decodeOwnershipTransferredEvent(event: Event): OSWAP_HybridRouterRegistry.OwnershipTransferredEvent;
        parsePairRegisterEvent(receipt: TransactionReceipt): OSWAP_HybridRouterRegistry.PairRegisterEvent[];
        decodePairRegisterEvent(event: Event): OSWAP_HybridRouterRegistry.PairRegisterEvent;
        parseProtocolRegisterEvent(receipt: TransactionReceipt): OSWAP_HybridRouterRegistry.ProtocolRegisterEvent[];
        decodeProtocolRegisterEvent(event: Event): OSWAP_HybridRouterRegistry.ProtocolRegisterEvent;
        customPairs: {
            (param1: string, options?: TransactionOptions): Promise<{
                fee: BigNumber;
                feeBase: BigNumber;
                typeCode: BigNumber;
            }>;
        };
        execute: {
            (params: string[], options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: string[], options?: TransactionOptions) => Promise<void>;
            txData: (params: string[], options?: TransactionOptions) => Promise<string>;
        };
        getFee: {
            (pairAddress: string, options?: TransactionOptions): Promise<{
                fee: BigNumber;
                feeBase: BigNumber;
            }>;
        };
        getPairTokens: {
            (pairAddress: string[], options?: TransactionOptions): Promise<{
                token0: string[];
                token1: string[];
            }>;
        };
        getTypeCode: {
            (pairAddress: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        governance: {
            (options?: TransactionOptions): Promise<string>;
        };
        init: {
            (params: IInitParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IInitParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IInitParams, options?: TransactionOptions) => Promise<string>;
        };
        owner: {
            (options?: TransactionOptions): Promise<string>;
        };
        pairs: {
            (param1: string, options?: TransactionOptions): Promise<{
                factory: string;
                token0: string;
                token1: string;
            }>;
        };
        protocolList: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
        };
        protocolListLength: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        protocols: {
            (param1: string, options?: TransactionOptions): Promise<{
                name: string;
                fee: BigNumber;
                feeBase: BigNumber;
                typeCode: BigNumber;
            }>;
        };
        registerPair: {
            (params: IRegisterPairParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRegisterPairParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IRegisterPairParams, options?: TransactionOptions) => Promise<string>;
        };
        registerPairByAddress: {
            (params: IRegisterPairByAddressParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRegisterPairByAddressParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IRegisterPairByAddressParams, options?: TransactionOptions) => Promise<string>;
        };
        registerPairByIndex: {
            (params: IRegisterPairByIndexParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRegisterPairByIndexParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IRegisterPairByIndexParams, options?: TransactionOptions) => Promise<string>;
        };
        registerPairByTokens: {
            (params: IRegisterPairByTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRegisterPairByTokensParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IRegisterPairByTokensParams, options?: TransactionOptions) => Promise<string>;
        };
        registerPairByTokensV3: {
            (params: IRegisterPairByTokensV3Params, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRegisterPairByTokensV3Params, options?: TransactionOptions) => Promise<void>;
            txData: (params: IRegisterPairByTokensV3Params, options?: TransactionOptions) => Promise<string>;
        };
        registerPairsByAddress: {
            (params: IRegisterPairsByAddressParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRegisterPairsByAddressParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IRegisterPairsByAddressParams, options?: TransactionOptions) => Promise<string>;
        };
        registerPairsByAddress2: {
            (params: IRegisterPairsByAddress2Params, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRegisterPairsByAddress2Params, options?: TransactionOptions) => Promise<void>;
            txData: (params: IRegisterPairsByAddress2Params, options?: TransactionOptions) => Promise<string>;
        };
        registerPairsByIndex: {
            (params: IRegisterPairsByIndexParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRegisterPairsByIndexParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IRegisterPairsByIndexParams, options?: TransactionOptions) => Promise<string>;
        };
        registerPairsByTokens: {
            (params: IRegisterPairsByTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRegisterPairsByTokensParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IRegisterPairsByTokensParams, options?: TransactionOptions) => Promise<string>;
        };
        registerPairsByTokensV3: {
            (params: IRegisterPairsByTokensV3Params, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRegisterPairsByTokensV3Params, options?: TransactionOptions) => Promise<void>;
            txData: (params: IRegisterPairsByTokensV3Params, options?: TransactionOptions) => Promise<string>;
        };
        registerProtocol: {
            (params: IRegisterProtocolParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRegisterProtocolParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IRegisterProtocolParams, options?: TransactionOptions) => Promise<string>;
        };
        renounceOwnership: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
            txData: (options?: TransactionOptions) => Promise<string>;
        };
        transferOwnership: {
            (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
            txData: (newOwner: string, options?: TransactionOptions) => Promise<string>;
        };
        private assign;
    }
    export module OSWAP_HybridRouterRegistry {
        interface CustomPairRegisterEvent {
            pair: string;
            fee: BigNumber;
            feeBase: BigNumber;
            typeCode: BigNumber;
            _event: Event;
        }
        interface OwnershipTransferredEvent {
            previousOwner: string;
            newOwner: string;
            _event: Event;
        }
        interface PairRegisterEvent {
            factory: string;
            pair: string;
            token0: string;
            token1: string;
            _event: Event;
        }
        interface ProtocolRegisterEvent {
            factory: string;
            name: string;
            fee: BigNumber;
            feeBase: BigNumber;
            typeCode: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/router/OSWAP_OracleRouter.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/router/OSWAP_OracleRouter.json.ts" {
    const _default_39: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_39;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/router/OSWAP_OracleRouter.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/router/OSWAP_OracleRouter.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        ammFactory: string;
        oracleFactory: string;
        WETH: string;
    }
    export interface IGetAmountInParams {
        amountOut: number | BigNumber;
        tokenIn: string;
        tokenOut: string;
        data: string;
    }
    export interface IGetAmountOutParams {
        amountIn: number | BigNumber;
        tokenIn: string;
        tokenOut: string;
        data: string;
    }
    export interface IGetAmountsInParams {
        amountOut: number | BigNumber;
        path: string[];
        useOracle: boolean[];
        data: string;
    }
    export interface IGetAmountsOutParams {
        amountIn: number | BigNumber;
        path: string[];
        useOracle: boolean[];
        data: string;
    }
    export interface IGetLatestPriceParams {
        tokenIn: string;
        tokenOut: string;
        data: string;
    }
    export interface ISwapETHForExactTokensParams {
        amountOut: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        useOracle: boolean[];
        data: string;
    }
    export interface ISwapExactETHForTokensParams {
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        useOracle: boolean[];
        data: string;
    }
    export interface ISwapExactETHForTokensSupportingFeeOnTransferTokensParams {
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        useOracle: boolean[];
        data: string;
    }
    export interface ISwapExactTokensForETHParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        useOracle: boolean[];
        data: string;
    }
    export interface ISwapExactTokensForETHSupportingFeeOnTransferTokensParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        useOracle: boolean[];
        data: string;
    }
    export interface ISwapExactTokensForTokensParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        useOracle: boolean[];
        data: string;
    }
    export interface ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        useOracle: boolean[];
        data: string;
    }
    export interface ISwapTokensForExactETHParams {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        useOracle: boolean[];
        data: string;
    }
    export interface ISwapTokensForExactTokensParams {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
        useOracle: boolean[];
        data: string;
    }
    export class OSWAP_OracleRouter extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        WETH: {
            (options?: TransactionOptions): Promise<string>;
        };
        ammFactory: {
            (options?: TransactionOptions): Promise<string>;
        };
        getAmountIn: {
            (params: IGetAmountInParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getAmountOut: {
            (params: IGetAmountOutParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getAmountsIn: {
            (params: IGetAmountsInParams, options?: TransactionOptions): Promise<BigNumber[]>;
        };
        getAmountsOut: {
            (params: IGetAmountsOutParams, options?: TransactionOptions): Promise<BigNumber[]>;
        };
        getLatestPrice: {
            (params: IGetLatestPriceParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        oracleFactory: {
            (options?: TransactionOptions): Promise<string>;
        };
        swapETHForExactTokens: {
            (params: ISwapETHForExactTokensParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapETHForExactTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber[]>;
            txData: (params: ISwapETHForExactTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        swapExactETHForTokens: {
            (params: ISwapExactETHForTokensParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactETHForTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber[]>;
            txData: (params: ISwapExactETHForTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        swapExactETHForTokensSupportingFeeOnTransferTokens: {
            (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        swapExactTokensForETH: {
            (params: ISwapExactTokensForETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForETHParams, options?: TransactionOptions) => Promise<BigNumber[]>;
            txData: (params: ISwapExactTokensForETHParams, options?: TransactionOptions) => Promise<string>;
        };
        swapExactTokensForETHSupportingFeeOnTransferTokens: {
            (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<string>;
        };
        swapExactTokensForTokens: {
            (params: ISwapExactTokensForTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForTokensParams, options?: TransactionOptions) => Promise<BigNumber[]>;
            txData: (params: ISwapExactTokensForTokensParams, options?: TransactionOptions) => Promise<string>;
        };
        swapExactTokensForTokensSupportingFeeOnTransferTokens: {
            (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<string>;
        };
        swapTokensForExactETH: {
            (params: ISwapTokensForExactETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapTokensForExactETHParams, options?: TransactionOptions) => Promise<BigNumber[]>;
            txData: (params: ISwapTokensForExactETHParams, options?: TransactionOptions) => Promise<string>;
        };
        swapTokensForExactTokens: {
            (params: ISwapTokensForExactTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapTokensForExactTokensParams, options?: TransactionOptions) => Promise<BigNumber[]>;
            txData: (params: ISwapTokensForExactTokensParams, options?: TransactionOptions) => Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_OtcPair.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_OtcPair.json.ts" {
    const _default_40: {
        abi: ({
            inputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_40;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_OtcPair.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_OtcPair.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IAddLiquidityParams {
        direction: boolean;
        index: number | BigNumber;
    }
    export interface IApprovedTraderParams {
        param1: boolean;
        param2: number | BigNumber;
        param3: number | BigNumber;
    }
    export interface ICreateOrderParams {
        provider: string;
        direction: boolean;
        allowAll: boolean;
        restrictedPrice: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
    }
    export interface IGetAmountInParams {
        param1: string;
        param2: number | BigNumber;
        param3: string;
        param4: string;
    }
    export interface IGetAmountOutParams {
        tokenIn: string;
        amountIn: number | BigNumber;
        trader: string;
        param4: string;
    }
    export interface IGetApprovedTraderParams {
        direction: boolean;
        offerIndex: number | BigNumber;
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IGetApprovedTraderLengthParams {
        direction: boolean;
        offerIndex: number | BigNumber;
    }
    export interface IGetOffersParams {
        direction: boolean;
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IGetProviderOfferParams {
        provider: string;
        direction: boolean;
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IGetProviderOfferIndexLengthParams {
        provider: string;
        direction: boolean;
    }
    export interface IGetTraderOfferParams {
        trader: string;
        direction: boolean;
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IInitializeParams {
        token0: string;
        token1: string;
    }
    export interface IIsApprovedTraderParams {
        param1: boolean;
        param2: number | BigNumber;
        param3: string;
    }
    export interface ILockOfferParams {
        direction: boolean;
        index: number | BigNumber;
    }
    export interface IOffersParams {
        param1: boolean;
        param2: number | BigNumber;
    }
    export interface IProviderOfferIndexParams {
        param1: boolean;
        param2: string;
        param3: number | BigNumber;
    }
    export interface IRemoveAllLiquidity1DParams {
        provider: string;
        direction: boolean;
    }
    export interface IRemoveLiquidityParams {
        provider: string;
        direction: boolean;
        index: number | BigNumber;
        amountOut: number | BigNumber;
        receivingOut: number | BigNumber;
    }
    export interface ISetApprovedTraderParams {
        direction: boolean;
        offerIndex: number | BigNumber;
        trader: string;
        allocation: number | BigNumber;
    }
    export interface ISetMultipleApprovedTradersParams {
        direction: boolean;
        offerIndex: number | BigNumber;
        trader: string[];
        allocation: (number | BigNumber)[];
    }
    export interface ISwapParams {
        amount0Out: number | BigNumber;
        amount1Out: number | BigNumber;
        to: string;
        trader: string;
        param5: string;
    }
    export interface ITraderAllocationParams {
        param1: boolean;
        param2: number | BigNumber;
        param3: string;
    }
    export interface ITraderOfferParams {
        param1: boolean;
        param2: string;
        param3: number | BigNumber;
    }
    export class OSWAP_OtcPair extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(options?: TransactionOptions): Promise<string>;
        parseAddLiquidityEvent(receipt: TransactionReceipt): OSWAP_OtcPair.AddLiquidityEvent[];
        decodeAddLiquidityEvent(event: Event): OSWAP_OtcPair.AddLiquidityEvent;
        parseApprovedTraderEvent(receipt: TransactionReceipt): OSWAP_OtcPair.ApprovedTraderEvent[];
        decodeApprovedTraderEvent(event: Event): OSWAP_OtcPair.ApprovedTraderEvent;
        parseLockEvent(receipt: TransactionReceipt): OSWAP_OtcPair.LockEvent[];
        decodeLockEvent(event: Event): OSWAP_OtcPair.LockEvent;
        parseNewProviderOfferEvent(receipt: TransactionReceipt): OSWAP_OtcPair.NewProviderOfferEvent[];
        decodeNewProviderOfferEvent(event: Event): OSWAP_OtcPair.NewProviderOfferEvent;
        parseRemoveLiquidityEvent(receipt: TransactionReceipt): OSWAP_OtcPair.RemoveLiquidityEvent[];
        decodeRemoveLiquidityEvent(event: Event): OSWAP_OtcPair.RemoveLiquidityEvent;
        parseSwapEvent(receipt: TransactionReceipt): OSWAP_OtcPair.SwapEvent[];
        decodeSwapEvent(event: Event): OSWAP_OtcPair.SwapEvent;
        parseSwappedOneOfferEvent(receipt: TransactionReceipt): OSWAP_OtcPair.SwappedOneOfferEvent[];
        decodeSwappedOneOfferEvent(event: Event): OSWAP_OtcPair.SwappedOneOfferEvent;
        addLiquidity: {
            (params: IAddLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IAddLiquidityParams, options?: TransactionOptions) => Promise<string>;
        };
        approvedTrader: {
            (params: IApprovedTraderParams, options?: TransactionOptions): Promise<string>;
        };
        configStore: {
            (options?: TransactionOptions): Promise<string>;
        };
        counter: {
            (param1: boolean, options?: TransactionOptions): Promise<BigNumber>;
        };
        createOrder: {
            (params: ICreateOrderParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ICreateOrderParams, options?: TransactionOptions) => Promise<BigNumber>;
            txData: (params: ICreateOrderParams, options?: TransactionOptions) => Promise<string>;
        };
        factory: {
            (options?: TransactionOptions): Promise<string>;
        };
        feeBalance: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        getAmountIn: {
            (params: IGetAmountInParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getAmountOut: {
            (params: IGetAmountOutParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getApprovedTrader: {
            (params: IGetApprovedTraderParams, options?: TransactionOptions): Promise<{
                trader: string[];
                allocation: BigNumber[];
            }>;
        };
        getApprovedTraderLength: {
            (params: IGetApprovedTraderLengthParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getBalances: {
            (options?: TransactionOptions): Promise<{
                param1: BigNumber;
                param2: BigNumber;
                param3: BigNumber;
            }>;
        };
        getLastBalances: {
            (options?: TransactionOptions): Promise<{
                param1: BigNumber;
                param2: BigNumber;
            }>;
        };
        getOffers: {
            (params: IGetOffersParams, options?: TransactionOptions): Promise<{
                index: BigNumber[];
                provider: string[];
                lockedAndAllowAll: boolean[];
                receiving: BigNumber[];
                amountAndPrice: BigNumber[];
                startDateAndExpire: BigNumber[];
            }>;
        };
        getProviderOffer: {
            (params: IGetProviderOfferParams, options?: TransactionOptions): Promise<{
                index: BigNumber[];
                provider: string[];
                lockedAndAllowAll: boolean[];
                receiving: BigNumber[];
                amountAndPrice: BigNumber[];
                startDateAndExpire: BigNumber[];
            }>;
        };
        getProviderOfferIndexLength: {
            (params: IGetProviderOfferIndexLengthParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getTraderOffer: {
            (params: IGetTraderOfferParams, options?: TransactionOptions): Promise<{
                index: BigNumber[];
                provider: string[];
                lockedAndAllowAll: boolean[];
                receiving: BigNumber[];
                amountAndPrice: BigNumber[];
                startDateAndExpire: BigNumber[];
            }>;
        };
        govToken: {
            (options?: TransactionOptions): Promise<string>;
        };
        governance: {
            (options?: TransactionOptions): Promise<string>;
        };
        initialize: {
            (params: IInitializeParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IInitializeParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IInitializeParams, options?: TransactionOptions) => Promise<string>;
        };
        isApprovedTrader: {
            (params: IIsApprovedTraderParams, options?: TransactionOptions): Promise<boolean>;
        };
        isLive: {
            (options?: TransactionOptions): Promise<boolean>;
        };
        lastGovBalance: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        lastToken0Balance: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        lastToken1Balance: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        lockOffer: {
            (params: ILockOfferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ILockOfferParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ILockOfferParams, options?: TransactionOptions) => Promise<string>;
        };
        offers: {
            (params: IOffersParams, options?: TransactionOptions): Promise<{
                provider: string;
                locked: boolean;
                allowAll: boolean;
                originalAmount: BigNumber;
                amount: BigNumber;
                swappedAmount: BigNumber;
                receiving: BigNumber;
                restrictedPrice: BigNumber;
                startDate: BigNumber;
                expire: BigNumber;
            }>;
        };
        protocolFeeBalance0: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        protocolFeeBalance1: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        providerOfferIndex: {
            (params: IProviderOfferIndexParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        redeemProtocolFee: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
            txData: (options?: TransactionOptions) => Promise<string>;
        };
        removeAllLiquidity: {
            (provider: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (provider: string, options?: TransactionOptions) => Promise<{
                amount0: BigNumber;
                amount1: BigNumber;
            }>;
            txData: (provider: string, options?: TransactionOptions) => Promise<string>;
        };
        removeAllLiquidity1D: {
            (params: IRemoveAllLiquidity1DParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveAllLiquidity1DParams, options?: TransactionOptions) => Promise<{
                totalAmount: BigNumber;
                totalReceiving: BigNumber;
            }>;
            txData: (params: IRemoveAllLiquidity1DParams, options?: TransactionOptions) => Promise<string>;
        };
        removeLiquidity: {
            (params: IRemoveLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<string>;
        };
        restrictedLiquidityProvider: {
            (options?: TransactionOptions): Promise<string>;
        };
        scaleDirection: {
            (options?: TransactionOptions): Promise<boolean>;
        };
        scaler: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        setApprovedTrader: {
            (params: ISetApprovedTraderParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISetApprovedTraderParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISetApprovedTraderParams, options?: TransactionOptions) => Promise<string>;
        };
        setLive: {
            (isLive: boolean, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (isLive: boolean, options?: TransactionOptions) => Promise<void>;
            txData: (isLive: boolean, options?: TransactionOptions) => Promise<string>;
        };
        setMultipleApprovedTraders: {
            (params: ISetMultipleApprovedTradersParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISetMultipleApprovedTradersParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISetMultipleApprovedTradersParams, options?: TransactionOptions) => Promise<string>;
        };
        swap: {
            (params: ISwapParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISwapParams, options?: TransactionOptions) => Promise<string>;
        };
        sync: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
            txData: (options?: TransactionOptions) => Promise<string>;
        };
        token0: {
            (options?: TransactionOptions): Promise<string>;
        };
        token1: {
            (options?: TransactionOptions): Promise<string>;
        };
        traderAllocation: {
            (params: ITraderAllocationParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        traderOffer: {
            (params: ITraderOfferParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        whitelistFactory: {
            (options?: TransactionOptions): Promise<string>;
        };
        private assign;
    }
    export module OSWAP_OtcPair {
        interface AddLiquidityEvent {
            provider: string;
            direction: boolean;
            index: BigNumber;
            originalAmount: BigNumber;
            amount: BigNumber;
            newAmountBalance: BigNumber;
            _event: Event;
        }
        interface ApprovedTraderEvent {
            direction: boolean;
            offerIndex: BigNumber;
            trader: string;
            allocation: BigNumber;
            _event: Event;
        }
        interface LockEvent {
            direction: boolean;
            index: BigNumber;
            _event: Event;
        }
        interface NewProviderOfferEvent {
            provider: string;
            direction: boolean;
            index: BigNumber;
            allowAll: boolean;
            restrictedPrice: BigNumber;
            startDate: BigNumber;
            expire: BigNumber;
            _event: Event;
        }
        interface RemoveLiquidityEvent {
            provider: string;
            direction: boolean;
            index: BigNumber;
            amountOut: BigNumber;
            receivingOut: BigNumber;
            newAmountBalance: BigNumber;
            newReceivingBalance: BigNumber;
            _event: Event;
        }
        interface SwapEvent {
            to: string;
            direction: boolean;
            amountIn: BigNumber;
            amountOut: BigNumber;
            tradeFee: BigNumber;
            protocolFee: BigNumber;
            _event: Event;
        }
        interface SwappedOneOfferEvent {
            provider: string;
            direction: boolean;
            index: BigNumber;
            price: BigNumber;
            amountOut: BigNumber;
            amountIn: BigNumber;
            newAmountBalance: BigNumber;
            newReceivingBalance: BigNumber;
            swappedAmountBalance: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_OtcPairCreator.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_OtcPairCreator.json.ts" {
    const _default_41: {
        abi: {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        }[];
        bytecode: string;
    };
    export default _default_41;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_OtcPairCreator.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_OtcPairCreator.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
    export class OSWAP_OtcPairCreator extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(options?: number | BigNumber | TransactionOptions): Promise<string>;
        createPair: {
            (salt: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (salt: string, options?: TransactionOptions) => Promise<string>;
            txData: (salt: string, options?: TransactionOptions) => Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedPair1.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedPair1.json.ts" {
    const _default_42: {
        abi: ({
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            outputs?: undefined;
            stateMutability?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_42;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedPair1.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedPair1.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IAddLiquidityParams {
        direction: boolean;
        index: number | BigNumber;
    }
    export interface IApprovedTraderParams {
        param1: boolean;
        param2: number | BigNumber;
        param3: number | BigNumber;
    }
    export interface ICreateOrderParams {
        provider: string;
        direction: boolean;
        allowAll: boolean;
        restrictedPrice: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
    }
    export interface IGetAmountInParams {
        param1: string;
        param2: number | BigNumber;
        param3: string;
        param4: string;
    }
    export interface IGetAmountOutParams {
        tokenIn: string;
        amountIn: number | BigNumber;
        trader: string;
        param4: string;
    }
    export interface IGetApprovedTraderParams {
        direction: boolean;
        offerIndex: number | BigNumber;
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IGetApprovedTraderLengthParams {
        direction: boolean;
        offerIndex: number | BigNumber;
    }
    export interface IGetOffersParams {
        direction: boolean;
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IGetProviderOfferParams {
        provider: string;
        direction: boolean;
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IGetProviderOfferIndexLengthParams {
        provider: string;
        direction: boolean;
    }
    export interface IGetTraderOfferParams {
        trader: string;
        direction: boolean;
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IInitializeParams {
        token0: string;
        token1: string;
    }
    export interface IIsApprovedTraderParams {
        param1: boolean;
        param2: number | BigNumber;
        param3: string;
    }
    export interface ILockOfferParams {
        direction: boolean;
        index: number | BigNumber;
    }
    export interface IOffersParams {
        param1: boolean;
        param2: number | BigNumber;
    }
    export interface IProviderOfferIndexParams {
        param1: boolean;
        param2: string;
        param3: number | BigNumber;
    }
    export interface IRemoveAllLiquidity1DParams {
        provider: string;
        direction: boolean;
    }
    export interface IRemoveLiquidityParams {
        provider: string;
        direction: boolean;
        index: number | BigNumber;
        amountOut: number | BigNumber;
        receivingOut: number | BigNumber;
    }
    export interface ISetApprovedTraderParams {
        direction: boolean;
        offerIndex: number | BigNumber;
        trader: string;
        allocation: number | BigNumber;
    }
    export interface ISetMultipleApprovedTradersParams {
        direction: boolean;
        offerIndex: number | BigNumber;
        trader: string[];
        allocation: (number | BigNumber)[];
    }
    export interface ISwapParams {
        amount0Out: number | BigNumber;
        amount1Out: number | BigNumber;
        to: string;
        trader: string;
        param5: string;
    }
    export interface ITraderAllocationParams {
        param1: boolean;
        param2: number | BigNumber;
        param3: string;
    }
    export interface ITraderOfferParams {
        param1: boolean;
        param2: string;
        param3: number | BigNumber;
    }
    export class OSWAP_RestrictedPair1 extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(options?: number | BigNumber | TransactionOptions): Promise<string>;
        parseAddLiquidityEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair1.AddLiquidityEvent[];
        decodeAddLiquidityEvent(event: Event): OSWAP_RestrictedPair1.AddLiquidityEvent;
        parseApprovedTraderEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair1.ApprovedTraderEvent[];
        decodeApprovedTraderEvent(event: Event): OSWAP_RestrictedPair1.ApprovedTraderEvent;
        parseLockEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair1.LockEvent[];
        decodeLockEvent(event: Event): OSWAP_RestrictedPair1.LockEvent;
        parseNewProviderOfferEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair1.NewProviderOfferEvent[];
        decodeNewProviderOfferEvent(event: Event): OSWAP_RestrictedPair1.NewProviderOfferEvent;
        parseRemoveLiquidityEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair1.RemoveLiquidityEvent[];
        decodeRemoveLiquidityEvent(event: Event): OSWAP_RestrictedPair1.RemoveLiquidityEvent;
        parseSwapEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair1.SwapEvent[];
        decodeSwapEvent(event: Event): OSWAP_RestrictedPair1.SwapEvent;
        parseSwappedOneOfferEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair1.SwappedOneOfferEvent[];
        decodeSwappedOneOfferEvent(event: Event): OSWAP_RestrictedPair1.SwappedOneOfferEvent;
        addLiquidity: {
            (params: IAddLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IAddLiquidityParams, options?: TransactionOptions) => Promise<string>;
        };
        approvedTrader: {
            (params: IApprovedTraderParams, options?: TransactionOptions): Promise<string>;
        };
        configStore: {
            (options?: TransactionOptions): Promise<string>;
        };
        counter: {
            (param1: boolean, options?: TransactionOptions): Promise<BigNumber>;
        };
        createOrder: {
            (params: ICreateOrderParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ICreateOrderParams, options?: TransactionOptions) => Promise<BigNumber>;
            txData: (params: ICreateOrderParams, options?: TransactionOptions) => Promise<string>;
        };
        factory: {
            (options?: TransactionOptions): Promise<string>;
        };
        feeBalance: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        getAmountIn: {
            (params: IGetAmountInParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getAmountOut: {
            (params: IGetAmountOutParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getApprovedTrader: {
            (params: IGetApprovedTraderParams, options?: TransactionOptions): Promise<{
                trader: string[];
                allocation: BigNumber[];
            }>;
        };
        getApprovedTraderLength: {
            (params: IGetApprovedTraderLengthParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getBalances: {
            (options?: TransactionOptions): Promise<{
                param1: BigNumber;
                param2: BigNumber;
                param3: BigNumber;
            }>;
        };
        getLastBalances: {
            (options?: TransactionOptions): Promise<{
                param1: BigNumber;
                param2: BigNumber;
            }>;
        };
        getOffers: {
            (params: IGetOffersParams, options?: TransactionOptions): Promise<{
                index: BigNumber[];
                provider: string[];
                lockedAndAllowAll: boolean[];
                receiving: BigNumber[];
                amountAndPrice: BigNumber[];
                startDateAndExpire: BigNumber[];
            }>;
        };
        getProviderOffer: {
            (params: IGetProviderOfferParams, options?: TransactionOptions): Promise<{
                index: BigNumber[];
                provider: string[];
                lockedAndAllowAll: boolean[];
                receiving: BigNumber[];
                amountAndPrice: BigNumber[];
                startDateAndExpire: BigNumber[];
            }>;
        };
        getProviderOfferIndexLength: {
            (params: IGetProviderOfferIndexLengthParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getTraderOffer: {
            (params: IGetTraderOfferParams, options?: TransactionOptions): Promise<{
                index: BigNumber[];
                provider: string[];
                lockedAndAllowAll: boolean[];
                receiving: BigNumber[];
                amountAndPrice: BigNumber[];
                startDateAndExpire: BigNumber[];
            }>;
        };
        govToken: {
            (options?: TransactionOptions): Promise<string>;
        };
        governance: {
            (options?: TransactionOptions): Promise<string>;
        };
        initialize: {
            (params: IInitializeParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IInitializeParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IInitializeParams, options?: TransactionOptions) => Promise<string>;
        };
        isApprovedTrader: {
            (params: IIsApprovedTraderParams, options?: TransactionOptions): Promise<boolean>;
        };
        isLive: {
            (options?: TransactionOptions): Promise<boolean>;
        };
        lastGovBalance: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        lastToken0Balance: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        lastToken1Balance: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        lockOffer: {
            (params: ILockOfferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ILockOfferParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ILockOfferParams, options?: TransactionOptions) => Promise<string>;
        };
        offers: {
            (params: IOffersParams, options?: TransactionOptions): Promise<{
                provider: string;
                locked: boolean;
                allowAll: boolean;
                amount: BigNumber;
                receiving: BigNumber;
                restrictedPrice: BigNumber;
                startDate: BigNumber;
                expire: BigNumber;
            }>;
        };
        protocolFeeBalance0: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        protocolFeeBalance1: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        providerOfferIndex: {
            (params: IProviderOfferIndexParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        redeemProtocolFee: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
            txData: (options?: TransactionOptions) => Promise<string>;
        };
        removeAllLiquidity: {
            (provider: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (provider: string, options?: TransactionOptions) => Promise<{
                amount0: BigNumber;
                amount1: BigNumber;
            }>;
            txData: (provider: string, options?: TransactionOptions) => Promise<string>;
        };
        removeAllLiquidity1D: {
            (params: IRemoveAllLiquidity1DParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveAllLiquidity1DParams, options?: TransactionOptions) => Promise<{
                totalAmount: BigNumber;
                totalReceiving: BigNumber;
            }>;
            txData: (params: IRemoveAllLiquidity1DParams, options?: TransactionOptions) => Promise<string>;
        };
        removeLiquidity: {
            (params: IRemoveLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<string>;
        };
        restrictedLiquidityProvider: {
            (options?: TransactionOptions): Promise<string>;
        };
        scaleDirection: {
            (options?: TransactionOptions): Promise<boolean>;
        };
        scaler: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        setApprovedTrader: {
            (params: ISetApprovedTraderParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISetApprovedTraderParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISetApprovedTraderParams, options?: TransactionOptions) => Promise<string>;
        };
        setLive: {
            (isLive: boolean, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (isLive: boolean, options?: TransactionOptions) => Promise<void>;
            txData: (isLive: boolean, options?: TransactionOptions) => Promise<string>;
        };
        setMultipleApprovedTraders: {
            (params: ISetMultipleApprovedTradersParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISetMultipleApprovedTradersParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISetMultipleApprovedTradersParams, options?: TransactionOptions) => Promise<string>;
        };
        swap: {
            (params: ISwapParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISwapParams, options?: TransactionOptions) => Promise<string>;
        };
        sync: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
            txData: (options?: TransactionOptions) => Promise<string>;
        };
        token0: {
            (options?: TransactionOptions): Promise<string>;
        };
        token1: {
            (options?: TransactionOptions): Promise<string>;
        };
        traderAllocation: {
            (params: ITraderAllocationParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        traderOffer: {
            (params: ITraderOfferParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        whitelistFactory: {
            (options?: TransactionOptions): Promise<string>;
        };
        private assign;
    }
    export module OSWAP_RestrictedPair1 {
        interface AddLiquidityEvent {
            provider: string;
            direction: boolean;
            index: BigNumber;
            amount: BigNumber;
            newAmountBalance: BigNumber;
            _event: Event;
        }
        interface ApprovedTraderEvent {
            direction: boolean;
            offerIndex: BigNumber;
            trader: string;
            allocation: BigNumber;
            _event: Event;
        }
        interface LockEvent {
            direction: boolean;
            index: BigNumber;
            _event: Event;
        }
        interface NewProviderOfferEvent {
            provider: string;
            direction: boolean;
            index: BigNumber;
            allowAll: boolean;
            restrictedPrice: BigNumber;
            startDate: BigNumber;
            expire: BigNumber;
            _event: Event;
        }
        interface RemoveLiquidityEvent {
            provider: string;
            direction: boolean;
            index: BigNumber;
            amountOut: BigNumber;
            receivingOut: BigNumber;
            newAmountBalance: BigNumber;
            newReceivingBalance: BigNumber;
            _event: Event;
        }
        interface SwapEvent {
            to: string;
            direction: boolean;
            amountIn: BigNumber;
            amountOut: BigNumber;
            tradeFee: BigNumber;
            protocolFee: BigNumber;
            _event: Event;
        }
        interface SwappedOneOfferEvent {
            provider: string;
            direction: boolean;
            index: BigNumber;
            price: BigNumber;
            amountOut: BigNumber;
            amountIn: BigNumber;
            newAmountBalance: BigNumber;
            newReceivingBalance: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedPair3.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedPair3.json.ts" {
    const _default_43: {
        abi: ({
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            outputs?: undefined;
            stateMutability?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_43;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedPair3.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedPair3.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IAddLiquidityParams {
        direction: boolean;
        index: number | BigNumber;
        feeIn: number | BigNumber;
    }
    export interface IAllocationSetParams {
        param1: boolean;
        param2: number | BigNumber;
        param3: string;
    }
    export interface IApprovedTraderParams {
        param1: boolean;
        param2: number | BigNumber;
        param3: number | BigNumber;
    }
    export interface ICreateOrderParams {
        provider: string;
        direction: boolean;
        allowAll: boolean;
        restrictedPrice: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
    }
    export interface IGetAmountInParams {
        param1: string;
        param2: number | BigNumber;
        param3: string;
        param4: string;
    }
    export interface IGetAmountOutParams {
        tokenIn: string;
        amountIn: number | BigNumber;
        trader: string;
        param4: string;
    }
    export interface IGetApprovedTraderParams {
        direction: boolean;
        offerIndex: number | BigNumber;
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IGetApprovedTraderLengthParams {
        direction: boolean;
        offerIndex: number | BigNumber;
    }
    export interface IGetOffersParams {
        direction: boolean;
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IGetProviderOfferParams {
        provider: string;
        direction: boolean;
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IGetProviderOfferIndexLengthParams {
        provider: string;
        direction: boolean;
    }
    export interface IGetTraderOfferParams {
        trader: string;
        direction: boolean;
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IInitializeParams {
        token0: string;
        token1: string;
    }
    export interface IIsApprovedTraderParams {
        param1: boolean;
        param2: number | BigNumber;
        param3: string;
    }
    export interface ILockOfferParams {
        direction: boolean;
        index: number | BigNumber;
    }
    export interface IOffersParams {
        param1: boolean;
        param2: number | BigNumber;
    }
    export interface IPrepaidFeeBalanceParams {
        param1: boolean;
        param2: number | BigNumber;
    }
    export interface IProviderOfferIndexParams {
        param1: boolean;
        param2: string;
        param3: number | BigNumber;
    }
    export interface IRemoveAllLiquidity1DParams {
        provider: string;
        direction: boolean;
    }
    export interface IRemoveLiquidityParams {
        provider: string;
        direction: boolean;
        index: number | BigNumber;
        amountOut: number | BigNumber;
        receivingOut: number | BigNumber;
        feeOut: number | BigNumber;
    }
    export interface ISetApprovedTraderBySignatureParams {
        direction: boolean;
        offerIndex: number | BigNumber;
        trader: string;
        allocation: number | BigNumber;
        signature: string;
    }
    export interface ISwapParams {
        amount0Out: number | BigNumber;
        amount1Out: number | BigNumber;
        to: string;
        trader: string;
        param5: string;
    }
    export interface ITraderAllocationParams {
        param1: boolean;
        param2: number | BigNumber;
        param3: string;
    }
    export interface ITraderOfferParams {
        param1: boolean;
        param2: string;
        param3: number | BigNumber;
    }
    export class OSWAP_RestrictedPair3 extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(options?: number | BigNumber | TransactionOptions): Promise<string>;
        parseAddLiquidityEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair3.AddLiquidityEvent[];
        decodeAddLiquidityEvent(event: Event): OSWAP_RestrictedPair3.AddLiquidityEvent;
        parseApprovedTraderEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair3.ApprovedTraderEvent[];
        decodeApprovedTraderEvent(event: Event): OSWAP_RestrictedPair3.ApprovedTraderEvent;
        parseLockEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair3.LockEvent[];
        decodeLockEvent(event: Event): OSWAP_RestrictedPair3.LockEvent;
        parseNewProviderOfferEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair3.NewProviderOfferEvent[];
        decodeNewProviderOfferEvent(event: Event): OSWAP_RestrictedPair3.NewProviderOfferEvent;
        parseRemoveLiquidityEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair3.RemoveLiquidityEvent[];
        decodeRemoveLiquidityEvent(event: Event): OSWAP_RestrictedPair3.RemoveLiquidityEvent;
        parseSwapEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair3.SwapEvent[];
        decodeSwapEvent(event: Event): OSWAP_RestrictedPair3.SwapEvent;
        parseSwappedOneOfferEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair3.SwappedOneOfferEvent[];
        decodeSwappedOneOfferEvent(event: Event): OSWAP_RestrictedPair3.SwappedOneOfferEvent;
        addLiquidity: {
            (params: IAddLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IAddLiquidityParams, options?: TransactionOptions) => Promise<string>;
        };
        allocationSet: {
            (params: IAllocationSetParams, options?: TransactionOptions): Promise<boolean>;
        };
        approvedTrader: {
            (params: IApprovedTraderParams, options?: TransactionOptions): Promise<string>;
        };
        configStore: {
            (options?: TransactionOptions): Promise<string>;
        };
        counter: {
            (param1: boolean, options?: TransactionOptions): Promise<BigNumber>;
        };
        createOrder: {
            (params: ICreateOrderParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ICreateOrderParams, options?: TransactionOptions) => Promise<BigNumber>;
            txData: (params: ICreateOrderParams, options?: TransactionOptions) => Promise<string>;
        };
        factory: {
            (options?: TransactionOptions): Promise<string>;
        };
        feeBalance: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        getAmountIn: {
            (params: IGetAmountInParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getAmountOut: {
            (params: IGetAmountOutParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getApprovedTrader: {
            (params: IGetApprovedTraderParams, options?: TransactionOptions): Promise<{
                trader: string[];
                allocation: BigNumber[];
            }>;
        };
        getApprovedTraderLength: {
            (params: IGetApprovedTraderLengthParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getBalances: {
            (options?: TransactionOptions): Promise<{
                param1: BigNumber;
                param2: BigNumber;
                param3: BigNumber;
            }>;
        };
        getLastBalances: {
            (options?: TransactionOptions): Promise<{
                param1: BigNumber;
                param2: BigNumber;
            }>;
        };
        getOffers: {
            (params: IGetOffersParams, options?: TransactionOptions): Promise<{
                index: BigNumber[];
                provider: string[];
                lockedAndAllowAll: boolean[];
                receiving: BigNumber[];
                amountAndPrice: BigNumber[];
                startDateAndExpire: BigNumber[];
            }>;
        };
        getProviderOffer: {
            (params: IGetProviderOfferParams, options?: TransactionOptions): Promise<{
                index: BigNumber[];
                provider: string[];
                lockedAndAllowAll: boolean[];
                receiving: BigNumber[];
                amountAndPrice: BigNumber[];
                startDateAndExpire: BigNumber[];
            }>;
        };
        getProviderOfferIndexLength: {
            (params: IGetProviderOfferIndexLengthParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getTraderOffer: {
            (params: IGetTraderOfferParams, options?: TransactionOptions): Promise<{
                index: BigNumber[];
                provider: string[];
                lockedAndAllowAll: boolean[];
                receiving: BigNumber[];
                amountAndPrice: BigNumber[];
                startDateAndExpire: BigNumber[];
            }>;
        };
        govToken: {
            (options?: TransactionOptions): Promise<string>;
        };
        governance: {
            (options?: TransactionOptions): Promise<string>;
        };
        initialize: {
            (params: IInitializeParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IInitializeParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IInitializeParams, options?: TransactionOptions) => Promise<string>;
        };
        isApprovedTrader: {
            (params: IIsApprovedTraderParams, options?: TransactionOptions): Promise<boolean>;
        };
        isLive: {
            (options?: TransactionOptions): Promise<boolean>;
        };
        lastGovBalance: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        lastToken0Balance: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        lastToken1Balance: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        lockOffer: {
            (params: ILockOfferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ILockOfferParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ILockOfferParams, options?: TransactionOptions) => Promise<string>;
        };
        offers: {
            (params: IOffersParams, options?: TransactionOptions): Promise<{
                provider: string;
                locked: boolean;
                allowAll: boolean;
                amount: BigNumber;
                receiving: BigNumber;
                restrictedPrice: BigNumber;
                startDate: BigNumber;
                expire: BigNumber;
            }>;
        };
        prepaidFeeBalance: {
            (params: IPrepaidFeeBalanceParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        protocolFeeBalance0: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        protocolFeeBalance1: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        providerOfferIndex: {
            (params: IProviderOfferIndexParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        redeemProtocolFee: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
            txData: (options?: TransactionOptions) => Promise<string>;
        };
        removeAllLiquidity: {
            (provider: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (provider: string, options?: TransactionOptions) => Promise<{
                amount0: BigNumber;
                amount1: BigNumber;
                feeOut: BigNumber;
            }>;
            txData: (provider: string, options?: TransactionOptions) => Promise<string>;
        };
        removeAllLiquidity1D: {
            (params: IRemoveAllLiquidity1DParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveAllLiquidity1DParams, options?: TransactionOptions) => Promise<{
                totalAmount: BigNumber;
                totalReceiving: BigNumber;
                totalRemainingFee: BigNumber;
            }>;
            txData: (params: IRemoveAllLiquidity1DParams, options?: TransactionOptions) => Promise<string>;
        };
        removeLiquidity: {
            (params: IRemoveLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<string>;
        };
        restrictedLiquidityProvider: {
            (options?: TransactionOptions): Promise<string>;
        };
        scaleDirection: {
            (options?: TransactionOptions): Promise<boolean>;
        };
        scaler: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        setApprovedTraderBySignature: {
            (params: ISetApprovedTraderBySignatureParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISetApprovedTraderBySignatureParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISetApprovedTraderBySignatureParams, options?: TransactionOptions) => Promise<string>;
        };
        setLive: {
            (isLive: boolean, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (isLive: boolean, options?: TransactionOptions) => Promise<void>;
            txData: (isLive: boolean, options?: TransactionOptions) => Promise<string>;
        };
        swap: {
            (params: ISwapParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISwapParams, options?: TransactionOptions) => Promise<string>;
        };
        sync: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
            txData: (options?: TransactionOptions) => Promise<string>;
        };
        token0: {
            (options?: TransactionOptions): Promise<string>;
        };
        token1: {
            (options?: TransactionOptions): Promise<string>;
        };
        traderAllocation: {
            (params: ITraderAllocationParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        traderOffer: {
            (params: ITraderOfferParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        whitelistFactory: {
            (options?: TransactionOptions): Promise<string>;
        };
        private assign;
    }
    export module OSWAP_RestrictedPair3 {
        interface AddLiquidityEvent {
            provider: string;
            direction: boolean;
            index: BigNumber;
            amount: BigNumber;
            newAmountBalance: BigNumber;
            feeIn: BigNumber;
            newFeeBalance: BigNumber;
            _event: Event;
        }
        interface ApprovedTraderEvent {
            direction: boolean;
            offerIndex: BigNumber;
            trader: string;
            allocation: BigNumber;
            _event: Event;
        }
        interface LockEvent {
            direction: boolean;
            index: BigNumber;
            _event: Event;
        }
        interface NewProviderOfferEvent {
            provider: string;
            direction: boolean;
            index: BigNumber;
            allowAll: boolean;
            restrictedPrice: BigNumber;
            startDate: BigNumber;
            expire: BigNumber;
            _event: Event;
        }
        interface RemoveLiquidityEvent {
            provider: string;
            direction: boolean;
            index: BigNumber;
            amountOut: BigNumber;
            receivingOut: BigNumber;
            feeOut: BigNumber;
            newAmountBalance: BigNumber;
            newReceivingBalance: BigNumber;
            newFeeBalance: BigNumber;
            _event: Event;
        }
        interface SwapEvent {
            to: string;
            direction: boolean;
            amountIn: BigNumber;
            amountOut: BigNumber;
            tradeFee: BigNumber;
            protocolFee: BigNumber;
            _event: Event;
        }
        interface SwappedOneOfferEvent {
            provider: string;
            direction: boolean;
            index: BigNumber;
            price: BigNumber;
            amountOut: BigNumber;
            amountIn: BigNumber;
            newAmountBalance: BigNumber;
            newReceivingBalance: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedPair4.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedPair4.json.ts" {
    const _default_44: {
        abi: ({
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            outputs?: undefined;
            stateMutability?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_44;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedPair4.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedPair4.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IAddLiquidityParams {
        direction: boolean;
        index: number | BigNumber;
        feeIn: number | BigNumber;
    }
    export interface IApprovedTraderParams {
        param1: boolean;
        param2: number | BigNumber;
        param3: number | BigNumber;
    }
    export interface ICreateOrderParams {
        provider: string;
        direction: boolean;
        allowAll: boolean;
        restrictedPrice: number | BigNumber;
        startDate: number | BigNumber;
        expire: number | BigNumber;
    }
    export interface IGetAmountInParams {
        param1: string;
        param2: number | BigNumber;
        param3: string;
        param4: string;
    }
    export interface IGetAmountOutParams {
        tokenIn: string;
        amountIn: number | BigNumber;
        trader: string;
        param4: string;
    }
    export interface IGetApprovedTraderParams {
        direction: boolean;
        offerIndex: number | BigNumber;
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IGetApprovedTraderLengthParams {
        direction: boolean;
        offerIndex: number | BigNumber;
    }
    export interface IGetOffersParams {
        direction: boolean;
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IGetProviderOfferParams {
        provider: string;
        direction: boolean;
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IGetProviderOfferIndexLengthParams {
        provider: string;
        direction: boolean;
    }
    export interface IGetTraderOfferParams {
        trader: string;
        direction: boolean;
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IInitializeParams {
        token0: string;
        token1: string;
    }
    export interface IIsApprovedTraderParams {
        param1: boolean;
        param2: number | BigNumber;
        param3: string;
    }
    export interface ILastTraderAllocationParams {
        param1: boolean;
        param2: number | BigNumber;
        param3: string;
    }
    export interface ILockOfferParams {
        direction: boolean;
        index: number | BigNumber;
    }
    export interface IOfferAllowlistIpfsCidParams {
        param1: boolean;
        param2: number | BigNumber;
    }
    export interface IOfferMerkleRootParams {
        param1: boolean;
        param2: number | BigNumber;
    }
    export interface IOffersParams {
        param1: boolean;
        param2: number | BigNumber;
    }
    export interface IPrepaidFeeBalanceParams {
        param1: boolean;
        param2: number | BigNumber;
    }
    export interface IProviderOfferIndexParams {
        param1: boolean;
        param2: string;
        param3: number | BigNumber;
    }
    export interface IRemoveAllLiquidity1DParams {
        provider: string;
        direction: boolean;
    }
    export interface IRemoveLiquidityParams {
        provider: string;
        direction: boolean;
        index: number | BigNumber;
        amountOut: number | BigNumber;
        receivingOut: number | BigNumber;
        feeOut: number | BigNumber;
    }
    export interface ISetApprovedTraderByMerkleProofParams {
        direction: boolean;
        offerIndex: number | BigNumber;
        trader: string;
        allocation: number | BigNumber;
        proof: string[];
    }
    export interface ISetMerkleRootParams {
        direction: boolean;
        index: number | BigNumber;
        merkleRoot: string;
        ipfsCid: string;
    }
    export interface ISwapParams {
        amount0Out: number | BigNumber;
        amount1Out: number | BigNumber;
        to: string;
        trader: string;
        param5: string;
    }
    export interface ITraderAllocationParams {
        param1: boolean;
        param2: number | BigNumber;
        param3: string;
    }
    export interface ITraderOfferParams {
        param1: boolean;
        param2: string;
        param3: number | BigNumber;
    }
    export class OSWAP_RestrictedPair4 extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(options?: number | BigNumber | TransactionOptions): Promise<string>;
        parseAddLiquidityEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair4.AddLiquidityEvent[];
        decodeAddLiquidityEvent(event: Event): OSWAP_RestrictedPair4.AddLiquidityEvent;
        parseApprovedTraderEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair4.ApprovedTraderEvent[];
        decodeApprovedTraderEvent(event: Event): OSWAP_RestrictedPair4.ApprovedTraderEvent;
        parseLockEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair4.LockEvent[];
        decodeLockEvent(event: Event): OSWAP_RestrictedPair4.LockEvent;
        parseMerkleRootEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair4.MerkleRootEvent[];
        decodeMerkleRootEvent(event: Event): OSWAP_RestrictedPair4.MerkleRootEvent;
        parseNewProviderOfferEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair4.NewProviderOfferEvent[];
        decodeNewProviderOfferEvent(event: Event): OSWAP_RestrictedPair4.NewProviderOfferEvent;
        parseRemoveLiquidityEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair4.RemoveLiquidityEvent[];
        decodeRemoveLiquidityEvent(event: Event): OSWAP_RestrictedPair4.RemoveLiquidityEvent;
        parseSwapEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair4.SwapEvent[];
        decodeSwapEvent(event: Event): OSWAP_RestrictedPair4.SwapEvent;
        parseSwappedOneOfferEvent(receipt: TransactionReceipt): OSWAP_RestrictedPair4.SwappedOneOfferEvent[];
        decodeSwappedOneOfferEvent(event: Event): OSWAP_RestrictedPair4.SwappedOneOfferEvent;
        addLiquidity: {
            (params: IAddLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IAddLiquidityParams, options?: TransactionOptions) => Promise<string>;
        };
        approvedTrader: {
            (params: IApprovedTraderParams, options?: TransactionOptions): Promise<string>;
        };
        configStore: {
            (options?: TransactionOptions): Promise<string>;
        };
        counter: {
            (param1: boolean, options?: TransactionOptions): Promise<BigNumber>;
        };
        createOrder: {
            (params: ICreateOrderParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ICreateOrderParams, options?: TransactionOptions) => Promise<BigNumber>;
            txData: (params: ICreateOrderParams, options?: TransactionOptions) => Promise<string>;
        };
        factory: {
            (options?: TransactionOptions): Promise<string>;
        };
        feeBalance: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        getAmountIn: {
            (params: IGetAmountInParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getAmountOut: {
            (params: IGetAmountOutParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getApprovedTrader: {
            (params: IGetApprovedTraderParams, options?: TransactionOptions): Promise<{
                trader: string[];
                allocation: BigNumber[];
            }>;
        };
        getApprovedTraderLength: {
            (params: IGetApprovedTraderLengthParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getBalances: {
            (options?: TransactionOptions): Promise<{
                param1: BigNumber;
                param2: BigNumber;
                param3: BigNumber;
            }>;
        };
        getLastBalances: {
            (options?: TransactionOptions): Promise<{
                param1: BigNumber;
                param2: BigNumber;
            }>;
        };
        getOffers: {
            (params: IGetOffersParams, options?: TransactionOptions): Promise<{
                index: BigNumber[];
                provider: string[];
                lockedAndAllowAll: boolean[];
                receiving: BigNumber[];
                amountAndPrice: BigNumber[];
                startDateAndExpire: BigNumber[];
            }>;
        };
        getProviderOffer: {
            (params: IGetProviderOfferParams, options?: TransactionOptions): Promise<{
                index: BigNumber[];
                provider: string[];
                lockedAndAllowAll: boolean[];
                receiving: BigNumber[];
                amountAndPrice: BigNumber[];
                startDateAndExpire: BigNumber[];
            }>;
        };
        getProviderOfferIndexLength: {
            (params: IGetProviderOfferIndexLengthParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getTraderOffer: {
            (params: IGetTraderOfferParams, options?: TransactionOptions): Promise<{
                index: BigNumber[];
                provider: string[];
                lockedAndAllowAll: boolean[];
                receiving: BigNumber[];
                amountAndPrice: BigNumber[];
                startDateAndExpire: BigNumber[];
            }>;
        };
        govToken: {
            (options?: TransactionOptions): Promise<string>;
        };
        governance: {
            (options?: TransactionOptions): Promise<string>;
        };
        initialize: {
            (params: IInitializeParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IInitializeParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IInitializeParams, options?: TransactionOptions) => Promise<string>;
        };
        isApprovedTrader: {
            (params: IIsApprovedTraderParams, options?: TransactionOptions): Promise<boolean>;
        };
        isLive: {
            (options?: TransactionOptions): Promise<boolean>;
        };
        lastGovBalance: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        lastToken0Balance: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        lastToken1Balance: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        lastTraderAllocation: {
            (params: ILastTraderAllocationParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        lockOffer: {
            (params: ILockOfferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ILockOfferParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ILockOfferParams, options?: TransactionOptions) => Promise<string>;
        };
        offerAllowlistIpfsCid: {
            (params: IOfferAllowlistIpfsCidParams, options?: TransactionOptions): Promise<string>;
        };
        offerMerkleRoot: {
            (params: IOfferMerkleRootParams, options?: TransactionOptions): Promise<string>;
        };
        offers: {
            (params: IOffersParams, options?: TransactionOptions): Promise<{
                provider: string;
                locked: boolean;
                allowAll: boolean;
                amount: BigNumber;
                receiving: BigNumber;
                restrictedPrice: BigNumber;
                startDate: BigNumber;
                expire: BigNumber;
            }>;
        };
        prepaidFeeBalance: {
            (params: IPrepaidFeeBalanceParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        protocolFeeBalance0: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        protocolFeeBalance1: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        providerOfferIndex: {
            (params: IProviderOfferIndexParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        redeemProtocolFee: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
            txData: (options?: TransactionOptions) => Promise<string>;
        };
        removeAllLiquidity: {
            (provider: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (provider: string, options?: TransactionOptions) => Promise<{
                amount0: BigNumber;
                amount1: BigNumber;
                feeOut: BigNumber;
            }>;
            txData: (provider: string, options?: TransactionOptions) => Promise<string>;
        };
        removeAllLiquidity1D: {
            (params: IRemoveAllLiquidity1DParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveAllLiquidity1DParams, options?: TransactionOptions) => Promise<{
                totalAmount: BigNumber;
                totalReceiving: BigNumber;
                totalRemainingFee: BigNumber;
            }>;
            txData: (params: IRemoveAllLiquidity1DParams, options?: TransactionOptions) => Promise<string>;
        };
        removeLiquidity: {
            (params: IRemoveLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<string>;
        };
        restrictedLiquidityProvider: {
            (options?: TransactionOptions): Promise<string>;
        };
        scaleDirection: {
            (options?: TransactionOptions): Promise<boolean>;
        };
        scaler: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        setApprovedTraderByMerkleProof: {
            (params: ISetApprovedTraderByMerkleProofParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISetApprovedTraderByMerkleProofParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISetApprovedTraderByMerkleProofParams, options?: TransactionOptions) => Promise<string>;
        };
        setLive: {
            (isLive: boolean, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (isLive: boolean, options?: TransactionOptions) => Promise<void>;
            txData: (isLive: boolean, options?: TransactionOptions) => Promise<string>;
        };
        setMerkleRoot: {
            (params: ISetMerkleRootParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISetMerkleRootParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISetMerkleRootParams, options?: TransactionOptions) => Promise<string>;
        };
        swap: {
            (params: ISwapParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISwapParams, options?: TransactionOptions) => Promise<string>;
        };
        sync: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
            txData: (options?: TransactionOptions) => Promise<string>;
        };
        token0: {
            (options?: TransactionOptions): Promise<string>;
        };
        token1: {
            (options?: TransactionOptions): Promise<string>;
        };
        traderAllocation: {
            (params: ITraderAllocationParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        traderOffer: {
            (params: ITraderOfferParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        whitelistFactory: {
            (options?: TransactionOptions): Promise<string>;
        };
        private assign;
    }
    export module OSWAP_RestrictedPair4 {
        interface AddLiquidityEvent {
            provider: string;
            direction: boolean;
            index: BigNumber;
            amount: BigNumber;
            newAmountBalance: BigNumber;
            feeIn: BigNumber;
            newFeeBalance: BigNumber;
            _event: Event;
        }
        interface ApprovedTraderEvent {
            direction: boolean;
            offerIndex: BigNumber;
            trader: string;
            allocation: BigNumber;
            _event: Event;
        }
        interface LockEvent {
            direction: boolean;
            index: BigNumber;
            _event: Event;
        }
        interface MerkleRootEvent {
            provider: string;
            direction: boolean;
            index: BigNumber;
            merkleRoot: string;
            ipfsCid: string;
            _event: Event;
        }
        interface NewProviderOfferEvent {
            provider: string;
            direction: boolean;
            index: BigNumber;
            allowAll: boolean;
            restrictedPrice: BigNumber;
            startDate: BigNumber;
            expire: BigNumber;
            _event: Event;
        }
        interface RemoveLiquidityEvent {
            provider: string;
            direction: boolean;
            index: BigNumber;
            amountOut: BigNumber;
            receivingOut: BigNumber;
            feeOut: BigNumber;
            newAmountBalance: BigNumber;
            newReceivingBalance: BigNumber;
            newFeeBalance: BigNumber;
            _event: Event;
        }
        interface SwapEvent {
            to: string;
            direction: boolean;
            amountIn: BigNumber;
            amountOut: BigNumber;
            tradeFee: BigNumber;
            protocolFee: BigNumber;
            _event: Event;
        }
        interface SwappedOneOfferEvent {
            provider: string;
            direction: boolean;
            index: BigNumber;
            price: BigNumber;
            amountOut: BigNumber;
            amountIn: BigNumber;
            newAmountBalance: BigNumber;
            newReceivingBalance: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedPairCreator1.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedPairCreator1.json.ts" {
    const _default_45: {
        abi: {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        }[];
        bytecode: string;
    };
    export default _default_45;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedPairCreator1.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedPairCreator1.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
    export class OSWAP_RestrictedPairCreator1 extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(options?: number | BigNumber | TransactionOptions): Promise<string>;
        createPair: {
            (salt: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (salt: string, options?: TransactionOptions) => Promise<string>;
            txData: (salt: string, options?: TransactionOptions) => Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedPairCreator4.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedPairCreator4.json.ts" {
    const _default_46: {
        abi: {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        }[];
        bytecode: string;
    };
    export default _default_46;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedPairCreator4.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedPairCreator4.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
    export class OSWAP_RestrictedPairCreator4 extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(options?: number | BigNumber | TransactionOptions): Promise<string>;
        createPair: {
            (salt: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (salt: string, options?: TransactionOptions) => Promise<string>;
            txData: (salt: string, options?: TransactionOptions) => Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/router/OSWAP_HybridRouter2.json.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/router/OSWAP_HybridRouter2.json.ts" {
    const _default_47: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_47;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/router/OSWAP_HybridRouter2.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/router/OSWAP_HybridRouter2.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        registry: string;
        WETH: string;
    }
    export interface IGetAmountsInEndsWithParams {
        amountOut: number | BigNumber;
        pair: string[];
        tokenOut: string;
        data: string;
    }
    export interface IGetAmountsInStartsWithParams {
        amountOut: number | BigNumber;
        pair: string[];
        tokenIn: string;
        data: string;
    }
    export interface IGetAmountsOutEndsWithParams {
        amountIn: number | BigNumber;
        pair: string[];
        tokenOut: string;
        data: string;
    }
    export interface IGetAmountsOutStartsWithParams {
        amountIn: number | BigNumber;
        pair: string[];
        tokenIn: string;
        data: string;
    }
    export interface IGetPathInParams {
        pair: string[];
        tokenIn: string;
    }
    export interface IGetPathOutParams {
        pair: string[];
        tokenOut: string;
    }
    export interface ISwapETHForExactTokensParams {
        amountOut: number | BigNumber;
        pair: string[];
        to: string;
        deadline: number | BigNumber;
        data: string;
    }
    export interface ISwapExactETHForTokensParams {
        amountOutMin: number | BigNumber;
        pair: string[];
        to: string;
        deadline: number | BigNumber;
        data: string;
    }
    export interface ISwapExactETHForTokensSupportingFeeOnTransferTokensParams {
        amountOutMin: number | BigNumber;
        pair: string[];
        to: string;
        deadline: number | BigNumber;
        data: string;
    }
    export interface ISwapExactTokensForETHParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        pair: string[];
        to: string;
        deadline: number | BigNumber;
        data: string;
    }
    export interface ISwapExactTokensForETHSupportingFeeOnTransferTokensParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        pair: string[];
        to: string;
        deadline: number | BigNumber;
        data: string;
    }
    export interface ISwapExactTokensForTokensParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        pair: string[];
        tokenIn: string;
        to: string;
        deadline: number | BigNumber;
        data: string;
    }
    export interface ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        pair: string[];
        tokenIn: string;
        to: string;
        deadline: number | BigNumber;
        data: string;
    }
    export interface ISwapTokensForExactETHParams {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        pair: string[];
        to: string;
        deadline: number | BigNumber;
        data: string;
    }
    export interface ISwapTokensForExactTokensParams {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        pair: string[];
        tokenOut: string;
        to: string;
        deadline: number | BigNumber;
        data: string;
    }
    export class OSWAP_HybridRouter2 extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        WETH: {
            (options?: TransactionOptions): Promise<string>;
        };
        getAmountsInEndsWith: {
            (params: IGetAmountsInEndsWithParams, options?: TransactionOptions): Promise<BigNumber[]>;
        };
        getAmountsInStartsWith: {
            (params: IGetAmountsInStartsWithParams, options?: TransactionOptions): Promise<BigNumber[]>;
        };
        getAmountsOutEndsWith: {
            (params: IGetAmountsOutEndsWithParams, options?: TransactionOptions): Promise<BigNumber[]>;
        };
        getAmountsOutStartsWith: {
            (params: IGetAmountsOutStartsWithParams, options?: TransactionOptions): Promise<BigNumber[]>;
        };
        getPathIn: {
            (params: IGetPathInParams, options?: TransactionOptions): Promise<string[]>;
        };
        getPathOut: {
            (params: IGetPathOutParams, options?: TransactionOptions): Promise<string[]>;
        };
        registry: {
            (options?: TransactionOptions): Promise<string>;
        };
        swapETHForExactTokens: {
            (params: ISwapETHForExactTokensParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapETHForExactTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<{
                path: string[];
                amounts: BigNumber[];
            }>;
            txData: (params: ISwapETHForExactTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        swapExactETHForTokens: {
            (params: ISwapExactETHForTokensParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactETHForTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<{
                path: string[];
                amounts: BigNumber[];
            }>;
            txData: (params: ISwapExactETHForTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        swapExactETHForTokensSupportingFeeOnTransferTokens: {
            (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        swapExactTokensForETH: {
            (params: ISwapExactTokensForETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForETHParams, options?: TransactionOptions) => Promise<{
                path: string[];
                amounts: BigNumber[];
            }>;
            txData: (params: ISwapExactTokensForETHParams, options?: TransactionOptions) => Promise<string>;
        };
        swapExactTokensForETHSupportingFeeOnTransferTokens: {
            (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<string>;
        };
        swapExactTokensForTokens: {
            (params: ISwapExactTokensForTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForTokensParams, options?: TransactionOptions) => Promise<{
                path: string[];
                amounts: BigNumber[];
            }>;
            txData: (params: ISwapExactTokensForTokensParams, options?: TransactionOptions) => Promise<string>;
        };
        swapExactTokensForTokensSupportingFeeOnTransferTokens: {
            (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<string>;
        };
        swapTokensForExactETH: {
            (params: ISwapTokensForExactETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapTokensForExactETHParams, options?: TransactionOptions) => Promise<{
                path: string[];
                amounts: BigNumber[];
            }>;
            txData: (params: ISwapTokensForExactETHParams, options?: TransactionOptions) => Promise<string>;
        };
        swapTokensForExactTokens: {
            (params: ISwapTokensForExactTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapTokensForExactTokensParams, options?: TransactionOptions) => Promise<{
                path: string[];
                amounts: BigNumber[];
            }>;
            txData: (params: ISwapTokensForExactTokensParams, options?: TransactionOptions) => Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/contracts/index.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/index.ts" {
    export { OpenSwap } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/OpenSwap.ts";
    export { OSWAP_ERC20 } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/amm/OSWAP_ERC20.ts";
    export { OSWAP_Factory } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/amm/OSWAP_Factory.ts";
    export { OSWAP_Pair } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/amm/OSWAP_Pair.ts";
    export { OSWAP_PairCreator } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/amm/OSWAP_PairCreator.ts";
    export { OSWAP_Router } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/amm/OSWAP_Router.ts";
    export { OSWAP_VotingExecutor1 } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/amm/OSWAP_VotingExecutor1.ts";
    export { OSWAP_FactoryBase } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/commons/OSWAP_FactoryBase.ts";
    export { OSWAP_PausableFactory } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/commons/OSWAP_PausableFactory.ts";
    export { OSWAP_PausablePair } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/commons/OSWAP_PausablePair.ts";
    export { OAXDEX_Administrator } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/gov/OAXDEX_Administrator.ts";
    export { OAXDEX_Governance } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/gov/OAXDEX_Governance.ts";
    export { OAXDEX_VotingContract } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/gov/OAXDEX_VotingContract.ts";
    export { OAXDEX_VotingExecutor } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/gov/OAXDEX_VotingExecutor.ts";
    export { OAXDEX_VotingRegistry } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/gov/OAXDEX_VotingRegistry.ts";
    export { ERC20 } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/libraries/ERC20.ts";
    export { OSWAP_CertiKSecurityOracle } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/oracle/OSWAP_CertiKSecurityOracle.ts";
    export { OSWAP_OracleFactory } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/oracle/OSWAP_OracleFactory.ts";
    export { OSWAP_OracleLiquidityProvider } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/oracle/OSWAP_OracleLiquidityProvider.ts";
    export { OSWAP_OraclePair } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/oracle/OSWAP_OraclePair.ts";
    export { OSWAP_OraclePairCreator } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/oracle/OSWAP_OraclePairCreator.ts";
    export { OSWAP_VotingExecutor2 } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/oracle/OSWAP_VotingExecutor2.ts";
    export { OSWAP_RangeFactory } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/range/OSWAP_RangeFactory.ts";
    export { OSWAP_RangeLiquidityProvider } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/range/OSWAP_RangeLiquidityProvider.ts";
    export { OSWAP_RangePair } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/range/OSWAP_RangePair.ts";
    export { OSWAP_RangePairCreator } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/range/OSWAP_RangePairCreator.ts";
    export { OSWAP_VotingExecutor3 } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/range/OSWAP_VotingExecutor3.ts";
    export { OSWAP_ConfigStore } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_ConfigStore.ts";
    export { OSWAP_OtcLiquidityProvider } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_OtcLiquidityProvider.ts";
    export { OSWAP_OtcPairOracle } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_OtcPairOracle.ts";
    export { OSWAP_RestrictedFactory } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedFactory.ts";
    export { OSWAP_RestrictedLiquidityProvider1 } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedLiquidityProvider1.ts";
    export { OSWAP_RestrictedLiquidityProvider3 } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedLiquidityProvider3.ts";
    export { OSWAP_RestrictedLiquidityProvider4 } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedLiquidityProvider4.ts";
    export { OSWAP_RestrictedPair } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedPair.ts";
    export { OSWAP_RestrictedPairOracle } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedPairOracle.ts";
    export { OSWAP_VotingExecutor4 } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_VotingExecutor4.ts";
    export { OSWAP_HybridRouter } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/router/OSWAP_HybridRouter.ts";
    export { OSWAP_HybridRouterRegistry } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/router/OSWAP_HybridRouterRegistry.ts";
    export { OSWAP_OracleRouter } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/router/OSWAP_OracleRouter.ts";
    export { OSWAP_OtcPair } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_OtcPair.ts";
    export { OSWAP_OtcPairCreator } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_OtcPairCreator.ts";
    export { OSWAP_RestrictedPair1 } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedPair1.ts";
    export { OSWAP_RestrictedPair3 } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedPair3.ts";
    export { OSWAP_RestrictedPair4 } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedPair4.ts";
    export { OSWAP_RestrictedPairCreator1 } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedPairCreator1.ts";
    export { OSWAP_RestrictedPairCreator4 } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/restricted/OSWAP_RestrictedPairCreator4.ts";
    export { OSWAP_HybridRouter2 } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/router/OSWAP_HybridRouter2.ts";
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/OpenSwap.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/OpenSwap.ts" {
    import { IWallet, BigNumber } from "@ijstech/eth-contract";
    import { OpenSwap as OpenSwapContract } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/index.ts";
    export class OpenSwap {
        wallet: IWallet;
        address: string;
        _oswap: OpenSwapContract;
        constructor(wallet: IWallet, address?: string);
        deploy(params: {
            minter: string;
            initSupplyTo: string;
            initSupply: number | BigNumber;
            totalSupply: number | BigNumber;
        }): Promise<string>;
        allowance(params: {
            owner: string;
            spender: string;
        }): Promise<BigNumber>;
        approve(params: {
            spender: string;
            amount: number | BigNumber;
        }): Promise<OpenSwapContract.ApprovalEvent>;
        balanceOf(account: string): Promise<BigNumber>;
        get cap(): Promise<BigNumber>;
        get decimals(): Promise<number>;
        decreaseAllowance(params: {
            spender: string;
            subtractedValue: number | BigNumber;
        }): Promise<OpenSwapContract.ApprovalEvent>;
        increaseAllowance(params: {
            spender: string;
            addedValue: number | BigNumber;
        }): Promise<OpenSwapContract.ApprovalEvent>;
        mint(params: {
            address: string;
            amount: number | BigNumber;
        }): Promise<OpenSwapContract.TransferEvent>;
        get minter(): Promise<string>;
        get name(): Promise<string>;
        get symbol(): Promise<string>;
        get totalSupply(): Promise<BigNumber>;
        transfer(params: {
            address: string;
            amount: number | BigNumber;
        }): Promise<OpenSwapContract.TransferEvent>;
        transferFrom(params: {
            sender: string;
            recipient: string;
            amount: number | BigNumber;
        }): Promise<{
            transfer: OpenSwapContract.TransferEvent;
            approval: OpenSwapContract.ApprovalEvent;
        }>;
    }
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/deploy.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/deploy.ts" {
    import { IWallet, BigNumber } from "@ijstech/eth-contract";
    import { OSWAP_Factory, OSWAP_PairCreator, OSWAP_Router, OSWAP_VotingExecutor1, OAXDEX_Governance, OAXDEX_VotingExecutor, OAXDEX_Administrator, OAXDEX_VotingRegistry, OSWAP_OraclePairCreator, OSWAP_VotingExecutor2, OSWAP_OracleFactory, OSWAP_OracleLiquidityProvider, OSWAP_OracleRouter, OSWAP_HybridRouterRegistry, OSWAP_HybridRouter2 } from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/index.ts";
    import { OpenSwap } from "@scom/scom-swap/contracts/oswap-openswap-contract/OpenSwap.ts";
    export interface ICoreContractsDeploymentResult {
        administrator?: string;
        factory?: string;
        governance?: string;
        oswap?: string;
        votingToken?: string;
        pairCreator?: string;
        router?: string;
        votingRegistry?: string;
        votingExecutor?: string;
        votingExecutor1?: string;
        weth?: string;
    }
    export interface IOracleContractsDeploymentResult {
        oracleFactory?: string;
        oracleLiquidityProvider?: string;
        oraclePairCreator?: string;
        oracleRouter?: string;
        votingExecutor2?: string;
    }
    export interface IRangeContractsDeploymentResult {
        rangeFactory?: string;
        rangeLiquidityProvider?: string;
        rangePairCreator?: string;
        votingExecutor3?: string;
    }
    export interface IRestrictedContractsDeploymentResult {
        restrictedFactory?: string;
        restrictedLiquidityProvider?: string;
        restrictedPairCreator?: string;
        configStore?: string;
        votingExecutor4?: string;
    }
    export interface IHybridRouterDeploymentResult {
        hybridRouter?: string;
        hybridRouterRegistry?: string;
    }
    export interface IDeploymentResult extends ICoreContractsDeploymentResult, IOracleContractsDeploymentResult, IRangeContractsDeploymentResult, IRestrictedContractsDeploymentResult, IHybridRouterDeploymentResult {
    }
    export interface IGovProfile {
        "minExeDelay": number;
        "minVoteDuration": number;
        "maxVoteDuration": number;
        "minGovTokenToCreateVote": number;
        "minQuorum": number;
    }
    export interface IGovOptions {
        minStakePeriod: number;
        tradeFee: number;
        protocolFee: number;
        protocolFeeTo: string;
        profiles: {
            name: string[];
            minExeDelay: number[];
            minVoteDuration: number[];
            maxVoteDuration: number[];
            minGovTokenToCreateVote: string[];
            minQuorum: string[];
        };
    }
    export const DefaultGovOptions: IGovOptions;
    export interface IGovTokenOptions {
        initSupply: number | BigNumber;
        initSupplyTo: string;
        minter: string;
        totalSupply: number | BigNumber;
    }
    export const DefaultGovTokenOptions: IGovTokenOptions;
    export interface IAmmOptions {
        governance?: string;
        pairCreator?: string;
        protocolFee?: number;
        protocolFeeTo?: string;
        tradeFee?: number;
    }
    export interface IOracleFactoryOptions {
        feePerDelegator?: number | BigNumber;
        governance?: string;
        pairCreator?: string;
        protocolFee?: number | BigNumber;
        protocolFeeTo?: string;
        tradeFee?: number | BigNumber;
    }
    export interface IRangeFactoryOptions {
        governance?: string;
        oracleFactory?: string;
        pairCreator?: string;
        tradeFee?: number | BigNumber;
        stakeAmount?: number[] | BigNumber[];
        liquidityProviderShare?: number[] | BigNumber[];
        protocolFeeTo?: string;
    }
    export interface IRestrictedFactoryOptions {
        governance?: string;
        whitelistFactory?: string;
        pairCreator?: string;
        configStore?: string;
        tradeFee?: number | BigNumber;
        protocolFee?: number | BigNumber;
        protocolFeeTo?: string;
        type?: 'Restricted1' | 'Otc';
    }
    export interface IHybridRouterOptions {
        registryAddress?: string;
        weth?: string;
        governance?: string;
        name?: string[];
        factory?: string[];
        fee?: number[] | BigNumber[];
        feeBase?: number[] | BigNumber[];
        typeCode?: number[] | BigNumber[];
    }
    export interface IDeployOptions {
        govTokenOptions?: IGovTokenOptions;
        govOptions?: IGovOptions;
        amm?: IAmmOptions;
        oracle?: IOracleFactoryOptions;
        range?: IRangeFactoryOptions;
        restricted?: IRestrictedFactoryOptions;
        hybridRouter?: IHybridRouterOptions;
        tokens?: {
            oswap?: string;
            weth?: string;
            votingToken?: string;
        };
    }
    export interface IDeploymentContracts {
        openSwap: OpenSwap;
        governance: OAXDEX_Governance;
        administrator: OAXDEX_Administrator;
        registry: OAXDEX_VotingRegistry;
        pairCreator: OSWAP_PairCreator;
        factory: OSWAP_Factory;
        oraclePairCreator: OSWAP_OraclePairCreator;
        router: OSWAP_Router;
        oracleFactory: OSWAP_OracleFactory;
        oracleRouter: OSWAP_OracleRouter;
        oracleLiquidityProvider: OSWAP_OracleLiquidityProvider;
        hybridRouterRegistry: OSWAP_HybridRouterRegistry;
        hybridRouter: OSWAP_HybridRouter2;
        executor: OAXDEX_VotingExecutor;
        executor1: OSWAP_VotingExecutor1;
        executor2: OSWAP_VotingExecutor2;
    }
    export function toDeploymentContracts(wallet: IWallet, result: IDeploymentResult): IDeploymentContracts;
    export function deployCoreContracts(wallet: IWallet, options: IDeployOptions): Promise<ICoreContractsDeploymentResult>;
    export function deployOracleContracts(wallet: IWallet, options: IOracleFactoryOptions, coreContractsResult: ICoreContractsDeploymentResult): Promise<IOracleContractsDeploymentResult>;
    export function deployRangeContracts(wallet: IWallet, options: IRangeFactoryOptions, weth: string, hybridRegistry: string): Promise<IRangeContractsDeploymentResult>;
    export function deployRestrictedContracts(wallet: IWallet, options: IRestrictedFactoryOptions, weth: string): Promise<IRestrictedContractsDeploymentResult>;
    export function deployRestrictedPairOracle(wallet: IWallet, isOtc?: boolean): Promise<any>;
    export function initHybridRouterRegistry(wallet: IWallet, options: IHybridRouterOptions): Promise<void>;
    export function deployHybridRouter(wallet: IWallet, options: IHybridRouterOptions): Promise<IHybridRouterDeploymentResult>;
    export function deploy(wallet: IWallet, options?: IDeployOptions): Promise<IDeploymentResult>;
}
/// <amd-module name="@scom/scom-swap/contracts/oswap-openswap-contract/index.ts" />
declare module "@scom/scom-swap/contracts/oswap-openswap-contract/index.ts" {
    export * as Contracts from "@scom/scom-swap/contracts/oswap-openswap-contract/contracts/index.ts";
    export { deploy, deployCoreContracts, deployOracleContracts, deployRangeContracts, deployRestrictedContracts, deployHybridRouter, initHybridRouterRegistry, deployRestrictedPairOracle, IDeploymentResult, IDeploymentContracts, toDeploymentContracts } from "@scom/scom-swap/contracts/oswap-openswap-contract/deploy.ts";
    export { OpenSwap } from "@scom/scom-swap/contracts/oswap-openswap-contract/OpenSwap.ts";
}
/// <amd-module name="@scom/scom-swap/global/utils/common.ts" />
declare module "@scom/scom-swap/global/utils/common.ts" {
    import { Wallet, BigNumber, ISendTxEventsOptions } from "@ijstech/eth-wallet";
    export interface ITokenObject {
        address?: string;
        name: string;
        decimals: number;
        symbol: string;
        status?: boolean | null;
        logoURI?: string;
        isCommon?: boolean | null;
        balance?: string | number;
        isNative?: boolean | null;
        isWETH?: boolean | null;
        isNew?: boolean | null;
    }
    export type TokenMapType = {
        [token: string]: ITokenObject;
    };
    export const isTransactionConfirmed: (txHash: string) => Promise<boolean>;
    export const registerSendTxEvents: (sendTxEventHandlers: ISendTxEventsOptions) => void;
    export function getERC20Amount(wallet: Wallet, token: string, decimals: number): Promise<BigNumber>;
    export const approveERC20Max: (token: ITokenObject, spenderAddress: string, callback?: any, confirmationCallback?: any) => Promise<import("@ijstech/eth-contract").TransactionReceipt>;
    export const getERC20Allowance: (token: ITokenObject, spenderAddress: string) => Promise<BigNumber>;
}
/// <amd-module name="@scom/scom-swap/global/utils/helper.ts" />
declare module "@scom/scom-swap/global/utils/helper.ts" {
    import { BigNumber } from "@ijstech/eth-wallet";
    import { TokenMapType } from "@scom/scom-swap/global/utils/common.ts";
    export enum SITE_ENV {
        DEV = "dev",
        TESTNET = "testnet",
        MAINNET = "mainnet"
    }
    export const DefaultDateTimeFormat = "DD/MM/YYYY HH:mm:ss";
    export const DefaultDateFormat = "DD/MM/YYYY";
    export const formatDate: (date: any, customType?: string, showTimezone?: boolean) => string;
    export const formatUTCDate: (date: any, customType?: string, showTimezone?: boolean) => string;
    export const compareDate: (fromDate: any, toDate?: any) => boolean;
    export const formatNumber: (value: any, decimals?: number) => string;
    export const formatPercentNumber: (value: any, decimals?: number) => string;
    export const formatNumberWithSeparators: (value: number, precision?: number) => string;
    export const isValidNumber: (value: string | number) => boolean;
    export const isInvalidInput: (val: any) => boolean;
    export const limitInputNumber: (input: any, decimals?: number) => void;
    export const limitDecimals: (value: any, decimals: number) => any;
    export function getAPI(url: string, paramsObj?: any): Promise<any>;
    export const toWeiInv: (n: string, unit?: number) => BigNumber;
    export const padLeft: (string: string, chars: number, sign?: string) => string;
    export const numberToBytes32: (value: any, prefix?: string) => any;
    export const getParamsFromUrl: () => URLSearchParams;
    export const formatNumberValue: (data: any, tokenMap: TokenMapType) => any;
    export const uniqWith: (array: any[], compareFn: (cur: any, oth: any) => boolean) => any;
    export const getWeekDays: () => any[];
    export const renderBalanceTooltip: (params: any, tokenMap: TokenMapType, isBold?: boolean) => any;
    export const downloadJsonFile: (name: string, obj: any) => void;
    export function isWalletAddress(address: string): boolean;
}
/// <amd-module name="@scom/scom-swap/global/utils/error.ts" />
declare module "@scom/scom-swap/global/utils/error.ts" {
    export function parseContractError(oMessage: string, tokens: string[]): Promise<string>;
}
/// <amd-module name="@scom/scom-swap/global/utils/pageBlock.ts" />
declare module "@scom/scom-swap/global/utils/pageBlock.ts" {
    export interface PageBlock {
        getData: () => any;
        setData: (data: any) => Promise<void>;
        getTag: () => any;
        setTag: (tag: any) => Promise<void>;
        validate?: () => boolean;
        defaultEdit?: boolean;
        tag?: any;
        readonly onEdit: () => Promise<void>;
        readonly onConfirm: () => Promise<void>;
        readonly onDiscard: () => Promise<void>;
        edit: () => Promise<void>;
        confirm: () => Promise<void>;
        discard: () => Promise<void>;
        config: () => Promise<void>;
    }
}
/// <amd-module name="@scom/scom-swap/global/utils/approvalModel.ts" />
declare module "@scom/scom-swap/global/utils/approvalModel.ts" {
    interface ITokenObject {
        address?: string;
        name: string;
        decimals: number;
        symbol: string;
        status?: boolean | null;
        logoURI?: string;
        isCommon?: boolean | null;
        balance?: string | number;
        isNative?: boolean | null;
        isWETH?: boolean | null;
        isNew?: boolean | null;
    }
    export enum ApprovalStatus {
        TO_BE_APPROVED = 0,
        APPROVING = 1,
        NONE = 2
    }
    export interface IERC20ApprovalEventOptions {
        sender: any;
        payAction: () => Promise<void>;
        onToBeApproved: (token: ITokenObject) => Promise<void>;
        onToBePaid: (token: ITokenObject) => Promise<void>;
        onApproving: (token: ITokenObject, receipt?: string, data?: any) => Promise<void>;
        onApproved: (token: ITokenObject, data?: any) => Promise<void>;
        onPaying: (receipt?: string, data?: any) => Promise<void>;
        onPaid: (data?: any) => Promise<void>;
        onApprovingError: (token: ITokenObject, err: Error) => Promise<void>;
        onPayingError: (err: Error) => Promise<void>;
    }
    export interface IERC20ApprovalOptions extends IERC20ApprovalEventOptions {
        spenderAddress: string;
    }
    export interface IERC20ApprovalAction {
        doApproveAction: (token: ITokenObject, inputAmount: string, data?: any) => Promise<void>;
        doPayAction: (data?: any) => Promise<void>;
        checkAllowance: (token: ITokenObject, inputAmount: string) => Promise<void>;
    }
    export class ERC20ApprovalModel {
        private options;
        constructor(options: IERC20ApprovalOptions);
        set spenderAddress(value: string);
        private checkAllowance;
        private doApproveAction;
        private doPayAction;
        getAction: () => IERC20ApprovalAction;
    }
}
/// <amd-module name="@scom/scom-swap/global/utils/swapInterface.ts" />
declare module "@scom/scom-swap/global/utils/swapInterface.ts" {
    export type Category = 'fixed-pair' | 'aggregator';
    export interface ISwapConfig {
        category: Category;
        providers: IProvider[];
    }
    export interface IContractInfo {
        factoryAddress: string;
        routerAddress: string;
        tradeFee: {
            fee: string;
            base: string;
        };
        fromToken?: string;
        toToken?: string;
    }
    export interface IProvider {
        caption: string;
        image: string;
        key: string;
        dexId?: number;
        contractInfo: {
            [chainId: string]: IContractInfo;
        };
    }
    export interface IProviderUI {
        caption: string;
        image: string;
        key: string;
        dexId?: number;
        chainId: string | number;
        factoryAddress: string;
        routerAddress: string;
        fromToken?: string;
        toToken?: string;
        tradeFee: {
            fee: string;
            base: string;
        };
    }
    export interface ICommissionInfo {
        chainId: number;
        walletAddress: string;
        share: string;
    }
    export interface ISwapConfigUI {
        category: Category;
        providers: IProviderUI[];
        commissions?: ICommissionInfo[];
    }
    export interface IEmbedData {
        category?: Category;
        providers?: IProviderUI[];
        commissions?: ICommissionInfo[];
    }
}
/// <amd-module name="@scom/scom-swap/global/utils/index.ts" />
declare module "@scom/scom-swap/global/utils/index.ts" {
    export { getAPI, formatNumber, formatNumberWithSeparators, DefaultDateTimeFormat, DefaultDateFormat, formatDate, formatUTCDate, limitDecimals, limitInputNumber, isInvalidInput, isValidNumber, toWeiInv, numberToBytes32, getParamsFromUrl, formatNumberValue, uniqWith, getWeekDays, compareDate, renderBalanceTooltip, formatPercentNumber, downloadJsonFile, isWalletAddress, SITE_ENV } from "@scom/scom-swap/global/utils/helper.ts";
    export { parseContractError } from "@scom/scom-swap/global/utils/error.ts";
    export { PageBlock } from "@scom/scom-swap/global/utils/pageBlock.ts";
    export { isTransactionConfirmed, registerSendTxEvents, approveERC20Max, getERC20Allowance, getERC20Amount, ITokenObject, TokenMapType } from "@scom/scom-swap/global/utils/common.ts";
    export { ApprovalStatus, IERC20ApprovalEventOptions, IERC20ApprovalOptions, IERC20ApprovalAction, ERC20ApprovalModel } from "@scom/scom-swap/global/utils/approvalModel.ts";
    export { IContractInfo, IProvider, ISwapConfig, ISwapConfigUI, IProviderUI, Category, ICommissionInfo, IEmbedData } from "@scom/scom-swap/global/utils/swapInterface.ts";
}
/// <amd-module name="@scom/scom-swap/global/index.ts" />
declare module "@scom/scom-swap/global/index.ts" {
    export interface INetwork {
        chainId: number;
        name: string;
        img: string;
        rpc?: string;
        isDisabled?: boolean;
        isMainChain?: boolean;
        explorerName?: string;
        explorerTxUrl?: string;
        explorerAddressUrl?: string;
        isTestnet?: boolean;
    }
    export const ABIKeys: {
        Factory: string;
        Pair: string;
        OracleFactory: string;
        OraclePair: string;
        OracleLiquidityProvider: string;
        HybridRouterRegistry: string;
        HybridRouter: string;
        RangeFactory: string;
        RangePair: string;
        RangeLiquidityProvider: string;
        OracleAdaptor: string;
        RestrictedFactory: string;
        RestrictedPair: string;
        RestrictedLiquidityProvider: string;
        ConfigStore: string;
        PeggedOracleFactory: string;
        PeggedOraclePair: string;
        PeggedOracleLiquidityProvider: string;
    };
    export const enum EventId {
        ConnectWallet = "connectWallet",
        IsWalletConnected = "isWalletConnected",
        IsWalletDisconnected = "IsWalletDisconnected",
        Paid = "Paid",
        chainChanged = "chainChanged",
        EmitButtonStatus = "emitButtonStatus",
        EmitInput = "emitInput",
        EmitNewToken = "emitNewToken",
        SlippageToleranceChanged = "SlippageToleranceChanged",
        ExpertModeChanged = "ExpertModeChanged",
        ShowTransactionModal = "ShowTransactionModal",
        ShowExpertModal = "ShowExpertModal"
    }
    export enum QueueType {
        PRIORITY_QUEUE = 0,
        RANGE_QUEUE = 1,
        GROUP_QUEUE = 2,
        PEGGED_QUEUE = 3
    }
    export * from "@scom/scom-swap/global/utils/index.ts";
}
/// <amd-module name="@scom/scom-swap/assets.ts" />
declare module "@scom/scom-swap/assets.ts" {
    import { ITokenObject } from "@scom/scom-swap/global/index.ts";
    function fullPath(path: string): string;
    function tokenPath(tokenObj?: ITokenObject, chainId?: number): string;
    const _default_48: {
        logo: string;
        img: {
            network: {
                bsc: string;
                eth: string;
                amio: string;
                avax: string;
                ftm: string;
                polygon: string;
            };
        };
        fullPath: typeof fullPath;
        tokenPath: typeof tokenPath;
    };
    export default _default_48;
}
/// <amd-module name="@scom/scom-swap/index.css.ts" />
declare module "@scom/scom-swap/index.css.ts" { }
/// <amd-module name="@scom/scom-swap/store/data/tokens/mainnet/avalanche.ts" />
declare module "@scom/scom-swap/store/data/tokens/mainnet/avalanche.ts" {
    export const Tokens_Avalanche: ({
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH: boolean;
    } | {
        name: string;
        symbol: string;
        address: string;
        decimals: number;
        isCommon: boolean;
        isWETH?: undefined;
    } | {
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        isCommon?: undefined;
        isWETH?: undefined;
    })[];
}
/// <amd-module name="@scom/scom-swap/store/data/tokens/mainnet/ethereum.ts" />
declare module "@scom/scom-swap/store/data/tokens/mainnet/ethereum.ts" {
    export const Tokens_Ethereuem: ({
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        isCommon?: undefined;
        isWETH?: undefined;
    } | {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH?: undefined;
    } | {
        name: string;
        symbol: string;
        address: string;
        decimals: number;
        isCommon: boolean;
        isWETH: boolean;
    })[];
}
/// <amd-module name="@scom/scom-swap/store/data/tokens/mainnet/polygon.ts" />
declare module "@scom/scom-swap/store/data/tokens/mainnet/polygon.ts" {
    export const Tokens_Polygon: ({
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH: boolean;
    } | {
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        isCommon?: undefined;
        isWETH?: undefined;
    } | {
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH?: undefined;
    })[];
}
/// <amd-module name="@scom/scom-swap/store/data/tokens/mainnet/bsc.ts" />
declare module "@scom/scom-swap/store/data/tokens/mainnet/bsc.ts" {
    export const Tokens_BSC: ({
        name: string;
        symbol: string;
        address: string;
        decimals: number;
        isCommon: boolean;
        isWETH?: undefined;
    } | {
        name: string;
        symbol: string;
        address: string;
        decimals: number;
        isCommon?: undefined;
        isWETH?: undefined;
    } | {
        name: string;
        symbol: string;
        address: string;
        decimals: number;
        isCommon: boolean;
        isWETH: boolean;
    })[];
}
/// <amd-module name="@scom/scom-swap/store/data/tokens/mainnet/fantom.ts" />
declare module "@scom/scom-swap/store/data/tokens/mainnet/fantom.ts" {
    export const Tokens_Fantom: ({
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH: boolean;
    } | {
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        isCommon?: undefined;
        isWETH?: undefined;
    } | {
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH?: undefined;
    })[];
}
/// <amd-module name="@scom/scom-swap/store/data/tokens/mainnet/cronos.ts" />
declare module "@scom/scom-swap/store/data/tokens/mainnet/cronos.ts" {
    export const Tokens_Cronos: ({
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH: boolean;
    } | {
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH?: undefined;
    })[];
}
/// <amd-module name="@scom/scom-swap/store/data/tokens/mainnet/index.ts" />
declare module "@scom/scom-swap/store/data/tokens/mainnet/index.ts" {
    export { Tokens_Avalanche } from "@scom/scom-swap/store/data/tokens/mainnet/avalanche.ts";
    export { Tokens_Ethereuem } from "@scom/scom-swap/store/data/tokens/mainnet/ethereum.ts";
    export { Tokens_Polygon } from "@scom/scom-swap/store/data/tokens/mainnet/polygon.ts";
    export { Tokens_BSC } from "@scom/scom-swap/store/data/tokens/mainnet/bsc.ts";
    export { Tokens_Fantom } from "@scom/scom-swap/store/data/tokens/mainnet/fantom.ts";
    export { Tokens_Cronos } from "@scom/scom-swap/store/data/tokens/mainnet/cronos.ts";
}
/// <amd-module name="@scom/scom-swap/store/data/tokens/testnet/bsc-testnet.ts" />
declare module "@scom/scom-swap/store/data/tokens/testnet/bsc-testnet.ts" {
    export const Tokens_BSC_Testnet: ({
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH: boolean;
    } | {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH?: undefined;
    } | {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon?: undefined;
        isWETH?: undefined;
    })[];
}
/// <amd-module name="@scom/scom-swap/store/data/tokens/testnet/fuji.ts" />
declare module "@scom/scom-swap/store/data/tokens/testnet/fuji.ts" {
    export const Tokens_Fuji: ({
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH: boolean;
    } | {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon?: undefined;
        isWETH?: undefined;
    } | {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH?: undefined;
    })[];
}
/// <amd-module name="@scom/scom-swap/store/data/tokens/testnet/mumbai.ts" />
declare module "@scom/scom-swap/store/data/tokens/testnet/mumbai.ts" {
    export const Tokens_Mumbai: ({
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH?: undefined;
    } | {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH: boolean;
    } | {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon?: undefined;
        isWETH?: undefined;
    })[];
}
/// <amd-module name="@scom/scom-swap/store/data/tokens/testnet/fantom-testnet.ts" />
declare module "@scom/scom-swap/store/data/tokens/testnet/fantom-testnet.ts" {
    export const Tokens_Fantom_Testnet: ({
        address: string;
        decimals: number;
        name: string;
        symbol: string;
        isWETH: boolean;
        isCommon?: undefined;
    } | {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH?: undefined;
    })[];
}
/// <amd-module name="@scom/scom-swap/store/data/tokens/testnet/amino.ts" />
declare module "@scom/scom-swap/store/data/tokens/testnet/amino.ts" {
    export const Tokens_Amino: ({
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon?: undefined;
        isWETH?: undefined;
    } | {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH: boolean;
    })[];
}
/// <amd-module name="@scom/scom-swap/store/data/tokens/testnet/aminoX-testnet.ts" />
declare module "@scom/scom-swap/store/data/tokens/testnet/aminoX-testnet.ts" {
    export const Tokens_AminoXTestnet: ({
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH?: undefined;
    } | {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH: boolean;
    })[];
}
/// <amd-module name="@scom/scom-swap/store/data/tokens/testnet/cronos-testnet.ts" />
declare module "@scom/scom-swap/store/data/tokens/testnet/cronos-testnet.ts" {
    export const Tokens_Cronos_Testnet: ({
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH: boolean;
    } | {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH?: undefined;
    })[];
}
/// <amd-module name="@scom/scom-swap/store/data/tokens/testnet/index.ts" />
declare module "@scom/scom-swap/store/data/tokens/testnet/index.ts" {
    export { Tokens_BSC_Testnet } from "@scom/scom-swap/store/data/tokens/testnet/bsc-testnet.ts";
    export { Tokens_Fuji } from "@scom/scom-swap/store/data/tokens/testnet/fuji.ts";
    export { Tokens_Mumbai } from "@scom/scom-swap/store/data/tokens/testnet/mumbai.ts";
    export { Tokens_Fantom_Testnet } from "@scom/scom-swap/store/data/tokens/testnet/fantom-testnet.ts";
    export { Tokens_Amino } from "@scom/scom-swap/store/data/tokens/testnet/amino.ts";
    export { Tokens_AminoXTestnet } from "@scom/scom-swap/store/data/tokens/testnet/aminoX-testnet.ts";
    export { Tokens_Cronos_Testnet } from "@scom/scom-swap/store/data/tokens/testnet/cronos-testnet.ts";
}
/// <amd-module name="@scom/scom-swap/store/data/tokens/index.ts" />
declare module "@scom/scom-swap/store/data/tokens/index.ts" {
    import { ITokenObject } from "@scom/scom-swap/global/index.ts";
    const DefaultERC20Tokens: {
        [chainId: number]: ITokenObject[];
    };
    const ChainNativeTokenByChainId: {
        [chainId: number]: ITokenObject;
    };
    const WETHByChainId: {
        [chainId: number]: ITokenObject;
    };
    const getOpenSwapToken: (chainId: number) => ITokenObject;
    const DefaultTokens: {
        [chainId: number]: ITokenObject[];
    };
    const ToUSDPriceFeedAddressesMap: {
        [chainId: number]: {
            [token: string]: string;
        };
    };
    const tokenPriceAMMReference: {
        [chainId: number]: {
            [token: string]: string;
        };
    };
    const getTokenIconPath: (tokenObj: any, chainId?: number) => string;
    export { DefaultERC20Tokens, ChainNativeTokenByChainId, WETHByChainId, DefaultTokens, ToUSDPriceFeedAddressesMap, tokenPriceAMMReference, getTokenIconPath, getOpenSwapToken, };
}
/// <amd-module name="@scom/scom-swap/store/data/core/index.ts" />
declare module "@scom/scom-swap/store/data/core/index.ts" {
    export const CoreContractAddressesByChainId: {
        [chainId: number]: {
            [contract: string]: string;
        };
    };
}
/// <amd-module name="@scom/scom-swap/store/data/index.ts" />
declare module "@scom/scom-swap/store/data/index.ts" {
    export { DefaultERC20Tokens, ChainNativeTokenByChainId, WETHByChainId, DefaultTokens, ToUSDPriceFeedAddressesMap, tokenPriceAMMReference, getTokenIconPath, getOpenSwapToken, } from "@scom/scom-swap/store/data/tokens/index.ts";
    export { CoreContractAddressesByChainId } from "@scom/scom-swap/store/data/core/index.ts";
}
/// <amd-module name="@scom/scom-swap/store/utils.ts" />
declare module "@scom/scom-swap/store/utils.ts" {
    import { WalletPlugin } from '@ijstech/eth-wallet';
    import { INetwork, IProvider, ITokenObject, SITE_ENV, TokenMapType } from "@scom/scom-swap/global/index.ts";
    export { ChainNativeTokenByChainId, CoreContractAddressesByChainId } from "@scom/scom-swap/store/data/index.ts";
    export type ProxyAddresses = {
        [key: number]: string;
    };
    export const state: {
        siteEnv: SITE_ENV;
        currentChainId: number;
        isExpertMode: boolean;
        slippageTolerance: number;
        transactionDeadline: number;
        userTokens: {
            [key: string]: ITokenObject[];
        };
        infuraId: string;
        networkMap: {
            [key: number]: INetwork;
        };
        providerList: IProvider[];
        proxyAddresses: ProxyAddresses;
        ipfsGatewayUrl: string;
        apiGatewayUrls: Record<string, string>;
        embedderCommissionFee: string;
    };
    export const setDataFromSCConfig: (options: any) => void;
    export const setProxyAddresses: (data: ProxyAddresses) => void;
    export const getProxyAddress: (chainId?: number) => string;
    export const setIPFSGatewayUrl: (url: string) => void;
    export const getIPFSGatewayUrl: () => string;
    export const setAPIGatewayUrls: (urls: Record<string, string>) => void;
    export const getEmbedderCommissionFee: () => string;
    export type APIGatewayKey = 'otcQueue';
    export const getAPIGatewayUrl: (key: APIGatewayKey) => string;
    export const setSiteEnv: (value: string) => void;
    export const getSiteEnv: () => SITE_ENV;
    export const setCurrentChainId: (value: number) => void;
    export const getCurrentChainId: () => number;
    export const isExpertMode: () => boolean;
    export function toggleExpertMode(): void;
    export const getSlippageTolerance: () => any;
    export const setSlippageTolerance: (value: any) => void;
    export const getTransactionDeadline: () => any;
    export const setTransactionDeadline: (value: any) => void;
    export const getDefaultChainId: () => 97 | 56;
    export const getInfuraId: () => string;
    export const getNetworkInfo: (chainId: number) => INetwork;
    export const getFilteredNetworks: (filter: (value: INetwork, index: number, array: INetwork[]) => boolean) => INetwork[];
    export const getUserTokens: (chainId: number) => any[] | null;
    export const addUserTokens: (token: ITokenObject) => void;
    interface NetworkConditions {
        isDisabled?: boolean;
        isTestnet?: boolean;
        isMainChain?: boolean;
    }
    export const getMatchNetworks: (conditions: NetworkConditions) => INetwork[];
    export const getSiteSupportedNetworks: () => INetwork[];
    export const getNetworkExplorerName: (chainId: number) => string;
    export const getTokensDataList: (tokenMapData: TokenMapType, tokenBalances: any) => Promise<any[]>;
    export const setUserTokens: (token: ITokenObject, chainId: number) => void;
    export const hasUserToken: (address: string, chainId: number) => boolean;
    export const setProviderList: (value: IProvider[]) => void;
    export const getProviderList: () => IProvider[];
    export const getProviderByKey: (providerKey: string) => IProvider;
    export const viewOnExplorerByTxHash: (chainId: number, txHash: string) => void;
    export const viewOnExplorerByAddress: (chainId: number, address: string) => void;
    export function getWalletProvider(): string;
    export function isWalletConnected(): boolean;
    export function switchNetwork(chainId: number): Promise<void>;
    export const hasWallet: () => boolean;
    export const hasMetaMask: () => boolean;
    export const truncateAddress: (address: string) => string;
    export const walletList: {
        name: WalletPlugin;
        displayName: string;
        iconFile: string;
    }[];
    export const getWalletOptions: () => {
        metamask?: any;
        coin98?: any;
        trustwallet?: any;
        binancechainwallet?: any;
        onto?: any;
        walletconnect?: any;
        bitkeepwallet?: any;
        frontierwallet?: any;
    };
    export const getBridgeVaultVersion: (chainId: number) => string;
    export function getChainId(): number;
    export function getAddresses(chainId: number): {
        [contract: string]: string;
    };
    export const getChainNativeToken: (chainId: number) => ITokenObject;
    export const getGovToken: (chainId: number) => ITokenObject;
}
/// <amd-module name="@scom/scom-swap/store/tokens.ts" />
declare module "@scom/scom-swap/store/tokens.ts" {
    import { ITokenObject, TokenMapType } from "@scom/scom-swap/global/index.ts";
    export type DefaultTokensByChainType = Record<number, ITokenObject[]>;
    export type TokenBalancesType = Record<string, string>;
    export class TokenStore {
        private _defaultTokensByChain;
        private _tokenBalances;
        private _tokenMap;
        private _projectToken?;
        private _govToken?;
        constructor(defaultTokensByChain: DefaultTokensByChainType);
        get tokenBalances(): TokenBalancesType;
        get tokenMap(): TokenMapType;
        get projectToken(): ITokenObject;
        get govToken(): ITokenObject;
        getTokenList(chainId: number): ITokenObject[];
        private getERC20Balance;
        getTokenBalance(token: ITokenObject): string;
        getProjectTokenBalance(): string;
        private _updateAllTokenBalances;
        updateAllTokenBalances(): Promise<TokenBalancesType>;
        updateTokenBalances(erc20TokenList: ITokenObject[]): Promise<TokenBalancesType>;
        private _updateTokenMapData;
        updateTokenMapData(): TokenMapType;
    }
}
/// <amd-module name="@scom/scom-swap/store/index.ts" />
declare module "@scom/scom-swap/store/index.ts" {
    import { WalletPlugin } from '@ijstech/eth-wallet';
    import { INetwork, ITokenObject } from "@scom/scom-swap/global/index.ts";
    import { TokenStore } from "@scom/scom-swap/store/tokens.ts";
    export { DefaultERC20Tokens, ChainNativeTokenByChainId, WETHByChainId, DefaultTokens, ToUSDPriceFeedAddressesMap, tokenPriceAMMReference, getTokenIconPath, getOpenSwapToken, CoreContractAddressesByChainId } from "@scom/scom-swap/store/data/index.ts";
    export { TokenStore, TokenBalancesType, DefaultTokensByChainType } from "@scom/scom-swap/store/tokens.ts";
    export let tokenStore: TokenStore;
    export const setTokenStore: () => void;
    export const nullAddress = "0x0000000000000000000000000000000000000000";
    export const getWETH: (chainId: number) => ITokenObject;
    export const getTokenDecimals: (address: string) => number;
    export const getTokenIcon: (address: string) => string;
    export const tokenSymbol: (address: string) => string;
    export const tokenName: (address: string) => string;
    export function logoutWallet(): Promise<void>;
    export function connectWallet(walletPlugin: WalletPlugin, eventHandlers?: {
        [key: string]: Function;
    }): Promise<any>;
    export const getNetworkImg: (chainId: number) => string;
    export const getEmbedLink: (dataUri: string, params?: {
        [key: string]: string;
    }) => string;
    export const projectNativeToken: () => (ITokenObject & {
        address: string;
    }) | null;
    export const projectNativeTokenSymbol: () => string;
    export const SupportedNetworks: INetwork[];
    export const getNetworkName: (chainId: number) => string;
    export * from "@scom/scom-swap/store/utils.ts";
    export * from "@scom/scom-swap/store/data/index.ts";
}
/// <amd-module name="@scom/scom-swap/contracts/scom-commission-proxy-contract/contracts/Proxy.json.ts" />
declare module "@scom/scom-swap/contracts/scom-commission-proxy-contract/contracts/Proxy.json.ts" {
    const _default_49: {
        abi: ({
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            outputs?: undefined;
            stateMutability?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: ({
                    internalType: string;
                    name: string;
                    type: string;
                    components?: undefined;
                } | {
                    components: {
                        internalType: string;
                        name: string;
                        type: string;
                    }[];
                    internalType: string;
                    name: string;
                    type: string;
                })[];
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            outputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            inputs?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_49;
}
/// <amd-module name="@scom/scom-swap/contracts/scom-commission-proxy-contract/contracts/Proxy.ts" />
declare module "@scom/scom-swap/contracts/scom-commission-proxy-contract/contracts/Proxy.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IClaimantIdsParams {
        param1: string;
        param2: string;
    }
    export interface IEthInParams {
        target: string;
        commissions: {
            to: string;
            amount: number | BigNumber;
        }[];
        data: string;
    }
    export interface IGetClaimantBalanceParams {
        claimant: string;
        token: string;
    }
    export interface IGetClaimantsInfoParams {
        fromId: number | BigNumber;
        count: number | BigNumber;
    }
    export interface IProxyCallParams {
        target: string;
        tokensIn: {
            token: string;
            amount: number | BigNumber;
            directTransfer: boolean;
            commissions: {
                to: string;
                amount: number | BigNumber;
            }[];
        }[];
        to: string;
        tokensOut: string[];
        data: string;
    }
    export interface ITokenInParams {
        target: string;
        tokensIn: {
            token: string;
            amount: number | BigNumber;
            directTransfer: boolean;
            commissions: {
                to: string;
                amount: number | BigNumber;
            }[];
        };
        data: string;
    }
    export class Proxy extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(options?: number | BigNumber | TransactionOptions): Promise<string>;
        parseAddCommissionEvent(receipt: TransactionReceipt): Proxy.AddCommissionEvent[];
        decodeAddCommissionEvent(event: Event): Proxy.AddCommissionEvent;
        parseClaimEvent(receipt: TransactionReceipt): Proxy.ClaimEvent[];
        decodeClaimEvent(event: Event): Proxy.ClaimEvent;
        parseSkimEvent(receipt: TransactionReceipt): Proxy.SkimEvent[];
        decodeSkimEvent(event: Event): Proxy.SkimEvent;
        parseTransferBackEvent(receipt: TransactionReceipt): Proxy.TransferBackEvent[];
        decodeTransferBackEvent(event: Event): Proxy.TransferBackEvent;
        parseTransferForwardEvent(receipt: TransactionReceipt): Proxy.TransferForwardEvent[];
        decodeTransferForwardEvent(event: Event): Proxy.TransferForwardEvent;
        claim: {
            (token: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (token: string, options?: TransactionOptions) => Promise<void>;
            txData: (token: string, options?: TransactionOptions) => Promise<string>;
        };
        claimMultiple: {
            (tokens: string[], options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (tokens: string[], options?: TransactionOptions) => Promise<void>;
            txData: (tokens: string[], options?: TransactionOptions) => Promise<string>;
        };
        claimantIdCount: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        claimantIds: {
            (params: IClaimantIdsParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        claimantsInfo: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<{
                claimant: string;
                token: string;
                balance: BigNumber;
            }>;
        };
        ethIn: {
            (params: IEthInParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IEthInParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (params: IEthInParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        getClaimantBalance: {
            (params: IGetClaimantBalanceParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getClaimantsInfo: {
            (params: IGetClaimantsInfoParams, options?: TransactionOptions): Promise<{
                claimant: string;
                token: string;
                balance: BigNumber;
            }[]>;
        };
        lastBalance: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        proxyCall: {
            (params: IProxyCallParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IProxyCallParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (params: IProxyCallParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        skim: {
            (tokens: string[], options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (tokens: string[], options?: TransactionOptions) => Promise<void>;
            txData: (tokens: string[], options?: TransactionOptions) => Promise<string>;
        };
        tokenIn: {
            (params: ITokenInParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITokenInParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ITokenInParams, options?: TransactionOptions) => Promise<string>;
        };
        private assign;
    }
    export module Proxy {
        interface AddCommissionEvent {
            to: string;
            token: string;
            amount: BigNumber;
            _event: Event;
        }
        interface ClaimEvent {
            from: string;
            token: string;
            amount: BigNumber;
            _event: Event;
        }
        interface SkimEvent {
            token: string;
            to: string;
            amount: BigNumber;
            _event: Event;
        }
        interface TransferBackEvent {
            target: string;
            token: string;
            sender: string;
            amount: BigNumber;
            _event: Event;
        }
        interface TransferForwardEvent {
            target: string;
            token: string;
            sender: string;
            amount: BigNumber;
            commissions: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/scom-swap/contracts/scom-commission-proxy-contract/contracts/ProxyV2.json.ts" />
declare module "@scom/scom-swap/contracts/scom-commission-proxy-contract/contracts/ProxyV2.json.ts" {
    const _default_50: {
        abi: ({
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            outputs?: undefined;
            stateMutability?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: ({
                    internalType: string;
                    name: string;
                    type: string;
                    components?: undefined;
                } | {
                    components: {
                        internalType: string;
                        name: string;
                        type: string;
                    }[];
                    internalType: string;
                    name: string;
                    type: string;
                })[];
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            outputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            inputs?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_50;
}
/// <amd-module name="@scom/scom-swap/contracts/scom-commission-proxy-contract/contracts/ProxyV2.ts" />
declare module "@scom/scom-swap/contracts/scom-commission-proxy-contract/contracts/ProxyV2.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IClaimantIdsParams {
        param1: string;
        param2: string;
    }
    export interface IEthInParams {
        target: string;
        commissions: {
            to: string;
            amount: number | BigNumber;
        }[];
        data: string;
    }
    export interface IGetClaimantBalanceParams {
        claimant: string;
        token: string;
    }
    export interface IGetClaimantsInfoParams {
        fromId: number | BigNumber;
        count: number | BigNumber;
    }
    export interface IProxyCallParams {
        target: string;
        tokensIn: {
            token: string;
            amount: number | BigNumber;
            directTransfer: boolean;
            commissions: {
                to: string;
                amount: number | BigNumber;
            }[];
            totalCommissions: number | BigNumber;
        }[];
        to: string;
        tokensOut: string[];
        data: string;
    }
    export interface ITokenInParams {
        target: string;
        tokensIn: {
            token: string;
            amount: number | BigNumber;
            directTransfer: boolean;
            commissions: {
                to: string;
                amount: number | BigNumber;
            }[];
            totalCommissions: number | BigNumber;
        };
        data: string;
    }
    export class ProxyV2 extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(options?: number | BigNumber | TransactionOptions): Promise<string>;
        parseAddCommissionEvent(receipt: TransactionReceipt): ProxyV2.AddCommissionEvent[];
        decodeAddCommissionEvent(event: Event): ProxyV2.AddCommissionEvent;
        parseClaimEvent(receipt: TransactionReceipt): ProxyV2.ClaimEvent[];
        decodeClaimEvent(event: Event): ProxyV2.ClaimEvent;
        parseSkimEvent(receipt: TransactionReceipt): ProxyV2.SkimEvent[];
        decodeSkimEvent(event: Event): ProxyV2.SkimEvent;
        parseTransferBackEvent(receipt: TransactionReceipt): ProxyV2.TransferBackEvent[];
        decodeTransferBackEvent(event: Event): ProxyV2.TransferBackEvent;
        parseTransferForwardEvent(receipt: TransactionReceipt): ProxyV2.TransferForwardEvent[];
        decodeTransferForwardEvent(event: Event): ProxyV2.TransferForwardEvent;
        claim: {
            (token: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (token: string, options?: TransactionOptions) => Promise<void>;
            txData: (token: string, options?: TransactionOptions) => Promise<string>;
        };
        claimMultiple: {
            (tokens: string[], options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (tokens: string[], options?: TransactionOptions) => Promise<void>;
            txData: (tokens: string[], options?: TransactionOptions) => Promise<string>;
        };
        claimantIdCount: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        claimantIds: {
            (params: IClaimantIdsParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        claimantsInfo: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<{
                claimant: string;
                token: string;
                balance: BigNumber;
            }>;
        };
        ethIn: {
            (params: IEthInParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IEthInParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (params: IEthInParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        getClaimantBalance: {
            (params: IGetClaimantBalanceParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getClaimantsInfo: {
            (params: IGetClaimantsInfoParams, options?: TransactionOptions): Promise<{
                claimant: string;
                token: string;
                balance: BigNumber;
            }[]>;
        };
        lastBalance: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        proxyCall: {
            (params: IProxyCallParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IProxyCallParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (params: IProxyCallParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        skim: {
            (tokens: string[], options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (tokens: string[], options?: TransactionOptions) => Promise<void>;
            txData: (tokens: string[], options?: TransactionOptions) => Promise<string>;
        };
        tokenIn: {
            (params: ITokenInParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITokenInParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ITokenInParams, options?: TransactionOptions) => Promise<string>;
        };
        private assign;
    }
    export module ProxyV2 {
        interface AddCommissionEvent {
            to: string;
            token: string;
            amount: BigNumber;
            _event: Event;
        }
        interface ClaimEvent {
            from: string;
            token: string;
            amount: BigNumber;
            _event: Event;
        }
        interface SkimEvent {
            token: string;
            to: string;
            amount: BigNumber;
            _event: Event;
        }
        interface TransferBackEvent {
            target: string;
            token: string;
            sender: string;
            amount: BigNumber;
            _event: Event;
        }
        interface TransferForwardEvent {
            target: string;
            token: string;
            sender: string;
            amount: BigNumber;
            commissions: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/scom-swap/contracts/scom-commission-proxy-contract/contracts/index.ts" />
declare module "@scom/scom-swap/contracts/scom-commission-proxy-contract/contracts/index.ts" {
    export { Proxy } from "@scom/scom-swap/contracts/scom-commission-proxy-contract/contracts/Proxy.ts";
    export { ProxyV2 } from "@scom/scom-swap/contracts/scom-commission-proxy-contract/contracts/ProxyV2.ts";
}
/// <amd-module name="@scom/scom-swap/contracts/scom-commission-proxy-contract/index.ts" />
declare module "@scom/scom-swap/contracts/scom-commission-proxy-contract/index.ts" {
    import * as Contracts from "@scom/scom-swap/contracts/scom-commission-proxy-contract/contracts/index.ts";
    export { Contracts };
    import { IWallet } from '@ijstech/eth-wallet';
    export interface IDeployOptions {
        version?: string;
    }
    export interface IDeployResult {
        proxy: string;
    }
    export var DefaultDeployOptions: IDeployOptions;
    export function deploy(wallet: IWallet, options?: IDeployOptions): Promise<IDeployResult>;
    export function onProgress(handler: any): void;
    const _default_51: {
        Contracts: typeof Contracts;
        deploy: typeof deploy;
        DefaultDeployOptions: IDeployOptions;
        onProgress: typeof onProgress;
    };
    export default _default_51;
}
/// <amd-module name="@scom/scom-swap/swap-utils/helper.ts" />
declare module "@scom/scom-swap/swap-utils/helper.ts" {
    import { Control } from "@ijstech/components";
    export function debounce(func: any, timeout: number, target: Control): (...args: any) => void;
}
/// <amd-module name="@scom/scom-swap/swap-utils/index.ts" />
declare module "@scom/scom-swap/swap-utils/index.ts" {
    import { BigNumber, TransactionReceipt } from "@ijstech/eth-wallet";
    import { ITokenObject, IERC20ApprovalEventOptions, QueueType, ICommissionInfo } from "@scom/scom-swap/global/index.ts";
    interface TradeFee {
        fee: string;
        base: string;
    }
    interface TradeFeeMap {
        [key: string]: TradeFee;
    }
    const getChainNativeToken: () => ITokenObject;
    function getRouterAddress(key: string): string;
    function getTradeFeeMap(): Promise<TradeFeeMap>;
    function getExtendedRouteObjData(wallet: any, bestRouteObj: any, tradeFeeMap: TradeFeeMap, swapPrice: BigNumber, isHybridOrQueue: boolean): Promise<any>;
    function getAllRoutesData(firstTokenObject: ITokenObject, secondTokenObject: ITokenObject, firstInput: BigNumber, secondInput: BigNumber, isFromEstimated: boolean, useAPI: boolean, commissionAmount: BigNumber, contractAddress: string, targetChainId?: number): Promise<any[]>;
    export const getCurrentCommissions: (commissions: ICommissionInfo[]) => ICommissionInfo[];
    export const getCommissionAmount: (commissions: ICommissionInfo[], amount: BigNumber) => BigNumber;
    interface SwapData {
        provider: string;
        queueType?: QueueType;
        routeTokens: any[];
        bestSmartRoute: any[];
        pairs: string[];
        fromAmount: BigNumber;
        toAmount: BigNumber;
        isFromEstimated: boolean;
        groupQueueOfferIndex?: number;
        commissions?: ICommissionInfo[];
    }
    const executeSwap: (swapData: SwapData) => Promise<{
        receipt: TransactionReceipt | null;
        error: Record<string, string> | null;
    }>;
    const setERC20AllowanceToZero: (token: ITokenObject, spenderAddress: string) => Promise<import("@ijstech/eth-contract").TransactionReceipt>;
    const getApprovalModelAction: (options: IERC20ApprovalEventOptions) => Promise<import("@scom/scom-swap/global/index.ts").IERC20ApprovalAction>;
    const setApprovalModalSpenderAddress: (market: string, contractAddress?: string) => void;
    const registerPairsByAddress: (market: string[], pairAddresses: string[]) => Promise<import("@ijstech/eth-contract").TransactionReceipt>;
    export { getExtendedRouteObjData, getTradeFeeMap, getAllRoutesData, SwapData, executeSwap, getChainNativeToken, getRouterAddress, setERC20AllowanceToZero, getApprovalModelAction, setApprovalModalSpenderAddress, registerPairsByAddress, };
    export * from "@scom/scom-swap/swap-utils/helper.ts";
}
/// <amd-module name="@scom/scom-swap/price-info/priceInfo.css.ts" />
declare module "@scom/scom-swap/price-info/priceInfo.css.ts" { }
/// <amd-module name="@scom/scom-swap/price-info/index.tsx" />
declare module "@scom/scom-swap/price-info/index.tsx" {
    import { Module, Control, ControlElement, Image, Icon, Container } from '@ijstech/components';
    import "@scom/scom-swap/price-info/priceInfo.css.ts";
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['price-info']: ControlElement;
            }
        }
    }
    export class PriceInfo extends Module {
        private priceContent;
        private headerTitle;
        private _items;
        onTogglePrice: any;
        constructor(parent?: Container, options?: any);
        get Items(): any[];
        set Items(value: any[]);
        renderItems: () => Promise<void>;
        onRenderToggleBtn: (parent: Control) => Image;
        renderIconTooltip: (parent: Control, item: any) => Promise<Icon>;
        updateItems: () => Promise<void>;
        init(): void;
        render(): any;
    }
}
/// <amd-module name="@scom/scom-swap/token-selection/tokenSelection.css.ts" />
declare module "@scom/scom-swap/token-selection/tokenSelection.css.ts" { }
/// <amd-module name="@scom/scom-swap/token-selection/importToken.tsx" />
declare module "@scom/scom-swap/token-selection/importToken.tsx" {
    import { Control, ControlElement, Module, Container } from '@ijstech/components';
    import { ITokenObject } from "@scom/scom-swap/global/index.ts";
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['swap-import-token']: ControlElement;
            }
        }
    }
    export class ImportToken extends Module {
        private importModal;
        private importBtn;
        private tokenAgreeCheckBox;
        private _token;
        private $eventBus;
        onUpdate: any;
        private _state;
        constructor(parent?: Container, options?: any);
        set token(value: ITokenObject);
        get token(): ITokenObject;
        updateState(): void;
        closeModal(): void;
        showModal(): void;
        onImportToken(source: Control, event: Event): Promise<void>;
        onHandleCheck(source: Control, event: Event): void;
        viewContract(): void;
        init(): Promise<void>;
        render(): any;
    }
}
/// <amd-module name="@scom/scom-swap/token-selection/tokenSelection.tsx" />
declare module "@scom/scom-swap/token-selection/tokenSelection.tsx" {
    import { Module, ControlElement, Container } from '@ijstech/components';
    import { ITokenObject } from "@scom/scom-swap/global/index.ts";
    import "@scom/scom-swap/token-selection/tokenSelection.css.ts";
    interface TokenSelectionElement extends ControlElement {
        disableSelect?: boolean;
        disabledMaxBtn?: boolean;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['swap-token-selection']: TokenSelectionElement;
            }
        }
    }
    export class TokenSelection extends Module {
        private _token?;
        private _targetChainId;
        private _tokenDataListProp;
        private _onSelectToken;
        private _isCommonShown;
        private _isSortBalanceShown;
        private _isBtnMaxShown;
        private _onSetMaxBalance;
        private tokenSelectionModal;
        private currentChainId;
        private tokenBalancesMap;
        private btnToken;
        private btnMax;
        private tokenList;
        private commonTokenList;
        private commonTokenPanel;
        private sortBalancePanel;
        private importTokenModal;
        private sortValue;
        private iconSortUp;
        private iconSortDown;
        private tokenSearch;
        private filterValue;
        private checkHasMetaMask;
        private $eventBus;
        private _disableSelect;
        private _disabledMaxBtn;
        private fallbackUrl;
        get token(): ITokenObject | undefined;
        set token(value: ITokenObject | undefined);
        get targetChainId(): number;
        set targetChainId(value: number);
        get tokenDataListProp(): Array<ITokenObject>;
        set tokenDataListProp(value: Array<ITokenObject>);
        get onSelectToken(): any;
        set onSelectToken(callback: any);
        get isCommonShown(): boolean;
        set isCommonShown(value: boolean);
        get isSortBalanceShown(): boolean;
        set isSortBalanceShown(value: boolean);
        get isBtnMaxShown(): boolean;
        set isBtnMaxShown(value: boolean);
        get onSetMaxBalance(): any;
        set onSetMaxBalance(callback: any);
        get chainId(): number;
        get disableSelect(): boolean;
        set disableSelect(value: boolean);
        get disabledMaxBtn(): boolean;
        set disabledMaxBtn(value: boolean);
        private initData;
        private updateDataByChain;
        private updateDataByNewToken;
        private onChainChange;
        private onWalletConnect;
        private onWalletDisconnect;
        private onPaid;
        private registerEvent;
        private get tokenDataList();
        private get commonTokenDataList();
        private get tokenDataListFiltered();
        private sortToken;
        private sortBalance;
        private filterSearch;
        private renderCommonItems;
        private renderToken;
        private getTokenObject;
        private renderTokenItems;
        private addToMetamask;
        private showModal;
        private updateStatusButton;
        private updateButton;
        private onSelect;
        constructor(parent?: Container, options?: any);
        init(): Promise<void>;
        showImportTokenModal(event: Event, token: ITokenObject): void;
        onImportToken(token: ITokenObject): void;
        onCloseModal(): void;
        render(): any;
    }
}
/// <amd-module name="@scom/scom-swap/token-selection/index.tsx" />
declare module "@scom/scom-swap/token-selection/index.tsx" {
    export { TokenSelection } from "@scom/scom-swap/token-selection/tokenSelection.tsx";
    export { ImportToken } from "@scom/scom-swap/token-selection/importToken.tsx";
}
/// <amd-module name="@scom/scom-swap/result/result.css.ts" />
declare module "@scom/scom-swap/result/result.css.ts" {
    const _default_52: string;
    export default _default_52;
}
/// <amd-module name="@scom/scom-swap/result/result.tsx" />
declare module "@scom/scom-swap/result/result.tsx" {
    import { Module, ControlElement, Container } from '@ijstech/components';
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['swap-result']: ControlElement;
            }
        }
    }
    export interface IMessage {
        status: 'warning' | 'success' | 'error';
        content?: any;
        txtHash?: string;
        obj?: any;
        customRedirect?: any;
    }
    export class Result extends Module {
        private confirmModal;
        private mainContent;
        private _message;
        onCustomClose: any;
        get message(): IMessage;
        set message(value: IMessage);
        constructor(parent?: Container, options?: any);
        init(): Promise<void>;
        closeModal(): void;
        showModal(): void;
        onCloseRedirect(): void;
        buildLink(): Promise<void>;
        renderUI(): Promise<void>;
        onErrMsgChanged(): Promise<any>;
        render(): any;
    }
}
/// <amd-module name="@scom/scom-swap/result/index.tsx" />
declare module "@scom/scom-swap/result/index.tsx" {
    export { Result } from "@scom/scom-swap/result/result.tsx";
}
/// <amd-module name="@scom/scom-swap/expert-mode-settings/index.css.ts" />
declare module "@scom/scom-swap/expert-mode-settings/index.css.ts" {
    const _default_53: string;
    export default _default_53;
}
/// <amd-module name="@scom/scom-swap/expert-mode-settings/index.tsx" />
declare module "@scom/scom-swap/expert-mode-settings/index.tsx" {
    import { Module, Container, ControlElement } from '@ijstech/components';
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['expert-mode-settings']: ControlElement;
            }
        }
    }
    export class ExpertModeSettings extends Module {
        private expertModal;
        private $eventBus;
        constructor(parent?: Container, options?: any);
        init(): Promise<void>;
        closeModal(): void;
        showModal(): void;
        onToggle(): void;
        render(): any;
    }
}
/// <amd-module name="@scom/scom-swap/transaction-settings/index.css.ts" />
declare module "@scom/scom-swap/transaction-settings/index.css.ts" {
    const _default_54: string;
    export default _default_54;
}
/// <amd-module name="@scom/scom-swap/transaction-settings/index.tsx" />
declare module "@scom/scom-swap/transaction-settings/index.tsx" {
    import { Module, Container, ControlElement, Input, Control } from '@ijstech/components';
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['transaction-settings']: ControlElement;
            }
        }
    }
    export class TransactionSettings extends Module {
        private transactionModal;
        private slippageGroup;
        private slippageInput;
        private deadlineInput;
        private deadlineGroup;
        private deadlineMessage;
        private warningIcon;
        private switchBox;
        private slippageRow;
        private deadlineRow;
        private deadlineInputRow;
        private switchBoxRow;
        private _showSlippageOnly;
        private $eventBus;
        private slippageToleranceMessage;
        constructor(parent?: Container, options?: any);
        get showSlippageOnly(): boolean;
        set showSlippageOnly(value: boolean);
        registerEvent(): void;
        onRenderSlippage(): Promise<void>;
        onRenderWarningElm(): Promise<void>;
        onActiveItem: (source: Control) => void;
        onSelectSlippage: (source: Control, val: any) => void;
        inputSlippageTolerance: (source: Control, val: any) => void;
        blurSlippageTolerance: (source: Input) => void;
        setSlippageToleranceMessage: () => "" | "Your transaction may fail" | "Your transaction may be frontrun" | "Please enter a valid slippage percentage";
        inputDeadline: (source: Control, event: Event) => void;
        blurTransactionDeadline: (source: Input) => void;
        handleProcessExpertMode: () => void;
        setDefaultTransactionSettings(): void;
        init(): Promise<void>;
        closeModal(): void;
        showModal(): void;
        render(): any;
    }
}
/// <amd-module name="@scom/scom-swap/network-picker/index.css.ts" />
declare module "@scom/scom-swap/network-picker/index.css.ts" {
    const _default_55: string;
    export default _default_55;
}
/// <amd-module name="@scom/scom-swap/network-picker/index.tsx" />
declare module "@scom/scom-swap/network-picker/index.tsx" {
    import { ControlElement, Module, Container } from '@ijstech/components';
    import { INetwork } from "@scom/scom-swap/global/index.ts";
    interface PickerElement extends ControlElement {
        networks?: INetwork[] | '*';
        selectedChainId?: number;
        switchNetworkOnSelect?: boolean;
        onCustomNetworkSelected?: (network: INetwork) => void;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-swap-network-picker']: PickerElement;
            }
        }
    }
    export default class ScomNetworkPicker extends Module {
        private mdNetwork;
        private gridNetworkGroup;
        private pnlNetwork;
        private btnNetwork;
        private networkMapper;
        private _networkList;
        private _selectedNetwork;
        private _switchNetworkOnSelect;
        private networkPlaceholder;
        private _onCustomNetworkSelected;
        constructor(parent?: Container, options?: any);
        get selectedNetwork(): INetwork;
        setNetworkByChainId(chainId: number): void;
        clearNetwork(): void;
        private onNetworkSelected;
        private setNetwork;
        private renderNetworks;
        private renderModalItem;
        private renderUI;
        private renderCombobox;
        init(): void;
        render(): any;
    }
}
/// <amd-module name="@scom/scom-swap/config/index.css.ts" />
declare module "@scom/scom-swap/config/index.css.ts" {
    export const configStyled: string;
}
/// <amd-module name="@scom/scom-swap/config/index.tsx" />
declare module "@scom/scom-swap/config/index.tsx" {
    import { Module, ControlElement } from '@ijstech/components';
    import { INetwork, IEmbedData } from "@scom/scom-swap/global/index.ts";
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-swap-config']: ControlElement;
            }
        }
    }
    export default class Config extends Module {
        private tableCommissions;
        private modalAddCommission;
        private networkPicker;
        private inputWalletAddress;
        private lbCommissionShare;
        private commissionInfoList;
        private commissionsTableColumns;
        private btnConfirm;
        private lbErrMsg;
        private _onCustomCommissionsChanged;
        init(): Promise<void>;
        get data(): IEmbedData;
        set data(config: IEmbedData);
        get onCustomCommissionsChanged(): (data: any) => Promise<void>;
        set onCustomCommissionsChanged(value: (data: any) => Promise<void>);
        onModalAddCommissionClosed(): void;
        onAddCommissionClicked(): void;
        onConfirmCommissionClicked(): Promise<void>;
        validateModalFields(): boolean;
        onNetworkSelected(network: INetwork): void;
        onInputWalletAddressChanged(): void;
        render(): any;
    }
}
/// <amd-module name="@scom/scom-swap/scconfig.json.ts" />
declare module "@scom/scom-swap/scconfig.json.ts" {
    const _default_56: {
        name: string;
        env: string;
        version: string;
        moduleDir: string;
        main: string;
        modules: {
            "@pageblock-swap/assets": {
                path: string;
            };
            "@pageblock-swap/global": {
                path: string;
            };
            "@pageblock-swap/store": {
                path: string;
            };
            "@pageblock-swap/result": {
                path: string;
            };
            "@pageblock-swap/main": {
                path: string;
            };
            "@pageblock-swap/token-selection": {
                path: string;
            };
            "@pageblock-swap/swap-utils": {
                path: string;
            };
            "@pageblock-swap/queue-utils": {
                path: string;
            };
            "@pageblock-swap/price-info": {
                path: string;
            };
            "@pageblock-swap/transaction-settings": {
                path: string;
            };
            "@pageblock-swap/expert-mode-settings": {
                path: string;
            };
        };
        dependencies: {
            "@ijstech/eth-contract": string;
            "@scom/oswap-openswap-contract": string;
            "@scom/oswap-chainlink-contract": string;
            "@scom/oswap-oracle-adaptor-contract": string;
            "@scom/scom-commission-proxy-contract": string;
        };
        infuraId: string;
        networks: ({
            name: string;
            chainId: number;
            img: string;
            rpc: string;
            explorerName: string;
            explorerTxUrl: string;
            explorerAddressUrl: string;
            isDisabled?: undefined;
            isMainChain?: undefined;
            isTestnet?: undefined;
        } | {
            name: string;
            chainId: number;
            img: string;
            isDisabled: boolean;
            rpc?: undefined;
            explorerName?: undefined;
            explorerTxUrl?: undefined;
            explorerAddressUrl?: undefined;
            isMainChain?: undefined;
            isTestnet?: undefined;
        } | {
            name: string;
            chainId: number;
            img: string;
            rpc: string;
            isMainChain: boolean;
            explorerName: string;
            explorerTxUrl: string;
            explorerAddressUrl: string;
            isDisabled?: undefined;
            isTestnet?: undefined;
        } | {
            name: string;
            chainId: number;
            img: string;
            explorerName: string;
            explorerTxUrl: string;
            explorerAddressUrl: string;
            rpc?: undefined;
            isDisabled?: undefined;
            isMainChain?: undefined;
            isTestnet?: undefined;
        } | {
            name: string;
            chainId: number;
            img: string;
            rpc: string;
            isMainChain: boolean;
            explorerName: string;
            explorerTxUrl: string;
            explorerAddressUrl: string;
            isTestnet: boolean;
            isDisabled?: undefined;
        } | {
            name: string;
            chainId: number;
            img: string;
            isDisabled: boolean;
            isTestnet: boolean;
            rpc?: undefined;
            explorerName?: undefined;
            explorerTxUrl?: undefined;
            explorerAddressUrl?: undefined;
            isMainChain?: undefined;
        } | {
            name: string;
            chainId: number;
            img: string;
            rpc: string;
            explorerName: string;
            explorerTxUrl: string;
            explorerAddressUrl: string;
            isDisabled: boolean;
            isTestnet: boolean;
            isMainChain?: undefined;
        } | {
            name: string;
            chainId: number;
            img: string;
            rpc: string;
            explorerName: string;
            explorerTxUrl: string;
            explorerAddressUrl: string;
            isTestnet: boolean;
            isDisabled?: undefined;
            isMainChain?: undefined;
        } | {
            name: string;
            chainId: number;
            img: string;
            isDisabled: boolean;
            explorerName: string;
            explorerTxUrl: string;
            explorerAddressUrl: string;
            isTestnet: boolean;
            rpc?: undefined;
            isMainChain?: undefined;
        })[];
        proxyAddresses: {
            "97": string;
            "43113": string;
        };
        ipfsGatewayUrl: string;
        embedderCommissionFee: string;
    };
    export default _default_56;
}
/// <amd-module name="@scom/scom-swap" />
declare module "@scom/scom-swap" {
    import { Module, Panel, Image, Container, Control, ControlElement, IDataSchema } from '@ijstech/components';
    import "@scom/scom-swap/index.css.ts";
    import { ITokenObject, ApprovalStatus, INetwork, PageBlock, IProvider, ISwapConfigUI, IProviderUI, Category, ICommissionInfo } from "@scom/scom-swap/global/index.ts";
    import { PriceInfo } from "@scom/scom-swap/price-info/index.tsx";
    import Config from "@scom/scom-swap/config/index.tsx";
    type StatusMapType = 'register' | 'approve' | 'swap';
    interface ScomSwapElement extends ControlElement {
        category: Category;
        providers: IProviderUI[];
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ["i-scom-swap"]: ScomSwapElement;
            }
        }
    }
    export default class ScomSwap extends Module implements PageBlock {
        private _oldData;
        private _data;
        private oldTag;
        tag: any;
        defaultEdit: boolean;
        readonly onConfirm: () => Promise<void>;
        readonly onDiscard: () => Promise<void>;
        readonly onEdit: () => Promise<void>;
        private swapComponent;
        private swapContainer;
        private isInited;
        private payContainer;
        private receiveContainer;
        private payBalance;
        private receiveBalance;
        private firstTokenSelection;
        private secondTokenSelection;
        private payCol;
        private receiveCol;
        private listRouting;
        private toggleRoutes;
        private routeFound;
        private swapModal;
        private priceInfo;
        private priceInfo2;
        private priceInfoContainer;
        private fromTokenImage;
        private fromTokenLabel;
        private fromTokenValue;
        private toTokenImage;
        private toTokenLabel;
        private toTokenValue;
        private payOrReceiveValue;
        private payOrReceiveToken;
        private routingContainer;
        private openswapResult;
        private fromSlider;
        private maxButton;
        private swapBtn;
        private actionSetting;
        private isFrom;
        private fromToken?;
        private toToken?;
        private fromTokenSymbol;
        private toTokenSymbol;
        private fromInputValue;
        private toInputValue;
        private timeout;
        private isPriceToggled;
        private record;
        private allTokenBalancesMap;
        private chainId;
        private fallbackUrl;
        private swapButtonStatusMap;
        private approveButtonStatusMap;
        private registerPairButtonStatusMap;
        private _lastUpdated;
        private lbLastUpdated;
        private timer;
        private $eventBus;
        private lbEstimate;
        private lbPayOrReceive;
        private approvalModelAction;
        private registerPairModal;
        private registerPanel;
        private registerBtn;
        private registerPairsParams;
        private toggleReverseImage;
        private oldSupportedChainList;
        private supportedChainList;
        private srcChainLabel;
        private srcChainList;
        private desChainLabel;
        private desChainList;
        private srcChain;
        private desChain;
        private targetChainId;
        private srcChainFirstPanel;
        private targetChainFirstPanel;
        private srcChainSecondPanel;
        private swapModalConfirmBtn;
        private modalFees;
        private feesInfo;
        private lbReminderRejected;
        private showCaption;
        private showIcon;
        private transactionModal;
        private expertModal;
        private networkErrModal;
        private supportedNetworksElm;
        private configDApp;
        private contractAddress;
        static create(options?: ScomSwapElement, parent?: Container): Promise<ScomSwap>;
        get category(): Category;
        set category(value: Category);
        get providers(): IProviderUI[];
        set providers(value: IProviderUI[]);
        get commissions(): ICommissionInfo[];
        set commissions(value: ICommissionInfo[]);
        getEmbedderActions(): ({
            name: string;
            icon: string;
            command: (builder: any, userInputData: any) => {
                execute: () => Promise<void>;
                undo: () => void;
                redo: () => void;
            };
            userInputDataSchema: IDataSchema;
            userInputUISchema: {
                type: string;
                elements: {
                    type: string;
                    scope: string;
                    options: {
                        detail: {
                            type: string;
                        };
                    };
                }[];
            };
        } | {
            name: string;
            icon: string;
            command: (builder: any, userInputData: any) => {
                execute: () => Promise<void>;
                undo: () => void;
                redo: () => void;
            };
            userInputDataSchema: IDataSchema;
            userInputUISchema?: undefined;
        })[];
        getActions(): ({
            name: string;
            icon: string;
            command: (builder: any, userInputData: any) => {
                execute: () => Promise<void>;
                undo: () => void;
                redo: () => void;
            };
            userInputDataSchema: IDataSchema;
            userInputUISchema: {
                type: string;
                elements: {
                    type: string;
                    scope: string;
                    options: {
                        detail: {
                            type: string;
                        };
                    };
                }[];
            };
        } | {
            name: string;
            icon: string;
            command: (builder: any, userInputData: any) => {
                execute: () => Promise<void>;
                undo: () => void;
                redo: () => void;
            };
            userInputDataSchema: IDataSchema;
            userInputUISchema?: undefined;
        })[];
        _getActions(propertiesSchema: IDataSchema, themeSchema: IDataSchema): ({
            name: string;
            icon: string;
            command: (builder: any, userInputData: any) => {
                execute: () => Promise<void>;
                undo: () => void;
                redo: () => void;
            };
            userInputDataSchema: IDataSchema;
            userInputUISchema: {
                type: string;
                elements: {
                    type: string;
                    scope: string;
                    options: {
                        detail: {
                            type: string;
                        };
                    };
                }[];
            };
        } | {
            name: string;
            icon: string;
            command: (builder: any, userInputData: any) => {
                execute: () => Promise<void>;
                undo: () => void;
                redo: () => void;
            };
            userInputDataSchema: IDataSchema;
            userInputUISchema?: undefined;
        })[];
        getConfigurators(): {
            name: string;
            target: string;
            elementName: string;
            getLinkParams: () => {
                data: any;
            };
            setLinkParams: (params: any) => Promise<void>;
            bindOnChanged: (element: Config, callback: (data: any) => Promise<void>) => void;
        }[];
        getData(): Promise<ISwapConfigUI>;
        setData(value: ISwapConfigUI): Promise<void>;
        getTag(): Promise<any>;
        setTag(value: any): Promise<void>;
        private updateTheme;
        confirm(): Promise<void>;
        discard(): Promise<void>;
        edit(): Promise<void>;
        config(): Promise<void>;
        private setProviders;
        updateContractAddress(): void;
        private get isFixedPair();
        private get originalData();
        private refreshUI;
        constructor(parent?: Container, options?: any);
        private registerEvent;
        onWalletConnect: (connected: boolean) => Promise<void>;
        onWalletDisconnect: (connected: boolean) => Promise<void>;
        onChainChange: () => void;
        get supportedNetworks(): any;
        get isApproveButtonShown(): boolean;
        get isPriceImpactTooHigh(): boolean;
        get isInsufficientBalance(): boolean;
        get isSwapping(): boolean;
        get approveButtonStatus(): any;
        get isApprovingRouter(): boolean;
        get lastUpdated(): number;
        set lastUpdated(value: number);
        get isValidToken(): boolean;
        get targetTokenMap(): import("@scom/scom-swap/global/index.ts").TokenMapType;
        private initWalletData;
        getAddressFromUrl: () => void;
        private redirectToken;
        private fixedNumber;
        private setFixedPairData;
        private resetUI;
        private onSetupPage;
        private initTokenSelection;
        initApprovalModelAction(): Promise<void>;
        setDefaultToken: () => void;
        onRevertSwap(): Promise<void>;
        tipFormatter(value: any): string;
        private totalAmount;
        setupCrossChainPopup(): void;
        handleSwapPopup(): void;
        doSwap(): void;
        getMinReceivedMaxSold: () => number | null;
        onCloseSwapModal(): void;
        onUpdateToken(token: ITokenObject, isFrom: boolean): void;
        onSelectToken(token: ITokenObject, isFrom: boolean): Promise<void>;
        setApprovalSpenderAddress(): void;
        getInputValue(isFrom: boolean): any;
        updateTokenInput(isFrom: boolean, init?: boolean): Promise<void>;
        addToMetamask(event: Event, token: ITokenObject): any;
        toggleShowRoutes(source: Control): void;
        onSelectRouteItem(source: Control, item: any): Promise<void>;
        onTokenInputChange(source: Control): void;
        resetValuesByInput(): void;
        initRoutes(): void;
        handleAddRoute(): Promise<void>;
        getProviderCaption(provider: string | IProvider, caption: string): string;
        addRoute(item: any, index: number, pricePercent: any): Promise<Panel>;
        getPricePercent(routes: any, isFrom: boolean): string | 0;
        sortToken: (a: any, b: any) => number;
        onTogglePrice(priceInfo: PriceInfo): void;
        getRate(): string;
        getPriceImpact(): string;
        getMinimumReceived(): string;
        getTradeFeeExactAmount(): string;
        getFeeDetails(): {
            title: string;
            description: string;
            value: any;
        }[];
        getPriceInfo(): ({
            title: string;
            value: string;
            isToggleShown: boolean;
            isHidden?: undefined;
            tooltip?: undefined;
            onClick?: undefined;
        } | {
            title: string;
            value: string;
            isHidden: boolean;
            isToggleShown?: undefined;
            tooltip?: undefined;
            onClick?: undefined;
        } | {
            title: string;
            value: string;
            isToggleShown?: undefined;
            isHidden?: undefined;
            tooltip?: undefined;
            onClick?: undefined;
        } | {
            title: string;
            value: string;
            tooltip: any;
            onClick: () => void;
            isToggleShown?: undefined;
            isHidden?: undefined;
        })[];
        onUpdateEstimatedPosition: (isFrom: boolean, reverseRouting?: boolean) => void;
        isEstimated: (tokenPosition: string, strict?: boolean) => boolean;
        getBalance(token?: ITokenObject): any;
        updateBalance(): Promise<void>;
        private setSwapButtonText;
        getSwapButtonText(): string;
        getWarningMessageText(): string;
        setMapStatus(type: StatusMapType, key: string, status: ApprovalStatus): void;
        onSwapConfirming: (key: any) => void;
        onSwapConfirmed: (data: any) => Promise<void>;
        isButtonLoading(): boolean;
        isSwapButtonDisabled(): boolean;
        get bestSmartRoute(): any;
        get hasRegisterPair(): any;
        get pairs(): any;
        get isRegisteringPair(): any;
        registerPairButtonStatus: (pair: any) => any;
        renderRegisterPairUI(): void;
        onClickSwapButton(): void;
        onSubmit: () => Promise<void>;
        onApproveRouterMax: () => void;
        onSetMaxBalance: (value?: number) => Promise<void>;
        isMaxDisabled: () => boolean;
        onSliderChange(source: Control, event: Event): void;
        onUpdateSliderValue(value?: number): void;
        onRenderIconList(): Promise<void>;
        onRenderPriceInfo(): void;
        private onRefresh;
        private onSetting;
        get isMetaMask(): boolean;
        getSupportedChainList: () => void;
        disableSelectChain: (disabled: boolean, isDes?: boolean) => void;
        selectSourceChain: (obj: INetwork, img?: Image) => Promise<void>;
        setTargetTokenList: (isDisabled?: boolean) => void;
        onSourceChainChanged: () => void;
        onSelectSourceChain: (obj: INetwork, img?: Image) => Promise<void>;
        setDefaultChain: () => Promise<void>;
        initChainIcon: (network: INetwork) => void;
        updateSrcChainIconList: () => void;
        onRenderChainList: () => Promise<void>;
        showModalFees: () => void;
        closeModalFees: () => void;
        onRegister: () => void;
        private showResultMessage;
        private initExpertModal;
        private showNetworkErrModal;
        private closeNetworkErrModal;
        private initData;
        init(): Promise<void>;
        render(): any;
    }
}