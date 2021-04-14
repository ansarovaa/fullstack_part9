export const calculateBmi = (a: number, b: number) : string => {
  const heightInMeter = a / 100
  const bmi = b / (heightInMeter*heightInMeter)
  
  if (bmi < 18.5) {
    console.log("Underweight");
    return "Underweight";
  } else if (bmi >= 18.5 && bmi < 23) {
    console.log("Normal range");
    return "Normal range";
  } else if (bmi >= 23 && bmi < 25) {
    console.log("Overweight—At Risk");
    return "Overweight—At Risk";
  } else if (bmi >= 25 && bmi < 30) {
    console.log("Overweight—Moderately Obese");
    return "Overweight—Moderately Obese";
  } else if (bmi >= 30) {
    console.log("Overweight—Severely Obese");
    return "Overweight—Severely Obese";
  } 

  return `Oops something went wrong, unable to calculate bmi`;


}
 
