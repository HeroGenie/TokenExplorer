const finToken = {
  "contractName": "FinToken",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x06fdde03"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x095ea7b3"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x18160ddd"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "pausedPublic",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x24bb7c26"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x313ce567"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "pausedOwnerAdmin",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x64779ad7"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseApproval",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x66188463"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x70a08231"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x8da5cb5b"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x95d89b41"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseApproval",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xd73dd623"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xdd62ed3e"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newPausedPublic",
          "type": "bool"
        },
        {
          "name": "newPausedOwnerAdmin",
          "type": "bool"
        }
      ],
      "name": "pause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xddeb5094"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xf2fde38b"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "admin",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xf851a440"
    },
    {
      "inputs": [
        {
          "name": "_admin",
          "type": "address"
        },
        {
          "name": "_totalTokenAmount",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor",
      "signature": "constructor"
    },
    {
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_burner",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "Burn",
      "type": "event",
      "signature": "0xcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousAdmin",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newAdmin",
          "type": "address"
        }
      ],
      "name": "AdminTransferred",
      "type": "event",
      "signature": "0xf8ccb027dfcd135e000e9d45e6cc2d662578a8825d4c45b5e32e0adf67e79ec6"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "newState",
          "type": "bool"
        }
      ],
      "name": "PausePublic",
      "type": "event",
      "signature": "0xa14d191ca4f53bfcf003c65d429362010a2d3d68bc0c50cce4bdc0fccf661fb0"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "newState",
          "type": "bool"
        }
      ],
      "name": "PauseOwnerAdmin",
      "type": "event",
      "signature": "0xc77636fc4a62a1fa193ef538c0b7993a1313a0d9c0a9173058cebcd3239ef7b5"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event",
      "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event",
      "signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event",
      "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getTime",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x557ed1ba"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xa9059cbb"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x23b872dd"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_addr",
          "type": "address"
        }
      ],
      "name": "getLockFundsReleaseTime",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x2fffb3f9"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newInvestorList",
          "type": "address[]"
        },
        {
          "name": "releaseTime",
          "type": "uint256"
        }
      ],
      "name": "setLockFunds",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x1a1dca07"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "investorList",
          "type": "address[]"
        }
      ],
      "name": "removeLockFunds",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x7e60a4bf"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newInvestor",
          "type": "address"
        },
        {
          "name": "releaseTime",
          "type": "uint256"
        }
      ],
      "name": "setLockFund",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xf525dcf1"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "investor",
          "type": "address"
        }
      ],
      "name": "removeLockFund",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xd945799f"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x42966c68"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "burnFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x79cc6790"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "token",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "emergencyERC20Drain",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xdb0e16f1"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newAdmin",
          "type": "address"
        }
      ],
      "name": "changeAdmin",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x8f283970"
    }
  ],
  "bytecode": "0x60606040526001600360146101000a81548160ff0219169083151502179055506000600360156101000a81548160ff021916908315150217905550341561004557600080fd5b604051604080612a8b8339810160405280805190602001909190805190602001909190505033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060008190555080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a350506128dd806101ae6000396000f30060606040526004361061015f576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde0314610164578063095ea7b3146101f257806318160ddd1461024c5780631a1dca071461027557806323b872dd146102d857806324bb7c26146103515780632fffb3f91461037e578063313ce567146103cb57806342966c68146103fa578063557ed1ba1461043557806364779ad71461045e578063661884631461048b57806370a08231146104e557806379cc6790146105325780637e60a4bf1461058c5780638da5cb5b146105e65780638f2839701461063b57806395d89b4114610674578063a9059cbb14610702578063d73dd6231461075c578063d945799f146107b6578063db0e16f1146107ef578063dd62ed3e14610831578063ddeb50941461089d578063f2fde38b146108cd578063f525dcf114610906578063f851a44014610948575b600080fd5b341561016f57600080fd5b61017761099d565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101b757808201518184015260208101905061019c565b50505050905090810190601f1680156101e45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156101fd57600080fd5b610232600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506109d6565b604051808215151515815260200191505060405180910390f35b341561025757600080fd5b61025f610ad4565b6040518082815260200191505060405180910390f35b341561028057600080fd5b6102d6600480803590602001908201803590602001908080602002602001604051908101604052809392919081815260200183836020028082843782019150505050505091908035906020019091905050610ada565b005b34156102e357600080fd5b610337600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610bc8565b604051808215151515815260200191505060405180910390f35b341561035c57600080fd5b610364610c88565b604051808215151515815260200191505060405180910390f35b341561038957600080fd5b6103b5600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610c9b565b6040518082815260200191505060405180910390f35b34156103d657600080fd5b6103de610ce4565b604051808260ff1660ff16815260200191505060405180910390f35b341561040557600080fd5b61041b6004808035906020019091905050610ce9565b604051808215151515815260200191505060405180910390f35b341561044057600080fd5b610448610eb4565b6040518082815260200191505060405180910390f35b341561046957600080fd5b610471610ebc565b604051808215151515815260200191505060405180910390f35b341561049657600080fd5b6104cb600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610ecf565b604051808215151515815260200191505060405180910390f35b34156104f057600080fd5b61051c600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610fcd565b6040518082815260200191505060405180910390f35b341561053d57600080fd5b610572600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050611016565b604051808215151515815260200191505060405180910390f35b341561059757600080fd5b6105e4600480803590602001908201803590602001908080602002602001604051908101604052809392919081815260200183836020028082843782019150505050505091905050611098565b005b34156105f157600080fd5b6105f96111cb565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561064657600080fd5b610672600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506111f1565b005b341561067f57600080fd5b61068761130d565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156106c75780820151818401526020810190506106ac565b50505050905090810190601f1680156106f45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561070d57600080fd5b610742600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050611346565b604051808215151515815260200191505060405180910390f35b341561076757600080fd5b61079c600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506113e6565b604051808215151515815260200191505060405180910390f35b34156107c157600080fd5b6107ed600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506114e4565b005b34156107fa57600080fd5b61082f600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506115cb565b005b341561083c57600080fd5b610887600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611714565b6040518082815260200191505060405180910390f35b34156108a857600080fd5b6108cb60048080351515906020019091908035151590602001909190505061179b565b005b34156108d857600080fd5b610904600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506118c9565b005b341561091157600080fd5b610946600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050611a21565b005b341561095357600080fd5b61095b611ada565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6040805190810160405280601681526020017f4675656c20496e6a656374696f6e204e6574776f726b0000000000000000000081525081565b6000600360149054906101000a900460ff1615610ac257600360159054906101000a900460ff161515610abc57600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610aac5750600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b1515610ab757600080fd5b610ac1565b600080fd5b5b610acc8383611b00565b905092915050565b60005481565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610b3857600080fd5b610b40610eb4565b82111515610b4d57600080fd5b600090505b8251811015610bc35781600560008584815181101515610b6e57fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508080600101915050610b52565b505050565b6000610bd2611bf2565b1515610bdd57600080fd5b82600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610c1a57600080fd5b3073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610c5557600080fd5b610c5e85610c9b565b610c66610eb4565b10151515610c7357600080fd5b610c7e858585611c0c565b9150509392505050565b600360149054906101000a900460ff1681565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b601281565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610d4757600080fd5b610d9982600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611d0c90919063ffffffff16565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610df182600054611d0c90919063ffffffff16565b6000819055503373ffffffffffffffffffffffffffffffffffffffff167fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5836040518082815260200191505060405180910390a2600073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a360019050919050565b600042905090565b600360159054906101000a900460ff1681565b6000600360149054906101000a900460ff1615610fbb57600360159054906101000a900460ff161515610fb557600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610fa55750600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b1515610fb057600080fd5b610fba565b600080fd5b5b610fc58383611d25565b905092915050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561107457600080fd5b61107f833384610bc8565b151561108757fe5b61109082610ce9565b905092915050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156110f657600080fd5b600090505b81518110156111c757600060056000848481518110151561111857fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060056000838381518110151561117257fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000905580806001019150506110fb565b5050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561124d57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8ccb027dfcd135e000e9d45e6cc2d662578a8825d4c45b5e32e0adf67e79ec660405160405180910390a380600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6040805190810160405280600381526020017f46494e000000000000000000000000000000000000000000000000000000000081525081565b6000611350611bf2565b151561135b57600080fd5b82600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561139857600080fd5b3073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156113d357600080fd5b6113dd8484611fb6565b91505092915050565b6000600360149054906101000a900460ff16156114d257600360159054906101000a900460ff1615156114cc57600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806114bc5750600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b15156114c757600080fd5b6114d1565b600080fd5b5b6114dc83836120b4565b905092915050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561154057600080fd5b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000905550565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561162757600080fd5b8173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15156116f457600080fd5b6102c65a03f1151561170557600080fd5b50505060405180519050505050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156117f757600080fd5b6000151582151514801561180f575060011515811515145b15151561181b57600080fd5b81600360146101000a81548160ff02191690831515021790555080600360156101000a81548160ff0219169083151502179055507fa14d191ca4f53bfcf003c65d429362010a2d3d68bc0c50cce4bdc0fccf661fb082604051808215151515815260200191505060405180910390a17fc77636fc4a62a1fa193ef538c0b7993a1313a0d9c0a9173058cebcd3239ef7b581604051808215151515815260200191505060405180910390a15050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561192557600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561196157600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611a7d57600080fd5b611a85610eb4565b81111515611a9257600080fd5b80600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000611bfd33610c9b565b611c05610eb4565b1015905090565b6000600360149054906101000a900460ff1615611cf857600360159054906101000a900460ff161515611cf257600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480611ce25750600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b1515611ced57600080fd5b611cf7565b600080fd5b5b611d038484846122b0565b90509392505050565b6000828211151515611d1a57fe5b818303905092915050565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905080831115611e36576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611eca565b611e498382611d0c90919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b6000600360149054906101000a900460ff16156120a257600360159054906101000a900460ff16151561209c57600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061208c5750600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b151561209757600080fd5b6120a1565b600080fd5b5b6120ac838361266f565b905092915050565b600061214582600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461289390919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156122ed57600080fd5b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561233b57600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156123c657600080fd5b61241882600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611d0c90919063ffffffff16565b600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506124ad82600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461289390919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061257f82600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611d0c90919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156126ac57600080fd5b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156126fa57600080fd5b61274c82600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611d0c90919063ffffffff16565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506127e182600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461289390919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b60008082840190508381101515156128a757fe5b80915050929150505600a165627a7a7230582054de54ab93b928e866e1ebc1e78ffe80a12c4caf17918b74a8c12301d6cc77180029",
  "deployedBytecode": "0x60606040526004361061015f576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde0314610164578063095ea7b3146101f257806318160ddd1461024c5780631a1dca071461027557806323b872dd146102d857806324bb7c26146103515780632fffb3f91461037e578063313ce567146103cb57806342966c68146103fa578063557ed1ba1461043557806364779ad71461045e578063661884631461048b57806370a08231146104e557806379cc6790146105325780637e60a4bf1461058c5780638da5cb5b146105e65780638f2839701461063b57806395d89b4114610674578063a9059cbb14610702578063d73dd6231461075c578063d945799f146107b6578063db0e16f1146107ef578063dd62ed3e14610831578063ddeb50941461089d578063f2fde38b146108cd578063f525dcf114610906578063f851a44014610948575b600080fd5b341561016f57600080fd5b61017761099d565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101b757808201518184015260208101905061019c565b50505050905090810190601f1680156101e45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156101fd57600080fd5b610232600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506109d6565b604051808215151515815260200191505060405180910390f35b341561025757600080fd5b61025f610ad4565b6040518082815260200191505060405180910390f35b341561028057600080fd5b6102d6600480803590602001908201803590602001908080602002602001604051908101604052809392919081815260200183836020028082843782019150505050505091908035906020019091905050610ada565b005b34156102e357600080fd5b610337600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610bc8565b604051808215151515815260200191505060405180910390f35b341561035c57600080fd5b610364610c88565b604051808215151515815260200191505060405180910390f35b341561038957600080fd5b6103b5600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610c9b565b6040518082815260200191505060405180910390f35b34156103d657600080fd5b6103de610ce4565b604051808260ff1660ff16815260200191505060405180910390f35b341561040557600080fd5b61041b6004808035906020019091905050610ce9565b604051808215151515815260200191505060405180910390f35b341561044057600080fd5b610448610eb4565b6040518082815260200191505060405180910390f35b341561046957600080fd5b610471610ebc565b604051808215151515815260200191505060405180910390f35b341561049657600080fd5b6104cb600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610ecf565b604051808215151515815260200191505060405180910390f35b34156104f057600080fd5b61051c600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610fcd565b6040518082815260200191505060405180910390f35b341561053d57600080fd5b610572600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050611016565b604051808215151515815260200191505060405180910390f35b341561059757600080fd5b6105e4600480803590602001908201803590602001908080602002602001604051908101604052809392919081815260200183836020028082843782019150505050505091905050611098565b005b34156105f157600080fd5b6105f96111cb565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561064657600080fd5b610672600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506111f1565b005b341561067f57600080fd5b61068761130d565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156106c75780820151818401526020810190506106ac565b50505050905090810190601f1680156106f45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561070d57600080fd5b610742600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050611346565b604051808215151515815260200191505060405180910390f35b341561076757600080fd5b61079c600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506113e6565b604051808215151515815260200191505060405180910390f35b34156107c157600080fd5b6107ed600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506114e4565b005b34156107fa57600080fd5b61082f600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506115cb565b005b341561083c57600080fd5b610887600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611714565b6040518082815260200191505060405180910390f35b34156108a857600080fd5b6108cb60048080351515906020019091908035151590602001909190505061179b565b005b34156108d857600080fd5b610904600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506118c9565b005b341561091157600080fd5b610946600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050611a21565b005b341561095357600080fd5b61095b611ada565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6040805190810160405280601681526020017f4675656c20496e6a656374696f6e204e6574776f726b0000000000000000000081525081565b6000600360149054906101000a900460ff1615610ac257600360159054906101000a900460ff161515610abc57600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610aac5750600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b1515610ab757600080fd5b610ac1565b600080fd5b5b610acc8383611b00565b905092915050565b60005481565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610b3857600080fd5b610b40610eb4565b82111515610b4d57600080fd5b600090505b8251811015610bc35781600560008584815181101515610b6e57fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508080600101915050610b52565b505050565b6000610bd2611bf2565b1515610bdd57600080fd5b82600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610c1a57600080fd5b3073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610c5557600080fd5b610c5e85610c9b565b610c66610eb4565b10151515610c7357600080fd5b610c7e858585611c0c565b9150509392505050565b600360149054906101000a900460ff1681565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b601281565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610d4757600080fd5b610d9982600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611d0c90919063ffffffff16565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610df182600054611d0c90919063ffffffff16565b6000819055503373ffffffffffffffffffffffffffffffffffffffff167fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5836040518082815260200191505060405180910390a2600073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a360019050919050565b600042905090565b600360159054906101000a900460ff1681565b6000600360149054906101000a900460ff1615610fbb57600360159054906101000a900460ff161515610fb557600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610fa55750600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b1515610fb057600080fd5b610fba565b600080fd5b5b610fc58383611d25565b905092915050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561107457600080fd5b61107f833384610bc8565b151561108757fe5b61109082610ce9565b905092915050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156110f657600080fd5b600090505b81518110156111c757600060056000848481518110151561111857fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060056000838381518110151561117257fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000905580806001019150506110fb565b5050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561124d57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8ccb027dfcd135e000e9d45e6cc2d662578a8825d4c45b5e32e0adf67e79ec660405160405180910390a380600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6040805190810160405280600381526020017f46494e000000000000000000000000000000000000000000000000000000000081525081565b6000611350611bf2565b151561135b57600080fd5b82600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561139857600080fd5b3073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156113d357600080fd5b6113dd8484611fb6565b91505092915050565b6000600360149054906101000a900460ff16156114d257600360159054906101000a900460ff1615156114cc57600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806114bc5750600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b15156114c757600080fd5b6114d1565b600080fd5b5b6114dc83836120b4565b905092915050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561154057600080fd5b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000905550565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561162757600080fd5b8173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15156116f457600080fd5b6102c65a03f1151561170557600080fd5b50505060405180519050505050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156117f757600080fd5b6000151582151514801561180f575060011515811515145b15151561181b57600080fd5b81600360146101000a81548160ff02191690831515021790555080600360156101000a81548160ff0219169083151502179055507fa14d191ca4f53bfcf003c65d429362010a2d3d68bc0c50cce4bdc0fccf661fb082604051808215151515815260200191505060405180910390a17fc77636fc4a62a1fa193ef538c0b7993a1313a0d9c0a9173058cebcd3239ef7b581604051808215151515815260200191505060405180910390a15050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561192557600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561196157600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611a7d57600080fd5b611a85610eb4565b81111515611a9257600080fd5b80600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000611bfd33610c9b565b611c05610eb4565b1015905090565b6000600360149054906101000a900460ff1615611cf857600360159054906101000a900460ff161515611cf257600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480611ce25750600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b1515611ced57600080fd5b611cf7565b600080fd5b5b611d038484846122b0565b90509392505050565b6000828211151515611d1a57fe5b818303905092915050565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905080831115611e36576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611eca565b611e498382611d0c90919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b6000600360149054906101000a900460ff16156120a257600360159054906101000a900460ff16151561209c57600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061208c5750600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b151561209757600080fd5b6120a1565b600080fd5b5b6120ac838361266f565b905092915050565b600061214582600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461289390919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156122ed57600080fd5b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561233b57600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156123c657600080fd5b61241882600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611d0c90919063ffffffff16565b600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506124ad82600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461289390919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061257f82600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611d0c90919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156126ac57600080fd5b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156126fa57600080fd5b61274c82600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611d0c90919063ffffffff16565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506127e182600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461289390919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b60008082840190508381101515156128a757fe5b80915050929150505600a165627a7a7230582054de54ab93b928e866e1ebc1e78ffe80a12c4caf17918b74a8c12301d6cc77180029",
  "sourceMap": "71:3447:0:-;;;199:4:2;172:31;;;;;;;;;;;;;;;;;;;;238:5;207:36;;;;;;;;;;;;;;;;;;;;325:253:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;203:10:4;195:5;;:18;;;;;;;;;;;;;;;;;;410:6:0;402:5;;:14;;;;;;;;;;;;;;;;;;441:17;427:11;:31;;;;491:17;468:8;:20;477:10;468:20;;;;;;;;;;;;;;;:40;;;;541:10;518:53;;535:3;518:53;;;553:17;518:53;;;;;;;;;;;;;;;;;;325:253;;71:3447;;;;;;",
  "deployedSourceMap": "71:3447:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3501:8;;;113:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;536:136:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;179:26:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1598:292:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1200:248;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;172:31:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1454:138:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;220:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2632:292;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;584:77;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;207:36:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;849:179:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1018:107:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2930:182:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1896:283;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;48:20:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3328:125:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;175:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1038:156:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;676:169:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2388:179:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;3118:118;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2299:126:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;475:316:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;296:169:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;2185:196:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;248:20:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;113:56:0;;;;;;;;;;;;;;;;;;;;:::o;536:136:8:-;617:4;307:12:2;;;;;;;;;;;304:156;;;333:16;;;;;;;;;;;332:17;329:125;;;383:5;;;;;;;;;;;369:19;;:10;:19;;;:42;;;;406:5;;;;;;;;;;;392:19;;:10;:19;;;369:42;361:51;;;;;;;;329:125;;;437:8;;;329:125;304:156;636:31:8;650:8;660:6;636:13;:31::i;:::-;629:38;;536:136;;;;:::o;179:26:7:-;;;;:::o;1598:292:0:-;1744:6;273:5:4;;;;;;;;;;;259:19;;:10;:19;;;251:28;;;;;;;;1719:9:0;:7;:9::i;:::-;1705:11;:23;1697:32;;;;;;;;1753:1;1744:10;;1739:145;1760:15;:22;1756:1;:26;1739:145;;;1862:11;1811:28;:48;1840:15;1856:1;1840:18;;;;;;;;;;;;;;;;;;1811:48;;;;;;;;;;;;;;;:62;;;;1784:3;;;;;;;1739:145;;;1598:292;;;:::o;1200:248::-;1314:4;989:12;:10;:12::i;:::-;981:21;;;;;;;;1300:3;872;858:18;;:2;:18;;;;850:27;;;;;;;;909:4;895:19;;:2;:19;;;;887:28;;;;;;;;1355:30;1379:5;1355:23;:30::i;:::-;1342:9;:7;:9::i;:::-;:43;;1334:52;;;;;;;;1403:38;1422:5;1429:3;1434:6;1403:18;:38::i;:::-;1396:45;;1024:1;1200:248;;;;;:::o;172:31:2:-;;;;;;;;;;;;;:::o;1454:138:0:-;1522:4;1550:28;:35;1579:5;1550:35;;;;;;;;;;;;;;;;1543:42;;1454:138;;;:::o;220:38::-;256:2;220:38;:::o;2632:292::-;2688:4;273:5:4;;;;;;;;;;;259:19;;:10;:19;;;251:28;;;;;;;;2731:32:0;2756:6;2731:8;:20;2740:10;2731:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;2708:8;:20;2717:10;2708:20;;;;;;;;;;;;;;;:55;;;;2787:23;2803:6;2787:11;;:15;;:23;;;;:::i;:::-;2773:11;:37;;;;2825:10;2820:24;;;2837:6;2820:24;;;;;;;;;;;;;;;;;;2883:3;2854:42;;2863:10;2854:42;;;2889:6;2854:42;;;;;;;;;;;;;;;;;;2913:4;2906:11;;2632:292;;;:::o;584:77::-;628:4;651:3;644:10;;584:77;:::o;207:36:2:-;;;;;;;;;;;;;:::o;849:179:8:-;946:12;307::2;;;;;;;;;;;304:156;;;333:16;;;;;;;;;;;332:17;329:125;;;383:5;;;;;;;;;;;369:19;;:10;:19;;;:42;;;;406:5;;;;;;;;;;;392:19;;:10;:19;;;369:42;361:51;;;;;;;;329:125;;;437:8;;;329:125;304:156;973:50:8;996:8;1006:16;973:22;:50::i;:::-;966:57;;849:179;;;;:::o;1018:107:5:-;1074:15;1104:8;:16;1113:6;1104:16;;;;;;;;;;;;;;;;1097:23;;1018:107;;;:::o;2930:182:0:-;3005:4;273:5:4;;;;;;;;;;;259:19;;:10;:19;;;251:28;;;;;;;;3033:41:0;3047:5;3054:10;3066:6;3033:12;:41::i;:::-;3025:51;;;;;;3093:12;3098:6;3093:4;:12::i;:::-;3086:19;;2930:182;;;;:::o;1896:283::-;1982:6;273:5:4;;;;;;;;;;;259:19;;:10;:19;;;251:28;;;;;;;;1991:1:0;1982:10;;1977:196;1998:12;:19;1994:1;:23;1977:196;;;2094:1;2046:28;:45;2075:12;2088:1;2075:15;;;;;;;;;;;;;;;;;;2046:45;;;;;;;;;;;;;;;:49;;;;2116:28;:45;2145:12;2158:1;2145:15;;;;;;;;;;;;;;;;;;2116:45;;;;;;;;;;;;;;;2109:53;;;2019:3;;;;;;;1977:196;;;1896:283;;:::o;48:20:4:-;;;;;;;;;;;;;:::o;3328:125:0:-;273:5:4;;;;;;;;;;;259:19;;:10;:19;;;251:28;;;;;;;;3411:8:0;3387:33;;3404:5;;;;;;;;;;;3387:33;;;;;;;;;;;;3438:8;3430:5;;:16;;;;;;;;;;;;;;;;;;3328:125;:::o;175:39::-;;;;;;;;;;;;;;;;;;;;:::o;1038:156::-;1133:4;989:12;:10;:12::i;:::-;981:21;;;;;;;;1119:3;872;858:18;;:2;:18;;;;850:27;;;;;;;;909:4;895:19;;:2;:19;;;;887:28;;;;;;;;1160:27;1175:3;1180:6;1160:14;:27::i;:::-;1153:34;;1024:1;1038:156;;;;:::o;676:169:8:-;768:12;307::2;;;;;;;;;;;304:156;;;333:16;;;;;;;;;;;332:17;329:125;;;383:5;;;;;;;;;;;369:19;;:10;:19;;;:42;;;;406:5;;;;;;;;;;;392:19;;:10;:19;;;369:42;361:51;;;;;;;;329:125;;;437:8;;;329:125;304:156;795:45:8;818:8;828:11;795:22;:45::i;:::-;788:52;;676:169;;;;:::o;2388:179:0:-;273:5:4;;;;;;;;;;;259:19;;:10;:19;;;251:28;;;;;;;;2503:1:0;2462:28;:38;2491:8;2462:38;;;;;;;;;;;;;;;:42;;;;2521:28;:38;2550:8;2521:38;;;;;;;;;;;;;;;2514:46;;;2388:179;:::o;3118:118::-;273:5:4;;;;;;;;;;;259:19;;:10;:19;;;251:28;;;;;;;;3198:5:0;:14;;;3214:5;;;;;;;;;;;3221:6;3198:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3118:118;;:::o;2299:126:9:-;2373:7;2395;:15;2403:6;2395:15;;;;;;;;;;;;;;;:25;2411:8;2395:25;;;;;;;;;;;;;;;;2388:32;;2299:126;;;;:::o;475:316:2:-;273:5:4;;;;;;;;;;;259:19;;:10;:19;;;251:28;;;;;;;;590:5:2;571:24;;:15;:24;;;:55;;;;;622:4;599:27;;:19;:27;;;571:55;569:58;561:67;;;;;;;;650:15;635:12;;:30;;;;;;;;;;;;;;;;;;690:19;671:16;;:38;;;;;;;;;;;;;;;;;;716:28;728:15;716:28;;;;;;;;;;;;;;;;;;;;;;750:36;766:19;750:36;;;;;;;;;;;;;;;;;;;;;;475:316;;:::o;296:169:4:-;273:5;;;;;;;;;;;259:19;;:10;:19;;;251:28;;;;;;;;392:1;372:22;;:8;:22;;;;364:31;;;;;;;;429:8;401:37;;422:5;;;;;;;;;;;401:37;;;;;;;;;;;;452:8;444:5;;:16;;;;;;;;;;;;;;;;;;296:169;:::o;2185:196:0:-;273:5:4;;;;;;;;;;;259:19;;:10;:19;;;251:28;;;;;;;;2299:9:0;:7;:9::i;:::-;2285:11;:23;2277:32;;;;;;;;2363:11;2319:28;:41;2348:11;2319:41;;;;;;;;;;;;;;;:55;;;;2185:196;;:::o;248:20:2:-;;;;;;;;;;;;;:::o;1797:183:9:-;1864:4;1908:6;1876:7;:19;1884:10;1876:19;;;;;;;;;;;;;;;:29;1896:8;1876:29;;;;;;;;;;;;;;;:38;;;;1941:8;1920:38;;1929:10;1920:38;;;1951:6;1920:38;;;;;;;;;;;;;;;;;;1971:4;1964:11;;1797:183;;;;:::o;667:123:0:-;712:4;748:35;772:10;748:23;:35::i;:::-;735:9;:7;:9::i;:::-;:48;;728:55;;667:123;:::o;374:158:8:-;470:4;307:12:2;;;;;;;;;;;304:156;;;333:16;;;;;;;;;;;332:17;329:125;;;383:5;;;;;;;;;;;369:19;;:10;:19;;;:42;;;;406:5;;;;;;;;;;;392:19;;:10;:19;;;369:42;361:51;;;;;;;;329:125;;;437:8;;;329:125;304:156;489:38:8;508:5;515:3;520:6;489:18;:38::i;:::-;482:45;;374:158;;;;;:::o;337:110:3:-;395:7;422:1;417;:6;;410:14;;;;;;441:1;437;:5;430:12;;337:110;;;;:::o;2926:398:9:-;3009:4;3021:13;3037:7;:19;3045:10;3037:19;;;;;;;;;;;;;;;:29;3057:8;3037:29;;;;;;;;;;;;;;;;3021:45;;3095:8;3076:16;:27;3072:164;;;3145:1;3113:7;:19;3121:10;3113:19;;;;;;;;;;;;;;;:29;3133:8;3113:29;;;;;;;;;;;;;;;:33;;;;3072:164;;;3199:30;3212:16;3199:8;:12;;:30;;;;:::i;:::-;3167:7;:19;3175:10;3167:19;;;;;;;;;;;;;;;:29;3187:8;3167:29;;;;;;;;;;;;;;;:62;;;;3072:164;3262:8;3241:61;;3250:10;3241:61;;;3272:7;:19;3280:10;3272:19;;;;;;;;;;;;;;;:29;3292:8;3272:29;;;;;;;;;;;;;;;;3241:61;;;;;;;;;;;;;;;;;;3315:4;3308:11;;2926:398;;;;;:::o;242:128:8:-;319:4;307:12:2;;;;;;;;;;;304:156;;;333:16;;;;;;;;;;;332:17;329:125;;;383:5;;;;;;;;;;;369:19;;:10;:19;;;:42;;;;406:5;;;;;;;;;;;392:19;;:10;:19;;;369:42;361:51;;;;;;;;329:125;;;437:8;;;329:125;304:156;338:27:8;353:3;358:6;338:14;:27::i;:::-;331:34;;242:128;;;;:::o;2665:257:9:-;2743:4;2787:46;2821:11;2787:7;:19;2795:10;2787:19;;;;;;;;;;;;;;;:29;2807:8;2787:29;;;;;;;;;;;;;;;;:33;;:46;;;;:::i;:::-;2755:7;:19;2763:10;2755:19;;;;;;;;;;;;;;;:29;2775:8;2755:29;;;;;;;;;;;;;;;:78;;;;2860:8;2839:61;;2848:10;2839:61;;;2870:7;:19;2878:10;2870:19;;;;;;;;;;;;;;;:29;2890:8;2870:29;;;;;;;;;;;;;;;;2839:61;;;;;;;;;;;;;;;;;;2913:4;2906:11;;2665:257;;;;:::o;735:439::-;817:4;852:1;837:17;;:3;:17;;;;829:26;;;;;;;;879:8;:15;888:5;879:15;;;;;;;;;;;;;;;;869:6;:25;;861:34;;;;;;;;919:7;:14;927:5;919:14;;;;;;;;;;;;;;;:26;934:10;919:26;;;;;;;;;;;;;;;;909:6;:36;;901:45;;;;;;;;971:27;991:6;971:8;:15;980:5;971:15;;;;;;;;;;;;;;;;:19;;:27;;;;:::i;:::-;953:8;:15;962:5;953:15;;;;;;;;;;;;;;;:45;;;;1020:25;1038:6;1020:8;:13;1029:3;1020:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;1004:8;:13;1013:3;1004:13;;;;;;;;;;;;;;;:41;;;;1080:38;1111:6;1080:7;:14;1088:5;1080:14;;;;;;;;;;;;;;;:26;1095:10;1080:26;;;;;;;;;;;;;;;;:30;;:38;;;;:::i;:::-;1051:7;:14;1059:5;1051:14;;;;;;;;;;;;;;;:26;1066:10;1051:26;;;;;;;;;;;;;;;:67;;;;1140:3;1124:28;;1133:5;1124:28;;;1145:6;1124:28;;;;;;;;;;;;;;;;;;1165:4;1158:11;;735:439;;;;;:::o;437:379:5:-;500:4;535:1;520:17;;:3;:17;;;;512:26;;;;;;;;562:8;:20;571:10;562:20;;;;;;;;;;;;;;;;552:6;:30;;544:39;;;;;;;;676:32;701:6;676:8;:20;685:10;676:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;653:8;:20;662:10;653:20;;;;;;;;;;;;;;;:55;;;;730:25;748:6;730:8;:13;739:3;730:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;714:8;:13;723:3;714:13;;;;;;;;;;;;;;;:41;;;;782:3;761:33;;770:10;761:33;;;787:6;761:33;;;;;;;;;;;;;;;;;;807:4;800:11;;437:379;;;;:::o;451:129:3:-;509:7;524:9;540:1;536;:5;524:17;;559:1;554;:6;;547:14;;;;;;574:1;567:8;;451:129;;;;;:::o",
  "source": "pragma solidity ^0.4.18;\nimport './zeppelin/token/PausableToken.sol';\n\ncontract FinToken is PausableToken {\n\n    string  public  constant name = \"Fuel Injection Network\";\n    string  public  constant symbol = \"FIN\";\n    uint8   public  constant decimals = 18;\n\n    mapping(address => uint) approvedInvestorListWithDate;\n\n    function FinToken( address _admin, uint256 _totalTokenAmount )\n    {\n        admin = _admin;\n\n        totalSupply = _totalTokenAmount;\n        balances[msg.sender] = _totalTokenAmount;\n        Transfer(address(0x0), msg.sender, _totalTokenAmount);\n    }\n\n    function getTime() public constant returns (uint) {\n        return now;\n    }\n\n    function isUnlocked() internal view returns (bool) {\n        return getTime() >= getLockFundsReleaseTime(msg.sender);\n    }\n\n    modifier validDestination( address to )\n    {\n        require(to != address(0x0));\n        require(to != address(this));\n        _;\n    }\n\n    modifier onlyWhenUnlocked()\n    {\n        require(isUnlocked());            \n        _;\n    }\n\n    function transfer(address _to, uint256 _value) onlyWhenUnlocked validDestination(_to) returns (bool)\n    {\n        return super.transfer(_to, _value);\n    }\n\n    function transferFrom(address _from, address _to, uint256 _value) onlyWhenUnlocked validDestination(_to) returns (bool)\n    {\n        require(getTime() >= getLockFundsReleaseTime(_from));\n        return super.transferFrom(_from, _to, _value);\n    }\n\n    function getLockFundsReleaseTime(address _addr) public view returns(uint) \n    {\n        return approvedInvestorListWithDate[_addr];\n    }\n\n    function setLockFunds(address[] newInvestorList, uint releaseTime) onlyOwner public \n    {\n        require(releaseTime > getTime());\n        for (uint i = 0; i < newInvestorList.length; i++)\n        {\n            approvedInvestorListWithDate[newInvestorList[i]] = releaseTime;\n        }\n    }\n\n    function removeLockFunds(address[] investorList) onlyOwner public \n    {\n        for (uint i = 0; i < investorList.length; i++)\n        {\n            approvedInvestorListWithDate[investorList[i]] = 0;\n            delete(approvedInvestorListWithDate[investorList[i]]);\n        }\n    }\n\n    function setLockFund(address newInvestor, uint releaseTime) onlyOwner public \n    {\n        require(releaseTime > getTime());\n        approvedInvestorListWithDate[newInvestor] = releaseTime;\n    }\n\n\n    function removeLockFund(address investor) onlyOwner public \n    {\n        approvedInvestorListWithDate[investor] = 0;\n        delete(approvedInvestorListWithDate[investor]);\n    }\n\n\n    event Burn(address indexed _burner, uint256 _value);\n\n    function burn(uint256 _value) onlyOwner public returns (bool)\n    {\n        balances[msg.sender] = balances[msg.sender].sub(_value);\n        totalSupply = totalSupply.sub(_value);\n        Burn(msg.sender, _value);\n        Transfer(msg.sender, address(0x0), _value);\n        return true;\n    }\n\n    function burnFrom(address _from, uint256 _value) onlyOwner public returns (bool)\n    {\n        assert( transferFrom( _from, msg.sender, _value ) );\n        return burn(_value);\n    }\n\n    function emergencyERC20Drain( ERC20 token, uint256 amount ) onlyOwner {\n        token.transfer( owner, amount );\n    }\n\n    event AdminTransferred(address indexed previousAdmin, address indexed newAdmin);\n\n    function changeAdmin(address newAdmin) onlyOwner {\n        AdminTransferred(admin, newAdmin);\n        admin = newAdmin;\n    }\n\n    function () public payable \n    {\n        revert();\n    }\n}",
  "sourcePath": "/Users/herogenie/Develope/Token/FinToken/contracts/FinToken.sol",
  "ast": {
    "absolutePath": "/Users/herogenie/Develope/Token/FinToken/contracts/FinToken.sol",
    "exportedSymbols": {
      "FinToken": [
        414
      ]
    },
    "id": 415,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "absolutePath": "/Users/herogenie/Develope/Token/FinToken/contracts/zeppelin/token/PausableToken.sol",
        "file": "./zeppelin/token/PausableToken.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 415,
        "sourceUnit": 973,
        "src": "25:44:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": [],
            "baseName": {
              "contractScope": null,
              "id": 3,
              "name": "PausableToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 972,
              "src": "92:13:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PausableToken_$972",
                "typeString": "contract PausableToken"
              }
            },
            "id": 4,
            "nodeType": "InheritanceSpecifier",
            "src": "92:13:0"
          }
        ],
        "contractDependencies": [
          558,
          712,
          798,
          841,
          870,
          972,
          1218
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 414,
        "linearizedBaseContracts": [
          414,
          972,
          558,
          712,
          1218,
          798,
          841,
          870
        ],
        "name": "FinToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 7,
            "name": "name",
            "nodeType": "VariableDeclaration",
            "scope": 414,
            "src": "113:56:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string memory"
            },
            "typeName": {
              "id": 5,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "113:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string storage pointer"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "4675656c20496e6a656374696f6e204e6574776f726b",
              "id": 6,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "145:24:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_48bfbfbb3c71825bba74c4da07d1653f612c69f63ea7ab0d05271c0fea4996a1",
                "typeString": "literal_string \"Fuel Injection Network\""
              },
              "value": "Fuel Injection Network"
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 10,
            "name": "symbol",
            "nodeType": "VariableDeclaration",
            "scope": 414,
            "src": "175:39:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string memory"
            },
            "typeName": {
              "id": 8,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "175:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string storage pointer"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "46494e",
              "id": 9,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "209:5:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_79015a26e39f71d7947c4ec2aea33907f3f6828759e5930304d7eef5707ff1a2",
                "typeString": "literal_string \"FIN\""
              },
              "value": "FIN"
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 13,
            "name": "decimals",
            "nodeType": "VariableDeclaration",
            "scope": 414,
            "src": "220:38:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint8",
              "typeString": "uint8"
            },
            "typeName": {
              "id": 11,
              "name": "uint8",
              "nodeType": "ElementaryTypeName",
              "src": "220:5:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint8",
                "typeString": "uint8"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "3138",
              "id": 12,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "256:2:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_18_by_1",
                "typeString": "int_const 18"
              },
              "value": "18"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 17,
            "name": "approvedInvestorListWithDate",
            "nodeType": "VariableDeclaration",
            "scope": 414,
            "src": "265:53:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 16,
              "keyType": {
                "id": 14,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "273:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "265:24:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 15,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "284:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 48,
              "nodeType": "Block",
              "src": "392:186:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 26,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 24,
                      "name": "admin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 492,
                      "src": "402:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 25,
                      "name": "_admin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19,
                      "src": "410:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "402:14:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 27,
                  "nodeType": "ExpressionStatement",
                  "src": "402:14:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 30,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 28,
                      "name": "totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 845,
                      "src": "427:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 29,
                      "name": "_totalTokenAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21,
                      "src": "441:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "427:31:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 31,
                  "nodeType": "ExpressionStatement",
                  "src": "427:31:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 37,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 32,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 725,
                        "src": "468:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 35,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 33,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1230,
                          "src": "477:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 34,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "477:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "468:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 36,
                      "name": "_totalTokenAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21,
                      "src": "491:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "468:40:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 38,
                  "nodeType": "ExpressionStatement",
                  "src": "468:40:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "307830",
                            "id": 41,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "535:3:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0x0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 40,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "527:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 42,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "527:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 43,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1230,
                          "src": "541:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 44,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "541:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 45,
                        "name": "_totalTokenAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21,
                        "src": "553:17:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 39,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 869,
                      "src": "518:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 46,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "518:53:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 47,
                  "nodeType": "ExpressionStatement",
                  "src": "518:53:0"
                }
              ]
            },
            "id": 49,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "FinToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 22,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19,
                  "name": "_admin",
                  "nodeType": "VariableDeclaration",
                  "scope": 49,
                  "src": "344:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 18,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "344:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 21,
                  "name": "_totalTokenAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 49,
                  "src": "360:25:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "360:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "342:45:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 23,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "392:0:0"
            },
            "scope": 414,
            "src": "325:253:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 56,
              "nodeType": "Block",
              "src": "634:27:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 54,
                    "name": "now",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1232,
                    "src": "651:3:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 53,
                  "id": 55,
                  "nodeType": "Return",
                  "src": "644:10:0"
                }
              ]
            },
            "id": 57,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getTime",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 50,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "600:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 53,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 57,
                  "src": "628:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 51,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "628:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "627:6:0"
            },
            "scope": 414,
            "src": "584:77:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 70,
              "nodeType": "Block",
              "src": "718:72:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 68,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 62,
                        "name": "getTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57,
                        "src": "735:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                          "typeString": "function () view returns (uint256)"
                        }
                      },
                      "id": 63,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "735:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 65,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1230,
                            "src": "772:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 66,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "772:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 64,
                        "name": "getLockFundsReleaseTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 168,
                        "src": "748:23:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                          "typeString": "function (address) view returns (uint256)"
                        }
                      },
                      "id": 67,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "748:35:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "735:48:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 61,
                  "id": 69,
                  "nodeType": "Return",
                  "src": "728:55:0"
                }
              ]
            },
            "id": 71,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isUnlocked",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 58,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "686:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 61,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 71,
                  "src": "712:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 59,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "712:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "711:6:0"
            },
            "scope": 414,
            "src": "667:123:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 92,
              "nodeType": "Block",
              "src": "840:93:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 80,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 76,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 73,
                          "src": "858:2:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "307830",
                              "id": 78,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "872:3:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0x0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 77,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "864:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 79,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "864:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "858:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 75,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1233,
                      "src": "850:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 81,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "850:27:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 82,
                  "nodeType": "ExpressionStatement",
                  "src": "850:27:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 88,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 84,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 73,
                          "src": "895:2:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 86,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1257,
                              "src": "909:4:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_FinToken_$414",
                                "typeString": "contract FinToken"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_FinToken_$414",
                                "typeString": "contract FinToken"
                              }
                            ],
                            "id": 85,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "901:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 87,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "901:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "895:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 83,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1233,
                      "src": "887:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 89,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "887:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 90,
                  "nodeType": "ExpressionStatement",
                  "src": "887:28:0"
                },
                {
                  "id": 91,
                  "nodeType": "PlaceholderStatement",
                  "src": "925:1:0"
                }
              ]
            },
            "id": 93,
            "name": "validDestination",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 74,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 73,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 93,
                  "src": "823:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 72,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "823:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "821:14:0"
            },
            "src": "796:137:0",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 101,
              "nodeType": "Block",
              "src": "971:61:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 96,
                          "name": "isUnlocked",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 71,
                          "src": "989:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                            "typeString": "function () view returns (bool)"
                          }
                        },
                        "id": 97,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "989:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 95,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1233,
                      "src": "981:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 98,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "981:21:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 99,
                  "nodeType": "ExpressionStatement",
                  "src": "981:21:0"
                },
                {
                  "id": 100,
                  "nodeType": "PlaceholderStatement",
                  "src": "1024:1:0"
                }
              ]
            },
            "id": 102,
            "name": "onlyWhenUnlocked",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 94,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "964:2:0"
            },
            "src": "939:93:0",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 122,
              "nodeType": "Block",
              "src": "1143:51:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 118,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 104,
                        "src": "1175:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 119,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 106,
                        "src": "1180:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 116,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1258,
                        "src": "1160:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_FinToken_$414",
                          "typeString": "contract super FinToken"
                        }
                      },
                      "id": 117,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 896,
                      "src": "1160:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) returns (bool)"
                      }
                    },
                    "id": 120,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1160:27:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 115,
                  "id": 121,
                  "nodeType": "Return",
                  "src": "1153:34:0"
                }
              ]
            },
            "id": 123,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [],
                "id": 109,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 108,
                  "name": "onlyWhenUnlocked",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 102,
                  "src": "1085:16:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1085:16:0"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 111,
                    "name": "_to",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 104,
                    "src": "1119:3:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 112,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 110,
                  "name": "validDestination",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 93,
                  "src": "1102:16:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1102:21:0"
              }
            ],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 107,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 104,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 123,
                  "src": "1056:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 103,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1056:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 106,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 123,
                  "src": "1069:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 105,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1069:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1055:29:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 115,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 114,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 123,
                  "src": "1133:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 113,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1133:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1132:6:0"
            },
            "scope": 414,
            "src": "1038:156:0",
            "stateMutability": "nonpayable",
            "superFunction": 896,
            "visibility": "public"
          },
          {
            "body": {
              "id": 155,
              "nodeType": "Block",
              "src": "1324:124:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 145,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 140,
                            "name": "getTime",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 57,
                            "src": "1342:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 141,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1342:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 143,
                              "name": "_from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 125,
                              "src": "1379:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 142,
                            "name": "getLockFundsReleaseTime",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 168,
                            "src": "1355:23:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address) view returns (uint256)"
                            }
                          },
                          "id": 144,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1355:30:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1342:43:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 139,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1233,
                      "src": "1334:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 146,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1334:52:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 147,
                  "nodeType": "ExpressionStatement",
                  "src": "1334:52:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 150,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 125,
                        "src": "1422:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 151,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 127,
                        "src": "1429:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 152,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 129,
                        "src": "1434:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 148,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1258,
                        "src": "1403:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_FinToken_$414",
                          "typeString": "contract super FinToken"
                        }
                      },
                      "id": 149,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 917,
                      "src": "1403:18:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) returns (bool)"
                      }
                    },
                    "id": 153,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1403:38:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 138,
                  "id": 154,
                  "nodeType": "Return",
                  "src": "1396:45:0"
                }
              ]
            },
            "id": 156,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [],
                "id": 132,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 131,
                  "name": "onlyWhenUnlocked",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 102,
                  "src": "1266:16:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1266:16:0"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 134,
                    "name": "_to",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 127,
                    "src": "1300:3:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 135,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 133,
                  "name": "validDestination",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 93,
                  "src": "1283:16:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1283:21:0"
              }
            ],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 130,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 125,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 156,
                  "src": "1222:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 124,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1222:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 127,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 156,
                  "src": "1237:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 126,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1237:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 129,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 156,
                  "src": "1250:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 128,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1250:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1221:44:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 138,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 137,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 156,
                  "src": "1314:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 136,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1314:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1313:6:0"
            },
            "scope": 414,
            "src": "1200:248:0",
            "stateMutability": "nonpayable",
            "superFunction": 917,
            "visibility": "public"
          },
          {
            "body": {
              "id": 167,
              "nodeType": "Block",
              "src": "1533:59:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 163,
                      "name": "approvedInvestorListWithDate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17,
                      "src": "1550:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 165,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 164,
                      "name": "_addr",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 158,
                      "src": "1579:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1550:35:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 162,
                  "id": 166,
                  "nodeType": "Return",
                  "src": "1543:42:0"
                }
              ]
            },
            "id": 168,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getLockFundsReleaseTime",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 159,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 158,
                  "name": "_addr",
                  "nodeType": "VariableDeclaration",
                  "scope": 168,
                  "src": "1487:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 157,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1487:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1486:15:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 162,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 161,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 168,
                  "src": "1522:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 160,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1522:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1521:6:0"
            },
            "scope": 414,
            "src": "1454:138:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 206,
              "nodeType": "Block",
              "src": "1687:203:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 182,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 179,
                          "name": "releaseTime",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 173,
                          "src": "1705:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 180,
                            "name": "getTime",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 57,
                            "src": "1719:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 181,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1719:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1705:23:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 178,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1233,
                      "src": "1697:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 183,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1697:32:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 184,
                  "nodeType": "ExpressionStatement",
                  "src": "1697:32:0"
                },
                {
                  "body": {
                    "id": 204,
                    "nodeType": "Block",
                    "src": "1797:87:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 202,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 196,
                              "name": "approvedInvestorListWithDate",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 17,
                              "src": "1811:28:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 200,
                            "indexExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 197,
                                "name": "newInvestorList",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 171,
                                "src": "1840:15:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                  "typeString": "address[] memory"
                                }
                              },
                              "id": 199,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 198,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 186,
                                "src": "1856:1:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "1840:18:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "1811:48:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 201,
                            "name": "releaseTime",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 173,
                            "src": "1862:11:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1811:62:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 203,
                        "nodeType": "ExpressionStatement",
                        "src": "1811:62:0"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 192,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 189,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 186,
                      "src": "1756:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 190,
                        "name": "newInvestorList",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 171,
                        "src": "1760:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      "id": 191,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1760:22:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1756:26:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 205,
                  "initializationExpression": {
                    "assignments": [
                      186
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 186,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 207,
                        "src": "1744:6:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 185,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "1744:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 188,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 187,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1753:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1744:10:0"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 194,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "1784:3:0",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 193,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 186,
                        "src": "1784:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 195,
                    "nodeType": "ExpressionStatement",
                    "src": "1784:3:0"
                  },
                  "nodeType": "ForStatement",
                  "src": "1739:145:0"
                }
              ]
            },
            "id": 207,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [],
                "id": 176,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 175,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 686,
                  "src": "1665:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1665:9:0"
              }
            ],
            "name": "setLockFunds",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 174,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 171,
                  "name": "newInvestorList",
                  "nodeType": "VariableDeclaration",
                  "scope": 207,
                  "src": "1620:25:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[] memory"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 169,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1620:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 170,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1620:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[] storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 173,
                  "name": "releaseTime",
                  "nodeType": "VariableDeclaration",
                  "scope": 207,
                  "src": "1647:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 172,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1647:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1619:45:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 177,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1687:0:0"
            },
            "scope": 414,
            "src": "1598:292:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 244,
              "nodeType": "Block",
              "src": "1967:212:0",
              "statements": [
                {
                  "body": {
                    "id": 242,
                    "nodeType": "Block",
                    "src": "2032:141:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 232,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 226,
                              "name": "approvedInvestorListWithDate",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 17,
                              "src": "2046:28:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 230,
                            "indexExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 227,
                                "name": "investorList",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 210,
                                "src": "2075:12:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                  "typeString": "address[] memory"
                                }
                              },
                              "id": 229,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 228,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 216,
                                "src": "2088:1:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2075:15:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "2046:45:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 231,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2094:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "2046:49:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 233,
                        "nodeType": "ExpressionStatement",
                        "src": "2046:49:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 240,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "delete",
                          "prefix": true,
                          "src": "2109:53:0",
                          "subExpression": {
                            "argumentTypes": null,
                            "components": [
                              {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 234,
                                  "name": "approvedInvestorListWithDate",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 17,
                                  "src": "2116:28:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                    "typeString": "mapping(address => uint256)"
                                  }
                                },
                                "id": 238,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 235,
                                    "name": "investorList",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 210,
                                    "src": "2145:12:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                      "typeString": "address[] memory"
                                    }
                                  },
                                  "id": 237,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 236,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 216,
                                    "src": "2158:1:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "2145:15:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "nodeType": "IndexAccess",
                                "src": "2116:45:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 239,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "TupleExpression",
                            "src": "2115:47:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 241,
                        "nodeType": "ExpressionStatement",
                        "src": "2109:53:0"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 222,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 219,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 216,
                      "src": "1994:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 220,
                        "name": "investorList",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 210,
                        "src": "1998:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      "id": 221,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1998:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1994:23:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 243,
                  "initializationExpression": {
                    "assignments": [
                      216
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 216,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 245,
                        "src": "1982:6:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 215,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "1982:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 218,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 217,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1991:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1982:10:0"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 224,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "2019:3:0",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 223,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 216,
                        "src": "2019:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 225,
                    "nodeType": "ExpressionStatement",
                    "src": "2019:3:0"
                  },
                  "nodeType": "ForStatement",
                  "src": "1977:196:0"
                }
              ]
            },
            "id": 245,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [],
                "id": 213,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 212,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 686,
                  "src": "1945:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1945:9:0"
              }
            ],
            "name": "removeLockFunds",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 211,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 210,
                  "name": "investorList",
                  "nodeType": "VariableDeclaration",
                  "scope": 245,
                  "src": "1921:22:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[] memory"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 208,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1921:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 209,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1921:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[] storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1920:24:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 214,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1967:0:0"
            },
            "scope": 414,
            "src": "1896:283:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 267,
              "nodeType": "Block",
              "src": "2267:114:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 258,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 255,
                          "name": "releaseTime",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 249,
                          "src": "2285:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 256,
                            "name": "getTime",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 57,
                            "src": "2299:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 257,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2299:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2285:23:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 254,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1233,
                      "src": "2277:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 259,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2277:32:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 260,
                  "nodeType": "ExpressionStatement",
                  "src": "2277:32:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 265,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 261,
                        "name": "approvedInvestorListWithDate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17,
                        "src": "2319:28:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 263,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 262,
                        "name": "newInvestor",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 247,
                        "src": "2348:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2319:41:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 264,
                      "name": "releaseTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 249,
                      "src": "2363:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2319:55:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 266,
                  "nodeType": "ExpressionStatement",
                  "src": "2319:55:0"
                }
              ]
            },
            "id": 268,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [],
                "id": 252,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 251,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 686,
                  "src": "2245:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2245:9:0"
              }
            ],
            "name": "setLockFund",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 250,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 247,
                  "name": "newInvestor",
                  "nodeType": "VariableDeclaration",
                  "scope": 268,
                  "src": "2206:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 246,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2206:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 249,
                  "name": "releaseTime",
                  "nodeType": "VariableDeclaration",
                  "scope": 268,
                  "src": "2227:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 248,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2227:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2205:39:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 253,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2267:0:0"
            },
            "scope": 414,
            "src": "2185:196:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 287,
              "nodeType": "Block",
              "src": "2452:115:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 279,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 275,
                        "name": "approvedInvestorListWithDate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17,
                        "src": "2462:28:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 277,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 276,
                        "name": "investor",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 270,
                        "src": "2491:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2462:38:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 278,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2503:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "2462:42:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 280,
                  "nodeType": "ExpressionStatement",
                  "src": "2462:42:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 285,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "2514:46:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 281,
                            "name": "approvedInvestorListWithDate",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17,
                            "src": "2521:28:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 283,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 282,
                            "name": "investor",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 270,
                            "src": "2550:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "2521:38:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 284,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "2520:40:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 286,
                  "nodeType": "ExpressionStatement",
                  "src": "2514:46:0"
                }
              ]
            },
            "id": 288,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [],
                "id": 273,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 272,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 686,
                  "src": "2430:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2430:9:0"
              }
            ],
            "name": "removeLockFund",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 271,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 270,
                  "name": "investor",
                  "nodeType": "VariableDeclaration",
                  "scope": 288,
                  "src": "2412:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 269,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2412:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2411:18:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 274,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2452:0:0"
            },
            "scope": 414,
            "src": "2388:179:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "id": 294,
            "name": "Burn",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 293,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 290,
                  "indexed": true,
                  "name": "_burner",
                  "nodeType": "VariableDeclaration",
                  "scope": 294,
                  "src": "2585:23:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 289,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2585:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 292,
                  "indexed": false,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 294,
                  "src": "2610:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 291,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2610:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2584:41:0"
            },
            "src": "2574:52:0"
          },
          {
            "body": {
              "id": 340,
              "nodeType": "Block",
              "src": "2698:226:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 314,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 303,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 725,
                        "src": "2708:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 306,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 304,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1230,
                          "src": "2717:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 305,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2717:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2708:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 312,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 296,
                          "src": "2756:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 307,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 725,
                            "src": "2731:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 310,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 308,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1230,
                              "src": "2740:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 309,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2740:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2731:20:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 311,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sub",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 631,
                        "src": "2731:24:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 313,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2731:32:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2708:55:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 315,
                  "nodeType": "ExpressionStatement",
                  "src": "2708:55:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 321,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 316,
                      "name": "totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 845,
                      "src": "2773:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 319,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 296,
                          "src": "2803:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 317,
                          "name": "totalSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 845,
                          "src": "2787:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 318,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sub",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 631,
                        "src": "2787:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 320,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2787:23:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2773:37:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 322,
                  "nodeType": "ExpressionStatement",
                  "src": "2773:37:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 324,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1230,
                          "src": "2825:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 325,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2825:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 326,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 296,
                        "src": "2837:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 323,
                      "name": "Burn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 294,
                      "src": "2820:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 327,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2820:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 328,
                  "nodeType": "ExpressionStatement",
                  "src": "2820:24:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 330,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1230,
                          "src": "2863:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 331,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2863:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "307830",
                            "id": 333,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2883:3:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0x0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 332,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2875:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 334,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2875:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 335,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 296,
                        "src": "2889:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 329,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 869,
                      "src": "2854:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 336,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2854:42:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 337,
                  "nodeType": "ExpressionStatement",
                  "src": "2854:42:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 338,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2913:4:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 302,
                  "id": 339,
                  "nodeType": "Return",
                  "src": "2906:11:0"
                }
              ]
            },
            "id": 341,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [],
                "id": 299,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 298,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 686,
                  "src": "2662:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2662:9:0"
              }
            ],
            "name": "burn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 297,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 296,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 341,
                  "src": "2646:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 295,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2646:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2645:16:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 302,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 301,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 341,
                  "src": "2688:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 300,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2688:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2687:6:0"
            },
            "scope": 414,
            "src": "2632:292:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 365,
              "nodeType": "Block",
              "src": "3015:97:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 354,
                            "name": "_from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 343,
                            "src": "3047:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 355,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1230,
                              "src": "3054:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 356,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "3054:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 357,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 345,
                            "src": "3066:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 353,
                          "name": "transferFrom",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            156
                          ],
                          "referencedDeclaration": 156,
                          "src": "3033:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,address,uint256) returns (bool)"
                          }
                        },
                        "id": 358,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3033:41:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 352,
                      "name": "assert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1221,
                      "src": "3025:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_assert_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 359,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3025:51:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 360,
                  "nodeType": "ExpressionStatement",
                  "src": "3025:51:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 362,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 345,
                        "src": "3098:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 361,
                      "name": "burn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 341,
                      "src": "3093:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (uint256) returns (bool)"
                      }
                    },
                    "id": 363,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3093:12:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 351,
                  "id": 364,
                  "nodeType": "Return",
                  "src": "3086:19:0"
                }
              ]
            },
            "id": 366,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [],
                "id": 348,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 347,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 686,
                  "src": "2979:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2979:9:0"
              }
            ],
            "name": "burnFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 346,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 343,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 366,
                  "src": "2948:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 342,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2948:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 345,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 366,
                  "src": "2963:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 344,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2963:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2947:31:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 351,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 350,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 366,
                  "src": "3005:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 349,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3005:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3004:6:0"
            },
            "scope": 414,
            "src": "2930:182:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 382,
              "nodeType": "Block",
              "src": "3188:48:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 378,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 660,
                        "src": "3214:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 379,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 370,
                        "src": "3221:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 375,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 368,
                        "src": "3198:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$841",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 377,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 861,
                      "src": "3198:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 380,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3198:31:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 381,
                  "nodeType": "ExpressionStatement",
                  "src": "3198:31:0"
                }
              ]
            },
            "id": 383,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [],
                "id": 373,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 372,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 686,
                  "src": "3178:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3178:9:0"
              }
            ],
            "name": "emergencyERC20Drain",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 371,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 368,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 383,
                  "src": "3148:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$841",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 367,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 841,
                    "src": "3148:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$841",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 370,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 383,
                  "src": "3161:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 369,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3161:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3146:31:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 374,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3188:0:0"
            },
            "scope": 414,
            "src": "3118:118:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "id": 389,
            "name": "AdminTransferred",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 388,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 385,
                  "indexed": true,
                  "name": "previousAdmin",
                  "nodeType": "VariableDeclaration",
                  "scope": 389,
                  "src": "3265:29:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 384,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3265:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 387,
                  "indexed": true,
                  "name": "newAdmin",
                  "nodeType": "VariableDeclaration",
                  "scope": 389,
                  "src": "3296:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 386,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3296:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3264:57:0"
            },
            "src": "3242:80:0"
          },
          {
            "body": {
              "id": 405,
              "nodeType": "Block",
              "src": "3377:76:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 397,
                        "name": "admin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 492,
                        "src": "3404:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 398,
                        "name": "newAdmin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 391,
                        "src": "3411:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 396,
                      "name": "AdminTransferred",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 389,
                      "src": "3387:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 399,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3387:33:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 400,
                  "nodeType": "ExpressionStatement",
                  "src": "3387:33:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 403,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 401,
                      "name": "admin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 492,
                      "src": "3430:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 402,
                      "name": "newAdmin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 391,
                      "src": "3438:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "3430:16:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 404,
                  "nodeType": "ExpressionStatement",
                  "src": "3430:16:0"
                }
              ]
            },
            "id": 406,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [],
                "id": 394,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 393,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 686,
                  "src": "3367:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3367:9:0"
              }
            ],
            "name": "changeAdmin",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 392,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 391,
                  "name": "newAdmin",
                  "nodeType": "VariableDeclaration",
                  "scope": 406,
                  "src": "3349:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 390,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3349:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3348:18:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 395,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3377:0:0"
            },
            "scope": 414,
            "src": "3328:125:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 412,
              "nodeType": "Block",
              "src": "3491:25:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 409,
                      "name": "revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1234,
                      "src": "3501:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                        "typeString": "function () pure"
                      }
                    },
                    "id": 410,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3501:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 411,
                  "nodeType": "ExpressionStatement",
                  "src": "3501:8:0"
                }
              ]
            },
            "id": 413,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 407,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3468:2:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 408,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3491:0:0"
            },
            "scope": 414,
            "src": "3459:57:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 415,
        "src": "71:3447:0"
      }
    ],
    "src": "0:3518:0"
  },
  "legacyAST": {
    "absolutePath": "/Users/herogenie/Develope/Token/FinToken/contracts/FinToken.sol",
    "exportedSymbols": {
      "FinToken": [
        414
      ]
    },
    "id": 415,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "absolutePath": "/Users/herogenie/Develope/Token/FinToken/contracts/zeppelin/token/PausableToken.sol",
        "file": "./zeppelin/token/PausableToken.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 415,
        "sourceUnit": 973,
        "src": "25:44:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": [],
            "baseName": {
              "contractScope": null,
              "id": 3,
              "name": "PausableToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 972,
              "src": "92:13:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PausableToken_$972",
                "typeString": "contract PausableToken"
              }
            },
            "id": 4,
            "nodeType": "InheritanceSpecifier",
            "src": "92:13:0"
          }
        ],
        "contractDependencies": [
          558,
          712,
          798,
          841,
          870,
          972,
          1218
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 414,
        "linearizedBaseContracts": [
          414,
          972,
          558,
          712,
          1218,
          798,
          841,
          870
        ],
        "name": "FinToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 7,
            "name": "name",
            "nodeType": "VariableDeclaration",
            "scope": 414,
            "src": "113:56:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string memory"
            },
            "typeName": {
              "id": 5,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "113:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string storage pointer"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "4675656c20496e6a656374696f6e204e6574776f726b",
              "id": 6,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "145:24:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_48bfbfbb3c71825bba74c4da07d1653f612c69f63ea7ab0d05271c0fea4996a1",
                "typeString": "literal_string \"Fuel Injection Network\""
              },
              "value": "Fuel Injection Network"
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 10,
            "name": "symbol",
            "nodeType": "VariableDeclaration",
            "scope": 414,
            "src": "175:39:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string memory"
            },
            "typeName": {
              "id": 8,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "175:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string storage pointer"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "46494e",
              "id": 9,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "209:5:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_79015a26e39f71d7947c4ec2aea33907f3f6828759e5930304d7eef5707ff1a2",
                "typeString": "literal_string \"FIN\""
              },
              "value": "FIN"
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 13,
            "name": "decimals",
            "nodeType": "VariableDeclaration",
            "scope": 414,
            "src": "220:38:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint8",
              "typeString": "uint8"
            },
            "typeName": {
              "id": 11,
              "name": "uint8",
              "nodeType": "ElementaryTypeName",
              "src": "220:5:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint8",
                "typeString": "uint8"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "3138",
              "id": 12,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "256:2:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_18_by_1",
                "typeString": "int_const 18"
              },
              "value": "18"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 17,
            "name": "approvedInvestorListWithDate",
            "nodeType": "VariableDeclaration",
            "scope": 414,
            "src": "265:53:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 16,
              "keyType": {
                "id": 14,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "273:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "265:24:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 15,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "284:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 48,
              "nodeType": "Block",
              "src": "392:186:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 26,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 24,
                      "name": "admin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 492,
                      "src": "402:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 25,
                      "name": "_admin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19,
                      "src": "410:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "402:14:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 27,
                  "nodeType": "ExpressionStatement",
                  "src": "402:14:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 30,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 28,
                      "name": "totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 845,
                      "src": "427:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 29,
                      "name": "_totalTokenAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21,
                      "src": "441:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "427:31:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 31,
                  "nodeType": "ExpressionStatement",
                  "src": "427:31:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 37,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 32,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 725,
                        "src": "468:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 35,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 33,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1230,
                          "src": "477:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 34,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "477:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "468:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 36,
                      "name": "_totalTokenAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21,
                      "src": "491:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "468:40:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 38,
                  "nodeType": "ExpressionStatement",
                  "src": "468:40:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "307830",
                            "id": 41,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "535:3:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0x0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 40,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "527:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 42,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "527:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 43,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1230,
                          "src": "541:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 44,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "541:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 45,
                        "name": "_totalTokenAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21,
                        "src": "553:17:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 39,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 869,
                      "src": "518:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 46,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "518:53:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 47,
                  "nodeType": "ExpressionStatement",
                  "src": "518:53:0"
                }
              ]
            },
            "id": 49,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "FinToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 22,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19,
                  "name": "_admin",
                  "nodeType": "VariableDeclaration",
                  "scope": 49,
                  "src": "344:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 18,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "344:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 21,
                  "name": "_totalTokenAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 49,
                  "src": "360:25:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "360:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "342:45:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 23,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "392:0:0"
            },
            "scope": 414,
            "src": "325:253:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 56,
              "nodeType": "Block",
              "src": "634:27:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 54,
                    "name": "now",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1232,
                    "src": "651:3:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 53,
                  "id": 55,
                  "nodeType": "Return",
                  "src": "644:10:0"
                }
              ]
            },
            "id": 57,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getTime",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 50,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "600:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 53,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 57,
                  "src": "628:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 51,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "628:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "627:6:0"
            },
            "scope": 414,
            "src": "584:77:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 70,
              "nodeType": "Block",
              "src": "718:72:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 68,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 62,
                        "name": "getTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57,
                        "src": "735:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                          "typeString": "function () view returns (uint256)"
                        }
                      },
                      "id": 63,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "735:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 65,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1230,
                            "src": "772:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 66,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "772:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 64,
                        "name": "getLockFundsReleaseTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 168,
                        "src": "748:23:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                          "typeString": "function (address) view returns (uint256)"
                        }
                      },
                      "id": 67,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "748:35:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "735:48:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 61,
                  "id": 69,
                  "nodeType": "Return",
                  "src": "728:55:0"
                }
              ]
            },
            "id": 71,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isUnlocked",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 58,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "686:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 61,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 71,
                  "src": "712:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 59,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "712:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "711:6:0"
            },
            "scope": 414,
            "src": "667:123:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 92,
              "nodeType": "Block",
              "src": "840:93:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 80,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 76,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 73,
                          "src": "858:2:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "307830",
                              "id": 78,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "872:3:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0x0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 77,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "864:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 79,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "864:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "858:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 75,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1233,
                      "src": "850:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 81,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "850:27:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 82,
                  "nodeType": "ExpressionStatement",
                  "src": "850:27:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 88,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 84,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 73,
                          "src": "895:2:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 86,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1257,
                              "src": "909:4:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_FinToken_$414",
                                "typeString": "contract FinToken"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_FinToken_$414",
                                "typeString": "contract FinToken"
                              }
                            ],
                            "id": 85,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "901:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 87,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "901:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "895:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 83,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1233,
                      "src": "887:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 89,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "887:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 90,
                  "nodeType": "ExpressionStatement",
                  "src": "887:28:0"
                },
                {
                  "id": 91,
                  "nodeType": "PlaceholderStatement",
                  "src": "925:1:0"
                }
              ]
            },
            "id": 93,
            "name": "validDestination",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 74,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 73,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 93,
                  "src": "823:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 72,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "823:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "821:14:0"
            },
            "src": "796:137:0",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 101,
              "nodeType": "Block",
              "src": "971:61:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 96,
                          "name": "isUnlocked",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 71,
                          "src": "989:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                            "typeString": "function () view returns (bool)"
                          }
                        },
                        "id": 97,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "989:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 95,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1233,
                      "src": "981:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 98,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "981:21:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 99,
                  "nodeType": "ExpressionStatement",
                  "src": "981:21:0"
                },
                {
                  "id": 100,
                  "nodeType": "PlaceholderStatement",
                  "src": "1024:1:0"
                }
              ]
            },
            "id": 102,
            "name": "onlyWhenUnlocked",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 94,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "964:2:0"
            },
            "src": "939:93:0",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 122,
              "nodeType": "Block",
              "src": "1143:51:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 118,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 104,
                        "src": "1175:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 119,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 106,
                        "src": "1180:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 116,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1258,
                        "src": "1160:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_FinToken_$414",
                          "typeString": "contract super FinToken"
                        }
                      },
                      "id": 117,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 896,
                      "src": "1160:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) returns (bool)"
                      }
                    },
                    "id": 120,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1160:27:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 115,
                  "id": 121,
                  "nodeType": "Return",
                  "src": "1153:34:0"
                }
              ]
            },
            "id": 123,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [],
                "id": 109,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 108,
                  "name": "onlyWhenUnlocked",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 102,
                  "src": "1085:16:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1085:16:0"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 111,
                    "name": "_to",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 104,
                    "src": "1119:3:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 112,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 110,
                  "name": "validDestination",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 93,
                  "src": "1102:16:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1102:21:0"
              }
            ],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 107,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 104,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 123,
                  "src": "1056:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 103,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1056:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 106,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 123,
                  "src": "1069:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 105,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1069:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1055:29:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 115,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 114,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 123,
                  "src": "1133:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 113,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1133:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1132:6:0"
            },
            "scope": 414,
            "src": "1038:156:0",
            "stateMutability": "nonpayable",
            "superFunction": 896,
            "visibility": "public"
          },
          {
            "body": {
              "id": 155,
              "nodeType": "Block",
              "src": "1324:124:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 145,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 140,
                            "name": "getTime",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 57,
                            "src": "1342:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 141,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1342:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 143,
                              "name": "_from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 125,
                              "src": "1379:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 142,
                            "name": "getLockFundsReleaseTime",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 168,
                            "src": "1355:23:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address) view returns (uint256)"
                            }
                          },
                          "id": 144,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1355:30:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1342:43:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 139,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1233,
                      "src": "1334:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 146,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1334:52:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 147,
                  "nodeType": "ExpressionStatement",
                  "src": "1334:52:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 150,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 125,
                        "src": "1422:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 151,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 127,
                        "src": "1429:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 152,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 129,
                        "src": "1434:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 148,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1258,
                        "src": "1403:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_FinToken_$414",
                          "typeString": "contract super FinToken"
                        }
                      },
                      "id": 149,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 917,
                      "src": "1403:18:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) returns (bool)"
                      }
                    },
                    "id": 153,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1403:38:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 138,
                  "id": 154,
                  "nodeType": "Return",
                  "src": "1396:45:0"
                }
              ]
            },
            "id": 156,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [],
                "id": 132,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 131,
                  "name": "onlyWhenUnlocked",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 102,
                  "src": "1266:16:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1266:16:0"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 134,
                    "name": "_to",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 127,
                    "src": "1300:3:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 135,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 133,
                  "name": "validDestination",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 93,
                  "src": "1283:16:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1283:21:0"
              }
            ],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 130,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 125,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 156,
                  "src": "1222:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 124,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1222:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 127,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 156,
                  "src": "1237:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 126,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1237:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 129,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 156,
                  "src": "1250:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 128,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1250:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1221:44:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 138,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 137,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 156,
                  "src": "1314:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 136,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1314:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1313:6:0"
            },
            "scope": 414,
            "src": "1200:248:0",
            "stateMutability": "nonpayable",
            "superFunction": 917,
            "visibility": "public"
          },
          {
            "body": {
              "id": 167,
              "nodeType": "Block",
              "src": "1533:59:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 163,
                      "name": "approvedInvestorListWithDate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17,
                      "src": "1550:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 165,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 164,
                      "name": "_addr",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 158,
                      "src": "1579:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1550:35:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 162,
                  "id": 166,
                  "nodeType": "Return",
                  "src": "1543:42:0"
                }
              ]
            },
            "id": 168,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getLockFundsReleaseTime",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 159,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 158,
                  "name": "_addr",
                  "nodeType": "VariableDeclaration",
                  "scope": 168,
                  "src": "1487:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 157,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1487:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1486:15:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 162,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 161,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 168,
                  "src": "1522:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 160,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1522:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1521:6:0"
            },
            "scope": 414,
            "src": "1454:138:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 206,
              "nodeType": "Block",
              "src": "1687:203:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 182,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 179,
                          "name": "releaseTime",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 173,
                          "src": "1705:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 180,
                            "name": "getTime",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 57,
                            "src": "1719:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 181,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1719:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1705:23:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 178,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1233,
                      "src": "1697:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 183,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1697:32:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 184,
                  "nodeType": "ExpressionStatement",
                  "src": "1697:32:0"
                },
                {
                  "body": {
                    "id": 204,
                    "nodeType": "Block",
                    "src": "1797:87:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 202,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 196,
                              "name": "approvedInvestorListWithDate",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 17,
                              "src": "1811:28:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 200,
                            "indexExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 197,
                                "name": "newInvestorList",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 171,
                                "src": "1840:15:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                  "typeString": "address[] memory"
                                }
                              },
                              "id": 199,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 198,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 186,
                                "src": "1856:1:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "1840:18:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "1811:48:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 201,
                            "name": "releaseTime",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 173,
                            "src": "1862:11:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1811:62:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 203,
                        "nodeType": "ExpressionStatement",
                        "src": "1811:62:0"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 192,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 189,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 186,
                      "src": "1756:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 190,
                        "name": "newInvestorList",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 171,
                        "src": "1760:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      "id": 191,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1760:22:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1756:26:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 205,
                  "initializationExpression": {
                    "assignments": [
                      186
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 186,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 207,
                        "src": "1744:6:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 185,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "1744:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 188,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 187,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1753:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1744:10:0"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 194,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "1784:3:0",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 193,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 186,
                        "src": "1784:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 195,
                    "nodeType": "ExpressionStatement",
                    "src": "1784:3:0"
                  },
                  "nodeType": "ForStatement",
                  "src": "1739:145:0"
                }
              ]
            },
            "id": 207,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [],
                "id": 176,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 175,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 686,
                  "src": "1665:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1665:9:0"
              }
            ],
            "name": "setLockFunds",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 174,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 171,
                  "name": "newInvestorList",
                  "nodeType": "VariableDeclaration",
                  "scope": 207,
                  "src": "1620:25:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[] memory"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 169,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1620:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 170,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1620:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[] storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 173,
                  "name": "releaseTime",
                  "nodeType": "VariableDeclaration",
                  "scope": 207,
                  "src": "1647:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 172,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1647:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1619:45:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 177,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1687:0:0"
            },
            "scope": 414,
            "src": "1598:292:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 244,
              "nodeType": "Block",
              "src": "1967:212:0",
              "statements": [
                {
                  "body": {
                    "id": 242,
                    "nodeType": "Block",
                    "src": "2032:141:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 232,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 226,
                              "name": "approvedInvestorListWithDate",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 17,
                              "src": "2046:28:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 230,
                            "indexExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 227,
                                "name": "investorList",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 210,
                                "src": "2075:12:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                  "typeString": "address[] memory"
                                }
                              },
                              "id": 229,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 228,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 216,
                                "src": "2088:1:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2075:15:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "2046:45:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 231,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2094:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "2046:49:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 233,
                        "nodeType": "ExpressionStatement",
                        "src": "2046:49:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 240,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "delete",
                          "prefix": true,
                          "src": "2109:53:0",
                          "subExpression": {
                            "argumentTypes": null,
                            "components": [
                              {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 234,
                                  "name": "approvedInvestorListWithDate",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 17,
                                  "src": "2116:28:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                    "typeString": "mapping(address => uint256)"
                                  }
                                },
                                "id": 238,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 235,
                                    "name": "investorList",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 210,
                                    "src": "2145:12:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                      "typeString": "address[] memory"
                                    }
                                  },
                                  "id": 237,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 236,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 216,
                                    "src": "2158:1:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "2145:15:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "nodeType": "IndexAccess",
                                "src": "2116:45:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 239,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "TupleExpression",
                            "src": "2115:47:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 241,
                        "nodeType": "ExpressionStatement",
                        "src": "2109:53:0"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 222,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 219,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 216,
                      "src": "1994:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 220,
                        "name": "investorList",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 210,
                        "src": "1998:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      "id": 221,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1998:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1994:23:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 243,
                  "initializationExpression": {
                    "assignments": [
                      216
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 216,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 245,
                        "src": "1982:6:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 215,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "1982:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 218,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 217,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1991:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1982:10:0"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 224,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "2019:3:0",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 223,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 216,
                        "src": "2019:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 225,
                    "nodeType": "ExpressionStatement",
                    "src": "2019:3:0"
                  },
                  "nodeType": "ForStatement",
                  "src": "1977:196:0"
                }
              ]
            },
            "id": 245,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [],
                "id": 213,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 212,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 686,
                  "src": "1945:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1945:9:0"
              }
            ],
            "name": "removeLockFunds",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 211,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 210,
                  "name": "investorList",
                  "nodeType": "VariableDeclaration",
                  "scope": 245,
                  "src": "1921:22:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[] memory"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 208,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1921:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 209,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1921:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[] storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1920:24:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 214,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1967:0:0"
            },
            "scope": 414,
            "src": "1896:283:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 267,
              "nodeType": "Block",
              "src": "2267:114:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 258,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 255,
                          "name": "releaseTime",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 249,
                          "src": "2285:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 256,
                            "name": "getTime",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 57,
                            "src": "2299:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 257,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2299:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2285:23:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 254,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1233,
                      "src": "2277:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 259,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2277:32:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 260,
                  "nodeType": "ExpressionStatement",
                  "src": "2277:32:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 265,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 261,
                        "name": "approvedInvestorListWithDate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17,
                        "src": "2319:28:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 263,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 262,
                        "name": "newInvestor",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 247,
                        "src": "2348:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2319:41:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 264,
                      "name": "releaseTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 249,
                      "src": "2363:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2319:55:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 266,
                  "nodeType": "ExpressionStatement",
                  "src": "2319:55:0"
                }
              ]
            },
            "id": 268,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [],
                "id": 252,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 251,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 686,
                  "src": "2245:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2245:9:0"
              }
            ],
            "name": "setLockFund",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 250,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 247,
                  "name": "newInvestor",
                  "nodeType": "VariableDeclaration",
                  "scope": 268,
                  "src": "2206:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 246,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2206:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 249,
                  "name": "releaseTime",
                  "nodeType": "VariableDeclaration",
                  "scope": 268,
                  "src": "2227:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 248,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2227:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2205:39:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 253,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2267:0:0"
            },
            "scope": 414,
            "src": "2185:196:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 287,
              "nodeType": "Block",
              "src": "2452:115:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 279,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 275,
                        "name": "approvedInvestorListWithDate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17,
                        "src": "2462:28:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 277,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 276,
                        "name": "investor",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 270,
                        "src": "2491:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2462:38:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 278,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2503:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "2462:42:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 280,
                  "nodeType": "ExpressionStatement",
                  "src": "2462:42:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 285,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "2514:46:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 281,
                            "name": "approvedInvestorListWithDate",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17,
                            "src": "2521:28:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 283,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 282,
                            "name": "investor",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 270,
                            "src": "2550:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "2521:38:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 284,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "2520:40:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 286,
                  "nodeType": "ExpressionStatement",
                  "src": "2514:46:0"
                }
              ]
            },
            "id": 288,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [],
                "id": 273,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 272,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 686,
                  "src": "2430:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2430:9:0"
              }
            ],
            "name": "removeLockFund",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 271,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 270,
                  "name": "investor",
                  "nodeType": "VariableDeclaration",
                  "scope": 288,
                  "src": "2412:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 269,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2412:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2411:18:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 274,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2452:0:0"
            },
            "scope": 414,
            "src": "2388:179:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "id": 294,
            "name": "Burn",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 293,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 290,
                  "indexed": true,
                  "name": "_burner",
                  "nodeType": "VariableDeclaration",
                  "scope": 294,
                  "src": "2585:23:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 289,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2585:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 292,
                  "indexed": false,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 294,
                  "src": "2610:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 291,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2610:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2584:41:0"
            },
            "src": "2574:52:0"
          },
          {
            "body": {
              "id": 340,
              "nodeType": "Block",
              "src": "2698:226:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 314,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 303,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 725,
                        "src": "2708:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 306,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 304,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1230,
                          "src": "2717:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 305,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2717:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2708:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 312,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 296,
                          "src": "2756:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 307,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 725,
                            "src": "2731:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 310,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 308,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1230,
                              "src": "2740:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 309,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2740:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2731:20:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 311,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sub",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 631,
                        "src": "2731:24:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 313,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2731:32:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2708:55:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 315,
                  "nodeType": "ExpressionStatement",
                  "src": "2708:55:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 321,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 316,
                      "name": "totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 845,
                      "src": "2773:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 319,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 296,
                          "src": "2803:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 317,
                          "name": "totalSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 845,
                          "src": "2787:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 318,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sub",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 631,
                        "src": "2787:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 320,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2787:23:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2773:37:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 322,
                  "nodeType": "ExpressionStatement",
                  "src": "2773:37:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 324,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1230,
                          "src": "2825:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 325,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2825:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 326,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 296,
                        "src": "2837:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 323,
                      "name": "Burn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 294,
                      "src": "2820:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 327,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2820:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 328,
                  "nodeType": "ExpressionStatement",
                  "src": "2820:24:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 330,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1230,
                          "src": "2863:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 331,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2863:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "307830",
                            "id": 333,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2883:3:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0x0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 332,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2875:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 334,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2875:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 335,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 296,
                        "src": "2889:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 329,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 869,
                      "src": "2854:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 336,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2854:42:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 337,
                  "nodeType": "ExpressionStatement",
                  "src": "2854:42:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 338,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2913:4:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 302,
                  "id": 339,
                  "nodeType": "Return",
                  "src": "2906:11:0"
                }
              ]
            },
            "id": 341,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [],
                "id": 299,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 298,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 686,
                  "src": "2662:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2662:9:0"
              }
            ],
            "name": "burn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 297,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 296,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 341,
                  "src": "2646:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 295,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2646:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2645:16:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 302,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 301,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 341,
                  "src": "2688:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 300,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2688:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2687:6:0"
            },
            "scope": 414,
            "src": "2632:292:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 365,
              "nodeType": "Block",
              "src": "3015:97:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 354,
                            "name": "_from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 343,
                            "src": "3047:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 355,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1230,
                              "src": "3054:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 356,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "3054:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 357,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 345,
                            "src": "3066:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 353,
                          "name": "transferFrom",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            156
                          ],
                          "referencedDeclaration": 156,
                          "src": "3033:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,address,uint256) returns (bool)"
                          }
                        },
                        "id": 358,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3033:41:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 352,
                      "name": "assert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1221,
                      "src": "3025:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_assert_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 359,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3025:51:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 360,
                  "nodeType": "ExpressionStatement",
                  "src": "3025:51:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 362,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 345,
                        "src": "3098:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 361,
                      "name": "burn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 341,
                      "src": "3093:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (uint256) returns (bool)"
                      }
                    },
                    "id": 363,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3093:12:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 351,
                  "id": 364,
                  "nodeType": "Return",
                  "src": "3086:19:0"
                }
              ]
            },
            "id": 366,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [],
                "id": 348,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 347,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 686,
                  "src": "2979:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2979:9:0"
              }
            ],
            "name": "burnFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 346,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 343,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 366,
                  "src": "2948:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 342,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2948:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 345,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 366,
                  "src": "2963:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 344,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2963:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2947:31:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 351,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 350,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 366,
                  "src": "3005:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 349,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3005:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3004:6:0"
            },
            "scope": 414,
            "src": "2930:182:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 382,
              "nodeType": "Block",
              "src": "3188:48:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 378,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 660,
                        "src": "3214:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 379,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 370,
                        "src": "3221:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 375,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 368,
                        "src": "3198:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$841",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 377,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 861,
                      "src": "3198:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 380,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3198:31:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 381,
                  "nodeType": "ExpressionStatement",
                  "src": "3198:31:0"
                }
              ]
            },
            "id": 383,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [],
                "id": 373,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 372,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 686,
                  "src": "3178:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3178:9:0"
              }
            ],
            "name": "emergencyERC20Drain",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 371,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 368,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 383,
                  "src": "3148:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$841",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 367,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 841,
                    "src": "3148:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$841",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 370,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 383,
                  "src": "3161:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 369,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3161:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3146:31:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 374,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3188:0:0"
            },
            "scope": 414,
            "src": "3118:118:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "id": 389,
            "name": "AdminTransferred",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 388,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 385,
                  "indexed": true,
                  "name": "previousAdmin",
                  "nodeType": "VariableDeclaration",
                  "scope": 389,
                  "src": "3265:29:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 384,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3265:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 387,
                  "indexed": true,
                  "name": "newAdmin",
                  "nodeType": "VariableDeclaration",
                  "scope": 389,
                  "src": "3296:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 386,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3296:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3264:57:0"
            },
            "src": "3242:80:0"
          },
          {
            "body": {
              "id": 405,
              "nodeType": "Block",
              "src": "3377:76:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 397,
                        "name": "admin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 492,
                        "src": "3404:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 398,
                        "name": "newAdmin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 391,
                        "src": "3411:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 396,
                      "name": "AdminTransferred",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 389,
                      "src": "3387:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 399,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3387:33:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 400,
                  "nodeType": "ExpressionStatement",
                  "src": "3387:33:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 403,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 401,
                      "name": "admin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 492,
                      "src": "3430:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 402,
                      "name": "newAdmin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 391,
                      "src": "3438:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "3430:16:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 404,
                  "nodeType": "ExpressionStatement",
                  "src": "3430:16:0"
                }
              ]
            },
            "id": 406,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [],
                "id": 394,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 393,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 686,
                  "src": "3367:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3367:9:0"
              }
            ],
            "name": "changeAdmin",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 392,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 391,
                  "name": "newAdmin",
                  "nodeType": "VariableDeclaration",
                  "scope": 406,
                  "src": "3349:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 390,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3349:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3348:18:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 395,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3377:0:0"
            },
            "scope": 414,
            "src": "3328:125:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 412,
              "nodeType": "Block",
              "src": "3491:25:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 409,
                      "name": "revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1234,
                      "src": "3501:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                        "typeString": "function () pure"
                      }
                    },
                    "id": 410,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3501:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 411,
                  "nodeType": "ExpressionStatement",
                  "src": "3501:8:0"
                }
              ]
            },
            "id": 413,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 407,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3468:2:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 408,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3491:0:0"
            },
            "scope": 414,
            "src": "3459:57:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 415,
        "src": "71:3447:0"
      }
    ],
    "src": "0:3518:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-02-24T10:31:51.920Z",
  "devdoc": {
    "methods": {
      "allowance(address,address)": {
        "details": "Function to check the amount of tokens that an owner allowed to a spender.",
        "params": {
          "_owner": "address The address which owns the funds.",
          "_spender": "address The address which will spend the funds."
        },
        "return": "A uint256 specifying the amount of tokens still available for the spender."
      },
      "balanceOf(address)": {
        "details": "Gets the balance of the specified address.",
        "params": {
          "_owner": "The address to query the the balance of."
        },
        "return": "An uint256 representing the amount owned by the passed address."
      }
    }
  },
  "userdoc": {
    "methods": {}
  }
}