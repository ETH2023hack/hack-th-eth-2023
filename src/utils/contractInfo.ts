export const contractAddress: `0x${string}`[] = [
  "0x949EeF6D73417ce4792ed611eC1c13165EC40C5E",
  "0x77F04C8944241F411E9D6e9EC6245364a0752e19",
];

export const contractABI = [
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
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "solver",
        type: "address",
      },
    ],
    name: "PuzzleSolved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "_initialAnswers",
        type: "bytes32[]",
      },
    ],
    name: "addInitialAnswers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_level",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "funcCanAttemptLevel",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "participantLevels",
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
        internalType: "uint256",
        name: "_level",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_solution",
        type: "string",
      },
    ],
    name: "submitSolution",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
