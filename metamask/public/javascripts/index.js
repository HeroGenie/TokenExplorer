var Token;

// DEBUG=metamask:* npm start

window.addEventListener('load', function () {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
        web3 = new Web3(web3.currentProvider);
    } else {
        console.log("metamask is not loaded");
        // Handle the case where the user doesn't have Metamask installed
        // Probably show them a message prompting them to install
    }

    // Fin
    Token = web3.eth.contract(finToken.abi).at('0x1Dd7B2878B6d5671Ed602e60818b0D9A0CD1CDF7');
});

function balance() {
    // input에 입력한 주소 가져오기
    var userAccount = document.getElementById("user_input").value
    // 계좌 잔액 구해오기
    new Promise((resolve, reject) => Token.balanceOf(userAccount, function (err, amount) {
        console.log(`balance of ${userAccount}: ${amount.toNumber()}`);
        resolve();
    }));
}

function balance2() {
    // 메타마스크에서 주소 가져오기
    web3.eth.getAccounts().then(function (result) {
        var userAccount = result[0]; // address
        // 계좌 잔액 구해오기
        new Promise((resolve, reject) => Token.balanceOf(userAccount, function (err, amount) {
            console.log(`balance of ${userAccount}: ${amount.toNumber()}`);
            resolve();
        }));
    })
}

function pausedPublic() {
    return new Promise((resolve, reject) => Token.pausedPublic((err, result) => {
        console.log(`pausedPublic: ${result}`);
        resolve();
    }));
}

function pause() {
    return new Promise((resolve, reject) => Token.pause(false, false, (err, result) => {
        console.log(result);
        resolve();
    }));
}





//
// function totalSupply() {
//     return new Promise((resolve, reject) => finToken.totalSupply((err, result) => {
//         console.log(`total supply: ${result.toNumber()}`);
//         resolve();
//     }));
// }
//
// function transfer(from, to, amount) {
//     return new Promise((resolve, reject) => finToken.transfer(to, amount, {from: from}, (err, result) => {
//         console.log(`transfer from ${from} to ${to} ${amount}`);
//         resolve();
//     }));
//
//     // "name": "transfer",
//     //     "outputs": [
//     //     {
//     //         "name": "",
//     //         "type": "bool"
//     //     }
//     // ],
//
// }
//
// function balanceOf(address) {
//     return new Promise((resolve, reject) => FinToken.balanceOf(address, function (err, amount) {
//         console.log(`balance of ${address}: ${amount.toNumber()}`);
//         resolve();
//     }));
// }
//
// function totalBalanceOf(address) {
//     return new Promise((resolve, reject) => FinToken.totalBalanceOf(address, (err, result) => {
//         console.log(result.toNumber());
//         resolve();
//     }));
// }
//
// function lock(reason, amount, time, addr, alias) {
//     let lockDate = new Date(time);
//     let now = new Date();
//     let timeGap = Math.floor((lockDate - now) / 1000);
//     console.log(`time gap: ${timeGap}`);
//     if (timeGap <= 0) return;
//     return new Promise((resolve, reject) => finToken.lock(web3.fromAscii(reason), amount, timeGap, addr, (err, result) => {
//         console.log(`Lock ${alias}\'s token with ${amount} until ${time}`);
//         resolve();
//     }));
// }
//
// function tokensLocked(address, reason) {
//     return new Promise((resolve, reject) => finToken.tokensLocked(address, reason, function (err, result) {
//         console.log(`${reason}: ${result.toNumber()}`);
//         resolve();
//     }));
// }
//
// function getUnlockableTokens(address) {
//     return new Promise((resolve, reject) => finToken.getUnlockableTokens.call(address, function (err, result) {
//         console.log(result.toNumber());
//         resolve();
//     }));
// }
//
// function mint(address, amount) {
//     return new Promise((resolve, reject) => finToken.mint(address, amount, (err, result) => {
//         console.log(result);
//         resolve();
//     }));
// }
//
// function burn(address, amount) {
//     return new Promise((resolve, reject) => finToken.burn(address, amount, (err, result) => {
//         console.log(result);
//         resolve();
//     }));
//
//     // "constant": false,
//     //     "inputs": [
//     //     {
//     //         "name": "_value",
//     //         "type": "uint256"
//     //     }
//     // ],
//     //     "name": "burn",
//     //     "outputs": [
//     //     {
//     //         "name": "",
//     //         "type": "bool"
//     //     }
//     // ],
//     //     "payable": false,
//     //     "stateMutability": "nonpayable",
//     //     "type": "function",
//     //     "signature": "0x42966c68"
//
// }