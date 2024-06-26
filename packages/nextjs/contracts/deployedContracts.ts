/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  31337: {
    Bar: {
      address: "0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "string",
              name: "message",
              type: "string",
            },
          ],
          name: "Log",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "LogBytes",
          type: "event",
        },
        {
          inputs: [],
          name: "foo",
          outputs: [
            {
              internalType: "contract Foo",
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
              internalType: "uint256",
              name: "_i",
              type: "uint256",
            },
          ],
          name: "tryCatchExternalCall",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_owner",
              type: "address",
            },
          ],
          name: "tryCatchNewContract",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
    Car: {
      address: "0x0165878A594ca255338adfa4d48449f69242Eb8F",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_owner",
              type: "address",
            },
            {
              internalType: "string",
              name: "_model",
              type: "string",
            },
          ],
          stateMutability: "payable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "carAddr",
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
          name: "model",
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
          name: "owner",
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
      ],
      inheritedFunctions: {},
    },
    CarFactory: {
      address: "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853",
      abi: [
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "cars",
          outputs: [
            {
              internalType: "contract Car",
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
              name: "_owner",
              type: "address",
            },
            {
              internalType: "string",
              name: "_model",
              type: "string",
            },
          ],
          name: "create",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_owner",
              type: "address",
            },
            {
              internalType: "string",
              name: "_model",
              type: "string",
            },
            {
              internalType: "bytes32",
              name: "_salt",
              type: "bytes32",
            },
          ],
          name: "create2",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_owner",
              type: "address",
            },
            {
              internalType: "string",
              name: "_model",
              type: "string",
            },
            {
              internalType: "bytes32",
              name: "_salt",
              type: "bytes32",
            },
          ],
          name: "create2AndSendEther",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_owner",
              type: "address",
            },
            {
              internalType: "string",
              name: "_model",
              type: "string",
            },
          ],
          name: "createAndSendEther",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_index",
              type: "uint256",
            },
          ],
          name: "getCar",
          outputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "string",
              name: "model",
              type: "string",
            },
            {
              internalType: "address",
              name: "carAddr",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "balance",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
    Foo: {
      address: "0x3Aa5ebB10DC797CAC828524e59A333d0A371443c",
      abi: [
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
      ],
      inheritedFunctions: {},
    },
    Import: {
      address: "0xc6e7DF5E7b4f2A278906862b61205850344D4e7d",
      abi: [
        {
          inputs: [],
          name: "foo",
          outputs: [
            {
              internalType: "contract Foo",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getFooName",
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
      ],
      inheritedFunctions: {},
    },
    MyContract: {
      address: "0x68B1D87F95878fE05B998F19b66F4baba5De1aed",
      abi: [
        {
          inputs: [],
          name: "greeting",
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
      ],
      inheritedFunctions: {},
    },
    YourContract: {
      address: "0x9A9f2CCfdE556A7E9Ff0848998Aa4a0CFD8863AE",
      abi: [
        {
          inputs: [],
          name: "greeting",
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
          stateMutability: "payable",
          type: "receive",
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
