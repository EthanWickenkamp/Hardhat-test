// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// inherit erc-20 and ownable 
contract MyToken is ERC20, Ownable {
    constructor(uint256 initialSupply)
        ERC20("My Token", "MTK")
        Ownable(msg.sender)
    {
        _mint(msg.sender, initialSupply);
    }

// function for owner to mint new tokens
    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }
}
