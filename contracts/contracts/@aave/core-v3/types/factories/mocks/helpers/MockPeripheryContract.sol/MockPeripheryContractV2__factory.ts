/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  MockPeripheryContractV2,
  MockPeripheryContractV2Interface,
} from "../../../../mocks/helpers/MockPeripheryContract.sol/MockPeripheryContractV2";

const _abi = [
  {
    inputs: [],
    name: "getAddressesProvider",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getManager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addressesProvider",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newManager",
        type: "address",
      },
    ],
    name: "setManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506101d1806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063c4d66de814610051578063d0ebdbe7146100a8578063d5009584146100fd578063fe65acfe14610140575b600080fd5b6100a661005f36600461015e565b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b005b6100a66100b636600461015e565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60005473ffffffffffffffffffffffffffffffffffffffff165b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b60025473ffffffffffffffffffffffffffffffffffffffff16610117565b60006020828403121561017057600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461019457600080fd5b939250505056fea2646970667358221220480da6d567b3f95d6c6793603abe9eccd2e4d5ab3ea777a9934b1e885db6e56464736f6c634300080a0033";

type MockPeripheryContractV2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockPeripheryContractV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockPeripheryContractV2__factory extends ContractFactory {
  constructor(...args: MockPeripheryContractV2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockPeripheryContractV2> {
    return super.deploy(overrides || {}) as Promise<MockPeripheryContractV2>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MockPeripheryContractV2 {
    return super.attach(address) as MockPeripheryContractV2;
  }
  override connect(signer: Signer): MockPeripheryContractV2__factory {
    return super.connect(signer) as MockPeripheryContractV2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockPeripheryContractV2Interface {
    return new utils.Interface(_abi) as MockPeripheryContractV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockPeripheryContractV2 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockPeripheryContractV2;
  }
}