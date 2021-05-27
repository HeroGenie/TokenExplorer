var Token;
const ethEnabled = () => {
    if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        window.ethereum.enable();
        return true;
    }
    return false;
}

window.addEventListener('load', function () {
    if (!ethEnabled()) {
        alert("Please install MetaMask to use this dApp!");
        return
    }
    Token = new window.web3.eth.Contract(finToken.abi, '0x1Dd7B2878B6d5671Ed602e60818b0D9A0CD1CDF7');
});

function balance() {
    // input에 입력한 주소 가져오기
    const userAccount = document.getElementById("user_input").value;
    console.log(`userAccount: ${userAccount}`);
    if (!userAccount){
        alert("주소를 넣어주세요");
        return
    }

    // 계좌 잔액 구해오기
    // 함수에 sol에서 작성한 파라미터 갯수만큼 넣어서 호출 / balanceOf 함수는 파라미터가 지갑주소 하나
    Token.methods.balanceOf(userAccount).call()
        .then(function(result){
            //the result holds your Token Balance that you can assign to a var
            const myTokenBalance = result;
            console.log(`My Fin TokenBalance: ${myTokenBalance}`);
            document.getElementById('demo1').innerHTML = `My Fin TokenBalance: ${myTokenBalance}`;
        });
}

async function balance2() {
    // 메타마스크에서 주소 가져오기
    const accounts = await web3.eth.getAccounts()
    const userAccount = accounts[0]; // address
    console.log(`account: ${userAccount}`);
    document.getElementById('demo2').innerHTML = `account: ${userAccount}`;

    // 계좌 잔액 구해오기
    // 함수에 sol에서 작성한 파라미터 갯수만큼 넣어서 호출 / balanceOf 함수는 파라미터가 지갑주소 하나
    Token.methods.balanceOf(userAccount).call()
        .then(function(result){
            const myTokenBalance = result;
            console.log(`My Fin TokenBalance: ${myTokenBalance}`);
            document.getElementById('demo2').innerHTML = `account: ${userAccount}`
                + '<br/>'
                + `My Fin TokenBalance: ${myTokenBalance}`;
        });
}

async function transferOwnership() {
    // 메타마스크에서 주소 가져오기
    const accounts = await web3.eth.getAccounts()
    const userAccount = accounts[0]; // address

    // 권한을 넘겨받을 지갑주소
    const newOwnerAccount = '0x1df5d7df9ce408be2d17596229a7a98290a0d32c';

    // 함수에 sol에서 작성한 파라미터 갯수만큼 넣어서 호출 / transferOwnership 함수는 파라미터가 지갑주소 하나
    Token.methods.transferOwnership(newOwnerAccount).send({from: userAccount})
        .then(function(receipt){
            console.log(`receipt: ${receipt}`);
            document.getElementById('demo3').innerHTML = `account: ${userAccount}`
                + '<br/>'
                + `result: ${receipt}`;
        });
}