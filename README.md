# Sample Hardhat 3 Beta Project (minimal)

This project has a minimal setup of Hardhat 3 Beta, without any plugins.

## What's included?

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