import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IPoolAddressesProviderRegistry, IPoolAddressesProviderRegistryInterface } from "../../interfaces/IPoolAddressesProviderRegistry";
export declare class IPoolAddressesProviderRegistry__factory {
    static readonly abi: ({
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
    static createInterface(): IPoolAddressesProviderRegistryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPoolAddressesProviderRegistry;
}
//# sourceMappingURL=IPoolAddressesProviderRegistry__factory.d.ts.map