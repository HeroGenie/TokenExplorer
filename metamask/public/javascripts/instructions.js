// function distribute() {
//     locktoken.transfer("0xC94B8d331DB79479dF90D9f1565F3886426E76ad", "0x3fAcB4159d4660cAc3f3d9B2790Db13451B93C7D", 500000000000000000000000000)
//         .then(() => locktoken.transfer("0xC94B8d331DB79479dF90D9f1565F3886426E76ad", "0xB70911878e27bA77F49688C5531c10EC2ed4ecF3", 5000000000000000000000000000));
// }

// function balance2() {
//     return new Promise((resolve, reject) => FinToken.balanceOf("0x1aeE225C190264EB3eeaef4E18170E2eae98de01", function (err, amount) {
//         console.log(`balance of ${address}: ${amount.toNumber()}`);
//         resolve();
//     }));
// }

// function lock() {
//     lock("lock0", 100000000000000000000000000, "12/17/2019 00:00 AM", "0xC94B8d331DB79479dF90D9f1565F3886426E76ad")
//         .then(() => lock("lock1", 100000000000000000000000000, "12/17/2020 00:00 AM", "0xC94B8d331DB79479dF90D9f1565F3886426E76ad"))
//         .then(() => lock("lock2", 100000000000000000000000000, "12/17/2019 00:00 AM", "0x3fAcB4159d4660cAc3f3d9B2790Db13451B93C7D"))
//         .then(() => lock("lock3", 100000000000000000000000000, "12/17/2019 00:00 AM", "0xB70911878e27bA77F49688C5531c10EC2ed4ecF3"));
// }
//
// function showLocks() {
//     tokensLocked("0xC94B8d331DB79479dF90D9f1565F3886426E76ad", "lock0")
//         .then(() => tokensLocked("0xC94B8d331DB79479dF90D9f1565F3886426E76ad", "lock1"))
//         .then(() => tokensLocked("0x3fAcB4159d4660cAc3f3d9B2790Db13451B93C7D", "lock2"))
//         .then(() => tokensLocked("0xB70911878e27bA77F49688C5531c10EC2ed4ecF3", "lock3"));
// }