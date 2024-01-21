import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface IAaveOracleInterface extends utils.Interface {
    functions: {
        "ADDRESSES_PROVIDER()": FunctionFragment;
        "BASE_CURRENCY()": FunctionFragment;
        "BASE_CURRENCY_UNIT()": FunctionFragment;
        "getAssetPrice(address)": FunctionFragment;
        "getAssetsPrices(address[])": FunctionFragment;
        "getFallbackOracle()": FunctionFragment;
        "getSourceOfAsset(address)": FunctionFragment;
        "setAssetSources(address[],address[])": FunctionFragment;
        "setFallbackOracle(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ADDRESSES_PROVIDER" | "BASE_CURRENCY" | "BASE_CURRENCY_UNIT" | "getAssetPrice" | "getAssetsPrices" | "getFallbackOracle" | "getSourceOfAsset" | "setAssetSources" | "setFallbackOracle"): FunctionFragment;
    encodeFunctionData(functionFragment: "ADDRESSES_PROVIDER", values?: undefined): string;
    encodeFunctionData(functionFragment: "BASE_CURRENCY", values?: undefined): string;
    encodeFunctionData(functionFragment: "BASE_CURRENCY_UNIT", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAssetPrice", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getAssetsPrices", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "getFallbackOracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "getSourceOfAsset", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setAssetSources", values: [PromiseOrValue<string>[], PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "setFallbackOracle", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "ADDRESSES_PROVIDER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "BASE_CURRENCY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "BASE_CURRENCY_UNIT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetsPrices", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFallbackOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSourceOfAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAssetSources", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFallbackOracle", data: BytesLike): Result;
    events: {
        "AssetSourceUpdated(address,address)": EventFragment;
        "BaseCurrencySet(address,uint256)": EventFragment;
        "FallbackOracleUpdated(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AssetSourceUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BaseCurrencySet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FallbackOracleUpdated"): EventFragment;
}
export interface AssetSourceUpdatedEventObject {
    asset: string;
    source: string;
}
export type AssetSourceUpdatedEvent = TypedEvent<[
    string,
    string
], AssetSourceUpdatedEventObject>;
export type AssetSourceUpdatedEventFilter = TypedEventFilter<AssetSourceUpdatedEvent>;
export interface BaseCurrencySetEventObject {
    baseCurrency: string;
    baseCurrencyUnit: BigNumber;
}
export type BaseCurrencySetEvent = TypedEvent<[
    string,
    BigNumber
], BaseCurrencySetEventObject>;
export type BaseCurrencySetEventFilter = TypedEventFilter<BaseCurrencySetEvent>;
export interface FallbackOracleUpdatedEventObject {
    fallbackOracle: string;
}
export type FallbackOracleUpdatedEvent = TypedEvent<[
    string
], FallbackOracleUpdatedEventObject>;
export type FallbackOracleUpdatedEventFilter = TypedEventFilter<FallbackOracleUpdatedEvent>;
export interface IAaveOracle extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IAaveOracleInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<[string]>;
        BASE_CURRENCY(overrides?: CallOverrides): Promise<[string]>;
        BASE_CURRENCY_UNIT(overrides?: CallOverrides): Promise<[BigNumber]>;
        getAssetPrice(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getAssetsPrices(assets: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<[BigNumber[]]>;
        getFallbackOracle(overrides?: CallOverrides): Promise<[string]>;
        getSourceOfAsset(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        setAssetSources(assets: PromiseOrValue<string>[], sources: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFallbackOracle(fallbackOracle: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;
    BASE_CURRENCY(overrides?: CallOverrides): Promise<string>;
    BASE_CURRENCY_UNIT(overrides?: CallOverrides): Promise<BigNumber>;
    getAssetPrice(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getAssetsPrices(assets: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber[]>;
    getFallbackOracle(overrides?: CallOverrides): Promise<string>;
    getSourceOfAsset(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    setAssetSources(assets: PromiseOrValue<string>[], sources: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFallbackOracle(fallbackOracle: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;
        BASE_CURRENCY(overrides?: CallOverrides): Promise<string>;
        BASE_CURRENCY_UNIT(overrides?: CallOverrides): Promise<BigNumber>;
        getAssetPrice(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetsPrices(assets: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber[]>;
        getFallbackOracle(overrides?: CallOverrides): Promise<string>;
        getSourceOfAsset(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        setAssetSources(assets: PromiseOrValue<string>[], sources: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        setFallbackOracle(fallbackOracle: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AssetSourceUpdated(address,address)"(asset?: PromiseOrValue<string> | null, source?: PromiseOrValue<string> | null): AssetSourceUpdatedEventFilter;
        AssetSourceUpdated(asset?: PromiseOrValue<string> | null, source?: PromiseOrValue<string> | null): AssetSourceUpdatedEventFilter;
        "BaseCurrencySet(address,uint256)"(baseCurrency?: PromiseOrValue<string> | null, baseCurrencyUnit?: null): BaseCurrencySetEventFilter;
        BaseCurrencySet(baseCurrency?: PromiseOrValue<string> | null, baseCurrencyUnit?: null): BaseCurrencySetEventFilter;
        "FallbackOracleUpdated(address)"(fallbackOracle?: PromiseOrValue<string> | null): FallbackOracleUpdatedEventFilter;
        FallbackOracleUpdated(fallbackOracle?: PromiseOrValue<string> | null): FallbackOracleUpdatedEventFilter;
    };
    estimateGas: {
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<BigNumber>;
        BASE_CURRENCY(overrides?: CallOverrides): Promise<BigNumber>;
        BASE_CURRENCY_UNIT(overrides?: CallOverrides): Promise<BigNumber>;
        getAssetPrice(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetsPrices(assets: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber>;
        getFallbackOracle(overrides?: CallOverrides): Promise<BigNumber>;
        getSourceOfAsset(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        setAssetSources(assets: PromiseOrValue<string>[], sources: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFallbackOracle(fallbackOracle: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        BASE_CURRENCY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        BASE_CURRENCY_UNIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssetPrice(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssetsPrices(assets: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFallbackOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSourceOfAsset(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAssetSources(assets: PromiseOrValue<string>[], sources: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFallbackOracle(fallbackOracle: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IAaveOracle.d.ts.map