function checkCashRegister(price, cash, cid) {
  const currencyUnit = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };

  let changeDue = cash - price;
  let totalCid = 0;
  for (let i = 0; i < cid.length; i++) {
    totalCid += cid[i][1];
  }
  totalCid = Number(totalCid.toFixed(2));
  if (changeDue > totalCid) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  if (changeDue === totalCid) {
    return { status: "CLOSED", change: cid };
  }
  let change = [];
  for (let i = cid.length - 1; i >= 0; i--) {
    const unit = currencyUnit[cid[i][0]];
    const maxUnits = Math.floor(cid[i][1] / unit);
    const returnedUnits = Math.min(maxUnits, Math.floor(changeDue / unit));
    const returnedAmount = returnedUnits * unit;
    if (returnedAmount > 0) {
      change.push([cid[i][0], returnedAmount]);
      changeDue = Number((changeDue - returnedAmount).toFixed(2));
    }
  }
  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: change };
}
console.log(checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]));
