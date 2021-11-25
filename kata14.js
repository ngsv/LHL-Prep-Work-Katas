//Change Calculator

const calculateChange = function(total, cash) {
  let change = cash - total;
  let twentyDollars = 0;
  let tenDollars = 0;
  let fiveDollars = 0;
  let twoDollars = 0;
  let oneDollar = 0;
  let quarter = 0;
  let dime = 0;
  let nickel = 0;
  let penny = 0;
  let changeObject = {};

  while (change > 0) {
    if (change / 2000 >= 1) {
      twentyDollars = Math.floor(change/2000);
      change = change - 2000*twentyDollars;
      changeObject.twentyDollars = twentyDollars;
    } else if (change / 1000 >= 1) {
      tenDollars = Math.floor(change/1000);
      change = change - 1000*tenDollars;
      changeObject.tenDollars = tenDollars;
    } else if (change / 500 >= 1) {
      fiveDollars = Math.floor(change/500);
      change = change - 500*fiveDollars;
      changeObject.fiveDollars = fiveDollars;
    } else if (change / 200 >= 1) {
      twoDollars = Math.floor(change/200);
      change = change - 200*twoDollars;
      changeObject.twoDollars = twoDollars;
    } else if (change / 100 >= 1) {
      oneDollar = Math.floor(change/100);
      change = change - 100*oneDollar;
      changeObject.oneDollar = oneDollar;
    } else if (change / 25 >= 1) {
      quarter = Math.floor(change/25);
      change = change - 25*quarter;
      changeObject.quarter = quarter;
    } else if (change / 10 >= 1) {
      dime = Math.floor(change/10);
      change = change - 10*dime;
      changeObject.dime = dime;
    } else if (change / 5 >= 1) {
      nickel = Math.floor(change/5);
      change = change - 5*nickel;
      changeObject.nickel = nickel;
    } else {
      penny = change;
      changeObject.penny = penny;
      change = 0;
    }
  }
  return changeObject;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
