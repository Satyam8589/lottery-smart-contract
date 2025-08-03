// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Lottery {
    address public manager;
    address[] public players;

    constructor() {
        manager = msg.sender;
    }

    function enter() public payable {
        require(msg.value > 0.01 ether, "Minimum ETH not met");
        players.push(msg.sender);
    }

    function random() private view returns (uint) {
        return
            uint(
                keccak256(
                    abi.encodePacked(block.timestamp, block.prevrandao, players)
                )
            );
    }

    function pickWinner() public restricted {
        uint index = random() % players.length;
        payable(players[index]).transfer(address(this).balance);
        delete players; // ✅ Proper way to reset dynamic array in Solidity
    }

    modifier restricted() {
        require(msg.sender == manager, "Only manager can call this");
        _;
    }

    function getPlayers() public view returns (address[] memory) {
        return players;
    }
}
