"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlashLoanSimpleReceiverBase__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "ADDRESSES_PROVIDER",
        outputs: [
            {
                internalType: "contract IPoolAddressesProvider",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "POOL",
        outputs: [
            {
                internalType: "contract IPool",
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
                name: "asset",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "premium",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "initiator",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "params",
                type: "bytes",
            },
        ],
        name: "executeOperation",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class FlashLoanSimpleReceiverBase__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.FlashLoanSimpleReceiverBase__factory = FlashLoanSimpleReceiverBase__factory;
FlashLoanSimpleReceiverBase__factory.abi = _abi;
