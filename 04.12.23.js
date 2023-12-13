// 1.

const FCC = "freeCodeCamp";
let fact = "is cool!";
fact = "is awesome!";
console.log(FCC, fact);


// 2.

function highAndLow(numbers) {
  var numArray = numbers.split(" ").map(Number);

  var max = Math.max(...numArray);
  var min = Math.min(...numArray);

  return max + " " + min;
}


// 3.

function digPow(n, p) {
  var digits = n.toString().split("").map(Number);

  var sum = 0;

  for (var i = 0; i < digits.length; i++) {
    sum += Math.pow(digits[i], p + i);
  }

  var k = sum / n;

  return Number.isInteger(k) ? k : -1;
}


// 4.

class Cube {
  constructor(side = 0) {
    this.setSide(side);
  }

  getSide() {
    return this.side;
  }

  setSide(n) {
    this.side = Math.abs(n);
  }
}

// 5.

function closeCompare(a, b, margin = 0 ){
  
    const distance = Math.abs(a - b);

   
   if (distance <= margin) {
       return 0;
   } else if (a < b) {
       return -1;
   } else {
       return 1;
   }
}

// 6.

function validateUsr(username) {
    const res = /^[a-z0-9_]{4,16}$/.test(username);
    return res
  }
