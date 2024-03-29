"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAaveIncentivesController__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "totalSupply",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "userBalance",
                type: "uint256",
            },
        ],
        name: "handleAction",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IAaveIncentivesController__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IAaveIncentivesController__factory = IAaveIncentivesController__factory;
IAaveIncentivesController__factory.abi = _abi;
