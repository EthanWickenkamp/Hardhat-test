# Sample Hardhat 3 Beta Project (minimal)

This project has a minimal setup of Hardhat 3 Beta, without any plugins.

## What's included? / File Structure

The project includes native support for TypeScript, Hardhat scripts, tasks, and support for Solidity compilation and tests.


##### package.json
npm package file
hardhat and plugin packages installed

##### tsconfig.json
type script config

##### hardhat.config.ts
hardhat project main config file
define solidity compiler version, plugin, tasks

##### contracts
contains soliditiy contracts, .sol files, .t.sol test files

##### tests
typescript of solidity tests
.t.sol is optional any .sol works in this folder

##### ignition
deployment modules to deploy contacts to blockchain
separate hardhat ignition section

##### scripts
custom scripts to automate workflow
full access to hardhat runtime 
can use plugins, connect to networks, and deploy contracts




# Open Zeppelin

## What

smart contract library to inherit common functions and behavior

battle tested inheritance for security and bug prevention

### Contracts

#### ERC-20
[ERC-20 | OpenZeppelin Docs](https://docs.openzeppelin.com/contracts/5.x/erc20)
Fungible token or coin
set token name and symbol:
``` solidity
ERC20("My Token", "MTK")
```


#### Ownable
[Ownable | OpenZeppelin Docs](https://docs.openzeppelin.com/stellar-contracts/access/ownable)
contract has an account owner
authorization for a single priveleged account

make contract deployer owner
``` solidity
Ownable(msg.sender)
```
