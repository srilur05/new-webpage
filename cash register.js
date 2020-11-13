

  var denomination = [
    { name: "hundered", value: 100.0, total: 200.00 },
    { name: "twenty", value: 20.0, total: 60.00 },
    { name: "ten", value: 10.0, total: 30.00 },
    { name: "five", value: 5.0, total: 30.00 },
    { name: "one", value: 1.0, total: 9.00 },
    { name: "quarter", value: 0.25, total: 2.75 },
    { name: "dime", value: 0.1, total: 3.00 },
    { name: "nickel", value: 0.05, total: 1.05 },
    { name: "penny", value: 0.01, total: 0.19 }
  ];

  // calculate the total amount of change available

  var totalchange = denomination.reduce(calculate);
  function calculate(sum=0, total)
{
    sum+= total;
    return sum;
}


var change;

// function for calculating change
function CashRegister(price, cash)
 {
     change = cash - price;
    
    if (change > totalchange)
    
    { printout = "totalchange=" + totalchange + "insufficient change available";}
     
    else 
    { if (change == totalchange)
        { printout == "totalchange=" + totalchange + "no more change left";}
    }

    document.getElementById('display').innerHTML= printout;
}

denomination.forEach(payback())

function payback(change)
{
    var balance;

    if (change > total)
    { balance = change - total;}

    else {
        if ( change > value)
        {balance = total - change}
    }
}




