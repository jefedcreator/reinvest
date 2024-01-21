pragma solidity 0.8.19;

import {FlashLoanSimpleReceiverBase} from "./@aave/core-v3/contracts/flashloan/base/FlashLoanSimpleReceiverBase.sol";
import {IPoolAddressesProvider} from "./@aave/core-v3/contracts/interfaces/IPoolAddressesProvider.sol";
import {IERC20} from "./@aave/core-v3/contracts/dependencies/openzeppelin/contracts/IERC20.sol";
import {IPool} from "./@aave/core-v3/contracts/interfaces/IPool.sol";
import {GhoToken} from "./gho/GhoToken.sol";
import {IGhoToken} from "./gho/interfaces/IGhoToken.sol";
import "./vault.sol";

contract Reinvest {
    IERC20 dai = IERC20(0xFF34B3d4Aee8ddCd6F9AFFFB6Fe49bD371b8a357);
    // IERC20 dai = IERC20(0xD77b79BE3e85351fF0cbe78f1B58cf8d1064047C);
    IPool pool = IPool(0x48914C788295b5db23aF2b5F0B3BE775C4eA9440);
    // IPool pool = IPool(0x48914C788295b5db23aF2b5F0B3BE775C4eA9440);

    // IPool pool = IPool(0x0562453c3DAFBB5e625483af58f4E6D668c44e19);
    // IPool pool = IPool(0x617Cf26407193E32a771264fB5e9b8f09715CdfB);
    GhoToken gho = GhoToken(0xcbE9771eD31e761b744D3cB9eF78A1f32DD99211);

    address vault;

    constructor() {
        vault = address(new Vault());
    }

    function invest(uint256 _investment) public {
        // Approve the Aave Pool to pull DAI funds
        dai.approve(address(pool), _investment);
        // Supply 100 DAI to Aave Pool
        pool.supply(address(dai), _investment, msg.sender, 0);

        // Mint 10 GHO (2 for variable interest rate mode)
        pool.borrow(address(gho), _investment, 2, 0, msg.sender);
        // assertEq(gho.balanceOf(WE), 10e18);
        gho.approve(vault, _investment);
        gho.transfer(vault, _investment);
    }

    // send gho to receiver
    function send(
        address sender,
        address receiver,
        uint256 amount,
        uint256 fee,
        uint256 deadline,
        // Permit signature
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external {
        dai.approve(address(pool), amount);
        // Supply 100 DAI to Aave Pool
        pool.supply(address(dai), amount, WE, 0);

        // Mint amount of GHO (2 for variable interest rate mode)
        pool.borrow(address(gho), amount, 2, 0, WE);
        // Permit
        gho.permit(sender, address(this), amount + fee, deadline, v, r, s);
        // Send amount to receiver
        gho.transferFrom(sender, receiver, amount);
        // Take fee - send fee to msg.sender
        gho.transferFrom(sender, msg.sender, fee);
    }
}
