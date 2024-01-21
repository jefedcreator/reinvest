"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MintableDelegationERC20__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "string",
                name: "symbol",
                type: "string",
            },
            {
                internalType: "uint8",
                name: "decimals",
                type: "uint8",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
        ],
        name: "allowance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "approve",
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
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
            },
        ],
        name: "decreaseAllowance",
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
    {
        inputs: [
            {
                internalType: "address",
                name: "delegateeAddress",
                type: "address",
            },
        ],
        name: "delegate",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "delegatee",
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
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256",
            },
        ],
        name: "increaseAllowance",
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
    {
        inputs: [
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "mint",
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
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transfer",
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
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transferFrom",
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
const _bytecode = "0x60806040523480156200001157600080fd5b5060405162000f5738038062000f578339810160408190526200003491620001f1565b8251839083906200004d9060039060208501906200007e565b508051620000639060049060208401906200007e565b50506005805460ff191660ff841617905550505050620002b3565b8280546200008c9062000276565b90600052602060002090601f016020900481019282620000b05760008555620000fb565b82601f10620000cb57805160ff1916838001178555620000fb565b82800160010185558215620000fb579182015b82811115620000fb578251825591602001919060010190620000de565b50620001099291506200010d565b5090565b5b808211156200010957600081556001016200010e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200014c57600080fd5b81516001600160401b038082111562000169576200016962000124565b604051601f8301601f19908116603f0116810190828211818310171562000194576200019462000124565b81604052838152602092508683858801011115620001b157600080fd5b600091505b83821015620001d55785820183015181830184015290820190620001b6565b83821115620001e75760008385830101525b9695505050505050565b6000806000606084860312156200020757600080fd5b83516001600160401b03808211156200021f57600080fd5b6200022d878388016200013a565b945060208601519150808211156200024457600080fd5b5062000253868287016200013a565b925050604084015160ff811681146200026b57600080fd5b809150509250925092565b600181811c908216806200028b57607f821691505b60208210811415620002ad57634e487b7160e01b600052602260045260246000fd5b50919050565b610c9480620002c36000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80635c19a95c1161008c578063a0712d6811610066578063a0712d6814610261578063a457c2d714610274578063a9059cbb14610287578063dd62ed3e1461029a57600080fd5b80635c19a95c146101c757806370a082311461022357806395d89b411461025957600080fd5b80631e31d053116100c85780631e31d0531461014257806323b872dd1461018c578063313ce5671461019f57806339509351146101b457600080fd5b806306fdde03146100ef578063095ea7b31461010d57806318160ddd14610130575b600080fd5b6100f76102e0565b6040516101049190610a27565b60405180910390f35b61012061011b366004610ac3565b610372565b6040519015158152602001610104565b6002545b604051908152602001610104565b60055461016790610100900473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610104565b61012061019a366004610aed565b610389565b60055460405160ff9091168152602001610104565b6101206101c2366004610ac3565b6103ff565b6102216101d5366004610b29565b6005805473ffffffffffffffffffffffffffffffffffffffff909216610100027fffffffffffffffffffffff0000000000000000000000000000000000000000ff909216919091179055565b005b610134610231366004610b29565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b6100f7610442565b61012061026f366004610b4b565b610451565b610120610282366004610ac3565b610465565b610120610295366004610ac3565b6104c1565b6101346102a8366004610b64565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b6060600380546102ef90610b97565b80601f016020809104026020016040519081016040528092919081815260200182805461031b90610b97565b80156103685780601f1061033d57610100808354040283529160200191610368565b820191906000526020600020905b81548152906001019060200180831161034b57829003601f168201915b5050505050905090565b600061037f3384846104ce565b5060015b92915050565b6000610396848484610687565b6103f584336103f085604051806060016040528060288152602001610c126028913973ffffffffffffffffffffffffffffffffffffffff8a16600090815260016020908152604080832033845290915290205491906108b1565b6104ce565b5060019392505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152812054909161037f9185906103f090866108f8565b6060600480546102ef90610b97565b600061045d3383610908565b506001919050565b600061037f33846103f085604051806060016040528060258152602001610c3a6025913933600090815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8d16845290915290205491906108b1565b600061037f338484610687565b73ffffffffffffffffffffffffffffffffffffffff8316610575576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610618576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015260840161056c565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff831661072a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161056c565b73ffffffffffffffffffffffffffffffffffffffff82166107cd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015260840161056c565b61081781604051806060016040528060268152602001610bec6026913973ffffffffffffffffffffffffffffffffffffffff861660009081526020819052604090205491906108b1565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260208190526040808220939093559084168152205461085390826108f8565b73ffffffffffffffffffffffffffffffffffffffff8381166000818152602081815260409182902094909455518481529092918616917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910161067a565b81830381848211156108f0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056c9190610a27565b509392505050565b8082018281101561038357600080fd5b73ffffffffffffffffffffffffffffffffffffffff8216610985576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161056c565b60025461099290826108f8565b60025573ffffffffffffffffffffffffffffffffffffffff82166000908152602081905260409020546109c590826108f8565b73ffffffffffffffffffffffffffffffffffffffff8316600081815260208181526040808320949094559251848152919290917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b600060208083528351808285015260005b81811015610a5457858101830151858201604001528201610a38565b81811115610a66576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610abe57600080fd5b919050565b60008060408385031215610ad657600080fd5b610adf83610a9a565b946020939093013593505050565b600080600060608486031215610b0257600080fd5b610b0b84610a9a565b9250610b1960208501610a9a565b9150604084013590509250925092565b600060208284031215610b3b57600080fd5b610b4482610a9a565b9392505050565b600060208284031215610b5d57600080fd5b5035919050565b60008060408385031215610b7757600080fd5b610b8083610a9a565b9150610b8e60208401610a9a565b90509250929050565b600181811c90821680610bab57607f821691505b60208210811415610be5577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b5091905056fe45524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220cc8a39299f88be585ccde726fbb1c1b28e7423c855cc5b451b518f8f6e5db47e64736f6c634300080a0033";
const isSuperArgs = (xs) => xs.length > 1;
class MintableDelegationERC20__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(name, symbol, decimals, overrides) {
        return super.deploy(name, symbol, decimals, overrides || {});
    }
    getDeployTransaction(name, symbol, decimals, overrides) {
        return super.getDeployTransaction(name, symbol, decimals, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.MintableDelegationERC20__factory = MintableDelegationERC20__factory;
MintableDelegationERC20__factory.bytecode = _bytecode;
MintableDelegationERC20__factory.abi = _abi;
