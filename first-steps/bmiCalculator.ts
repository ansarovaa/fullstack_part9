const calculateBmi = (a: number, b: number, printText: string) => {
  const heightInMeter = a / 100
  const bmi = b / (heightInMeter*heightInMeter)
  
  if (bmi < 18.5) {
    printText = "Underweight";
  } else if (bmi >= 18.5 && bmi < 23) {
    printText = "Normal range";
  } else if (bmi >= 23 && bmi < 25) {
    printText = "Overweight—At Risk";
  } else if (bmi >= 25 && bmi < 30) {
    printText = "Overweight—Moderately Obese";
  } else if (bmi >= 30) {
    printText = "Overweight—Severely Obese";
  } 

  console.log(printText, bmi)
}
 


const a: number = Number(process.argv[2])
const b: number = Number(process.argv[3])
calculateBmi(a, b, ``)