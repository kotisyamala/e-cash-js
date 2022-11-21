//Initializing the Bitcoin Core connection
var bitcoin = require("bitcoin");
//Bitcoin core server is running at 8332
var clinet = new bitcoin.Client({
    host:'localhost',
    port:8332,
    user:'satoshi',
    pass:'nakamoto'
});

var previousBalance = 0;

function ecash(){
    clinet.getBalance('*',0,function(err,balance){
        if(err){
            console.log(err);
        }else if(balance > previousBalance){
            console.log("Hello e-cash! New Balance: "+balance);
            previousBalance = balance;
        }else{
            console.log("No change in the balence.");
        }
    });
}
setInterval(ecash(),5000);