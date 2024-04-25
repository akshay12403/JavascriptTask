// Task - 1 & 2
let markMass;
let markHeight;

let johnMass;
let johnHeight;

const CalcBMI = (mass, height) => {
  return (mass / height ** 2).toFixed(1);
};

const greaterBmi = () => {
  markMass = prompt("Enter Mark's Mass in kg");
  markHeight = prompt("Enter Mark's Height in m");

  johnMass = prompt("Enter John's Mass in kg");
  johnHeight = prompt("Enter John's Height in m");

  let markBMI = CalcBMI(markMass, markHeight);
  let johnBMI = CalcBMI(johnMass, johnHeight);

  if (markBMI > johnBMI) {
    alert(Mark's BMI(${markBMI}) is greater than John's BMI(${johnBMI}));
  } else if (markBMI < johnBMI) {
    alert(John's BMI(${johnBMI}) is greater than Mark's BMI(${markBMI}));
  } else {
    alert(Both Got same BMI 🤡);
  }
};

// Task - 2
// second question of gymnasts
function calculateAverage(scores) {
  const totalScore = scores.reduce((acc, score) => acc + score, 0);
  return totalScore / scores.length;
}

function compareTeams(dolphinsScores, koalasScores) {
  const dolphinsAverage = calculateAverage(dolphinsScores);
  const koalasAverage = calculateAverage(koalasScores);

  if (dolphinsAverage > koalasAverage) {
    console.log("Dolphins are the winners!");
  } else if (dolphinsAverage < koalasAverage) {
    console.log("Koalas are the winners!");
  } else {
    console.log("It's a draw!");
  }
}

// Task - 3
function gymnasticsCompetition(
  dolphinsScores,
  koalasScores,
  minimumScore = 100
) {
  compareTeams(dolphinsScores, koalasScores);

  console.log("Results of bonus1 case: ");
  if (
    dolphinsScores.every((score) => score >= minimumScore) &&
    koalasScores.every((score) => score >= minimumScore)
  ) {
    compareTeams(dolphinsScores, koalasScores);
  } else {
    if (!dolphinsScores.every((score) => score >= minimumScore)) {
      console.log(
        "Dolphins did not meet the minimum score requirement of 100 points."
      );
    } else {
      console.log("Koalas didn't meet the requirements of 100 points to win.");
    }
  }

  console.log("Results of Bonus 2 case: ");
  if (
    dolphinsScores.every((score) => score >= minimumScore) &&
    koalasScores.every((score) => score >= minimumScore)
  ) {
    if (dolphinsScores.every((score, index) => score === koalasScores[index])) {
      console.log("It's a draw!");
    } else {
      compareTeams(dolphinsScores, koalasScores);
    }
  } else {
    console.log("No team wins.");
  }
}

// Sample usage:
const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];
gymnasticsCompetition(dolphinsScores1, koalasScores1);

const dolphinsScores2 = [97, 112, 101];
const koalasScores2 = [109, 95, 123];
gymnasticsCompetition(dolphinsScores2, koalasScores2);

const dolphinsScores3 = [97, 112, 101];
const koalasScores3 = [109, 95, 106];
gymnasticsCompetition(dolphinsScores3, koalasScores3);

// Task - 4
const tipCalc = () => {
  let bill = prompt("Enter the Bill amount");
  if (bill < 50) {
  }
  let tip = 0.15;
  let totalAmt =
    bill >= 50 || bill <= 300 ? bill + bill * tip : bill + bill * 0.2;
  alert(
    `The bill was ${bill},the tip was ${
      totalAmt - bill
    } and the total value ${totalAmt}`
  );
};

// task - 5
const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    alert(Dolphins win (${avgDolphins} vs. ${avgKoalas}));
  } else if (avgKoalas >= 2 * avgDolphins) {
    alert(Koalas win (${avgKoalas} vs. ${avgDolphins}));
  } else {
    alert(No one wins);
  }
};

// Task -6
const calcTip = (bill) => {
  return bill >= 50 || bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, total);

// Task - 7
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    ${john.fullName}'s BMI (${john.bmi}) is lower than ${mark.fullName}'s BMI (${mark.bmi})
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    ${mark.fullName}'s BMI (${mark.bmi}) is lower than ${john.fullName}'s BMI (${john.bmi})
  );
} else {
  console.log(
    Both ${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi})
  );
}