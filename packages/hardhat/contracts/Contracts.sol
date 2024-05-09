//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";

// Use openzeppelin to inherit battle-tested implementations (ERC20, ERC721, etc)
// import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * A smart contract that allows changing a state variable of the contract and tracking the changes
 * It also allows the owner to withdraw the Ether in the contract
 * @author BuidlGuidl
 */
// interface ITest {
// 	function val() external view returns (uint256);
// 	function test() external;
// }

// contract Callback {
// 	uint256 public val;

// 	fallback() external {
// 		val = ITest(msg.sender).val();
// 	}
// }

contract MyContract {
	string public greeting = "Just have a try ~";

	function returnMany()
		public
		pure
		returns (uint256, bool, uint256)
	{
		return (1, true, 2);
	}

	function named()
		public
		pure
		returns (uint256 x, bool b, uint256 y)
	{
		return (1, true, 2);
	}

	function assigned()
		public
		pure
		returns (uint256 x, bool b, uint256 y)
	{
		// return (
		x = 1;
		y = 2;
		b = true;
		// );
	}

	function destructuringAssignments()
		public
		pure
		returns (uint256, bool, uint256, uint256, uint256)
	{
		(uint256 i, bool b, uint256 j) = returnMany();
		(uint256 x, , uint256 y) = (4, 5, 6);

		return (i, b, j, x, y);
	}

	function arrayInput(uint256[] memory _arr) public {}

	uint256[] public arr;

	function arrayOutput() public view returns (uint256[] memory) {
		return arr;
	}

	function someFuncWithManyInputs(
		uint256 x,
		uint256 y,
		uint256 z,
		address a,
		bool b,
		string memory c
	) public pure returns (uint256) {}

	function callFunc() external pure returns (uint256) {
		return someFuncWithManyInputs(1, 2, 3, address(0), true, "c");
	}

	function callFuncWithKeyValue() external pure returns (uint256) {
		return
			someFuncWithManyInputs({
				a: address(0),
				b: true,
				c: "c",
				x: 1,
				y: 2,
				z: 3
			});
	}
}

contract YourContract {
	// my test state variables

	// State Variables
	// address public immutable owner;
	string public greeting = "Building Unstoppable Apps!!!";

	// bool public premium = false;
	// uint256 public totalCounter = 0;
	// mapping(address => uint) public userGreetingCounter;

	// Events: a way to emit log statements from smart contract that can be listened to by external parties
	// event GreetingChange(
	// 	address indexed greetingSetter,
	// 	string newGreeting,
	// 	bool premium,
	// 	uint256 value
	// );

	// my test constructor
	// constructor(){

	// }

	// Constructor: Called once on contract deployment
	// Check packages/hardhat/deploy/00_deploy_your_contract.ts
	// constructor(address _owner) {
	// 	owner = _owner;
	// }

	// Modifier: used to define a set of rules that must be met before or after a function is executed
	// Check the withdraw() function
	// modifier isOwner() {
	// 	// msg.sender: predefined variable that represents address of the account that called the current function
	// 	require(msg.sender == owner, "Not the Owner");
	// 	_;
	// }

	// my test function
	// test address_1:
	//   0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
	// test address_2:
	//   0xadAa7598028f017f9796731D1b4e48320c1cB098

	/**
	 * Function that allows anyone to change the state variable "greeting" of the contract and increase the counters
	 *
	 * @param _newGreeting (string memory) - new greeting to save on the contract
	 */
	// function setGreeting(string memory _newGreeting) public payable {
	// 	// Print data to the hardhat chain console. Remove when deploying to a live network.
	// 	console.log(
	// 		"Setting new greeting '%s' from %s",
	// 		_newGreeting,
	// 		msg.sender
	// 	);

	// 	// Change state variables
	// 	greeting = _newGreeting;
	// 	totalCounter += 1;
	// 	userGreetingCounter[msg.sender] += 1;

	// 	// msg.value: built-in global variable that represents the amount of ether sent with the transaction
	// 	if (msg.value > 0) {
	// 		premium = true;
	// 	} else {
	// 		premium = false;
	// 	}

	// 	// emit: keyword used to trigger an event
	// 	emit GreetingChange(msg.sender, _newGreeting, msg.value > 0, msg.value);
	// }

	/**
	 * Function that allows the owner to withdraw all the Ether in the contract
	 * The function can only be called by the owner of the contract as defined by the isOwner modifier
	 */
	// function withdraw() public isOwner {
	// 	(bool success, ) = owner.call{ value: address(this).balance }("");
	// 	require(success, "Failed to send Ether");
	// }

	/**
	 * Function that allows the contract to receive ETH
	 */
	receive() external payable {}
}