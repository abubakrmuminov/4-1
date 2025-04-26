// ======= //
// 1-mashq //
// ======= //

function printPiccaPrices(a) {
  const prices = [12000, 15000, 18000, 20000];
  for (const price of prices) {
    console.log(price);
  }
}

printPiccaPrices();

// ======= //
// 2-mashq //
// ======= //

function greeetFriends(a) {
  const frens = ["Ali", "Vali", "Sami"];
  for (const fren of frens) {
    console.log("Hello", fren);
  }
}

greeetFriends();

// ======= //
// 3-mashq //
// ======= //

function convertPricesToStrings(a) {
  const prices = [1000, 2500, 5000];
  for (const price of prices) {
    console.log(price + "");
  }
}

convertPricesToStrings();

// ======= //
// 4-mashq //
// ======= //

function checkOddOrEven(a) {
  const nums = [3, 6, 9, 10];
  for (const num of nums) {
    if (num % 2 === 0) {
      console.log(num, "- Even");
    } else {
      console.log(num, "- Odd");
    }
  }
}

checkOddOrEven();

// ======= //
// 5-mashq //
// ======= //

function printStudentInfo(a) {
  const student = ["Dilshod", 13];
  console.log("Name:", student[0]);
  console.log("Age:", student[1]);
}

printStudentInfo();

// ======= //
// 6-mashq //
// ======= //

function printExamResults(a) {
  const ball = [56, 72, 88, 45, 100];
  for (const bal of ball) {
    if (bal >= 60) {
      console.log(bal, "Passed");
    } else {
      console.log(bal, "Failed");
    }
  }
}

printExamResults();

// ======= //
// 7-mashq //
// ======= //

function showMinorsOnly(a) {
  const ages = ["12", "20", "15", "19", "14"];
  for (const age of ages) {
    if (age <= 18) {
      console.log(parseInt(age));
    }
  }
}

showMinorsOnly();

// ======= //
// 8-mashq //
// ======= //

function showVowelsOnly(a) {
  const harflar = ["M", "A", "R", "S", "U", "L", "E", "K"];
  for (const harf of harflar) {
    if (
      harf == "A" ||
      harf == "I" ||
      harf == "U" ||
      harf == "E" ||
      harf == "O"
    ) {
      console.log(harf);
    }
  }
}

showVowelsOnly();

// ======= //
// 9-mashq //
// ======= //

function printCodeWithIndex(a) {
  const letters = ["M", "A", "R", "S"];
  for (const letter in letters) {
    console.log(letter, "-", letters[letter]);
  }
}

printCodeWithIndex();

// ======== //
// 10-mashq //
// ======== //

function consvertAgesToNumbers(a) {
  const ages = ["12", "13", "15", "16"];

  for (const age of ages) {
    console.log(parseInt(age));
  }
}

consvertAgesToNumbers();

// ======== //
// 11-mashq //
// ======== //

function showPlayerStatus(a) {
  const players = [true, false, true, false];
  let index = 0;

  for (const player of players) {
    if (player) {
      console.log(`Player  ${index}- online`);
    } else {
      console.log(`player ${index} - offline`);
    }

    index++;
  }
}

showPlayerStatus();

// ======== //
// 12-mashq //
// ======== //

function showDrinks(a) {
  const drinks = [
    ["Cola", "sweet"],
    ["Water", "clear"],
    ["Juice", "sweet"],
  ];

  for (const [drink, taste] of drinks) {
    console.log(`${drink} - ${taste}`);
  }
}

showDrinks();

// ======== //
// 13-mashq //
// ======== //

function printNameLengths(a) {
  const names = ["ali", "zafar", "Humoyun", "anor"];

  for (const name of names) {
    console.log(name, "-", name.length);
  }
}

printNameLengths();
