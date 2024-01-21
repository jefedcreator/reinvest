// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./oracle.sol";

contract Vault {
    Oracle private oracle;

    uint256 public totalSupply;
    mapping(address => uint256) public investment;

    constructor(address _token, address _oracleAddress) {
        oracle = Oracle(_oracleAddress);
    }

    function _burn(uint256 investment) private {
        totalSupply -= investment;
        vaults[msg.sender].investment -= investment;
    }

    function deposit(uint256 investment) external payable {
        totalSupply += amountToMint;
        vaults[msg.sender].investment += investment;
    }

    function withdraw(uint256 repaymentAmount) external {
        require(repaymentAmount <= vaults[msg.sender].debtAmount, "withdraw limit exceeded");
        require(token.debtAmount(msg.sender) >= repaymentAmount, "not enough tokens in balance");
        uint256 amountToWithdraw = repaymentAmount / getEthUSDPrice();
        _burn(msg.sender, repaymentAmount);
        vaults[msg.sender].collateralAmount -= amountToWithdraw;
        vaults[msg.sender].debtAmount -= repaymentAmount;
        payable(msg.sender).transfer(amountToWithdraw);
    }

    function getEthUSDPrice() public view returns (uint256) {
        int256 price = oracle.getLatestPrice();
        require(price > 0, "Invalid price from Oracle");
        return uint256(price);
    }

    function getToken() external view returns (address) {
        return address(token);
    }

    function getOracle() public view returns (address) {
        return address(oracle);
    }
}
